import { generateId } from '../utils/idUtils.js';
import { ANIMATION, SOUND } from '../config/engineConfig.js';

/**
 * RuleEngine
 * -----------------------------------------------------------------------
 * Generic, rule-agnostic evaluator. It has zero knowledge of what any
 * individual rule "means" - it only knows the BaseRule contract:
 * conditions() / action() / cooldown. This is what allows Phase 2 to add
 * unlimited independent rules without ever touching this file again.
 *
 * Cooldown tracking is kept in-memory here (per rule id). A host app that
 * needs persistence across reloads can call exportCooldowns()/
 * importCooldowns() to serialize/restore this state.
 * -----------------------------------------------------------------------
 */
export class RuleEngine {
  /** @param {import('./EventDispatcher.js').EventDispatcher} [dispatcher] */
  constructor(dispatcher = null) {
    /** @type {import('../interfaces/BaseRule.js').BaseRule[]} */
    this._rules = [];
    /** @type {Map<string, number>} rule id -> last-fired timestamp (ms) */
    this._cooldownStore = new Map();
    this._dispatcher = dispatcher;
  }

  /** Registers a rule. Throws if it does not satisfy the BaseRule contract or if the id is duplicated. */
  register(rule) {
    rule.validateSelf();
    if (this._rules.some(r => r.id === rule.id)) {
      throw new Error(`RuleEngine: duplicate rule id "${rule.id}".`);
    }
    this._rules.push(rule);
    if (this._dispatcher) this._dispatcher.emit('rule:registered', { id: rule.id, category: rule.category });
    return this;
  }

  /** Registers many rules at once. */
  registerAll(rules) {
    rules.forEach(r => this.register(r));
    return this;
  }

  /** Removes a rule by id (also clears its cooldown record). */
  unregister(ruleId) {
    this._rules = this._rules.filter(r => r.id !== ruleId);
    this._cooldownStore.delete(ruleId);
  }

  getRules() {
    return [...this._rules];
  }

  _isOnCooldown(rule, now) {
    const last = this._cooldownStore.get(rule.id);
    if (last == null) return false;
    return (now - last) < rule.cooldown;
  }

  /**
   * Evaluates every registered rule against the given state/context.
   * Returns an array of normalized Decision objects (see engineConfig for
   * the field vocabulary). Does NOT sort/dedupe - that is PriorityEngine's
   * job, kept separate on purpose (single responsibility).
   *
   * @param {import('../state/UserState.js').UserState} state
   * @param {object} [context]
   * @param {number} [now] - injectable clock for deterministic testing
   */
  evaluate(state, context = {}, now = Date.now()) {
    const decisions = [];

    for (const rule of this._rules) {
      if (this._isOnCooldown(rule, now)) continue;

      let shouldFire = false;
      try {
        shouldFire = !!rule.trigger(state, context);
      } catch (err) {
        this._emitError(rule, 'trigger', err);
        continue;
      }
      if (!shouldFire) continue;

      let payload;
      try {
        payload = rule.action(state, context) || {};
      } catch (err) {
        this._emitError(rule, 'action', err);
        continue;
      }

      const decision = this._normalizeDecision(rule, payload, now);
      decisions.push(decision);

      this._cooldownStore.set(rule.id, now);
      if (this._dispatcher) this._dispatcher.emit('rule:triggered', decision);
    }

    return decisions;
  }

  _normalizeDecision(rule, payload, now) {
    return {
      id: generateId('decision'),
      ruleId: rule.id,
      type: payload.type || rule.category,
      category: rule.category,
      priority: rule.priority,
      title: payload.title || '',
      message: payload.message || '',
      animation: payload.animation || ANIMATION.NONE,
      sound: payload.sound || SOUND.NONE,
      cooldown: rule.cooldown,
      timestamp: now,
      metadata: { ...rule.metadata, ...(payload.metadata || {}) }
    };
  }

  _emitError(rule, phase, err) {
    if (this._dispatcher) {
      this._dispatcher.emit('rule:error', { ruleId: rule.id, phase, error: String(err && err.message || err) });
    } else {
      // eslint-disable-next-line no-console
      console.error(`[KIE:RuleEngine] rule "${rule.id}" failed in ${phase}():`, err);
    }
  }

  /** Serializes cooldown state (e.g. for persistence across app reloads). */
  exportCooldowns() {
    return Object.fromEntries(this._cooldownStore);
  }

  /** Restores cooldown state previously produced by exportCooldowns(). */
  importCooldowns(obj) {
    this._cooldownStore = new Map(Object.entries(obj || {}));
  }
}

export default RuleEngine;
