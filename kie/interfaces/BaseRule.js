import { DEFAULT_COOLDOWN_MS, PRIORITY, CATEGORY } from '../config/engineConfig.js';

/**
 * BaseRule
 * -----------------------------------------------------------------------
 * The contract every rule in the engine must satisfy. Rules are fully
 * independent units: the RuleEngine never knows what a rule "means", it
 * only knows how to check its conditions and, if they pass, run its
 * action to obtain a Decision payload.
 *
 * Subclassing contract:
 *   - conditions(state, context) -> boolean
 *   - action(state, context)     -> partial Decision object (without id/
 *                                    timestamp/category/priority, which
 *                                    RuleEngine fills in automatically)
 *
 * A rule must NEVER mutate `state`. Rules must be side-effect free other
 * than returning a decision; scheduling/dispatch is the engine's job.
 * -----------------------------------------------------------------------
 */
export class BaseRule {
  /**
   * @param {object} opts
   * @param {string} opts.id - unique, stable identifier (used for cooldown tracking)
   * @param {number} [opts.priority] - one of PRIORITY.*, defaults to MEDIUM
   * @param {string} opts.category - one of CATEGORY.*
   * @param {number} [opts.cooldown] - ms a rule must wait before firing again
   * @param {object} [opts.metadata] - arbitrary bag of extra data for consumers/UI
   */
  constructor({ id, priority = PRIORITY.MEDIUM, category, cooldown = DEFAULT_COOLDOWN_MS, metadata = {} }) {
    if (!id) throw new Error('BaseRule requires a stable "id".');
    if (!category || !Object.values(CATEGORY).includes(category)) {
      throw new Error(`BaseRule "${id}" requires a valid CATEGORY, got: ${category}`);
    }
    this.id = id;
    this.priority = priority;
    this.category = category;
    this.cooldown = cooldown;
    this.metadata = metadata;
  }

  /**
   * Must return true/false. Given the current UserState and an optional
   * free-form context object (e.g. time of day, device info, session id).
   * @param {import('../state/UserState.js').UserState} state
   * @param {object} context
   * @returns {boolean}
   */
  // eslint-disable-next-line no-unused-vars
  conditions(state, context) {
    throw new Error(`Rule "${this.id}" must implement conditions(state, context).`);
  }

  /**
   * Called only when conditions() returned true. Must return an object
   * shaped like: { type, title, message, animation, sound, metadata }
   * (id/priority/category/cooldown/timestamp are attached by RuleEngine).
   * @param {import('../state/UserState.js').UserState} state
   * @param {object} context
   * @returns {object}
   */
  // eslint-disable-next-line no-unused-vars
  action(state, context) {
    throw new Error(`Rule "${this.id}" must implement action(state, context).`);
  }

  /** Convenience default: trigger === conditions unless a subclass overrides for more nuance. */
  trigger(state, context) {
    return this.conditions(state, context);
  }

  /** Throws if this instance does not satisfy the BaseRule contract. Called by RuleEngine.register(). */
  validateSelf() {
    if (typeof this.conditions !== 'function') {
      throw new Error(`Rule "${this.id}" is missing conditions().`);
    }
    if (typeof this.action !== 'function') {
      throw new Error(`Rule "${this.id}" is missing action().`);
    }
    return true;
  }
}

export default BaseRule;
