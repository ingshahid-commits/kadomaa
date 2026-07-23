/**
 * ProgressiveProfiling.js  (Stage 2, #6)
 * -----------------------------------------------------------------------
 * Pure additive module, no dependencies on core/*. Per brief #6: never
 * ask everything on day one; ask one short question every few days and
 * fill the profile in gradually.
 * -----------------------------------------------------------------------
 */

const DEFAULT_QUESTION_BANK = Object.freeze([
  { key: 'sleepSchedule', prompt: 'معمولاً ساعت چند می‌خوابی؟' },
  { key: 'focusWindow', prompt: 'کدوم بخش روز بیشترین تمرکز رو داری؟' },
  { key: 'schoolHours', prompt: 'ساعت‌های مدرسه/کلاس‌هات معمولاً چطوریه؟' },
  { key: 'weakSubject', prompt: 'کدوم درس رو از همه بیشتر دوست نداری بخونی؟' },
  { key: 'studyEnvironment', prompt: 'معمولاً کجا درس می‌خونی؟ خونه، کتابخونه...؟' },
  { key: 'breakStyle', prompt: 'توی استراحت بین درس‌ها معمولاً چیکار می‌کنی؟' },
  { key: 'motivationSource', prompt: 'بیشتر برای چی درس می‌خونی؟ چی انگیزه‌ت رو بالا نگه می‌داره؟' }
]);

const DEFAULT_MIN_GAP_DAYS = 3;

export class ProgressiveProfiler {
  /**
   * @param {object} [opts]
   * @param {Array<{key:string, prompt:string}>} [opts.questionBank]
   * @param {number} [opts.minGapDays] - minimum days between two asked questions
   */
  constructor({ questionBank = DEFAULT_QUESTION_BANK, minGapDays = DEFAULT_MIN_GAP_DAYS } = {}) {
    this.questionBank = questionBank;
    this.minGapDays = minGapDays;
    /** @type {Object<string, any>} */
    this.answers = {};
    this.lastAskedAt = null;
  }

  /** Fraction (0..1) of the question bank that already has an answer. */
  completeness() {
    const answered = this.questionBank.filter(q => this.answers[q.key] !== undefined).length;
    return this.questionBank.length === 0 ? 1 : answered / this.questionBank.length;
  }

  /**
   * Returns the next single question to ask, or null if either the
   * profile is already complete or it's too soon since the last
   * question (per minGapDays).
   * @param {number} [nowTs]
   */
  getNextQuestion(nowTs = Date.now()) {
    if (this.lastAskedAt != null) {
      const daysSince = (nowTs - this.lastAskedAt) / 86400000;
      if (daysSince < this.minGapDays) return null;
    }
    const unanswered = this.questionBank.filter(q => this.answers[q.key] === undefined);
    if (unanswered.length === 0) return null;
    const next = unanswered[0];
    this.lastAskedAt = nowTs;
    return next;
  }

  /**
   * @param {string} key
   * @param {*} value
   */
  answerQuestion(key, value) {
    if (!this.questionBank.some(q => q.key === key)) {
      throw new Error(`ProgressiveProfiler: unknown question key "${key}".`);
    }
    this.answers[key] = value;
    return this.answers;
  }

  toJSON() {
    return {
      answers: this.answers,
      lastAskedAt: this.lastAskedAt,
      completeness: this.completeness()
    };
  }

  static fromJSON(obj, opts = {}) {
    const profiler = new ProgressiveProfiler(opts);
    profiler.answers = obj?.answers || {};
    profiler.lastAskedAt = obj?.lastAskedAt ?? null;
    return profiler;
  }
}

export default { ProgressiveProfiler };
