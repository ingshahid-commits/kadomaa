import { UserState } from '../state/UserState.js';
import { THRESHOLDS } from '../config/engineConfig.js';
import { PatternMemory } from './PatternMemory.js';
import {
  average,
  sum,
  standardDeviation,
  classifyTrend,
  percentageChange,
  normalizeToScore,
  roundTo
} from '../utils/mathUtils.js';
import {
  todayKey,
  shiftDateKey,
  lastNDateKeys,
  daysBetweenKeys,
  hoursBetween
} from '../utils/dateUtils.js';

/**
 * StateBuilder
 * -----------------------------------------------------------------------
 * Pure transformation layer: raw study logs in -> UserState out.
 * No side effects, no I/O. This is intentionally the ONLY place in the
 * whole engine where "business math" for scoring lives, so Phase 2 rule
 * modules never need to duplicate calculation logic.
 *
 * Expected raw input shape (host app adapts its own data to this):
 * {
 *   logs: [{ date: 'YYYY-MM-DD', duration: <minutes:number>, subject?: string,
 *            startHour?: number, type?: 'work'|'break', endTs?: number }],
 *   dailyGoalMinutes?: number,
 *   referenceDateKey?: 'YYYY-MM-DD' // defaults to today
 * }
 * -----------------------------------------------------------------------
 */
export class StateBuilder {
  static build(rawData) {
    rawData = rawData || {};
    const logs = Array.isArray(rawData.logs)
      ? rawData.logs.filter(l => l && typeof l === 'object' && typeof l.date === 'string')
      : [];
    const workLogs = logs.filter(l => (l.type ?? 'work') === 'work' && Number.isFinite(l.duration) && l.duration > 0);
    const breakLogs = logs.filter(l => l.type === 'break' && Number.isFinite(l.duration) && l.duration > 0);
    const referenceDateKey = rawData.referenceDateKey || todayKey();

    const minutesByDate = StateBuilder._bucketMinutesByDate(workLogs);
    const breakMinutesByDate = StateBuilder._bucketMinutesByDate(breakLogs);

    const studyToday = minutesByDate[referenceDateKey] || 0;
    const yesterdayKey = shiftDateKey(referenceDateKey, -1);
    const studyYesterday = minutesByDate[yesterdayKey] || 0;

    // longest single continuous session logged today - this is what "you usually stop
    // around X, but today you went further" compares against, NOT the daily total
    // (todaysSessions itself is declared further below where it was already computed)

    // personal historical norms, computed from everything BEFORE today only
    const baseline = PatternMemory.compute(workLogs, referenceDateKey);

    const weekKeys = lastNDateKeys(THRESHOLDS.TREND_WINDOW_DAYS, referenceDateKey);
    const monthKeys = lastNDateKeys(THRESHOLDS.MONTHLY_WINDOW_DAYS, referenceDateKey);
    const consistencyKeys = lastNDateKeys(THRESHOLDS.CONSISTENCY_WINDOW_DAYS, referenceDateKey);

    const weekSeries = weekKeys.map(k => minutesByDate[k] || 0);
    const monthSeries = monthKeys.map(k => minutesByDate[k] || 0);
    const consistencySeries = consistencyKeys.map(k => minutesByDate[k] || 0);

    const studyWeek = sum(weekSeries);
    const studyMonth = sum(monthSeries);
    const weeklyAverage = roundTo(average(weekSeries), 1);
    const monthlyAverage = roundTo(average(monthSeries), 1);

    // --- goal ---
    const dailyGoalMinutes = Number.isFinite(rawData.dailyGoalMinutes) ? rawData.dailyGoalMinutes : null;
    const goalProgress = dailyGoalMinutes && dailyGoalMinutes > 0
      ? roundTo(Math.min(1, studyToday / dailyGoalMinutes), 3)
      : 0;
    const goalMet = dailyGoalMinutes ? studyToday >= dailyGoalMinutes : false;

    // --- streak (consecutive days with study > 0, walking backward from reference date) ---
    const { streak, bestStreak, streakBrokenToday } = StateBuilder._computeStreaks(
      minutesByDate, referenceDateKey
    );

    // --- trend ---
    const studyTrend = classifyTrend(weekSeries);
    const prevWeekKeys = lastNDateKeys(THRESHOLDS.TREND_WINDOW_DAYS, shiftDateKey(referenceDateKey, -THRESHOLDS.TREND_WINDOW_DAYS));
    const prevWeekTotal = sum(prevWeekKeys.map(k => minutesByDate[k] || 0));
    // Below the baseline floor, a %-change number is more misleading than useful
    // (e.g. 30min -> 355min reads as "+1083%" for what is really just "a new user
    // who started logging a few days ago"). Treat it as "no reliable trend yet".
    const weekOverWeekChange = prevWeekTotal >= THRESHOLDS.MIN_BASELINE_MINUTES_FOR_TREND
      ? roundTo(percentageChange(prevWeekTotal, studyWeek), 3)
      : 0;

    // --- session shape ---
    const todaysSessions = workLogs.filter(l => l.date === referenceDateKey);
    const todaysLongestSession = todaysSessions.length
      ? Math.max(...todaysSessions.map(l => l.duration))
      : 0;
    const weekSessions = workLogs.filter(l => weekKeys.includes(l.date));
    const averageSessionMinutes = roundTo(average(workLogs.map(l => l.duration)), 1);
    const sessionsToday = todaysSessions.length;
    const sessionsWeek = weekSessions.length;

    // --- recency / long-break detection ---
    const { longestBreakHours, hoursSinceLastSession } = StateBuilder._computeGaps(workLogs, referenceDateKey);

    // --- subject distribution ---
    const subjectDistribution = StateBuilder._bucketMinutesBySubject(weekSessions.length ? weekSessions : workLogs);
    const neglectedSubjects = StateBuilder._detectNeglectedSubjects(subjectDistribution);

    // --- composite scores ---
    const consistencyScore = StateBuilder._consistencyScore(consistencySeries);
    const burnoutScore = StateBuilder._burnoutScore(minutesByDate, referenceDateKey);
    const breakMinutesToday = breakMinutesByDate[referenceDateKey] || 0;
    const breakScore = StateBuilder._breakScore(breakMinutesToday, studyToday);
    const focusScore = StateBuilder._focusScore(averageSessionMinutes);
    const momentumScore = StateBuilder._momentumScore(studyTrend, streak, weekOverWeekChange);
    const recoveryScore = StateBuilder._recoveryScore(longestBreakHours, burnoutScore);
    const habitScore = StateBuilder._habitScore(workLogs, weekKeys);
    const energyScore = roundTo(Math.max(0, 100 - burnoutScore * 0.7 + recoveryScore * 0.3) , 1);
    const motivationScore = StateBuilder._motivationScore(momentumScore, goalProgress, streak);

    return new UserState({
      studyToday,
      todaysLongestSession,
      baseline,
      studyYesterday,
      studyWeek,
      studyMonth,
      weeklyAverage,
      monthlyAverage,
      dailyGoalMinutes,
      goalProgress,
      goalMet,
      streak,
      bestStreak,
      streakBrokenToday,
      studyTrend,
      weekOverWeekChange,
      burnoutScore,
      motivationScore,
      focusScore,
      breakScore,
      momentumScore,
      consistencyScore,
      energyScore,
      recoveryScore,
      habitScore,
      averageSessionMinutes,
      sessionsToday,
      sessionsWeek,
      longestBreakHours,
      hoursSinceLastSession,
      subjectDistribution,
      neglectedSubjects,
      referenceDateKey,
      generatedAt: Date.now()
    });
  }

