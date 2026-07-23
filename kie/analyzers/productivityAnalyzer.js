import { createRule } from '../rules/ruleFactory.js';
import { PRIORITY, CATEGORY, TONE, ANIMATION, SOUND } from '../config/engineConfig.js';
import { getMessage } from '../messages/messageRepository.js';

/**
 * ProductivityAnalyzer
 * -----------------------------------------------------------------------
 * Looks at raw daily output (UserState.studyToday) rather than composite
 * scores — this is the "did real work happen today" module, complementing
 * the more abstract Focus/Consistency/Habit analyzers.
 * -----------------------------------------------------------------------
 */

const solidDayRule = createRule({
  id: 'productivity.solidDay',
  priority: PRIORITY.INFO,
  category: CATEGORY.ACHIEVEMENT,
  cooldown: 18 * 60 * 60 * 1000,
  metadata: { source: 'ProductivityAnalyzer' },
  conditions: (state) => state.studyToday >= 60,
  action: (state) => ({
    title: 'روز پرباری بود',
    message: getMessage(CATEGORY.ACHIEVEMENT, TONE.CELEBRATION, { minutes: state.studyToday }),
    animation: ANIMATION.BADGE_POP,
    sound: SOUND.SUCCESS_CHIME,
    metadata: { studyToday: state.studyToday }
  })
});

const eveningIdleRule = createRule({
  id: 'productivity.eveningIdle',
  priority: PRIORITY.MEDIUM,
  category: CATEGORY.RECOMMENDATION_STUDY,
  cooldown: 20 * 60 * 60 * 1000,
  metadata: { source: 'ProductivityAnalyzer' },
  conditions: (state, context) => (
    state.studyToday === 0 &&
    state.streak > 0 &&
    Number.isFinite(context?.hour) &&
    context.hour >= 18 && context.hour < 23
  ),
  action: () => ({
    title: 'هنوز وقت هست',
    message: getMessage(CATEGORY.RECOMMENDATION_STUDY, TONE.FRIENDLY, { minutes: 25 }),
    animation: ANIMATION.FADE_IN,
    sound: SOUND.NONE
  })
});

export function createProductivityRules() {
  return [solidDayRule, eveningIdleRule];
}

export default createProductivityRules;
