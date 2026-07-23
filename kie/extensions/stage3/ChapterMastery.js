import { clamp, roundTo } from '../../utils/mathUtils.js';

/**
 * ChapterMastery.js  (Stage 3, #9)
 * -----------------------------------------------------------------------
 * Pure additive module. Stores a 0-10 mastery score per chapterId plus a
 * short update history (so the Prediction Engine (#12) has real trend
 * data to project from, per STAGE_HANDOFF.md), and exposes the exact
 * strategy bands from the brief:
 *   0-3  -> full_study      ("مطالعه کامل")
 *   4-6  -> review_and_test ("مرور + تست")
 *   7-8  -> test_only       ("فقط تست")
 *   9-10 -> quick_review    ("مرور سریع")
 *
 * Only reuses existing kie/utils exports - no imports from Stage 1,
 * Stage 2, or core/*.
 * -----------------------------------------------------------------------
 */

/** Ordered low-to-high; each band's `max` is inclusive. */
export const STRATEGY_BANDS = [
  { key: 'full_study', min: 0, max: 3, labelFa: 'مطالعه کامل' },
  { key: 'review_and_test', min: 4, max: 6, labelFa: 'مرور + تست' },
  { key: 'test_only', min: 7, max: 8, labelFa: 'فقط تست' },
  { key: 'quick_review', min: 9, max: 10, labelFa: 'مرور سریع' }
];

/** @param {number} score - 0..10 @returns {{key:string, min:number, max:number, labelFa:string}} */
export function bandForScore(score) {
  const s = clamp(score, 0, 10);
  return STRATEGY_BANDS.find(b => s >= b.min && s <= b.max) || STRATEGY_BANDS[0];
}

export class ChapterMastery {
  constructor(initialScores = {}) {
    /** @type {Object<string, number>} */
    this._scores = { ...initialScores };
    /** @type {Object<string, Array<{score:number, timestamp:number}>>} */
    this._history = {};
  }

  /** @param {string} chapterId @returns {number} 0..10, defaults to 0 for an unseen chapter */
  getScore(chapterId) {
    return this._scores[chapterId] ?? 0;
  }

  /** @param {string} chapterId @param {number} score - 0..10 (clamped) */
  setScore(chapterId, score) {
    const clamped = roundTo(clamp(score, 0, 10), 2);
    this._scores[chapterId] = clamped;
    (this._history[chapterId] ||= []).push({ score: clamped, timestamp: Date.now() });
    return clamped;
  }

  /**
   * Updates a chapter's score from a single practice/test attempt instead
   * of setting it outright, so repeated small attempts smooth toward the
   * user's real level rather than jumping on one lucky/unlucky result.
   * @param {string} chapterId
   * @param {{correct:number, total:number}} attempt
   * @param {number} [smoothing] - 0..1, how much this attempt moves the score (default 0.4)
   */
  recordAttempt(chapterId, { correct, total }, smoothing = 0.4) {
    if (!total || total <= 0) throw new Error('ChapterMastery.recordAttempt requires total > 0.');
    const attemptScore = clamp((correct / total) * 10, 0, 10);
    const previous = this.getScore(chapterId);
    const blended = previous + (attemptScore - previous) * clamp(smoothing, 0, 1);
    return this.setScore(chapterId, blended);
  }

  /** @param {string} chapterId */
  getStrategyBand(chapterId) {
    return bandForScore(this.getScore(chapterId));
  }

  /** @param {string} chapterId @param {number} [n] @returns {Array<{score:number, timestamp:number}>} */
  getHistory(chapterId, n = 10) {
    return (this._history[chapterId] || []).slice(-n);
  }

  /** @returns {Object<string, number>} a shallow copy of every known chapter's current score */
  getAllScores() {
    return { ...this._scores };
  }

  /** Chapters at or below `maxScore` (default 6, i.e. still needs real study per the bands above), sorted weakest-first. */
  getWeakChapters(maxScore = 6) {
    return Object.entries(this._scores)
      .filter(([, score]) => score <= maxScore)
      .sort((a, b) => a[1] - b[1])
      .map(([chapterId, score]) => ({ chapterId, score }));
  }

  toJSON() {
    return { scores: this._scores, history: this._history };
  }

  /** @param {{scores?:object, history?:object}} obj - shape produced by toJSON() */
  static fromJSON(obj = {}) {
    const mastery = new ChapterMastery(obj.scores || {});
    mastery._history = obj.history || {};
    return mastery;
  }
}

export default { STRATEGY_BANDS, bandForScore, ChapterMastery };
