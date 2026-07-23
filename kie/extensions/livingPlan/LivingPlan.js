import { MissionGuard } from './MissionGuard.js';
import { MemoryTimeline } from './MemoryTimeline.js';
import { Commitment, COMMITMENT_STATUS } from './Commitment.js';
import { explain } from './Explainability.js';

/**
 * LivingPlan.js
 * -----------------------------------------------------------------------
 * Feature #1 (Living Plan) from the extension brief:
 *   Mission              -> MissionGuard (immutable except explicit redefine)
 *   Roadmap              -> plain object, only replaced via setRoadmap()
 *                            (i.e. only when the goal itself changes - the
 *                            spec: "Roadmap فقط هنگام تغییر هدف بازسازی شود")
 *   Today's Commitments  -> Commitment[] (can change daily, see #3)
 *   History              -> MemoryTimeline (see #13)
 *   Adaptive Update       -> recordAdaptiveUpdate() + lastAdaptiveUpdateAt
 *
 * This class does not import anything from core/*, analyzers/*, or
 * rules/* - it is a standalone, opt-in data model. See
 * kie/extensions/livingPlanExtension.js for how it optionally attaches to
 * an existing KadomaIntelligenceEngine instance without modifying it.
 * -----------------------------------------------------------------------
 */
export class LivingPlan {
  /** @param {object} mission - e.g. { goal: 'کنکور تجربی 1405', examDate: '2026-06-18', why: '...' } */
  constructor(mission) {
    this.missionGuard = new MissionGuard(mission);
    this.roadmap = null;
    /** @type {Commitment[]} */
    this.todaysCommitments = [];
    this.memory = new MemoryTimeline();
    this.lastAdaptiveUpdateAt = null;
  }

  get mission() {
    return this.missionGuard.get();
  }

  /** The only way to change the mission - see MissionGuard for why this requires explicit confirmation. */
  redefineMission(newMission, { confirmedByUser = false, reason = '' } = {}) {
    const mission = this.missionGuard.redefine(newMission, { confirmedByUser, reason });
    this.memory.record('mission_redefined', { mission, reason }, { tags: ['mission'] });
    return mission;
  }

  /**
   * Rebuilds the roadmap. Per the spec this should only be called when the
   * underlying goal changes, NOT on every daily/weekly cycle - callers
   * (Stage 2's Adaptive Scheduler / Weekly Strategy) are responsible for
   * only invoking this on an actual goal change, not routine updates.
   * @param {object} roadmap - free-form shape, e.g. { milestones: [...], targetDate, subjectsPlan }
   * @param {string} [reason]
   */
  setRoadmap(roadmap, reason = '') {
    this.roadmap = roadmap;
    this.memory.record('roadmap_rebuilt', { roadmap, reason }, { tags: ['roadmap'] });
    return this.roadmap;
  }

  /**
   * Replaces the full set of today's commitments (e.g. once at the start
   * of a day, or after a Negotiation Engine renegotiation - Stage 2/3).
   * @param {Commitment[]} commitments
   * @param {string} [reason]
   */
  setTodaysCommitments(commitments, reason = '') {
    this.todaysCommitments = commitments;
    this.memory.record('commitments_replaced', { count: commitments.length, reason }, { tags: ['commitments'] });
    return this.todaysCommitments;
  }

  /** @param {object} spec - see Commitment constructor */
  addCommitment(spec) {
    const commitment = spec instanceof Commitment ? spec : new Commitment(spec);
    this.todaysCommitments.push(commitment);
    this.memory.record('commitment_added', { id: commitment.id, title: commitment.title }, { tags: ['commitments'] });
    return commitment;
  }

  findCommitment(id) {
    return this.todaysCommitments.find(c => c.id === id) || null;
  }

  /**
   * @param {string} id
   * @param {string} status - one of COMMITMENT_STATUS
   * @param {object} [opts] - see Commitment#transitionTo
   */
  updateCommitmentStatus(id, status, opts = {}) {
    const commitment = this.findCommitment(id);
    if (!commitment) throw new Error(`LivingPlan: no commitment with id "${id}".`);
    const changed = commitment.transitionTo(status, opts);
    if (changed) {
      this.memory.record('commitment_status_changed', {
        id, status, reason: opts.reason || ''
      }, { tags: ['commitments', status] });
    }
    return commitment;
  }

  /** Any PLANNED/DOING commitment still open past its own dateKey (vs the given referenceDateKey) is marked EXPIRED. Returns the list of newly-expired commitments. */
  expireStaleCommitments(referenceDateKey) {
    const expired = [];
    for (const c of this.todaysCommitments) {
      if (c.dateKey && c.dateKey < referenceDateKey &&
          (c.status === COMMITMENT_STATUS.PLANNED || c.status === COMMITMENT_STATUS.DOING)) {
        c.transitionTo(COMMITMENT_STATUS.EXPIRED, { reason: 'stale vs referenceDateKey' });
        expired.push(c);
      }
    }
    if (expired.length > 0) {
      this.memory.record('commitments_auto_expired', { count: expired.length, referenceDateKey }, { tags: ['commitments', 'expired'] });
    }
    return expired;
  }

  /**
   * Records an "Adaptive Update" - i.e. the Scheduler adjusting tomorrow's
   * plan based on today's actual performance, WITHOUT rebuilding the
   * Roadmap. This is what Dynamic Rescheduling (#15) and the Adaptive
   * Scheduler (#2) in Stage 2 will call.
   * @param {object} patch - free-form description of what changed
   * @param {Array<string|{label:string, weight?:number}>} [reasons]
   */
  recordAdaptiveUpdate(patch, reasons = []) {
    this.lastAdaptiveUpdateAt = Date.now();
    const explanation = explain(reasons).toJSON();
    this.memory.record('adaptive_update', { patch, explanation }, { tags: ['adaptive'] });
    return { at: this.lastAdaptiveUpdateAt, patch, explanation };
  }

  /** Full serializable snapshot (mission + roadmap + today's commitments + history). */
  snapshot() {
    return {
      mission: this.missionGuard.toJSON(),
      roadmap: this.roadmap,
      todaysCommitments: this.todaysCommitments.map(c => c.toJSON()),
      memory: this.memory.toJSON(),
      lastAdaptiveUpdateAt: this.lastAdaptiveUpdateAt
    };
  }

  /** @param {object} snap - output of snapshot() */
  static fromSnapshot(snap) {
    const plan = Object.create(LivingPlan.prototype);
    plan.missionGuard = MissionGuard.fromJSON(snap.mission);
    plan.roadmap = snap.roadmap ?? null;
    plan.todaysCommitments = (snap.todaysCommitments || []).map(Commitment.fromJSON);
    plan.memory = MemoryTimeline.fromJSON(snap.memory);
    plan.lastAdaptiveUpdateAt = snap.lastAdaptiveUpdateAt ?? null;
    return plan;
  }
}

export default LivingPlan;
