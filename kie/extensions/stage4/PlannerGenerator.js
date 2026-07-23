import { clamp, roundTo } from '../../utils/mathUtils.js';
import { todayKey } from '../../utils/dateUtils.js';
import { explain } from '../livingPlan/Explainability.js';
import { computeConfidence, shouldAskUser } from '../livingPlan/ConfidenceSystem.js';
import { computeTodayCapacity, fitCommitmentsToCapacity } from '../stage2/AdaptiveScheduler.js';
import { splitByEnergyFit } from '../stage2/EnergyEngine.js';
import { buildWeeklyStrategy, attachWeeklyStrategy } from '../stage2/WeeklyStrategy.js';
import { negotiate } from '../stage2/NegotiationEngine.js';
import { getStudyStrategy } from '../stage3/StudyStrategyEngine.js';

/**
 * PlannerGenerator.js  (Stage 4 — Planner Generator)
 * -----------------------------------------------------------------------
 * Pure additive module. This is the synthesis layer the brief was
 * ultimately building toward: it turns "what's known" (Stage 3's
 * CurriculumEngine priorities + ChapterMastery bands + Study Strategy
 * steps) and "what's possible today" (Stage 2's AdaptiveScheduler
 * capacity + EnergyEngine windows + WeeklyStrategy allocations) into
 * actual `Commitment` specs — without inventing any new scoring math or
 * touching a single existing file. Every number here is read from an
 * existing Stage 1/2/3 function; this module only orchestrates order of
 * calls and shapes the result.
 *
 * Ground rules (same as every extensions/ file before it):
 *   - Never edits kie/core, kie/analyzers, kie/rules, kie/messages,
 *     kie/utils, kadomaEngine.js, or any Stage 1/2/3/kie-data file.
 *   - `generateDailyPlan` / `generateWeeklyStrategy` are READ-ONLY with
 *     respect to LivingPlan except for `generateWeeklyStrategy` (which
 *     legitimately calls the existing `attachWeeklyStrategy`, exactly
 *     the way a host app would). `generateDailyPlan` returns a DRAFT
 *     DailyPlan and does NOT call `setTodaysCommitments` itself —
 *     mirrors NegotiationEngine's own "propose first, mutate only once
 *     the caller decides" contract from Stage 2 (#7). Call
 *     `commitDailyPlan()` once you're ready to apply a draft.
 *   - Chapter progress (which Study Strategy step comes next for a
 *     chapter) is derived from `livingPlan.memory` (Memory Timeline),
 *     not a separate mutable side-state — single source of truth,
 *     matching how the rest of the codebase already works.
 * -----------------------------------------------------------------------
 */

// ── Step time estimates (minutes) ──────────────────────────────────────
// Deliberately simple, named constants (not a formula) so a host app can
// override any single one without forking this file.
export const STEP_MINUTES = Object.freeze({
  learning: 35,
  examples: 25,
  practice: 30,
  review: 20,
  test: 25,
  quick_review: 15,
  mistake_review: 15
});

export function estimateStepMinutes(stepKey) {
  return STEP_MINUTES[stepKey] ?? 25;
}

// ── Chapter step progress (derived from Memory Timeline) ───────────────

/**
 * Logs that a chapter's given study-strategy step was completed. Call
 * this from the host app when the student finishes the commitment for
 * that step (in addition to `livingPlan.updateCommitmentStatus(id,
 * 'done')` on the Commitment itself - this is a separate, chapter-shaped
 * record so `getNextStepForChapter` can pick up where the student left
 * off, even across different Commitments/days).
 * @param {import('../livingPlan/LivingPlan.js').LivingPlan} livingPlan
 * @param {string} chapterId
 * @param {string} stepKey
 */
export function recordStepCompleted(livingPlan, chapterId, stepKey) {
  livingPlan.memory.record('planner_step_completed', { chapterId, stepKey }, { tags: ['planner', chapterId] });
}

/**
 * @param {import('../livingPlan/LivingPlan.js').LivingPlan} livingPlan
 * @param {string} chapterId
 * @param {import('../stage3/ChapterMastery.js').ChapterMastery} chapterMastery
 * @returns {{key:string, labelFa:string, band:string, isFirstOfBand:boolean}}
 */
