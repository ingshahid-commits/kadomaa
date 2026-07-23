import { LivingPlan } from './livingPlan/LivingPlan.js';

/**
 * livingPlanExtension.js
 * -----------------------------------------------------------------------
 * The ONLY file in Stage 1 that touches an actual KadomaIntelligenceEngine
 * instance - and even then, non-destructively:
 *   - It does NOT edit kadomaEngine.js.
 *   - It does NOT override/replace any existing method (analyze,
 *     computeState, on, off, reloadRules all behave exactly as before).
 *   - It only ADDS a new `kieInstance.livingPlan` property (skipped if
 *     already present, so calling attach twice is a no-op) and
 *     subscribes an ADDITIONAL 'decision' listener (existing listeners
 *     keep firing exactly as before; this is purely an extra subscriber).
 *
 * Usage (host app, fully opt-in - nothing changes if you never call this):
 *   import { KadomaIntelligenceEngine } from './kie/kadomaEngine.js';
 *   import { attachLivingPlan } from './kie/extensions/livingPlanExtension.js';
 *
 *   const kie = new KadomaIntelligenceEngine();
 *   const livingPlan = attachLivingPlan(kie, { goal: 'کنکور تجربی 1405' });
 *   // kie behaves 100% as before; kie.livingPlan is new and additive.
 * -----------------------------------------------------------------------
 */

const SIGNIFICANT_DECISION_CATEGORIES = new Set(['burnout', 'milestone', 'achievement', 'decline', 'improvement']);

/**
 * @param {import('../kadomaEngine.js').KadomaIntelligenceEngine} kieInstance
 * @param {object} mission - initial mission, see LivingPlan constructor
 * @param {object} [opts]
 * @param {boolean} [opts.autoLogSignificantDecisions] - default true; mirrors
 *   noteworthy engine decisions into livingPlan.memory (Memory Timeline),
 *   purely as an additional subscriber - does not change decision output.
 * @returns {LivingPlan}
 */
export function attachLivingPlan(kieInstance, mission, opts = {}) {
  if (!kieInstance) throw new Error('attachLivingPlan requires a KadomaIntelligenceEngine instance.');
  if (kieInstance.livingPlan instanceof LivingPlan) {
    return kieInstance.livingPlan; // already attached, no-op
  }

  const { autoLogSignificantDecisions = true } = opts;
  const livingPlan = new LivingPlan(mission);

  if (autoLogSignificantDecisions && typeof kieInstance.on === 'function') {
    kieInstance.on('decision', (decision) => {
      if (!decision || !SIGNIFICANT_DECISION_CATEGORIES.has(decision.category)) return;
      livingPlan.memory.record(`kie_decision:${decision.category}`, {
        title: decision.title,
        message: decision.message,
        ruleId: decision.ruleId
      }, { tags: ['kie_decision', decision.category] });
    });
  }

  // Non-enumerable-ish plain assignment is fine here: this ADDS a property,
  // it does not shadow or remove anything that existed on kieInstance.
  kieInstance.livingPlan = livingPlan;
  return livingPlan;
}

export default attachLivingPlan;
