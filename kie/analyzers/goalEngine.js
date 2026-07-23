import { createRule } from '../rules/ruleFactory.js';
import { PRIORITY, CATEGORY, TONE, ANIMATION, SOUND } from '../config/engineConfig.js';
import { getMessage } from '../messages/messageRepository.js';

/**
 * GoalEngine
 * -----------------------------------------------------------------------
 * Tracks progress against the user's daily goal (UserState.dailyGoalMinutes).
 * Time-of-day awareness (context.hour) is used only for the missed-goal
 * warning, so it stays silent unless the host app supplies it.
 * -----------------------------------------------------------------------
 */

const goalHalfwayRule = createRule({
  id: 'goal.halfway',
  priority: PRIORITY.LOW,
  category: CATEGORY.GOAL,
  cooldown: 12 * 60 * 60 * 1000,
  metadata: { source: 'GoalEngine' },
  conditions: (state) => !!state.dailyGoalMinutes && !state.goalMet && state.goalProgress >= 0.5,
  action: (state) => ({
    title: 'نزدیک به هدف امروز',
    message: getMessage(CATEGORY.GOAL, TONE.FRIENDLY, { percent: Math.round(state.goalProgress * 100) }),
    animation: ANIMATION.PROGRESS_BURST,
    sound: SOUND.NONE,
    metadata: { goalProgress: state.goalProgress }
  })
});

const goalMetRule = createRule({
  id: 'goal.met',
  priority: PRIORITY.MEDIUM,
  category: CATEGORY.ACHIEVEMENT,
  cooldown: 20 * 60 * 60 * 1000,
  metadata: { source: 'GoalEngine' },
  conditions: (state) => !!state.dailyGoalMinutes && state.goalMet,
  action: (state) => ({
    title: 'هدف امروز کامل شد ✅',
    message: getMessage(CATEGORY.ACHIEVEMENT, TONE.CELEBRATION, { minutes: state.studyToday }),
    animation: ANIMATION.CONFETTI,
    sound: SOUND.SUCCESS_CHIME,
    metadata: { studyToday: state.studyToday }
  })
});

const goalMissedEndOfDayRule = createRule({
  id: 'goal.missedEndOfDay',
  priority: PRIORITY.HIGH,
  category: CATEGORY.GOAL,
  cooldown: 20 * 60 * 60 * 1000,
  metadata: { source: 'GoalEngine' },
  conditions: (state, context) => (
    !!state.dailyGoalMinutes &&
    !state.goalMet &&
    Number.isFinite(context?.hour) &&
    context.hour >= 22
  ),
  action: (state) => ({
    title: 'هدف امروز کامل نشد',
    message: `امروز به ${Math.round(state.goalProgress * 100)}% از هدفت رسیدی؛ فردا از همینجا ادامه بده.`,
    animation: ANIMATION.FADE_IN,
    sound: SOUND.SOFT_ALERT,
    metadata: { goalProgress: state.goalProgress }
  })
});

export function createGoalRules() {
  return [goalHalfwayRule, goalMetRule, goalMissedEndOfDayRule];
}

export default createGoalRules;
