import { createRule } from '../rules/ruleFactory.js';
import { PRIORITY, CATEGORY, TONE, ANIMATION, SOUND, THRESHOLDS } from '../config/engineConfig.js';
import { getMessage } from '../messages/messageRepository.js';

/**
 * ProgressAnalyzer
 * -----------------------------------------------------------------------
 * Purely reacts to UserState.weekOverWeekChange (a ratio already computed
 * by StateBuilder by comparing this week's total to the prior week's).
 * -----------------------------------------------------------------------
 */

const improvementRule = createRule({
  id: 'progress.improvement',
  priority: PRIORITY.MEDIUM,
  category: CATEGORY.IMPROVEMENT,
  cooldown: 24 * 60 * 60 * 1000,
  metadata: { source: 'ProgressAnalyzer' },
  conditions: (state) => state.weekOverWeekChange >= THRESHOLDS.IMPROVEMENT_RISE_RATIO,
  action: (state) => ({
    title: 'روند صعودی 📈',
    message: getMessage(CATEGORY.IMPROVEMENT, TONE.MOTIVATION, {
      percent: Math.round(state.weekOverWeekChange * 100)
    }),
    animation: ANIMATION.GLOW_PULSE,
    sound: SOUND.SUCCESS_CHIME,
    metadata: { weekOverWeekChange: state.weekOverWeekChange }
  })
});

const declineRule = createRule({
  id: 'progress.decline',
  priority: PRIORITY.MEDIUM,
  category: CATEGORY.DECLINE,
  cooldown: 24 * 60 * 60 * 1000,
  metadata: { source: 'ProgressAnalyzer' },
  conditions: (state) => state.weekOverWeekChange <= -THRESHOLDS.DECLINE_DROP_RATIO,
  action: (state) => ({
    title: 'یه افت نسبت به هفته‌ی قبل',
    message: getMessage(CATEGORY.DECLINE, TONE.CALM, {
      percent: Math.abs(Math.round(state.weekOverWeekChange * 100))
    }),
    animation: ANIMATION.FADE_IN,
    sound: SOUND.NONE,
    metadata: { weekOverWeekChange: state.weekOverWeekChange }
  })
});

export function createProgressRules() {
  return [improvementRule, declineRule];
}

export default createProgressRules;