export function getNextStepForChapter(livingPlan, chapterId, chapterMastery) {
  const strategy = getStudyStrategy(chapterMastery.getScore(chapterId));
  const stepKeys = strategy.steps.map(s => s.key);

  const completedInBand = livingPlan.memory
    .getByType('planner_step_completed')
    .filter(e => e.payload.chapterId === chapterId && stepKeys.includes(e.payload.stepKey));

  // "Next" = first step in the band's own order that hasn't been logged
  // done yet. If every step in the current band is already done (or the
  // band changed since), restart at the band's first step - that's
  // always correct because getStudyStrategy() re-derives the band from
  // the LATEST mastery score every time this is called.
  const doneKeys = new Set(completedInBand.map(e => e.payload.stepKey));
  const nextIndex = stepKeys.findIndex(k => !doneKeys.has(k));
  const index = nextIndex === -1 ? 0 : nextIndex;
  const step = strategy.steps[index];

  return { key: step.key, labelFa: step.labelFa, band: strategy.band, isFirstOfBand: index === 0 };
}

// ── Diversity cap (don't let one subject eat the whole day) ────────────

function capDiversity(prioritized, maxChapters, maxPerSubject, getSubject) {
  const perSubjectCount = {};
  const out = [];
  for (const entry of prioritized) {
    if (out.length >= maxChapters) break;
    const subject = getSubject(entry.chapterId);
    perSubjectCount[subject] = perSubjectCount[subject] || 0;
    if (perSubjectCount[subject] >= maxPerSubject) continue;
    perSubjectCount[subject]++;
    out.push(entry);
  }
  return out;
}

/**
 * Every subject name CurriculumEngine currently knows about, derived
 * purely from its public API (getPrioritizedChapters + getChapterInfo) -
 * no reach-in to its internal chapter registry.
 * @param {ReturnType<import('../stage3Extension.js').attachStage3>} stage3Api
 */
function listKnownSubjects(stage3Api) {
  const all = stage3Api.getPrioritizedChapters();
  return [...new Set(all.map(e => stage3Api.curriculumEngine.getChapterInfo(e.chapterId).subjectName))];
}

// ── Weekly Strategy synthesis (Stage 3 priorities -> Stage 2 WeeklyStrategy) ──

/**
 * Builds subject -> priority-weight from CurriculumEngine's own
 * per-chapter priority (average priority across a subject's chapters),
 * so subjects with more weak/urgent/unlocking chapters get more weekly
 * time - no separate scoring model invented.
 * @param {ReturnType<import('../stage3Extension.js').attachStage3>} stage3Api
 * @param {string[]} [subjectNames] - defaults to every subject CurriculumEngine knows about
 */
export function buildSubjectPriorities(stage3Api, subjectNames) {
  const names = subjectNames || listKnownSubjects(stage3Api);
  const weights = {};
  for (const name of names) {
    const chapters = stage3Api.getPrioritizedChapters({ subjectName: name });
    weights[name] = chapters.length ? roundTo(chapters.reduce((s, c) => s + c.priority, 0) / chapters.length, 1) : 1;
  }
  return weights;
}

/**
 * Builds AND attaches a WeeklyStrategy from real CurriculumEngine
 * priorities - the Stage 2/Stage 3 synthesis brief #14 was pointing at.
 * @param {import('../livingPlan/LivingPlan.js').LivingPlan} livingPlan
 * @param {ReturnType<import('../stage3Extension.js').attachStage3>} stage3Api
 * @param {string} weekKey - e.g. "2026-W07"
 * @param {number} totalWeeklyMinutes
 * @param {string[]} [subjectNames]
 */
export function generateWeeklyStrategy(livingPlan, stage3Api, weekKey, totalWeeklyMinutes, subjectNames) {
  const priorities = buildSubjectPriorities(stage3Api, subjectNames);
  const strategy = buildWeeklyStrategy(weekKey, priorities, totalWeeklyMinutes);
  return attachWeeklyStrategy(livingPlan, strategy);
}

// ── Daily Plan ───────────────────────────────────────────────────────

export class DailyPlan {
  constructor({ dateKey, capacityMinutes, capacityFactor, commitmentSpecs, deferredChapterIds, negotiationProposal, questionsForUser, explanation }) {
    this.dateKey = dateKey;
    this.capacityMinutes = capacityMinutes;
    this.capacityFactor = capacityFactor;
    this.commitmentSpecs = commitmentSpecs;
    this.totalPlannedMinutes = commitmentSpecs.reduce((s, c) => s + (c.plannedMinutes || 0), 0);
    this.deferredChapterIds = deferredChapterIds;
    this.negotiationProposal = negotiationProposal; // Proposal | null
    this.questionsForUser = questionsForUser; // low-confidence chapters worth a quick check-in
    this.explanation = explanation;
  }