  static _bucketMinutesByDate(entries) {
    const bucket = {};
    for (const e of entries) {
      if (!e.date) continue;
      bucket[e.date] = (bucket[e.date] || 0) + (e.duration || 0);
    }
    return bucket;
  }

  static _bucketMinutesBySubject(entries) {
    const bucket = {};
    for (const e of entries) {
      const key = e.subject || 'نامشخص';
      bucket[key] = (bucket[key] || 0) + (e.duration || 0);
    }
    return bucket;
  }

  static _detectNeglectedSubjects(distribution) {
    const subjects = Object.keys(distribution);
    if (subjects.length < 2) return [];
    const values = Object.values(distribution);
    const total = sum(values);
    if (total === 0) return [];
    const avgShare = 1 / subjects.length;
    return subjects.filter(s => (distribution[s] / total) < avgShare * 0.4);
  }

  static _computeStreaks(minutesByDate, referenceDateKey) {
    let streak = 0;
    let cursor = referenceDateKey;
    // if today has no study yet, the "current streak" is judged as of yesterday
    // (so a user mid-day without a session yet isn't falsely told they broke it)
    if (!(minutesByDate[cursor] > 0)) {
      cursor = shiftDateKey(cursor, -1);
    }
    while (minutesByDate[cursor] > 0) {
      streak++;
      cursor = shiftDateKey(cursor, -1);
    }

    // best streak across the full known history
    const allDates = Object.keys(minutesByDate).filter(d => minutesByDate[d] > 0).sort();
    let bestStreak = 0;
    let running = 0;
    for (let i = 0; i < allDates.length; i++) {
      if (i === 0 || daysBetweenKeys(allDates[i - 1], allDates[i]) === 1) {
        running++;
      } else {
        running = 1;
      }
      bestStreak = Math.max(bestStreak, running);
    }
    bestStreak = Math.max(bestStreak, streak);

    const streakBrokenToday = !(minutesByDate[referenceDateKey] > 0) &&
      (minutesByDate[shiftDateKey(referenceDateKey, -1)] > 0) === false &&
      streak === 0 && (minutesByDate[shiftDateKey(referenceDateKey, -2)] > 0);

    return { streak, bestStreak, streakBrokenToday };
  }

