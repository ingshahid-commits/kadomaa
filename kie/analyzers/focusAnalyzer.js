import { createRule } from '../rules/ruleFactory.js';
import { PRIORITY, CATEGORY, TONE, ANIMATION, SOUND } from '../config/engineConfig.js';
import { getMessage } from '../messages/messageRepository.js';

/**
 * FocusAnalyzer
 * -----------------------------------------------------------------------
 * Purely reacts to UserState.focusScore + averageSessionMinutes, both
 * already computed by StateBuilder against THRESHOLDS.IDEAL_SESSION_MINUTES.
 * -----------------------------------------------------------------------
 */

const poorFocusRule = createRule({
  id: 'focus.poor',
  priority: PRIORITY.LOW,
  category: CATEGORY.FOCUS,
  cooldown: 2 * 24 * 60 * 60 * 1000,
  metadata: { source: 'FocusAnalyzer' },
  conditions: (state) => state.sessionsWeek >= 3 && state.focusScore < 40,
  action: (state) => ({
    title: 'طول جلسات رو تنظیم کن',
    message: getMessage(CATEGORY.FOCUS, TONE.NEUTRAL, { minutes: state.averageSessionMinutes }),
    animation: ANIMATION.FADE_IN,
    sound: SOUND.NONE,
    metadata: { averageSessionMinutes: state.averageSessionMinutes }
  })
});

const greatFocusRule = createRule({
  id: 'focus.great',
  priority: PRIORITY.INFO,
  category: CATEGORY.FOCUS,
  cooldown: 3 * 24 * 60 * 60 * 1000,
  metadata: { source: 'FocusAnalyzer' },
  conditions: (state) => state.sessionsWeek >= 3 && state.focusScore >= 85,
  action: (state) => ({
    title: 'تمرکز فوق‌العاده',
    message: getMessage(CATEGORY.FOCUS, TONE.NEUTRAL, { minutes: state.averageSessionMinutes }),
    animation: ANIMATION.GLOW_PULSE,
    sound: SOUND.NONE,
    metadata: { averageSessionMinutes: state.averageSessionMinutes }
  })
});

export function createFocusRules() {
  return [poorFocusRule, greatFocusRule];
}

export default createFocusRules;
