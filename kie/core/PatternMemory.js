import { median } from '../utils/mathUtils.js';

const MIN_SESSIONS_FOR_BASELINE = 6; // below this, we don't have enough history to trust a personal norm
const MIN_DAYS_FOR_DAILY_BASELINE = 5;

/**
 * PatternMemory
 * -----------------------------------------------------------------------
 * Computes a user's own historical norms from their PRIOR logs (today is
 * always excluded, so "today vs your usual" comparisons never leak today's
 * data into its own baseline).
 *
 * This is deliberately simple, explainable arithmetic (medians and modes)
 * - not a prediction model. It answers one question well: "compared to
 * what THIS person usually does, is today unusual - and in which
 * direction?" That's what makes messages like "you usually stop around
 * 50 minutes, but today you went 45 minutes further" possible, without
 * pretending to be anything more sophisticated than it is.
 *
 * Every field ships alongside a `confident` flag. Callers (rules,
 * messages) MUST check it before referencing a personal-norm number -
 * with too little history the "norm" is noise, not signal, and treating
 * it as fact would produce exactly the kind of overconfident, wrong
 * "the app doesn't get me" moment this feature exists to avoid.
 * -----------------------------------------------------------------------
 */
export class PatternMemory {
  static compute(workLogs, referenceDateKey) {
    const priorLogs = (workLogs || []).filter(l => l.date < referenceDateKey);

    const result = {
      confident: false,
      sampleSize: priorLogs.length,
      typicalSessionMinutes: null,
      typicalDailyMinutes: null,
      typicalStudyHour: null,
      strongestSubject: null,
    };

    if (priorLogs.length < MIN_SESSIONS_FOR_BASELINE) return result;

    // typical single-session length -> "how long you usually keep going before stopping"
    result.typicalSessionMinutes = Math.round(median(priorLogs.map(l => l.duration)));

    // typical daily volume -> only from days that actually had study time (skip zero days,
    // those belong to streak/consistency analysis, not "how much do you usually do")
    const dailyTotals = {};
    for (const l of priorLogs) dailyTotals[l.date] = (dailyTotals[l.date] || 0) + l.duration;
    const dailyValues = Object.values(dailyTotals);
    if (dailyValues.length >= MIN_DAYS_FOR_DAILY_BASELINE) {
      result.typicalDailyMinutes = Math.round(median(dailyValues));
    }

    // typical study hour -> mode of startHour, only if enough sessions actually recorded one
    const withHour = priorLogs.filter(l => Number.isFinite(l.startHour));
    if (withHour.length >= MIN_SESSIONS_FOR_BASELINE) {
      const hourCounts = new Map();
      for (const l of withHour) hourCounts.set(l.startHour, (hourCounts.get(l.startHour) || 0) + 1);
      let bestHour = null, bestCount = 0;
      for (const [hour, count] of hourCounts) {
        if (count > bestCount) { bestHour = hour; bestCount = count; }
      }
      result.typicalStudyHour = bestHour;
    }

    // strongest subject -> most total minutes historically, only if subjects were actually labeled
    const withSubject = priorLogs.filter(l => typeof l.subject === 'string' && l.subject.trim());
    if (withSubject.length >= MIN_SESSIONS_FOR_BASELINE) {
      const bySubject = {};
      for (const l of withSubject) bySubject[l.subject] = (bySubject[l.subject] || 0) + l.duration;
      result.strongestSubject = Object.entries(bySubject).sort((a, b) => b[1] - a[1])[0][0];
    }

    result.confident = true;
    return result;
  }
}

export default PatternMemory;
