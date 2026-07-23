import { generateId } from '../../utils/idUtils.js';

/**
 * commitmentStates.js
 * -----------------------------------------------------------------------
 * Pure additive module. Does not touch config/engineConfig.js (PRIORITY/
 * CATEGORY/TONE stay exactly as they were) - Commitment status is a
 * separate, smaller vocabulary specific to the Living Plan extension.
 * -----------------------------------------------------------------------
 */
export const COMMITMENT_STATUS = Object.freeze({
  PLANNED: 'planned',
  DOING: 'doing',
  DONE: 'done',
  POSTPONED: 'postponed',
  SKIPPED: 'skipped',
  EXPIRED: 'expired'
});

/**
 * Legal transitions. Kept explicit (rather than "anything goes") so the
 * Commitment Engine can guarantee a commitment's history always tells a
 * coherent story - e.g. you can't silently jump from DONE back to PLANNED.
 * `force: true` in Commitment#transitionTo bypasses this for corrective
 * edits, but every bypass is still logged with a reason.
 */
export const ALLOWED_TRANSITIONS = Object.freeze({
  [COMMITMENT_STATUS.PLANNED]: [COMMITMENT_STATUS.DOING, COMMITMENT_STATUS.POSTPONED, COMMITMENT_STATUS.SKIPPED, COMMITMENT_STATUS.EXPIRED],
  [COMMITMENT_STATUS.DOING]: [COMMITMENT_STATUS.DONE, COMMITMENT_STATUS.POSTPONED, COMMITMENT_STATUS.SKIPPED],
  [COMMITMENT_STATUS.POSTPONED]: [COMMITMENT_STATUS.PLANNED, COMMITMENT_STATUS.DOING, COMMITMENT_STATUS.SKIPPED, COMMITMENT_STATUS.EXPIRED],
  [COMMITMENT_STATUS.DONE]: [],
  [COMMITMENT_STATUS.SKIPPED]: [COMMITMENT_STATUS.PLANNED],
  [COMMITMENT_STATUS.EXPIRED]: [COMMITMENT_STATUS.PLANNED]
});

export const TERMINAL_STATUSES = Object.freeze([
  COMMITMENT_STATUS.DONE,
  COMMITMENT_STATUS.SKIPPED,
  COMMITMENT_STATUS.EXPIRED
]);

/**
 * Commitment
 * -----------------------------------------------------------------------
 * Replaces the plain "Task" concept the brief asked to move away from.
 * Every status change is recorded in `.history`, so a Commitment is a
 * self-contained mini-timeline, not just a mutable label.
 * -----------------------------------------------------------------------
 */
export class Commitment {
  /**
   * @param {object} spec
   * @param {string} spec.title
   * @param {string} [spec.subject]
   * @param {number} [spec.plannedMinutes]
   * @param {string} [spec.dateKey] - which day (YYYY-MM-DD) this commitment belongs to
   * @param {object} [spec.metadata]
   */
  constructor({ title, subject = null, plannedMinutes = null, dateKey = null, metadata = {} }) {
    if (!title) throw new Error('Commitment requires a "title".');
    this.id = generateId('commit');
    this.title = title;
    this.subject = subject;
    this.plannedMinutes = plannedMinutes;
    this.dateKey = dateKey;
    this.metadata = metadata;
    this.status = COMMITMENT_STATUS.PLANNED;
    this.createdAt = Date.now();
    this.updatedAt = this.createdAt;
    this.history = [{ status: this.status, at: this.createdAt, reason: 'created' }];
  }

  isTerminal() {
    return TERMINAL_STATUSES.includes(this.status);
  }

  /**
   * @param {string} newStatus - one of COMMITMENT_STATUS
   * @param {object} [opts]
   * @param {string} [opts.reason]
   * @param {boolean} [opts.force] - bypass the legal-transition check (still logged)
   * @returns {boolean} whether the transition happened
   */
  transitionTo(newStatus, { reason = '', force = false } = {}) {
    if (!Object.values(COMMITMENT_STATUS).includes(newStatus)) {
      throw new Error(`Commitment: unknown status "${newStatus}".`);
    }
    if (newStatus === this.status) return false;

    const allowed = ALLOWED_TRANSITIONS[this.status] || [];
    if (!force && !allowed.includes(newStatus)) {
      throw new Error(
        `Commitment "${this.id}": illegal transition ${this.status} -> ${newStatus} ` +
        `(pass { force: true } for a corrective override).`
      );
    }

    const at = Date.now();
    this.status = newStatus;
    this.updatedAt = at;
    this.history.push({ status: newStatus, at, reason: reason || (force ? 'forced' : '') });
    return true;
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      subject: this.subject,
      plannedMinutes: this.plannedMinutes,
      dateKey: this.dateKey,
      metadata: this.metadata,
      status: this.status,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      history: this.history
    };
  }

  static fromJSON(obj) {
    const c = Object.create(Commitment.prototype);
    Object.assign(c, obj);
    return c;
  }
}

export default Commitment;
