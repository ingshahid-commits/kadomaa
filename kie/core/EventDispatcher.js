/**
 * EventDispatcher
 * -----------------------------------------------------------------------
 * Minimal synchronous pub/sub. Kept dependency-free and framework-free so
 * it can run identically inside a browser tab, a Node worker, or a test
 * runner. Listener exceptions are isolated so one bad subscriber cannot
 * break engine evaluation.
 * -----------------------------------------------------------------------
 */
export class EventDispatcher {
  constructor() {
    /** @type {Map<string, Set<Function>>} */
    this._listeners = new Map();
  }

  /** Subscribe to an event. Returns an unsubscribe function. */
  on(eventName, handler) {
    if (typeof handler !== 'function') {
      throw new Error('EventDispatcher.on requires a function handler.');
    }
    if (!this._listeners.has(eventName)) {
      this._listeners.set(eventName, new Set());
    }
    this._listeners.get(eventName).add(handler);
    return () => this.off(eventName, handler);
  }

  /** Subscribe once; auto-unsubscribes after the first firing. */
  once(eventName, handler) {
    const wrapped = (...args) => {
      this.off(eventName, wrapped);
      handler(...args);
    };
    return this.on(eventName, wrapped);
  }

  /** Remove a specific handler for an event. */
  off(eventName, handler) {
    const set = this._listeners.get(eventName);
    if (set) set.delete(handler);
  }

  /** Remove all handlers, optionally scoped to one event name. */
  clear(eventName) {
    if (eventName) {
      this._listeners.delete(eventName);
    } else {
      this._listeners.clear();
    }
  }

  /** Synchronously invoke every handler registered for eventName. */
  emit(eventName, payload) {
    const set = this._listeners.get(eventName);
    if (!set || set.size === 0) return;
    for (const handler of Array.from(set)) {
      try {
        handler(payload);
      } catch (err) {
        // Isolate listener failures - one broken subscriber must not stop
        // the engine or other subscribers from running.
        // eslint-disable-next-line no-console
        console.error(`[KIE:EventDispatcher] listener for "${eventName}" threw:`, err);
      }
    }
  }
}

export default EventDispatcher;
