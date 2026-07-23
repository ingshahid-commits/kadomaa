import { explain } from '../livingPlan/Explainability.js';
import { COMMITMENT_STATUS } from '../livingPlan/Commitment.js';

/**
 * DynamicRescheduling.js  (Stage 2, #15)
 * -----------------------------------------------------------------------
 * Pure additive module. Per brief #15: if the user fails today, the
 * engine must NOT just pile everything onto tomorrow. Instead it
 * rebalances the missed load across the remaining days of the current
 * WeeklyStrategy window (or a caller-given horizon), spreading it as
 * thinly as possible - "با کمترین آسیب".
 *
 * This never touches livingPlan.roadmap (only a goal change does that,
 * per Mission Preservation / #18) - it only redistributes minutes
 * across day-buckets that the caller then turns into Commitments.
 * -----------------------------------------------------------------------
 */

/**
 * @param {import('../livingPlan/Commitment.js').Commitment[]} missedCommitments - today's SKIPPED/POSTPONED/EXPIRED items
 * @param {number} remainingDaysCount - how many days are left to absorb the backlog (e.g. days left in the week)
 * @param {number} [maxExtraMinutesPerDay] - safety cap so no single day gets crushed
 */
export function rebalanceMissedLoad(missedCommitments, remainingDaysCount, maxExtraMinutesPerDay = 30) {
  const missed = missedCommitments.filter(c =>
    [COMMITMENT_STATUS.SKIPPED, COMMITMENT_STATUS.POSTPONED, COMMITMENT_STATUS.EXPIRED].includes(c.status)
  );
  const totalMissedMinutes = missed.reduce((sum, c) => sum + (c.plannedMinutes || 0), 0);
  const days = Math.max(1, remainingDaysCount);

  const perDayRaw = totalMissedMinutes / days;
  const perDay = Math.min(perDayRaw, maxExtraMinutesPerDay);
  const daysNeeded = perDay > 0 ? Math.ceil(totalMissedMinutes / perDay) : 0;
  const overflowMinutes = Math.max(0, totalMissedMinutes - perDay * days);

  return {
    totalMissedMinutes,
    perDayExtraMinutes: Math.round(perDay),
    daysSpread: Math.min(daysNeeded, days),
    overflowMinutes: Math.round(overflowMinutes), // could not be absorbed even at the cap - caller/Negotiation Engine should surface this
    missedCommitmentIds: missed.map(c => c.id)
  };
}

/**
 * Applies the rebalance result to a LivingPlan: logs an Adaptive Update
 * with a clear explanation (per #16 Explainability), same mechanism
 * AdaptiveScheduler already uses - this is intentionally NOT a
 * roadmap rebuild.
 * @param {import('../livingPlan/LivingPlan.js').LivingPlan} livingPlan
 * @param {ReturnType<typeof rebalanceMissedLoad>} rebalanceResult
 */
export function applyRebalance(livingPlan, rebalanceResult) {
  const reasons = [
    { label: `${rebalanceResult.totalMissedMinutes} دقیقه از قبل جا مونده بود`, weight: 0.6 },
    { label: `روزانه فقط ${rebalanceResult.perDayExtraMinutes} دقیقه اضافه می‌شه تا فشار زیاد نشه`, weight: 0.4 }
  ];
  livingPlan.recordAdaptiveUpdate(
    { type: 'dynamic_rescheduling', ...rebalanceResult },
    reasons
  );
  return explain(reasons).toJSON();
}

export default { rebalanceMissedLoad, applyRebalance };
