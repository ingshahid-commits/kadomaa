/**
 * WeeklyStrategy.js  (Stage 2, #14)
 * -----------------------------------------------------------------------
 * Pure additive module. Per brief #14: on top of the Daily Plan, the
 * engine should be able to produce a Weekly Strategy - but "فقط Daily
 * Commitments هر روز تغییر کنند", i.e. the weekly strategy itself is
 * more stable than daily commitments (though less permanent than the
 * Roadmap/Mission).
 *
 * This module does not modify LivingPlan.js. It attaches its output as
 * `livingPlan.weeklyStrategy` from the OUTSIDE (same additive-property
 * pattern Stage 1's livingPlanExtension.js used for `.livingPlan`
 * itself) - see attachWeeklyStrategy() below.
 * -----------------------------------------------------------------------
 */

/**
 * @param {string} weekKey - e.g. "2026-W07"
 * @param {Array<{subject:string, targetMinutes:number, focus?:string}>} subjectAllocations
 * @param {Array<string|{label:string, weight?:number}>} [reasons]
 */
export class WeeklyStrategy {
  constructor(weekKey, subjectAllocations = [], reasons = []) {
    this.weekKey = weekKey;
    this.subjectAllocations = subjectAllocations;
    this.reasons = reasons;
    this.createdAt = Date.now();
  }

  totalMinutes() {
    return this.subjectAllocations.reduce((sum, s) => sum + (s.targetMinutes || 0), 0);
  }

  toJSON() {
    return {
      weekKey: this.weekKey,
      subjectAllocations: this.subjectAllocations,
      reasons: this.reasons,
      createdAt: this.createdAt
    };
  }

  static fromJSON(obj) {
    const strategy = Object.create(WeeklyStrategy.prototype);
    Object.assign(strategy, obj);
    return strategy;
  }
}

/**
 * Builds a WeeklyStrategy from a subject-priority map (free-form; a
 * later Stage 3 Curriculum/Chapter-Mastery layer is expected to supply
 * `subjectPriorities`, but this function works standalone too).
 * @param {string} weekKey
 * @param {Object<string, number>} subjectPriorities - subject -> priority weight (higher = more time)
 * @param {number} totalWeeklyMinutes
 */
export function buildWeeklyStrategy(weekKey, subjectPriorities, totalWeeklyMinutes) {
  const entries = Object.entries(subjectPriorities || {});
  const totalWeight = entries.reduce((sum, [, w]) => sum + w, 0) || 1;

  const subjectAllocations = entries.map(([subject, weight]) => ({
    subject,
    targetMinutes: Math.round((weight / totalWeight) * totalWeeklyMinutes)
  }));

  const reasons = subjectAllocations
    .slice()
    .sort((a, b) => b.targetMinutes - a.targetMinutes)
    .slice(0, 3)
    .map(s => ({ label: `${s.subject}: ${Math.round(s.targetMinutes / 60 * 10) / 10} ساعت این هفته`, weight: s.targetMinutes }));

  return new WeeklyStrategy(weekKey, subjectAllocations, reasons);
}

/**
 * Attaches/replaces `livingPlan.weeklyStrategy` - purely additive
 * property on an existing LivingPlan instance, does not touch its
 * class definition. Logs into Memory Timeline like every other Stage
 * 1/2 mutation does.
 * @param {import('../livingPlan/LivingPlan.js').LivingPlan} livingPlan
 * @param {WeeklyStrategy} weeklyStrategy
 */
export function attachWeeklyStrategy(livingPlan, weeklyStrategy) {
  livingPlan.weeklyStrategy = weeklyStrategy;
  livingPlan.memory.record(
    'weekly_strategy_set',
    { weekKey: weeklyStrategy.weekKey, totalMinutes: weeklyStrategy.totalMinutes() },
    { tags: ['weekly_strategy'] }
  );
  return weeklyStrategy;
}

export default { WeeklyStrategy, buildWeeklyStrategy, attachWeeklyStrategy };
