import { createRule } from '../rules/ruleFactory.js';
import { PRIORITY, CATEGORY, TONE, ANIMATION, SOUND } from '../config/engineConfig.js';
import { getMessage } from '../messages/messageRepository.js';

/**
 * HabitAnalyzer
 * -----------------------------------------------------------------------
 * Reacts to UserState.habitScore, which StateBuilder computes from the
 * variance of session start hours during the last week (when that data is
 * available). Requires a minimum sample size (sessionsWeek >= 3) so it
 * never judges habit strength from too little data.
 * -----------------------------------------------------------------------
 */

const lowHabitScoreRule = createRule({
  id: 'habit.irregular',
  priority: PRIORITY.LOW,
  category: CATEGORY.RECOMMENDATION_SCHEDULE,
  cooldown: 3 * 24 * 60 * 60 * 1000,
  metadata: { source: 'HabitAnalyzer' },
  conditions: (state) => state.sessionsWeek >= 3 && state.habitScore < 40,
  action: () => ({
    title: 'یه ساعت ثابت امتحان کن',
    message: getMessage(CATEGORY.RECOMMENDATION_SCHEDULE, TONE.NEUTRAL),
    animation: ANIMATION.FADE_IN,
    sound: SOUND.NONE
  })
});

const strongHabitRule = createRule({
  id: 'habit.strong',
  priority: PRIORITY.INFO,
  category: CATEGORY.MOTIVATION,
  cooldown: 3 * 24 * 60 * 60 * 1000,
  metadata: { source: 'HabitAnalyzer' },
  conditions: (state) => state.sessionsWeek >= 3 && state.habitScore >= 80,
  action: () => ({
    title: 'روتین قوی داری',
    message: 'ساعت مطالعه‌ت خیلی منظمه — این ثبات دقیقاً همون چیزیه که نتیجه می‌ده.',
    animation: ANIMATION.GLOW_PULSE,
    sound: SOUND.NONE
  })
});

export function createHabitRules() {
  return [lowHabitScoreRule, strongHabitRule];
}

export default createHabitRules;
