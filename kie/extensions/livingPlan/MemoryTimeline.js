import { generateId } from '../../utils/idUtils.js';

/**
 * MemoryTimeline.js
 * -----------------------------------------------------------------------
 * Pure additive module. This is the "History" arm of Living Plan (#1) and
 * the concrete implementation of Memory Timeline (#13). It does not
 * replace or wrap EventDispatcher (core/EventDispatcher.js is untouched)
 * - EventDispatcher is for real-time pub/sub, MemoryTimeline is for
 * durable, queryable, serializable long-term history a future
 * Prediction/Recap engine can read back over weeks or months.
 * -----------------------------------------------------------------------
 */
export class MemoryTimeline {
  constructor(entries = []) {
    /** @type {Array<{id:string, type:string, payload:object, tags:string[], confidence:(number|null), timestamp:number}>} */
    this._entries = [...entries];
  }

  /**
   * @param {string} type - e.g. 'math_improved', 'burnout', 'motivation_drop', 'recovery', 'mission_redefined'
   * @param {object} [payload]
   * @param {object} [opts]
   * @param {string[]} [opts.tags]
   * @param {number|null} [opts.confidence]
   */
  record(type, payload = {}, { tags = [], confidence = null } = {}) {
    const entry = {
      id: generateId('mem'),
      type,
      payload,
      tags,
      confidence,
      timestamp: Date.now()
    };
    this._entries.push(entry);
    return entry;
  }

  getAll() {
    return [...this._entries];
  }

  getRecent(n = 10) {
    return this._entries.slice(-n);
  }

  getByType(type) {
    return this._entries.filter(e => e.type === type);
  }

  getByTag(tag) {
    return this._entries.filter(e => e.tags.includes(tag));
  }

  getSince(timestamp) {
    return this._entries.filter(e => e.timestamp >= timestamp);
  }

  /** Count of entries of a given type within the last N days (uses entry.timestamp, so it's calendar-agnostic). */
  countRecentByType(type, windowMs) {
    const cutoff = Date.now() - windowMs;
    return this._entries.filter(e => e.type === type && e.timestamp >= cutoff).length;
  }

  size() {
    return this._entries.length;
  }

  toJSON() {
    return this._entries;
  }

  static fromJSON(arr) {
    return new MemoryTimeline(Array.isArray(arr) ? arr : []);
  }
}

export default MemoryTimeline;
