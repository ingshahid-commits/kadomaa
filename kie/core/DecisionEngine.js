import { PriorityEngine } from './PriorityEngine.js';

/**
 * DecisionEngine
 * -----------------------------------------------------------------------
 * The single orchestration point between "what fired" (RuleEngine) and
 * "what the UI should actually show" (PriorityEngine-filtered output).
 * Kept intentionally thin - all real intelligence lives in rules/state,
 * all conflict math lives in PriorityEngine. This class only wires them.
 * -----------------------------------------------------------------------
 */
export class DecisionEngine {
  /**
   * @param {import('./RuleEngine.js').RuleEngine} ruleEngine
   * @param {{ maxPerCategory?: number, maxTotal?: number }} [conflictOptions]
   */
  constructor(ruleEngine, conflictOptions = {}) {
    this._ruleEngine = ruleEngine;
    this._conflictOptions = conflictOptions;
  }

  /**
   * Runs a full evaluation pass and returns the final, ordered,
   * de-conflicted list of decisions ready for the UI/notification layer.
   * @param {import('../state/UserState.js').UserState} state
   * @param {object} [context]
   */
  run(state, context = {}) {
    const raw = this._ruleEngine.evaluate(state, context);
    return PriorityEngine.resolveConflicts(raw, this._conflictOptions);
  }
}

export default DecisionEngine;
