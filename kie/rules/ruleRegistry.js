/**
 * ruleRegistry.js
 * -----------------------------------------------------------------------
 * Phase 1 deliberately ships this EMPTY. It exists now so:
 *   1. RuleEngine/DecisionEngine wiring can be built and tested end-to-end
 *      today (with zero rules registered => zero decisions, which is
 *      itself a valid, testable state).
 *   2. Phase 2 modules (MilestoneEngine, GoalEngine, BurnoutDetector, ...)
 *      each export arrays of BaseRule instances that get pushed in here
 *      via registerRule()/registerRules(), with no changes required to
 *      core/* files.
 * -----------------------------------------------------------------------
 */

/** @type {import('../interfaces/BaseRule.js').BaseRule[]} */
const registry = [];

/** Adds a single rule instance to the registry (duplicate-id safe: last write wins). */
export function registerRule(rule) {
  const existingIndex = registry.findIndex(r => r.id === rule.id);
  if (existingIndex >= 0) {
    registry.splice(existingIndex, 1, rule);
  } else {
    registry.push(rule);
  }
}

/** Adds many rule instances at once. */
export function registerRules(rules) {
  rules.forEach(registerRule);
}

/** Returns a shallow copy of every currently registered rule. */
export function getAllRules() {
  return [...registry];
}

/** Removes every rule from the registry (mainly for test isolation). */
export function clearRegistry() {
  registry.length = 0;
}

export default { registerRule, registerRules, getAllRules, clearRegistry };
