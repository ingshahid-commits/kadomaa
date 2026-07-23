import { createRule } from '../rules/ruleFactory.js';
import { PRIORITY, CATEGORY, TONE, ANIMATION, SOUND, THRESHOLDS } from '../config/engineConfig.js';
import { getMessage } from '../messages/messageRepository.js';

/**
 * BreakAnalyzer
 * -----------------------------------------------------------------------
 * Uses UserState.breakScore (deviation from the ideal break/work ratio)
 * and UserState.hoursSinceLastSession to decide when a rest recommendation
 * or a "we haven't seen you" warning is appropriate.
 * -----------------------------------------------------------------------
 */

const needsRestRule = createRule({
  id: 'break.needsRest',
  priority: PRIORITY.MEDIUM,
  category: CATEGORY.RECOMMENDATION_REST,
  cooldown: 3 * 60 * 60 * 1000,
  metadata: { source: 'BreakAnalyzer' },
  conditions: (state) => state.studyToday >= 90 && state.breakScore < 40,
  action: () => ({
    title: 'وقت یه استراحت کوتاهه',
    message: getMessage(CATEGORY.RECOMMENDATION_REST, TONE.CALM),
    animation: ANIMATION.FADE_IN,
    sound: SOUND.SOFT_ALERT
  })
});

const longAbsenceRule = createRule({
  id: 'break.longAbsence',
  priority: PRIORITY.HIGH,
  category: CATEGORY.WARNING,
  cooldown: 24 * 60 * 60 * 1000,
  metadata: { source: 'BreakAnalyzer' },
  conditions: (state) => (
    state.hoursSinceLastSession != null &&
    state.hoursSinceLastSession >= THRESHOLDS.LONG_BREAK_HOURS
  ),
  action: (state) => ({
    title: 'مدتیه مطالعه‌ای ثبت نشده',
    message: getMessage(CATEGORY.WARNING, TONE.WARNING),
    animation: ANIMATION.SHAKE,
    sound: SOUND.WARNING_TONE,
    metadata: { hoursSinceLastSession: state.hoursSinceLastSession }
  })
});

export function createBreakRules() {
  return [needsRestRule, longAbsenceRule];
}

export default createBreakRules;