  static _computeGaps(workLogs, referenceDateKey) {
    if (workLogs.length === 0) {
      return { longestBreakHours: 0, hoursSinceLastSession: null };
    }
    const sorted = [...workLogs].sort((a, b) => a.date.localeCompare(b.date));
    let longestGapDays = 0;
    for (let i = 1; i < sorted.length; i++) {
      const gap = daysBetweenKeys(sorted[i - 1].date, sorted[i].date);
      if (gap > longestGapDays) longestGapDays = gap;
    }
    const lastDate = sorted[sorted.length - 1].date;
    const gapSinceLast = daysBetweenKeys(lastDate, referenceDateKey);
    return {
      longestBreakHours: roundTo(Math.max(longestGapDays, gapSinceLast) * 24, 1),
      hoursSinceLastSession: roundTo(gapSinceLast * 24, 1)
    };
  }

  static _consistencyScore(series) {
    // Guard: with fewer than half the window containing real study days,
    // a low score here reflects "not enough history yet" rather than a
    // genuinely erratic routine - same philosophy as _habitScore's guard.
    // Without this, a brand-new user's zero-padded early days would read
    // as maximally "inconsistent" even if the days they *did* study were
    // perfectly steady.
    const activeDays = series.filter(v => v > 0).length;
    if (activeDays < Math.ceil(series.length / 2)) return 50; // neutral, not enough data to judge
    if (series.length === 0) return 0;
    const mean = average(series);
    if (mean === 0) return 0;
    const std = standardDeviation(series);
    const ratio = std / mean; // lower is more consistent
    const inverted = 1 - Math.min(1, ratio / THRESHOLDS.INCONSISTENCY_STD_DEV_RATIO);
    return normalizeToScore(inverted, 0, 1);
  }

  static _burnoutScore(minutesByDate, referenceDateKey) {
    let consecutiveHighLoad = 0;
    let cursor = referenceDateKey;
    for (let i = 0; i < 14; i++) {
      const minutes = minutesByDate[cursor] || 0;
      if (minutes >= THRESHOLDS.BURNOUT_HIGH_LOAD_MINUTES_PER_DAY) {
        consecutiveHighLoad++;
      } else {
        break;
      }
      cursor = shiftDateKey(cursor, -1);
    }
    const loadRatio = consecutiveHighLoad / Math.max(1, THRESHOLDS.BURNOUT_MIN_CONSEC_DAYS * 2);
    return normalizeToScore(loadRatio, 0, 1);
  }

  static _breakScore(breakMinutesToday, studyMinutesToday) {
    if (studyMinutesToday === 0) return 100; // nothing to compare against yet, assume fine
    const ratio = breakMinutesToday / studyMinutesToday;
    const target = THRESHOLDS.IDEAL_BREAK_TO_WORK_RATIO;
    const deviation = Math.abs(ratio - target) / target;
    return normalizeToScore(1 - Math.min(1, deviation), 0, 1);
  }

  static _focusScore(averageSessionMinutes) {
    if (averageSessionMinutes === 0) return 0;
    const target = THRESHOLDS.IDEAL_SESSION_MINUTES;
    const deviation = Math.abs(averageSessionMinutes - target) / target;
    return normalizeToScore(1 - Math.min(1, deviation), 0, 1);
  }

  static _momentumScore(trend, streak, weekOverWeekChange) {
    const trendScore = trend === 'up' ? 1 : trend === 'flat' ? 0.5 : 0;
    const streakScore = Math.min(1, streak / 14);
    const changeScore = Math.min(1, Math.max(0, (weekOverWeekChange + 1) / 2));
    const combined = (trendScore * 0.4) + (streakScore * 0.35) + (changeScore * 0.25);
    return normalizeToScore(combined, 0, 1);
  }

  static _recoveryScore(longestBreakHours, burnoutScore) {
    // healthy recovery = some rest exists but not excessive, and burnout is low
    const restComponent = longestBreakHours > 0 && longestBreakHours <= THRESHOLDS.LONG_BREAK_HOURS
      ? 1
      : longestBreakHours > THRESHOLDS.LONG_BREAK_HOURS
        ? 0.4
        : 0.7;
    const burnoutComponent = 1 - (burnoutScore / 100);
    return normalizeToScore((restComponent * 0.5) + (burnoutComponent * 0.5), 0, 1);
  }

  static _habitScore(workLogs, weekKeys) {
    const withHour = workLogs.filter(l => Number.isFinite(l.startHour) && weekKeys.includes(l.date));
    if (withHour.length < 3) return 50; // not enough data to judge, neutral score
    const hours = withHour.map(l => l.startHour);
    const std = standardDeviation(hours);
    const inverted = 1 - Math.min(1, std / 6); // std of 6h+ = no discernible routine
    return normalizeToScore(inverted, 0, 1);
  }

  static _motivationScore(momentumScore, goalProgress, streak) {
    const combined = (momentumScore / 100 * 0.5) + (goalProgress * 0.3) + (Math.min(1, streak / 10) * 0.2);
    return normalizeToScore(combined, 0, 1);
  }
}

export default StateBuilder;
