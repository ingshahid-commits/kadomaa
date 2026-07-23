/**
 * Explainability.js
 * -----------------------------------------------------------------------
 * Pure additive utility. Turns a list of reason fragments into both a
 * structured form (for UI to render as bullets/chips) and a ready-made
 * Persian sentence (since the host app - Kadoma - is Persian-first),
 * without forcing every caller to hand-format strings differently.
 *
 * Usage:
 *   const why = explain([
 *     { label: 'انرژی صبح بالاست', weight: 0.5 },
 *     { label: 'تسلط فصل پایین است', weight: 0.3 },
 *     { label: 'آزمون نزدیک است', weight: 0.2 }
 *   ]);
 *   why.toText() -> "چون: انرژی صبح بالاست، تسلط فصل پایین است، آزمون نزدیک است"
 * -----------------------------------------------------------------------
 */

export class Explanation {
  /** @param {Array<string|{label:string, weight?:number}>} reasons */
  constructor(reasons = []) {
    this.reasons = reasons.map(r => (typeof r === 'string' ? { label: r, weight: null } : r));
  }

  /** Reasons sorted by weight (highest first); reasons without a weight keep their original relative order at the end. */
  sortedByWeight() {
    const weighted = this.reasons.filter(r => typeof r.weight === 'number');
    const unweighted = this.reasons.filter(r => typeof r.weight !== 'number');
    return [...weighted.sort((a, b) => b.weight - a.weight), ...unweighted];
  }

  /** @param {{ prefix?: string, separator?: string }} [opts] */
  toText({ prefix = 'چون: ', separator = '، ' } = {}) {
    if (this.reasons.length === 0) return '';
    return prefix + this.sortedByWeight().map(r => r.label).join(separator);
  }

  toJSON() {
    return { reasons: this.reasons };
  }
}

/** @param {Array<string|{label:string, weight?:number}>} reasons */
export function explain(reasons) {
  return new Explanation(reasons);
}

/** Attaches a `.explanation` field (plain JSON, not a class instance) onto any plain decision/commitment-like object, without mutating anything else on it. */
export function withExplanation(obj, reasons) {
  return { ...obj, explanation: explain(reasons).toJSON() };
}

export default { Explanation, explain, withExplanation };
