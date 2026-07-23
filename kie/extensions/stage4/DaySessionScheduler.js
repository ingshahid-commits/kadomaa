import { bandForScore } from '../stage3/ChapterMastery.js';
import { explain } from '../livingPlan/Explainability.js';

/**
 * DaySessionScheduler.js  (Stage 4 — Day Session Scheduler)
 * -----------------------------------------------------------------------
 * Pure additive module. Sits on top of PlannerGenerator.js (which picks
 * WHICH chapters/steps matter today) and answers a different question:
 * WHEN, in what order, and in what shaped time-blocks does today
 * actually happen — parts, breaks, lunch, nap, subject order by
 * interest, and never assuming a subject wraps up faster than reality.
 *
 * Never edits PlannerGenerator.js, any Stage 1/2/3 file, or kie/data/*.
 * Read-only with respect to LivingPlan (returns a plan object; the host
 * app decides if/how to persist it, same "propose, don't silently
 * mutate" contract every other Stage 2-4 module already uses).
 * -----------------------------------------------------------------------
 */

// ── Defaults (per user brief) ──────────────────────────────────────────
export const DEFAULT_PART_MINUTES = 90;
export const DEFAULT_BREAK_MINUTES = 10;
export const MIN_HEAVY_SUBJECT_MINUTES = 150; // 2.5h floor - never assume a subject finishes faster than this
export const REVIEW_BEFORE_TEST_MINUTES = 30;
const MAX_LAST_PART_EXTENSION = 30; // cap on stretching the final part to soak up small leftover time

// ── Questions to ask the user (host UI renders these; same shape as
//    ProgressiveProfiling's question objects, so both can reuse a
//    common Q&A renderer if the host already has one) ──────────────────
export const SESSION_PREFERENCE_QUESTIONS = [
  { key: 'partMinutes', promptFa: 'هر بخشِ مطالعه رو چند دقیقه بذاریم؟ (پیشنهاد: ۹۰ دقیقه)', default: DEFAULT_PART_MINUTES },
  { key: 'breakMinutes', promptFa: 'بین هر بخش چند دقیقه استراحت می‌خوای؟', default: DEFAULT_BREAK_MINUTES },
  { key: 'napMinutes', promptFa: 'چرت بعدازظهر می‌خوای؟ چند دقیقه؟ (۰ یعنی نه)', default: 0 },
  { key: 'lunchMinutes', promptFa: 'برای ناهار چقدر وقت لازم داری؟', default: 45 },
  { key: 'lunchAfterMinutes', promptFa: 'ناهار رو بعد از چند دقیقه مطالعه می‌خوای؟', default: null },
  { key: 'totalAvailableMinutes', promptFa: 'کلاً امروز چند دقیقه وقت آزاد داری؟', default: null }
];

/** subjectInterest: {subjectName: 1..10, lower = less interest}. Returns least-favorite first, per brief. */
export function subjectOrderByInterest(subjectInterest) {
  return Object.entries(subjectInterest || {})
    .sort((a, b) => a[1] - b[1])
    .map(([subject]) => subject);
}

/**
 * Splits one part into study/review/test sub-blocks based on the
 * chapter's mastery band - never invents new thresholds, reuses
 * ChapterMastery's own bands (Stage 3, #9):
 *   full_study (0-3)      -> whole part is reading/study, no test at all
 *   review_and_test (4-6) -> 30 min review first, rest is test
 *   test_only (7-8)       -> whole part is test
 *   quick_review (9-10)   -> whole part is quick_review
 * @param {number} score - 0..10
 * @param {number} partMinutes
 */
export function splitPartByMastery(score, partMinutes) {
  const band = bandForScore(score).key;
  if (band === 'full_study') {
    return [{ kind: 'study', minutes: partMinutes }];
  }
  if (band === 'review_and_test') {
    const reviewMinutes = Math.min(REVIEW_BEFORE_TEST_MINUTES, partMinutes);
    return [
      { kind: 'review', minutes: reviewMinutes },
      { kind: 'test', minutes: partMinutes - reviewMinutes }
    ];
  }
  if (band === 'quick_review') return [{ kind: 'quick_review', minutes: partMinutes }];
  return [{ kind: 'test', minutes: partMinutes }]; // test_only
}

