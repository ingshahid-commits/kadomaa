import {
  estimateStepMinutes,
  recordStepCompleted,
  getNextStepForChapter,
  buildSubjectPriorities,
  generateWeeklyStrategy,
  generateDailyPlan,
  commitDailyPlan
} from './stage4/PlannerGenerator.js';
import {
  SESSION_PREFERENCE_QUESTIONS,
  subjectOrderByInterest,
  buildInterestOrderedCandidates,
  planDaySessions
} from './stage4/DaySessionScheduler.js';

/**
 * stage4Extension.js
 * -----------------------------------------------------------------------
 * The single attach point for Stage 4 (Planner Generator), mirroring
 * stage2Extension.js / stage3Extension.js exactly: it only ADDS a
 * `.stage4Api` property to an existing LivingPlan instance - it does not
 * edit LivingPlan.js, any Stage 1/2/3 file, or kie/data/*, and calling it
 * twice is a no-op (same idempotency guarantee as attachStage2/3).
 *
 * Requires a Stage 3 api (from attachStage3) because every Planner
 * Generator function reads chapter priority/mastery from it - pass the
 * SAME stage3Api you're already using elsewhere, don't create a second one.
 *
 * Usage (host app, fully opt-in):
 *   import { attachLivingPlan } from './kie/extensions/livingPlanExtension.js';
 *   import { attachStage3 } from './kie/extensions/stage3Extension.js';
 *   import { attachStage4 } from './kie/extensions/stage4Extension.js';
 *   import { attachKnowledgeBase } from './kie/data/index.js';
 *
 *   const livingPlan = attachLivingPlan(kie, { goal: 'کنکور تجربی 1405' });
 *   const stage3 = attachStage3(livingPlan);
 *   attachKnowledgeBase(stage3); // ingests every subject in kie/data/
 *   const stage4 = attachStage4(livingPlan, stage3);
 *
 *   const draft = stage4.generateDailyPlan({ energy: 7, sleepHours: 7.5 });
 *   if (draft.negotiationProposal) {
 *     // show draft.negotiationProposal.message() to the user first
 *   } else {
 *     stage4.commitDailyPlan(draft);
 *   }
 * -----------------------------------------------------------------------
 */

const STAGE4_MARKER = Symbol.for('kadoma.stage4.attached');

/**
 * @param {import('./livingPlan/LivingPlan.js').LivingPlan} livingPlan
 * @param {ReturnType<import('./stage3Extension.js').attachStage3>} stage3Api
 */
export function attachStage4(livingPlan, stage3Api) {
  if (!livingPlan) throw new Error('attachStage4 requires a LivingPlan instance (see attachLivingPlan in Stage 1).');
  if (!stage3Api || !stage3Api.curriculumEngine) {
    throw new Error('attachStage4 requires the object returned by attachStage3(livingPlan) (needs .curriculumEngine + .chapterMastery).');
  }
  if (livingPlan[STAGE4_MARKER]) {
    return livingPlan.stage4Api; // already attached, no-op
  }

  const api = {
    /** See PlannerGenerator.estimateStepMinutes. */
    estimateStepMinutes,

    /** See PlannerGenerator.recordStepCompleted, bound to this LivingPlan. */
    recordStepCompleted: (chapterId, stepKey) => recordStepCompleted(livingPlan, chapterId, stepKey),

    /** See PlannerGenerator.getNextStepForChapter, bound to this LivingPlan + ChapterMastery. */
    getNextStepForChapter: (chapterId) => getNextStepForChapter(livingPlan, chapterId, stage3Api.chapterMastery),

    /** See PlannerGenerator.buildSubjectPriorities, bound to this Stage 3 api. */
    buildSubjectPriorities: (subjectNames) => buildSubjectPriorities(stage3Api, subjectNames),

    /** See PlannerGenerator.generateWeeklyStrategy - builds AND attaches livingPlan.weeklyStrategy. */
    generateWeeklyStrategy: (weekKey, totalWeeklyMinutes, subjectNames) =>
      generateWeeklyStrategy(livingPlan, stage3Api, weekKey, totalWeeklyMinutes, subjectNames),

    /** See PlannerGenerator.generateDailyPlan - returns a DRAFT, does not mutate livingPlan. */
    generateDailyPlan: (signals, opts) => generateDailyPlan(livingPlan, stage3Api, signals, opts),

    /** See PlannerGenerator.commitDailyPlan - the only mutating call in Stage 4. */
    commitDailyPlan: (dailyPlan) => commitDailyPlan(livingPlan, dailyPlan),

    /** See DaySessionScheduler.js - the questions to ask the user before building a day's time-of-day schedule. */
    SESSION_PREFERENCE_QUESTIONS,

    /** See DaySessionScheduler.subjectOrderByInterest. */
    subjectOrderByInterest,

    /** See DaySessionScheduler.buildInterestOrderedCandidates, bound to this Stage 3 api. */
    buildInterestOrderedCandidates: (subjectInterest, opts) => buildInterestOrderedCandidates(stage3Api, subjectInterest, opts),

    /** See DaySessionScheduler.planDaySessions, bound to this Stage 3 api. Read-only - does not mutate livingPlan. */
    planDaySessions: (candidates, prefs) => planDaySessions(stage3Api, candidates, prefs)
  };

  livingPlan[STAGE4_MARKER] = true;
  livingPlan.stage4Api = api;
  return api;
}

export default attachStage4;
