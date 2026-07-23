import { createRule } from '../rules/ruleFactory.js';
import { PRIORITY, CATEGORY, TONE, ANIMATION, SOUND } from '../config/engineConfig.js';
import { getMessage } from '../messages/messageRepository.js';

/**
 * RecommendationEngine
 * -----------------------------------------------------------------------
 * Actionable suggestions: which subject deserves attention, and whether
 * right now is a good moment to start a session. Reads
 * UserState.neglectedSubjects (computed by StateBuilder from the weekly
 * per-subject minute distribution) and context.hour for timing.
 * -----------------------------------------------------------------------
 */

const neglectedSubjectRule = createRule({
  id: 'recommendation.neglectedSubject',
  priority: PRIORITY.LOW,
  category: CATEGORY.RECOMMENDATION_SUBJECT,
  cooldown: 24 * 60 * 60 * 1000,
  metadata: { source: 'RecommendationEngine' },
  conditions: (state) => Array.isArray(state.neglectedSubjects) && state.neglectedSubjects.length > 0,
  action: (state) => {
    const subject = state.neglectedSubjects[0];
    return {
      title: 'یه درس جامونده',
      message: getMessage(CATEGORY.RECOMMENDATION_SUBJECT, TONE.FRIENDLY, { subject }),
      animation: ANIMATION.FADE_IN,
      sound: SOUND.NONE,
      metadata: { subject, neglectedSubjects: state.neglectedSubjects }
    };
  }
});

const startNowRule = createRule({
  id: 'recommendation.startNow',
  priority: PRIORITY.LOW,
  category: CATEGORY.RECOMMENDATION_STUDY,
  cooldown: 6 * 60 * 60 * 1000,
  metadata: { source: 'RecommendationEngine' },
  conditions: (state, context) => (
    Number.isFinite(context?.hour) &&
    context.hour >= 15 && context.hour < 21 &&
    state.studyToday < (state.dailyGoalMinutes || 60) * 0.3
  ),
  action: () => ({
    title: 'الان زمان خوبیه',
    message: getMessage(CATEGORY.RECOMMENDATION_STUDY, TONE.FRIENDLY, { minutes: 25 }),
    animation: ANIMATION.FADE_IN,
    sound: SOUND.NONE
  })
});

export function createRecommendationRules() {
  return [neglectedSubjectRule, startNowRule];
}

export default createRecommendationRules;
