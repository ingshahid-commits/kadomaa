/**
 * EnergyEngine.js  (Stage 2, #11)
 * -----------------------------------------------------------------------
 * Pure additive module. Per brief #11: the plan shouldn't be based on
 * time slots alone - heavy subjects should land in high-energy windows.
 * This module only reorders/labels a given commitment list; it never
 * invents commitments and never touches LivingPlan's roadmap.
 * -----------------------------------------------------------------------
 */

const HOUR_BUCKETS = ['morning', 'midday', 'afternoon', 'evening', 'night'];

function bucketForHour(hour) {
  if (hour >= 5 && hour < 10) return 'morning';
  if (hour >= 10 && hour < 14) return 'midday';
  if (hour >= 14 && hour < 18) return 'afternoon';
  if (hour >= 18 && hour < 22) return 'evening';
  return 'night';
}

export class EnergyMap {
  constructor() {
    /** @type {Object<string, number[]>} bucket -> raw energy samples (0..10) */
    this.samples = Object.fromEntries(HOUR_BUCKETS.map(b => [b, []]));
  }

  /** @param {number} hour - 0..23 @param {number} energy - 0..10 */
  record(hour, energy) {
    const bucket = bucketForHour(hour);
    this.samples[bucket].push(energy);
    return bucket;
  }

  /** @returns {Object<string, number>} average energy per bucket (buckets with no data are omitted) */
  averages() {
    const out = {};
    for (const bucket of HOUR_BUCKETS) {
      const arr = this.samples[bucket];
      if (arr.length > 0) out[bucket] = arr.reduce((a, b) => a + b, 0) / arr.length;
    }
    return out;
  }

  /** Buckets sorted from highest to lowest average energy (only buckets with data). */
  rankedBuckets() {
    const avgs = this.averages();
    return Object.keys(avgs).sort((a, b) => avgs[b] - avgs[a]);
  }

  /** @param {number} topN */
  getHighEnergyWindows(topN = 2) {
    return this.rankedBuckets().slice(0, topN);
  }

  toJSON() {
    return { samples: this.samples };
  }

  static fromJSON(obj) {
    const map = new EnergyMap();
    map.samples = obj?.samples || map.samples;
    return map;
  }
}

/**
 * Sorts commitments so "heavy" ones (highest plannedMinutes, or
 * metadata.weight if the caller set one) come first - callers combine
 * this ordering with EnergyMap.getHighEnergyWindows() to decide actual
 * time-of-day slotting; this function stays free-form on purpose since
 * slot assignment depends on the host UI's calendar shape.
 * @param {import('../livingPlan/Commitment.js').Commitment[]} commitments
 */
export function rankByWeight(commitments) {
  return [...commitments].sort((a, b) => {
    const wa = a.metadata?.weight ?? a.plannedMinutes ?? 0;
    const wb = b.metadata?.weight ?? b.plannedMinutes ?? 0;
    return wb - wa;
  });
}

/**
 * Convenience helper: returns { high: [...], low: [...] } - the top
 * `heavyCount` commitments (by rankByWeight) intended for the
 * EnergyMap's top windows, and the rest for lower-energy windows.
 * @param {import('../livingPlan/Commitment.js').Commitment[]} commitments
 * @param {number} [heavyCount]
 */
export function splitByEnergyFit(commitments, heavyCount = Math.ceil(commitments.length / 2)) {
  const ranked = rankByWeight(commitments);
  return { high: ranked.slice(0, heavyCount), low: ranked.slice(heavyCount) };
}

export default { EnergyMap, rankByWeight, splitByEnergyFit };