/** Never reports a subject as needing less than the 2.5h floor, even if the raw part math is smaller. */
export function estimateSubjectMinutes(rawMinutes) {
  return Math.max(MIN_HEAVY_SUBJECT_MINUTES, rawMinutes);
}

/**
 * The "light subject after lunch" pick: the candidate with the lowest
 * priority (= least urgent/heavy right now) among whatever hasn't been
 * scheduled yet - deliberately reuses CurriculumEngine's own priority
 * number instead of inventing a separate "lightness" score.
 */
function pickLightestCandidate(remainingCandidates) {
  if (!remainingCandidates.length) return null;
  return remainingCandidates.reduce((lightest, c) => (c.priority < lightest.priority ? c : lightest), remainingCandidates[0]);
}

/**
 * @param {ReturnType<import('../stage3Extension.js').attachStage3>} stage3Api
 * @param {Object<string, number>} subjectInterest - subject -> 1..10 (lower = less interest)
 * @param {object} [opts]
 * @param {string[]} [opts.completedChapterIds]
 * @param {number} [opts.maxPerSubject] - candidate chapters pulled per subject before scheduling (default 4)
 * @returns {Array<{chapterId, subjectName, priority}>} ordered least-favorite-subject-first
 */
export function buildInterestOrderedCandidates(stage3Api, subjectInterest, opts = {}) {
  const maxPerSubject = opts.maxPerSubject || 4;
  const order = subjectOrderByInterest(subjectInterest);
  const out = [];
  for (const subjectName of order) {
    const chapters = stage3Api.getPrioritizedChapters(
      opts.completedChapterIds ? { subjectName, completedChapterIds: opts.completedChapterIds } : { subjectName }
    );
    out.push(...chapters.slice(0, maxPerSubject).map(c => ({ ...c, subjectName })));
  }
  return out;
}

/**
 * Builds the actual time-of-day schedule: ordered parts with breaks,
 * lunch (+ a light subject right after it), and an optional nap -
 * filling `totalAvailableMinutes` as fully as reasonably possible
 * without extending any single part past a small safety cap (so the
 * user doesn't get burned out by one endless block).
 *
 * @param {ReturnType<import('../stage3Extension.js').attachStage3>} stage3Api
 * @param {Array<{chapterId, subjectName, priority}>} candidates - e.g. from buildInterestOrderedCandidates
 * @param {object} prefs - answers to SESSION_PREFERENCE_QUESTIONS
 * @param {number} prefs.totalAvailableMinutes
 * @param {number} [prefs.partMinutes]
 * @param {number} [prefs.breakMinutes]
 * @param {number} [prefs.napMinutes]
 * @param {number} [prefs.lunchMinutes]
 * @param {number} [prefs.lunchAfterMinutes] - schedule lunch once this many study minutes have elapsed (default: roughly the midpoint)
 */
