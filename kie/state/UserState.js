import { SCORE_RANGE } from '../config/engineConfig.js';
import { clamp } from '../utils/mathUtils.js';

/**
 * UserState
 * -----------------------------------------------------------------------
 * A plain, serializable snapshot of everything the rule engine is allowed
 * to reason about. StateBuilder is the ONLY module allowed to construct
 * meaningful values for this class - rules must treat it as read-only.
 * -----------------------------------------------------------------------
 */
export class UserState {
  constructor(partial = {}) {
    // --- raw study minutes ---
    this.studyToday = partial.studyToday ?? 0;
    this.todaysLongestSession = partial.todaysLongestSession ?? 0;
    this.studyYesterday = partial.studyYesterday ?? 0;
    this.studyWeek = partial.studyWeek ?? 0;
    this.studyMonth = partial.studyMonth ?? 0;
    this.weeklyAverage = partial.weeklyAverage ?? 0;
    this.monthlyAverage = partial.monthlyAverage ?? 0;

    // --- goals ---
    this.dailyGoalMinutes = partial.dailyGoalMinutes ?? null;
    this.goalProgress = partial.goalProgress ?? 0; // 0..1 ratio, null-safe (0 if no goal)
    this.goalMet = partial.goalMet ?? false;

    // --- streaks ---
    this.streak = partial.streak ?? 0;
    this.bestStreak = partial.bestStreak ?? 0;
    this.streakBrokenToday = partial.streakBrokenToday ?? false;

    // --- trend ---
    this.studyTrend = partial.studyTrend ?? 'flat'; // 'up' | 'down' | 'flat'
    this.weekOverWeekChange = partial.weekOverWeekChange ?? 0; // ratio, e.g. 0.25 = +25%

    // --- composite 0-100 scores ---
    this.burnoutScore = this._score(partial.burnoutScore);
    this.motivationScore = this._score(partial.motivationScore);
    this.focusScore = this._score(partial.focusScore);
    this.breakScore = this._score(partial.breakScore);
    this.momentumScore = this._score(partial.momentumScore);
    this.consistencyScore = this._score(partial.consistencyScore);
    this.energyScore = this._score(partial.energyScore);
    this.recoveryScore = this._score(partial.recoveryScore);
    this.habitScore = this._score(partial.habitScore);

    // --- session shape ---
    this.averageSessionMinutes = partial.averageSessionMinutes ?? 0;
    this.sessionsToday = partial.sessionsToday ?? 0;
    this.sessionsWeek = partial.sessionsWeek ?? 0;
    this.longestBreakHours = partial.longestBreakHours ?? 0;
    this.hoursSinceLastSession = partial.hoursSinceLastSession ?? null;

    // --- per-subject distribution (subject -> minutes) ---
    this.subjectDistribution = partial.subjectDistribution ?? {};
    this.neglectedSubjects = partial.neglectedSubjects ?? [];

    // --- personal historical baseline (see core/PatternMemory.js) ---
    // { confident, sampleSize, typicalSessionMinutes, typicalDailyMinutes,
    //   typicalStudyHour, strongestSubject }
    this.baseline = partial.baseline ?? { confident: false, sampleSize: 0 };

    // --- bookkeeping ---
    this.referenceDateKey = partial.referenceDateKey ?? null;
    this.generatedAt = partial.generatedAt ?? Date.now();
  }

  _score(v) {
    return clamp(v ?? 0, SCORE_RANGE.MIN, SCORE_RANGE.MAX);
  }

  toJSON() {
    return { ...this };
  }
}

export default UserState;
