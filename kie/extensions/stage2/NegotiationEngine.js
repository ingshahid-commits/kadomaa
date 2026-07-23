import { clamp } from '../../utils/mathUtils.js';

/**
 * NegotiationEngine.js  (Stage 2, #7)
 * -----------------------------------------------------------------------
 * Pure additive module. Per brief #7: if the plan isn't doable, the
 * engine must NOT silently change it - it proposes a counter-offer
 * first, and only touches the schedule once the user agrees.
 *
 * This module never calls livingPlan.setTodaysCommitments() itself -
 * it only produces a Proposal object. The host app (or
 * stage2Extension.js's wiring) decides what to do once the user
 * accepts, e.g. hand the accepted capacity to AdaptiveScheduler.
 * -----------------------------------------------------------------------
 */

export const NEGOTIATION_STATUS = Object.freeze({
  PENDING: 'pending',
  ACCEPTED: 'accepted',
  REJECTED: 'rejected',
  COUNTERED: 'countered'
});

/**
 * @param {string} userStatement - e.g. "امروز ۴ ساعت نمی‌رسم"
 * @param {number} requestedMinutes - what the plan currently asks for
 * @param {number} availableMinutes - what the user says they actually have
 */
export class Proposal {
  constructor(userStatement, requestedMinutes, availableMinutes) {
    this.userStatement = userStatement;
    this.requestedMinutes = requestedMinutes;
    this.availableMinutes = clamp(availableMinutes, 0, requestedMinutes);
    // Counter-offer sits between what the user offered and what was
    // asked, biased toward the user's number - never guilt-trips them
    // back up to the original ask.
    this.counterMinutes = Math.round(this.availableMinutes + (requestedMinutes - this.availableMinutes) * 0.15);
    this.status = NEGOTIATION_STATUS.PENDING;
    this.createdAt = Date.now();
    this.resolvedAt = null;
    this.resolvedMinutes = null;
  }

  message() {
    if (this.counterMinutes <= this.availableMinutes + 1) {
      return `باشه، ${this.availableMinutes} دقیقه امروز کاملاً کافیه.`;
    }
    const counterHoursLabel = Math.round(this.counterMinutes / 6) / 10; // one decimal hours
    return `${Math.round(this.availableMinutes / 6) / 10} ساعت چطوره؟ اگه بازم زیاده، ${counterHoursLabel} ساعت رو امتحان کن؟`;
  }

  accept({ minutes = this.counterMinutes } = {}) {
    this.status = NEGOTIATION_STATUS.ACCEPTED;
    this.resolvedAt = Date.now();
    this.resolvedMinutes = minutes;
    return this;
  }

  reject() {
    this.status = NEGOTIATION_STATUS.REJECTED;
    this.resolvedAt = Date.now();
    this.resolvedMinutes = this.availableMinutes;
    return this;
  }

  toJSON() {
    return {
      userStatement: this.userStatement,
      requestedMinutes: this.requestedMinutes,
      availableMinutes: this.availableMinutes,
      counterMinutes: this.counterMinutes,
      status: this.status,
      createdAt: this.createdAt,
      resolvedAt: this.resolvedAt,
      resolvedMinutes: this.resolvedMinutes
    };
  }
}

/**
 * @param {string} userStatement
 * @param {number} requestedMinutes
 * @param {number} availableMinutes
 * @param {import('../livingPlan/LivingPlan.js').LivingPlan} [livingPlan] - if given, logs the negotiation into Memory Timeline
 */
export function negotiate(userStatement, requestedMinutes, availableMinutes, livingPlan) {
  const proposal = new Proposal(userStatement, requestedMinutes, availableMinutes);
  if (livingPlan) {
    livingPlan.memory.record('negotiation_opened', proposal.toJSON(), { tags: ['negotiation'] });
  }
  return proposal;
}

/**
 * Call once the user has responded to a Proposal (accept/reject).
 * @param {Proposal} proposal
 * @param {import('../livingPlan/LivingPlan.js').LivingPlan} [livingPlan]
 */
export function resolveNegotiation(proposal, livingPlan) {
  if (livingPlan) {
    livingPlan.memory.record('negotiation_resolved', proposal.toJSON(), { tags: ['negotiation', proposal.status] });
  }
  return proposal;
}

export default { NEGOTIATION_STATUS, Proposal, negotiate, resolveNegotiation };
