/**
 * dateUtils.js
 * -----------------------------------------------------------------------
 * Timezone-naive (local time) date helpers. The engine works with plain
 * "YYYY-MM-DD" date-string keys so it stays storage-agnostic and matches
 * how the host application already logs study sessions.
 * -----------------------------------------------------------------------
 */

/** Converts a Date (or timestamp) to a local "YYYY-MM-DD" string key. */
export function toDateKey(input) {
  const d = input instanceof Date ? input : new Date(input);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

/** Returns the "YYYY-MM-DD" key for right now. */
export function todayKey() {
  return toDateKey(new Date());
}

/** Returns the "YYYY-MM-DD" key for N days before/after a reference date key. */
export function shiftDateKey(dateKey, deltaDays) {
  const [y, m, d] = dateKey.split('-').map(Number);
  const base = new Date(y, m - 1, d);
  base.setDate(base.getDate() + deltaDays);
  return toDateKey(base);
}

/** True if two date keys represent the same calendar day. */
export function isSameDateKey(a, b) {
  return a === b;
}

/** Inclusive number of calendar days between two date keys (b - a). */
export function daysBetweenKeys(aKey, bKey) {
  const [ay, am, ad] = aKey.split('-').map(Number);
  const [by, bm, bd] = bKey.split('-').map(Number);
  const a = new Date(ay, am - 1, ad).getTime();
  const b = new Date(by, bm - 1, bd).getTime();
  return Math.round((b - a) / 86400000);
}

/** Builds an array of the last N date keys ending at (and including) `endKey`, oldest first. */
export function lastNDateKeys(n, endKey = todayKey()) {
  const keys = [];
  for (let i = n - 1; i >= 0; i--) {
    keys.push(shiftDateKey(endKey, -i));
  }
  return keys;
}

/** Hours elapsed between two timestamps (ms), always non-negative. */
export function hoursBetween(tsA, tsB) {
  return Math.max(0, (tsB - tsA) / 3600000);
}

export default {
  toDateKey,
  todayKey,
  shiftDateKey,
  isSameDateKey,
  daysBetweenKeys,
  lastNDateKeys,
  hoursBetween
};
