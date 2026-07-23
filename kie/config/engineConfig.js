/**
 * engineConfig.js
 * -----------------------------------------------------------------------
 * Central, single-source-of-truth configuration for the Kadoma Intelligence
 * Engine (KIE). No module should hardcode magic numbers, priority values,
 * category names or tone names outside of this file. Phase 2 rule modules
 * and Phase 3 integration code must import from here.
 * -----------------------------------------------------------------------
 */

/** Decision priority levels. Higher number = more urgent / shown first. */
export const PRIORITY = Object.freeze({
  CRITICAL: 100,   // burnout risk, health-relevant warnings
  HIGH: 75,        // missed goals, sharp decline, broken streak
  MEDIUM: 50,      // recommendations, schedule suggestions
  LOW: 25,         // gentle nudges, general tips
  INFO: 10         // passive/informational, celebrations of small wins
});

/** Decision categories. Used for grouping, cooldown bucketing and conflict resolution. */
export const CATEGORY = Object.freeze({
  ACHIEVEMENT: 'achievement',
  BURNOUT: 'burnout',
  INCONSISTENCY: 'inconsistency',
  IMPROVEMENT: 'improvement',
  DECLINE: 'decline',
  GOAL: 'goal',
  MILESTONE: 'milestone',
  FOCUS: 'focus',
  RECOMMENDATION_STUDY: 'recommendation_study',
  RECOMMENDATION_REST: 'recommendation_rest',
  RECOMMENDATION_SUBJECT: 'recommendation_subject',
  RECOMMENDATION_SCHEDULE: 'recommendation_schedule',
  MOTIVATION: 'motivation',
  WARNING: 'warning',
  NOTIFICATION: 'notification'
});

/** Emotional tone of a generated message. Consumed by the message repository. */
export const TONE = Object.freeze({
  CELEBRATION: 'celebration',
  WARNING: 'warning',
  MOTIVATION: 'motivation',
  CALM: 'calm',
  FRIENDLY: 'friendly',
  NEUTRAL: 'neutral',
  PERSONAL: 'personal' // references the user's own historical baseline rather than a generic threshold
});

/** Suggested UI animation identifiers a renderer may map to concrete effects. */
export const ANIMATION = Object.freeze({
  NONE: 'none',
  CONFETTI: 'confetti',
  GLOW_PULSE: 'glow_pulse',
  SHAKE: 'shake',
  FADE_IN: 'fade_in',
  BADGE_POP: 'badge_pop',
  PROGRESS_BURST: 'progress_burst'
});

/** Suggested UI sound identifiers a renderer may map to concrete audio files. */
export const SOUND = Object.freeze({
  NONE: 'none',
  SUCCESS_CHIME: 'success_chime',
  SOFT_ALERT: 'soft_alert',
  WARNING_TONE: 'warning_tone',
  LEVEL_UP: 'level_up'
});

/** Default cooldown (in milliseconds) applied to a rule if it does not define its own. */
export const DEFAULT_COOLDOWN_MS = 6 * 60 * 60 * 1000; // 6 hours

/** Numeric thresholds used by StateBuilder / Analyzer rules. Centralized for easy tuning. */
export const THRESHOLDS = Object.freeze({
  STREAK_MILESTONES: [3, 7, 14, 30, 60, 100],
  BURNOUT_HIGH_LOAD_MINUTES_PER_DAY: 240,      // 4h/day sustained is flagged as high load
  BURNOUT_MIN_CONSEC_DAYS: 4,                  // consecutive high-load days before burnout risk
  LONG_BREAK_HOURS: 48,                        // no study logged for 48h+ counts as a "long break"
  INCONSISTENCY_STD_DEV_RATIO: 0.75,           // stdDev/mean above this ratio flags inconsistency
  IDEAL_SESSION_MINUTES: 25,                   // reference pomodoro length for focus scoring
  IDEAL_BREAK_TO_WORK_RATIO: 0.2,              // ~1 break minute per 5 work minutes
  DECLINE_DROP_RATIO: 0.35,                    // 35%+ drop week-over-week triggers decline detection
  IMPROVEMENT_RISE_RATIO: 0.25,                // 25%+ rise week-over-week triggers improvement detection
  MIN_BASELINE_MINUTES_FOR_TREND: 60,          // previous week must have at least this much study logged before we trust a %-change comparison (avoids e.g. "1083% more" for brand-new users with almost no prior-week data)
  TREND_WINDOW_DAYS: 7,
  CONSISTENCY_WINDOW_DAYS: 14,
  MONTHLY_WINDOW_DAYS: 30
});

/** Score bounds shared across every *Score field in UserState. */
export const SCORE_RANGE = Object.freeze({ MIN: 0, MAX: 100 });

/**
 * Semantic conflict table for PriorityEngine.resolveConflicts().
 * Key: a category that should be DROPPED from the output batch if any
 * category in its value-array is ALSO present in that same batch.
 *
 * Why this exists: individual rules are intentionally independent (per
 * the project brief) and have no idea what other rules fired. That's
 * good for authoring, but it means e.g. "achievement.bigSession" and
 * "burnout.warning" can both fire together from a single 4-hour study
 * day - which reads as a contradictory, confusing pair of notifications
 * ("great job studying so much!" + "you're at risk of burning out!").
 * This table is the single, centralized place that says which pairs are
 * contradictory, so no individual analyzer needs to know about any other.
 */
export const SUPPRESSION_RULES = Object.freeze({
  [CATEGORY.ACHIEVEMENT]: [CATEGORY.BURNOUT],
  [CATEGORY.RECOMMENDATION_STUDY]: [CATEGORY.BURNOUT, CATEGORY.RECOMMENDATION_REST],
  [CATEGORY.MOTIVATION]: [CATEGORY.BURNOUT],
});

export default {
  PRIORITY,
  CATEGORY,
  TONE,
  ANIMATION,
  SOUND,
  DEFAULT_COOLDOWN_MS,
  THRESHOLDS,
  SCORE_RANGE,
  SUPPRESSION_RULES
};
