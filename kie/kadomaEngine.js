import { StateBuilder } from './core/StateBuilder.js';
import { RuleEngine } from './core/RuleEngine.js';
import { DecisionEngine } from './core/DecisionEngine.js';
import { EventDispatcher } from './core/EventDispatcher.js';
import { getAllRules } from './rules/ruleRegistry.js';
import './rules/allRules.js'; // side-effect: registers every Phase 2 analyzer's rules

/**
 * KadomaIntelligenceEngine (KIE)
 * -----------------------------------------------------------------------
 * Public facade for the whole engine. This is the only file a host
 * application (e.g. the Kadoma app's timer/lessons/analytics pages)
 * should ever import directly.
 *
 * Usage:
 *   import { KadomaIntelligenceEngine } from './kie/kadomaEngine.js';
 *   const kie = new KadomaIntelligenceEngine();
 *   kie.on('decision', d => renderNotification(d));
 *   const decisions = kie.analyze({ logs: pomoLogs, dailyGoalMinutes: 120 });
 *
 * As of Phase 2, all 15 analyzer modules (see kie/analyzers/*) are
 * auto-registered via rules/allRules.js, so analyze() now returns real,
 * de-conflicted decisions whenever their conditions are met.
 * -----------------------------------------------------------------------
 */
export class KadomaIntelligenceEngine {
  /** @param {{ maxPerCategory?: number, maxTotal?: number }} [conflictOptions] */
  constructor(conflictOptions = {}) {
    this.dispatcher = new EventDispatcher();
    this.ruleEngine = new RuleEngine(this.dispatcher);
    this.decisionEngine = new DecisionEngine(this.ruleEngine, conflictOptions);

    // Pull in every rule currently in the registry (populated by the
    // './rules/allRules.js' side-effect import above).
    this.ruleEngine.registerAll(getAllRules());
  }

  /** Re-syncs the internal RuleEngine with the module-level rule registry (call after rules change at runtime, e.g. hot-reload). */
  reloadRules() {
    for (const rule of this.ruleEngine.getRules()) {
      this.ruleEngine.unregister(rule.id);
    }
    this.ruleEngine.registerAll(getAllRules());
  }

  /**
   * Full pipeline: raw study data -> UserState -> triggered, de-conflicted decisions.
   * @param {object} rawUserData - see StateBuilder.build() for expected shape
   * @param {object} [context] - free-form extra context passed through to rules
   * @returns {object[]} decisions
   */
  analyze(rawUserData, context = {}) {
    const state = StateBuilder.build(rawUserData);
    const decisions = this.decisionEngine.run(state, context);
    for (const decision of decisions) {
      this.dispatcher.emit('decision', decision);
    }
    return decisions;
  }

  /** Builds and returns the UserState without running any rules (useful for dashboards/debugging). */
  computeState(rawUserData) {
    return StateBuilder.build(rawUserData);
  }

  /** Subscribe to engine events: 'decision' | 'rule:triggered' | 'rule:registered' | 'rule:error'. */
  on(eventName, handler) {
    return this.dispatcher.on(eventName, handler);
  }

  off(eventName, handler) {
    this.dispatcher.off(eventName, handler);
  }
}

export default KadomaIntelligenceEngine;

// Re-export the core building blocks for advanced/Phase-2-3 consumers.
export { StateBuilder } from './core/StateBuilder.js';
export { RuleEngine } from './core/RuleEngine.js';
export { DecisionEngine } from './core/DecisionEngine.js';
export { EventDispatcher } from './core/EventDispatcher.js';
export { PriorityEngine } from './core/PriorityEngine.js';
export { BaseRule } from './interfaces/BaseRule.js';
export { UserState } from './state/UserState.js';
export * as engineConfig from './config/engineConfig.js';
export * as messageRepository from './messages/messageRepository.js';
export * as ruleRegistry from './rules/ruleRegistry.js';
export { loadAllRules } from './rules/allRules.js';