  toJSON() {
    return {
      dateKey: this.dateKey,
      capacityMinutes: this.capacityMinutes,
      capacityFactor: this.capacityFactor,
      commitmentSpecs: this.commitmentSpecs,
      totalPlannedMinutes: this.totalPlannedMinutes,
      deferredChapterIds: this.deferredChapterIds,
      negotiationProposal: this.negotiationProposal ? this.negotiationProposal.toJSON() : null,
      questionsForUser: this.questionsForUser,
      explanation: this.explanation
    };
  }
}

const DEFAULT_MAX_CHAPTERS = 5;
const DEFAULT_MAX_SUBJECTS = 3;
// Trimming a SMALL amount to fit capacity is normal and silent; trimming
// past this fraction of the originally-desired minutes is treated as "the
// plan genuinely doesn't fit today" and gets a Negotiation proposal
// instead of being silently cut, per brief #7.
const NEGOTIATION_DROP_THRESHOLD = 0.3;

/**
 * Produces a DRAFT plan for `dateKey` (default today). Does not mutate
 * `livingPlan` - see the file header for why. Call `commitDailyPlan()`
 * once the draft (or a negotiated variant of it) is final.
 *
 * @param {import('../livingPlan/LivingPlan.js').LivingPlan} livingPlan
 * @param {ReturnType<import('../stage3Extension.js').attachStage3>} stage3Api
 * @param {object} [signals] - see AdaptiveScheduler.computeTodayCapacity
 * @param {object} [opts]
 * @param {string} [opts.dateKey]
 * @param {string[]} [opts.subjects] - restrict to these subject names (default: every subject with a WeeklyStrategy allocation, or every subject known to CurriculumEngine if there's no WeeklyStrategy)
 * @param {string[]} [opts.completedChapterIds] - passed straight to CurriculumEngine (Subject Graph locking)
 * @param {number} [opts.maxChapters]
 * @param {number} [opts.maxSubjectsPerDay]
 * @returns {DailyPlan}
 */
