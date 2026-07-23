import { BaseRule } from '../interfaces/BaseRule.js';

/**
 * ruleFactory.js
 * -----------------------------------------------------------------------
 * Every Phase 2 analyzer needs several small, independent rules that all
 * share the exact same shape (id/priority/category/cooldown/metadata +
 * conditions() + action()). Rather than writing a `class extends BaseRule`
 * per rule (30+ times, pure duplication), this factory builds a valid
 * BaseRule instance from plain functions. It keeps analyzer files short,
 * declarative and easy to read/maintain - the "no duplicated logic"
 * principle from the project brief.
 * -----------------------------------------------------------------------
 */

/**
 * @param {object} spec
 * @param {string} spec.id
 * @param {number} spec.priority
 * @param {string} spec.category
 * @param {number} [spec.cooldown]
 * @param {object} [spec.metadata]
 * @param {(state, context) => boolean} spec.conditions
 * @param {(state, context) => object} spec.action
 * @returns {BaseRule}
 */
export function createRule(spec) {
  const { conditions, action, ...baseOpts } = spec;
  if (typeof conditions !== 'function' || typeof action !== 'function') {
    throw new Error(`createRule("${spec.id}") requires both conditions() and action() functions.`);
  }

  class FactoryRule extends BaseRule {
    conditions(state, context) {
      return conditions(state, context);
    }
    action(state, context) {
      return action(state, context);
    }
  }

  return new FactoryRule(baseOpts);
}

export default createRule;
