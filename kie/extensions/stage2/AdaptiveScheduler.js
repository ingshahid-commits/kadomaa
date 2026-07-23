import { clamp, roundTo } from '../../utils/mathUtils.js';
import { explain } from '../livingPlan/Explainability.js';

/**
 * AdaptiveScheduler.js  (Stage 2, #2)
 * -----------------------------------------------------------------------
 * Pure additive module. Does not edit LivingPlan.js, Commitment.js, or
 * any core/* file. Consumes a LivingPlan instance and calls its existing
 * public methods only (setTodaysCommitments, recordAdaptiveUpdate).
 *
 * Purpose (per brief #2): "بر اساس عملکرد دیروز / انرژی / زمان آزاد /
 * میزان انجام برنامه / استرس / خواب، برنامه فردا را دوباره تنظیم کند -
 * نه اینکه از صفر تولید کند." I.e. this ADJUSTS the existing pool of
 * planned-but-not-yet-scheduled commitments (scales total minutes,
 * reorders by priority), it never invents new commitments and never
 * calls livingPlan.setRoadmap() - only Roadmap changes on goal change,
 * per Mission Preservation.
 * -----------------------------------------------------------------------
 */

const DEFAULT_BASE_CAPACITY_MINUTES = 180;

/**
 * @param {object} signals
 * @param {number} [signals.completionRate] - 0..1, how much of yesterday's plan was actually done
 * @param {number} [signals.energy] - 0..10
 * @param {number} [signals.freeTimeMinutes] - minutes actually available today
 * @param {number} [signals.stress] - 0..10
 * @param {number} [signals.sleepHours]
 * @returns {{capacityMinutes:number, factor:number, reasons:Array<{label:string, weight:number}>}}
 */
export function computeTodayCapacity(signals = {}) {
  const {
    completionRate = 0.7,
    energy = 6,
    freeTimeMinutes = null,
    stress = 4,
    sleepHours = 7
  } = signals;

  // Each factor is 0..1, weighted, then combined into a single scaling factor
  // applied on top of the base (or explicitly given free-time) capacity.
  const completionFactor = clamp(completionRate, 0, 1);
  const energyFactor = clamp(energy / 10, 0, 1);
  const sleepFactor = clamp(sleepHours / 8, 0, 1);
  const stressFactor = clamp(1 - stress / 10, 0, 1); // higher stress -> lower capacity

  const combined = clamp(
    completionFactor * 0.35 + energyFactor * 0.3 + sleepFactor * 0.2 + stressFactor * 0.15,
    0.25, // never collapse capacity to near-zero from one bad signal alone
    1.15  // a great day can modestly exceed the base
  );

  const baseline = freeTimeMinutes != null ? freeTimeMinutes : DEFAULT_BASE_CAPACITY_MINUTES;
  const capacityMinutes = Math.round(baseline * combined);

  const reasons = [
    { label: `دیروز ${Math.round(completionFactor * 100)}٪ برنامه انجام شد`, weight: 0.35 },
    { label: `سطح انرژی ${energy}/10`, weight: 0.3 },
    { label: `خواب ${sleepHours} ساعت`, weight: 0.2 },
    { label: `استرس ${stress}/10`, weight: 0.15 }
  ];

  return { capacityMinutes, factor: roundTo(combined, 2), reasons };
}

/**
 * Scales a pool of not-yet-done commitments to fit `capacityMinutes`,
 * preserving relative priority order (array order = priority order,
 * caller decides ordering upstream - e.g. Energy Engine / Curriculum
 * Engine in later stages). Lower-priority items are the first to be
 * trimmed or dropped when capacity shrinks.
 * @param {import('../livingPlan/Commitment.js').Commitment[]} commitments
 * @param {number} capacityMinutes
 */
export function fitCommitmentsToCapacity(commitments, capacityMinutes) {
  let remaining = Math.max(0, capacityMinutes);
  const kept = [];
  const dropped = [];
  for (const c of commitments) {
    const need = c.plannedMinutes || 0;
    if (need <= remaining || remaining <= 0 && need === 0) {
      kept.push(c);
      remaining -= need;
    } else if (remaining > 10) {
      // partial fit: shrink this commitment's plannedMinutes instead of dropping it outright
      c.plannedMinutes = remaining;
      kept.push(c);
      remaining = 0;
    } else {
      dropped.push(c);
    }
  }
  return { kept, dropped };
}

/**
 * Full adaptive reschedule for "tomorrow", per spec #2. Does not create
 * new commitments from nothing - `pendingPool` should be the caller's
 * existing backlog (e.g. livingPlan.todaysCommitments still PLANNED, or
 * a pool prepared by a Curriculum/Study-Strategy layer in Stage 3).
 * @param {import('../livingPlan/LivingPlan.js').LivingPlan} livingPlan
 * @param {import('../livingPlan/Commitment.js').Commitment[]} pendingPool
 * @param {object} signals - see computeTodayCapacity
 */
export function rescheduleTomorrow(livingPlan, pendingPool, signals = {}) {
  const { capacityMinutes, factor, reasons } = computeTodayCapacity(signals);
  const { kept, dropped } = fitCommitmentsToCapacity(pendingPool, capacityMinutes);

  livingPlan.setTodaysCommitments(kept, 'adaptive_scheduler_reschedule');
  livingPlan.recordAdaptiveUpdate(
    { capacityMinutes, factor, keptCount: kept.length, droppedCount: dropped.length },
    reasons
  );

  return {
    capacityMinutes,
    factor,
    kept,
    dropped,
    explanation: explain(reasons).toJSON()
  };
}

export default { computeTodayCapacity, fitCommitmentsToCapacity, rescheduleTomorrow };
