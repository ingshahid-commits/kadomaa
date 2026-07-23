import { createRule } from '../rules/ruleFactory.js';
import { PRIORITY, CATEGORY, TONE, ANIMATION, SOUND } from '../config/engineConfig.js';

/**
 * TimeAwarenessEngine
 * -----------------------------------------------------------------------
 * The only analyzer whose rules are keyed primarily on clock time
 * (context.hour, supplied by the host app - the engine itself never reads
 * Date directly, keeping it deterministic/testable). Complements
 * ProductivityAnalyzer/RecommendationEngine, which also use context.hour
 * but for different purposes (idle nudge / start-now suggestion).
 * -----------------------------------------------------------------------
 */

const lateNightStudyRule = createRule({
  id: 'timeAwareness.lateNight',
  priority: PRIORITY.LOW,
  category: CATEGORY.RECOMMENDATION_REST,
  cooldown: 12 * 60 * 60 * 1000,
  metadata: { source: 'TimeAwarenessEngine' },
  conditions: (state, context) => (
    Number.isFinite(context?.hour) &&
    (context.hour >= 23 || context.hour < 5) &&
    state.sessionsToday > 0
  ),
  action: () => ({
    title: 'دیروقته',
    message: 'مطالعه‌ی خیلی دیروقت روی کیفیت خواب و تمرکز فردا اثر می‌ذاره — یه فکری برای زمان‌بندی بکن.',
    animation: ANIMATION.FADE_IN,
    sound: SOUND.NONE
  })
});

const earlyMorningPraiseRule = createRule({
  id: 'timeAwareness.earlyMorning',
  priority: PRIORITY.INFO,
  category: CATEGORY.MOTIVATION,
  cooldown: 24 * 60 * 60 * 1000,
  metadata: { source: 'TimeAwarenessEngine' },
  conditions: (state, context) => (
    Number.isFinite(context?.hour) &&
    context.hour >= 5 && context.hour < 8 &&
    state.sessionsToday > 0
  ),
  action: () => ({
    title: 'صبح زود شروع کردی 🌅',
    message: 'شروع صبح‌گاهی یکی از قوی‌ترین عادت‌های مطالعه‌ست — همینطوری ادامه بده.',
    animation: ANIMATION.GLOW_PULSE,
    sound: SOUND.NONE
  })
});

export function createTimeAwarenessRules() {
  return [lateNightStudyRule, earlyMorningPraiseRule];
}

export default createTimeAwarenessRules;
