/**
 * MissionGuard.js
 * -----------------------------------------------------------------------
 * Implements Mission Preservation (#18) as a structural guarantee rather
 * than a convention someone has to remember: every other Living Plan
 * mutation method (setRoadmap, setTodaysCommitments, recordAdaptiveUpdate,
 * ...) simply has no way to reach the mission field. The ONLY door in is
 * redefine(), and it refuses to run unless the caller explicitly marks
 * the change as user-confirmed.
 * -----------------------------------------------------------------------
 */
export class MissionGuard {
  /**
   * @param {object} mission - free-form shape, e.g. { goal, examDate, targetScore, why }
   */
  constructor(mission) {
    if (!mission || typeof mission !== 'object') {
      throw new Error('MissionGuard requires an initial mission object.');
    }
    this._mission = Object.freeze({ ...mission });
    this._definedAt = Date.now();
    this._history = [{ mission: this._mission, at: this._definedAt, reason: 'initial' }];
  }

  get() {
    return this._mission;
  }

  definedAt() {
    return this._definedAt;
  }

  history() {
    return [...this._history];
  }

  /**
   * The only way to change the mission. Requires explicit confirmation so
   * a daily/weekly adaptive update can never silently drift the user's
   * actual goal.
   * @param {object} newMission
   * @param {object} opts
   * @param {boolean} opts.confirmedByUser - must be true, or this throws
   * @param {string} [opts.reason]
   */
  redefine(newMission, { confirmedByUser = false, reason = '' } = {}) {
    if (!confirmedByUser) {
      throw new Error(
        'MissionGuard.redefine() refused: mission changes require { confirmedByUser: true }. ' +
        'This is intentional - see Mission Preservation in the Living Plan spec.'
      );
    }
    if (!newMission || typeof newMission !== 'object') {
      throw new Error('MissionGuard.redefine() requires a mission object.');
    }
    this._mission = Object.freeze({ ...newMission });
    this._definedAt = Date.now();
    this._history.push({ mission: this._mission, at: this._definedAt, reason: reason || 'redefined' });
    return this._mission;
  }

  toJSON() {
    return { mission: this._mission, definedAt: this._definedAt, history: this._history };
  }

  static fromJSON(obj) {
    const guard = Object.create(MissionGuard.prototype);
    guard._mission = Object.freeze({ ...obj.mission });
    guard._definedAt = obj.definedAt;
    guard._history = obj.history || [];
    return guard;
  }
}

export default MissionGuard;
