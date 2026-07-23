import { average, standardDeviation, classifyTrend, roundTo, clamp } from '../../utils/mathUtils.js';
import { hoursBetween } from '../../utils/dateUtils.js';
import { computeConfidence } from '../livingPlan/ConfidenceSystem.js';
import { explain } from '../livingPlan/Explainability.js';

/**
 * PredictionEngine.js  (Stage 3, #12 - "extended")
 * -----------------------------------------------------------------------
 * Pure additive module. Built LAST per STAGE_HANDOFF.md, on purpose: it
 * only reads history that Stage 2 already produces (LivingPlan's Memory
 * Timeline 'daily_review' entries from DailyReview.js) rather than
 * inventing new tracking of its own, and it reuses
 * ConfidenceSystem.computeConfidence (Stage 1, #5) for every probability
 * number instead of inventing new confidence math - exactly as the
 * handoff specifies.
 *
 * Both functions are deterministic given the same memory contents (no
 * randomness), and both return an Explainability-shaped `explanation` so
 * a host UI can show "چون: ..." next to any number this module produces.
 * -----------------------------------------------------------------------
 */

const DEFAULT_WINDOW_DAYS = 14;
const DEFAULT_RECENCY_WINDOW_HOURS = 72; // "fresh" evidence = reviewed within the last 3 days

function recentDailyReviews(livingPlan, windowDays) {
  const cutoff = Date.now() - windowDays * 86400000;
  return livingPlan.memory
    .getByType('daily_review')
    .filter(e => e.timestamp >= cutoff)
    .sort((a, b) => a.timestamp - b.timestamp);
}

function recencyFactor(entries, recencyWindowHours) {
  if (entries.length === 0) return 0;
  const hoursSinceLast = hoursBetween(entries[entries.length - 1].timestamp, Date.now());
  return clamp(1 - hoursSinceLast / recencyWindowHours, 0, 1);
}

function consistencyFactor(completions) {
  // stdev of a 0..1 ratio maxes out around 0.5 in practice; treat that as "no consistency" for scoring purposes.
  return clamp(1 - standardDeviation(completions) / 0.5, 0, 1);
}

/**
 * "If this trend continues, you'll be N days behind" - projects the
 * cumulative shortfall of recent daily completion rates over the window
 * they were collected in. Deterministic: purely an average-shortfall
 * projection, not a statistical model.
 * @param {import('../livingPlan/LivingPlan.js').LivingPlan} livingPlan
 * @param {object} [opts]
 * @param {number} [opts.windowDays]
 * @returns {{daysBehind:number, trend:string, confidence:number, sampleSize:number, explanation:object}}
 */
export function predictDaysBehindSchedule(livingPlan, opts = {}) {
  const windowDays = opts.windowDays || DEFAULT_WINDOW_DAYS;
  const entries = recentDailyReviews(livingPlan, windowDays);
  const completions = entries.map(e => e.payload.completion);

  if (completions.length === 0) {
    return {
      daysBehind: 0,
      trend: 'flat',
      confidence: 0,
      sampleSize: 0,
      explanation: explain(['هنوز مرور شبانه‌ای ثبت نشده است']).toJSON()
    };
  }

  const averageShortfall = 1 - average(completions);
  const daysBehind = roundTo(Math.max(0, averageShortfall) * completions.length, 1);
  const trend = classifyTrend(completions);

  const confidence = computeConfidence({
    sampleSize: completions.length,
    consistency: consistencyFactor(completions),
    recency: recencyFactor(entries, opts.recencyWindowHours || DEFAULT_RECENCY_WINDOW_HOURS)
  });

  const trendLabelFa = trend === 'up' ? 'رو به بهبود' : trend === 'down' ? 'رو به کاهش' : 'ثابت';
  const reasons = [
    { label: `میانگین انجام برنامه در ${completions.length} روز اخیر ${Math.round(average(completions) * 100)}٪ بوده`, weight: 0.6 },
    { label: `روند اخیر ${trendLabelFa} است`, weight: 0.4 }
  ];

  return { daysBehind, trend, confidence, sampleSize: completions.length, explanation: explain(reasons).toJSON() };
}

/**
 * "Probability of reaching your goal" - per STAGE_HANDOFF.md this reuses
 * ConfidenceSystem.computeConfidence directly as the probability number
 * (more daily reviews + more consistent completion + more recent data =
 * higher probability), rather than inventing a separate probability
 * model. `supportingStats` carries context for the UI without being
 * blended into the number itself.
 * @param {import('../livingPlan/LivingPlan.js').LivingPlan} livingPlan
 * @param {object} [opts]
 * @param {number} [opts.windowDays]
 * @param {import('./ChapterMastery.js').ChapterMastery} [opts.chapterMastery] - optional, purely for supportingStats.averageMastery
 * @returns {{probability:number, sampleSize:number, supportingStats:object, explanation:object}}
 */
export function predictGoalProbability(livingPlan, opts = {}) {
  const windowDays = opts.windowDays || DEFAULT_WINDOW_DAYS;
  const entries = recentDailyReviews(livingPlan, windowDays);
  const completions = entries.map(e => e.payload.completion);

  const probability = computeConfidence({
    sampleSize: completions.length,
    consistency: consistencyFactor(completions),
    recency: recencyFactor(entries, opts.recencyWindowHours || DEFAULT_RECENCY_WINDOW_HOURS)
  });

  let averageMastery = null;
  if (opts.chapterMastery) {
    const scores = Object.values(opts.chapterMastery.getAllScores());
    if (scores.length > 0) averageMastery = roundTo(average(scores), 2);
  }

  const reasons = completions.length === 0
    ? ['هنوز مرور شبانه‌ای برای تحلیل ثبت نشده است']
    : [
        { label: `${completions.length} روز بازخورد شبانه ثبت شده`, weight: 0.5 },
        { label: `ثبات انجام برنامه ${Math.round(consistencyFactor(completions) * 100)}٪ است`, weight: 0.35 },
        { label: 'تازگی داده‌های اخیر', weight: 0.15 }
      ];

  return {
    probability,
    sampleSize: completions.length,
    supportingStats: { averageMastery },
    explanation: explain(reasons).toJSON()
  };
}

export default { predictDaysBehindSchedule, predictGoalProbability };
