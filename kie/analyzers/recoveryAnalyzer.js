import { createRule } from '../rules/ruleFactory.js';
import { PRIORITY, CATEGORY, TONE, ANIMATION, SOUND } from '../config/engineConfig.js';
import { getMessage } from '../messages/messageRepository.js';

/**
 * RecoveryAnalyzer
 * -----------------------------------------------------------------------
 * Distinct from BreakAnalyzer: BreakAnalyzer looks at today's break/work
 * ratio, while RecoveryAnalyzer looks at UserState.recoveryScore (a
 * multi-day composite of rest gaps + burnout trajectory) to catch cases
 * where the user "pushed through" without ever properly recovering.
 * -----------------------------------------------------------------------
 */

const poorRecoveryRule = createRule({
  id: 'recovery.poor',
  priority: PRIORITY.HIGH,
  category: CATEGORY.RECOMMENDATION_REST,
  cooldown: 24 * 60 * 60 * 1000,
  metadata: { source: 'RecoveryAnalyzer' },
  conditions: (state) => state.recoveryScore < 40 && state.burnoutScore >= 50,
  action: () => ({
    title: 'بدنت به ریکاوری نیاز داره',
    message: getMessage(CATEGORY.RECOMMENDATION_REST, TONE.CALM),
    animation: ANIMATION.FADE_IN,
    sound: SOUND.SOFT_ALERT
  })
});

export function createRecoveryRules() {
  return [poorRecoveryRule];
}

export default createRecoveryRules;
