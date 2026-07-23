import { createRule } from '../rules/ruleFactory.js';
import { PRIORITY, CATEGORY, TONE, ANIMATION, SOUND } from '../config/engineConfig.js';
import { getMessage } from '../messages/messageRepository.js';

/**
 * ConsistencyAnalyzer
 * -----------------------------------------------------------------------
 * Reacts to UserState.consistencyScore, derived by StateBuilder from the
 * coefficient of variation of daily study minutes over a 14-day window.
 * -----------------------------------------------------------------------
 */

const lowConsistencyRule = createRule({
  id: 'consistency.low',
  priority: PRIORITY.LOW,
  category: CATEGORY.INCONSISTENCY,
  cooldown: 2 * 24 * 60 * 60 * 1000,
  metadata: { source: 'ConsistencyAnalyzer' },
  conditions: (state) => state.consistencyScore < 35 && state.studyWeek > 0,
  action: () => ({
    title: 'ریتم مطالعه پراکنده‌ست',
    message: getMessage(CATEGORY.INCONSISTENCY, TONE.CALM),
    animation: ANIMATION.FADE_IN,
    sound: SOUND.NONE
  })
});

export function createConsistencyRules() {
  return [lowConsistencyRule];
}

export default createConsistencyRules;