export function generateDailyPlan(livingPlan, stage3Api, signals = {}, opts = {}) {
  const dateKey = opts.dateKey || todayKey();
  const maxChapters = opts.maxChapters || DEFAULT_MAX_CHAPTERS;
  const maxSubjectsPerDay = opts.maxSubjectsPerDay || DEFAULT_MAX_SUBJECTS;
  const completedChapterIds = opts.completedChapterIds || [];
  const { curriculumEngine, chapterMastery } = stage3Api;

  const { capacityMinutes, factor: capacityFactor, reasons: capacityReasons } = computeTodayCapacity(signals);

  // Which subjects to draw from, and how many "slots" each gets today.
  const weekly = livingPlan.weeklyStrategy;
  let subjectSlots; // Map<subjectName, slotCount>
  if (weekly && weekly.subjectAllocations.length > 0 && !opts.subjects) {
    const totalWeight = weekly.totalMinutes() || 1;
    subjectSlots = new Map(weekly.subjectAllocations.map(a => [
      a.subject,
      Math.max(1, Math.round((a.targetMinutes / totalWeight) * maxChapters))
    ]));
  } else {
    const names = opts.subjects || listKnownSubjects(stage3Api);
    const evenSlot = Math.max(1, Math.ceil(maxChapters / Math.min(names.length || 1, maxSubjectsPerDay)));
    subjectSlots = new Map(names.map(n => [n, evenSlot]));
  }

  // Pull each subject's own priority-ordered chapters, respecting its slot count.
  let candidates = [];
  for (const [subjectName, slots] of subjectSlots) {
    const prioritized = curriculumEngine.getPrioritizedChapters({ subjectName, completedChapterIds });
    candidates.push(...prioritized.slice(0, slots));
  }
  candidates.sort((a, b) => b.priority - a.priority);
  candidates = capDiversity(candidates, maxChapters, Math.max(1, Math.ceil(maxChapters / maxSubjectsPerDay) + 1), id => curriculumEngine.getChapterInfo(id).subjectName);

  // Turn each candidate chapter into ONE concrete step-sized commitment spec.
  const questionsForUser = [];
  const commitmentSpecs = candidates.map(entry => {
    const info = curriculumEngine.getChapterInfo(entry.chapterId);
    const step = getNextStepForChapter(livingPlan, entry.chapterId, chapterMastery);
    const plannedMinutes = estimateStepMinutes(step.key);

    const history = chapterMastery.getHistory(entry.chapterId);
    const confidence = computeConfidence({ sampleSize: history.length, consistency: 0.7, recency: 1 });
    if (shouldAskUser(confidence)) {
      questionsForUser.push({
        chapterId: entry.chapterId,
        chapterName: info.name,
        question: `تسلطت روی «${info.name}» رو از ۰ تا ۱۰ چند می‌دونی؟`
      });
    }

    return {
      title: `${info.name} — ${step.labelFa}`,
      subject: info.subjectName,
      plannedMinutes,
      dateKey,
      metadata: {
        chapterId: entry.chapterId,
        stepKey: step.key,
        band: step.band,
        priority: entry.priority,
        weight: entry.priority, // consumed by EnergyEngine.rankByWeight/splitByEnergyFit
        confidence,
        explanation: entry.explanation
      }
    };
  });

  // Energy-window tagging (Stage 2 #11) - free-form, host UI decides actual slot times.
  const { high, low } = splitByEnergyFit(
    commitmentSpecs.map(spec => ({ metadata: spec.metadata, plannedMinutes: spec.plannedMinutes })),
    Math.ceil(commitmentSpecs.length / 2)
  );
  const highSet = new Set(high.map(c => c.metadata.chapterId));
  for (const spec of commitmentSpecs) {
    spec.metadata.energyWindow = highSet.has(spec.metadata.chapterId) ? 'high' : 'low';
  }

  const desiredMinutes = commitmentSpecs.reduce((s, c) => s + c.plannedMinutes, 0);
  const { kept, dropped } = fitCommitmentsToCapacity(
    commitmentSpecs.map(spec => ({ ...spec, plannedMinutes: spec.plannedMinutes })), // plain objects behave like Commitment for this function's purposes (only reads .plannedMinutes)
    capacityMinutes
  );

  const droppedMinutes = dropped.reduce((s, c) => s + (c.plannedMinutes || 0), 0);
  let negotiationProposal = null;
  if (desiredMinutes > 0 && droppedMinutes / desiredMinutes > NEGOTIATION_DROP_THRESHOLD) {
    negotiationProposal = negotiate(
      `امروز فقط ${capacityMinutes} دقیقه وقت داری اما برنامه ${desiredMinutes} دقیقه نیاز دارد.`,
      desiredMinutes,
      capacityMinutes,
      livingPlan
    );
  }

  const reasons = [
    ...capacityReasons,
    { label: `${kept.length} فصل برای امروز انتخاب شد از بین ${candidates.length} فصل در اولویت`, weight: 0.5 },
    weekly ? { label: 'زمان‌بندی بر اساس استراتژی هفتگی فعلی توزیع شد', weight: 0.3 } : { label: 'بدون استراتژی هفتگی، زمان به‌طور مساوی بین درس‌ها توزیع شد', weight: 0.3 }
  ];

  return new DailyPlan({
    dateKey,
    capacityMinutes,
    capacityFactor,
    commitmentSpecs: kept,
    deferredChapterIds: dropped.map(c => c.metadata.chapterId),
    negotiationProposal,
    questionsForUser,
    explanation: explain(reasons).toJSON()
  });
}

/**
 * Applies a DailyPlan (or a negotiated variant of it - see
 * `dailyPlan.commitmentSpecs`, which a caller may trim further after a
 * NegotiationEngine.resolveNegotiation() before calling this) to a real
 * LivingPlan: creates real Commitments and records an Adaptive Update.
 * This is the ONLY function in this file that mutates `livingPlan`.
 * @param {import('../livingPlan/LivingPlan.js').LivingPlan} livingPlan
 * @param {DailyPlan} dailyPlan
 */
export function commitDailyPlan(livingPlan, dailyPlan) {
  const commitments = dailyPlan.commitmentSpecs.map(spec => livingPlan.addCommitment(spec));
  livingPlan.recordAdaptiveUpdate(
    { source: 'planner_generator', dateKey: dailyPlan.dateKey, capacityMinutes: dailyPlan.capacityMinutes, committedCount: commitments.length },
    [{ label: `برنامه امروز (${dailyPlan.dateKey}) توسط Planner Generator ساخته شد`, weight: 1 }]
  );
  return { committed: commitments, explanation: dailyPlan.explanation };
}

export default {
  STEP_MINUTES,
  estimateStepMinutes,
  recordStepCompleted,
  getNextStepForChapter,
  buildSubjectPriorities,
  generateWeeklyStrategy,
  DailyPlan,
  generateDailyPlan,
  commitDailyPlan
};
