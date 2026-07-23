import { createRule } from '../rules/ruleFactory.js';
import { PRIORITY, CATEGORY, TONE, ANIMATION, SOUND } from '../config/engineConfig.js';

/**
 * StreakAnalyzer
 * -----------------------------------------------------------------------
 * Complements MilestoneEngine: where MilestoneEngine celebrates exact
 * round-number streak values, StreakAnalyzer reacts to the *shape* of the
 * streak — a break (streakBrokenToday) or steady mid-streak growth.
 * -----------------------------------------------------------------------
 */

const streakBrokenRule = createRule({
  id: 'streak.broken',
  priority: PRIORITY.MEDIUM,
  category: CATEGORY.INCONSISTENCY,
  cooldown: 20 * 60 * 60 * 1000,
  metadata: { source: 'StreakAnalyzer' },
  conditions: (state) => state.streakBrokenToday === true,
  action: (state) => ({
    title: 'استریک قبلی شکست',
    message: `استریک ${state.bestStreak} روزه‌ات متوقف شد — هیچ اشکالی نداره، از همین امروز دوباره شروع کن.`,
    animation: ANIMATION.FADE_IN,
    sound: SOUND.NONE,
    metadata: { bestStreak: state.bestStreak }
  })
});

const streakGrowingRule = createRule({
  id: 'streak.growing',
  priority: PRIORITY.INFO,
  category: CATEGORY.MOTIVATION,
  cooldown: 5 * 24 * 60 * 60 * 1000,
  metadata: { source: 'StreakAnalyzer' },
  conditions: (state) => state.streak >= 5 && state.streak % 5 === 0,
  action: (state) => ({
    title: 'استریک در حال رشد',
    message: `${state.streak} روزه که پشت‌سرهم مطالعه می‌کنی — ریتم خوبیه، نگهش دار.`,
    animation: ANIMATION.GLOW_PULSE,
    sound: SOUND.NONE,
    metadata: { streak: state.streak }
  })
});

export function createStreakRules() {
  return [streakBrokenRule, streakGrowingRule];
}

export default createStreakRules;
