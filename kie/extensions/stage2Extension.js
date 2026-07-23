import { ProgressiveProfiler } from './stage2/ProgressiveProfiling.js';
import { EnergyMap } from './stage2/EnergyEngine.js';
import { submitDailyReview } from './stage2/DailyReview.js';
import { negotiate, resolveNegotiation } from './stage2/NegotiationEngine.js';
import { rebalanceMissedLoad, applyRebalance } from './stage2/DynamicRescheduling.js';
import { buildWeeklyStrategy, attachWeeklyStrategy } from './stage2/WeeklyStrategy.js';

/**
 * stage2Extension.js
 * -----------------------------------------------------------------------
 * The single attach point for every Stage 2 module, exactly mirroring
 * how kie/extensions/livingPlanExtension.js attaches Stage 1: it only
 * ADDS properties to an existing LivingPlan instance
 * (`.progressiveProfiler`, `.energyMap`) and methods bound to that
 * instance for convenience - it does not edit LivingPlan.js,
 * Commitment.js, or any Stage 1 file, and calling it twice is a no-op
 * (same idempotency guarantee as attachLivingPlan).
 *
 * Usage (host app, fully opt-in):
 *   import { attachLivingPlan } from './kie/extensions/livingPlanExtension.js';
 *   import { attachStage2 } from './kie/extensions/stage2Extension.js';
 *
 *   const livingPlan = attachLivingPlan(kie, { goal: 'کنکور تجربی 1405' });
 *   const stage2 = attachStage2(livingPlan);
 *
 *   // once per night:
 *   stage2.submitDailyReview({ completion: 0.8, energy: 6, difficulty: 7 }, pendingPool);
 *
 *   // whenever the profiler decides it's time:
 *   const q = stage2.profiler.getNextQuestion();
 *
 *   // when the user pushes back on today's load:
 *   const proposal = stage2.negotiate('امروز ۴ ساعت نمی‌رسم', 240, 180);
 * -----------------------------------------------------------------------
 */

const STAGE2_MARKER = Symbol.for('kadoma.stage2.attached');

/**
 * @param {import('./livingPlan/LivingPlan.js').LivingPlan} livingPlan
 * @param {object} [opts]
 * @param {Array<{key:string, prompt:string}>} [opts.questionBank] - passed through to ProgressiveProfiler
 */
export function attachStage2(livingPlan, opts = {}) {
  if (!livingPlan) throw new Error('attachStage2 requires a LivingPlan instance (see attachLivingPlan in Stage 1).');
  if (livingPlan[STAGE2_MARKER]) {
    return livingPlan.stage2Api; // already attached, no-op (idempotent, same guarantee as attachLivingPlan)
  }

  const profiler = opts.profiler instanceof ProgressiveProfiler
    ? opts.profiler
    : new ProgressiveProfiler({ questionBank: opts.questionBank });
  const energyMap = opts.energyMap instanceof EnergyMap ? opts.energyMap : new EnergyMap();

  // Additive properties only - LivingPlan's own fields (mission,
  // roadmap, todaysCommitments, memory, lastAdaptiveUpdateAt) are
  // completely untouched.
  livingPlan.progressiveProfiler = profiler;
  livingPlan.energyMap = energyMap;

  const api = {
    profiler,
    energyMap,

    /** See DailyReview.submitDailyReview - the nightly 3-input entry point. */
    submitDailyReview: (review, pendingPoolForTomorrow, extraSignals) =>
      submitDailyReview(review, livingPlan, pendingPoolForTomorrow, extraSignals),

    /** See NegotiationEngine.negotiate. */
    negotiate: (userStatement, requestedMinutes, availableMinutes) =>
      negotiate(userStatement, requestedMinutes, availableMinutes, livingPlan),

    /** See NegotiationEngine.resolveNegotiation. */
    resolveNegotiation: (proposal) => resolveNegotiation(proposal, livingPlan),

    /** See DynamicRescheduling. Computes AND applies (logs into livingPlan) in one call. */
    rebalanceMissedLoad: (missedCommitments, remainingDaysCount, maxExtraMinutesPerDay) => {
      const result = rebalanceMissedLoad(missedCommitments, remainingDaysCount, maxExtraMinutesPerDay);
      applyRebalance(livingPlan, result);
      return result;
    },

    /** See WeeklyStrategy.buildWeeklyStrategy + attachWeeklyStrategy. Builds AND attaches in one call. */
    setWeeklyStrategy: (weekKey, subjectPriorities, totalWeeklyMinutes) => {
      const strategy = buildWeeklyStrategy(weekKey, subjectPriorities, totalWeeklyMinutes);
      return attachWeeklyStrategy(livingPlan, strategy);
    }
  };

  livingPlan[STAGE2_MARKER] = true;
  livingPlan.stage2Api = api;
  return api;
}

export default attachStage2;