export function planDaySessions(stage3Api, candidates, prefs) {
  const partMinutes = prefs.partMinutes || DEFAULT_PART_MINUTES;
  const breakMinutes = prefs.breakMinutes ?? DEFAULT_BREAK_MINUTES;
  const napMinutes = prefs.napMinutes || 0;
  const lunchMinutes = prefs.lunchMinutes ?? 45;
  const totalAvailableMinutes = prefs.totalAvailableMinutes;
  if (!totalAvailableMinutes || totalAvailableMinutes <= 0) {
    throw new Error('planDaySessions requires prefs.totalAvailableMinutes > 0.');
  }
  const lunchAfterMinutes = prefs.lunchAfterMinutes ?? Math.round(totalAvailableMinutes / 2);

  const pool = [...candidates];
  const blocks = [];
  let studyMinutesElapsed = 0; // only counts study/review/test time, not breaks/lunch/nap
  let clockMinutes = 0;
  let lunchDone = false;
  let napDone = false;

  function pushBlock(block) {
    blocks.push({ ...block, startMinute: clockMinutes });
    clockMinutes += block.minutes;
  }

  while (pool.length && clockMinutes < totalAvailableMinutes) {
    // Lunch trigger (once), then immediately a light-subject part.
    if (!lunchDone && studyMinutesElapsed >= lunchAfterMinutes) {
      pushBlock({ kind: 'lunch', minutes: lunchMinutes, label: 'ناهار' });
      lunchDone = true;
      const light = pickLightestCandidate(pool);
      if (light && clockMinutes < totalAvailableMinutes) {
        const remaining = Math.min(partMinutes, totalAvailableMinutes - clockMinutes);
        if (remaining > 0) {
          const idx = pool.indexOf(light);
          pool.splice(idx, 1);
          const subBlocks = splitPartByMastery(stage3Api.chapterMastery.getScore(light.chapterId), remaining);
          pushBlock({ kind: 'part', subject: light.subjectName, chapterId: light.chapterId, minutes: remaining, subBlocks, note: 'درس سبک بعد از ناهار' });
          studyMinutesElapsed += remaining;
          if (clockMinutes < totalAvailableMinutes) pushBlock({ kind: 'break', minutes: breakMinutes });
        }
      }
      continue;
    }

    // Nap trigger (once), placed right after lunch if requested.
    if (lunchDone && !napDone && napMinutes > 0) {
      pushBlock({ kind: 'nap', minutes: napMinutes, label: 'چرت' });
      napDone = true;
      continue;
    }

    const next = pool.shift();
    const remainingTime = totalAvailableMinutes - clockMinutes;
    if (remainingTime <= 0) break;
    const thisPartMinutes = Math.min(partMinutes, remainingTime);
    const subBlocks = splitPartByMastery(stage3Api.chapterMastery.getScore(next.chapterId), thisPartMinutes);
    pushBlock({ kind: 'part', subject: next.subjectName, chapterId: next.chapterId, minutes: thisPartMinutes, subBlocks });
    studyMinutesElapsed += thisPartMinutes;

    if (pool.length && clockMinutes < totalAvailableMinutes) {
      pushBlock({ kind: 'break', minutes: breakMinutes });
    }
  }

  // Use up small leftover time by stretching the last real (non-break) part, capped so no
  // single block gets long enough to risk burnout - matches the brief's "کاملا استفاده شده،
  // ولی کاربر خسته نشه".
  const leftover = totalAvailableMinutes - clockMinutes;
  if (leftover > 0 && leftover <= MAX_LAST_PART_EXTENSION) {
    for (let i = blocks.length - 1; i >= 0; i--) {
      if (blocks[i].kind === 'part') {
        blocks[i].minutes += leftover;
        blocks[i].extended = leftover;
        clockMinutes += leftover;
        break;
      }
    }
  }

  const reasons = [
    { label: `${blocks.filter(b => b.kind === 'part').length} بخش مطالعه، هرکدوم حدود ${partMinutes} دقیقه`, weight: 0.5 },
    { label: `ترتیب درس‌ها از کم‌علاقه‌ترین شروع شد تا در بخش‌های اول انرژی روش گذاشته بشه`, weight: 0.3 },
    lunchDone ? { label: 'ناهار و یک درس سبک بعدش در برنامه گنجانده شد', weight: 0.2 } : { label: 'زمان کافی برای رسیدن به ناهار در برنامه نبود', weight: 0.1 }
  ];

  return {
    blocks,
    totalPlannedMinutes: clockMinutes,
    totalAvailableMinutes,
    unscheduledChapterIds: pool.map(c => c.chapterId),
    explanation: explain(reasons).toJSON()
  };
}

export default {
  DEFAULT_PART_MINUTES,
  DEFAULT_BREAK_MINUTES,
  MIN_HEAVY_SUBJECT_MINUTES,
  REVIEW_BEFORE_TEST_MINUTES,
  SESSION_PREFERENCE_QUESTIONS,
  subjectOrderByInterest,
  splitPartByMastery,
  estimateSubjectMinutes,
  buildInterestOrderedCandidates,
  planDaySessions
};
