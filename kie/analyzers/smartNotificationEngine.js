import { createRule } from '../rules/ruleFactory.js';
import { PRIORITY, CATEGORY, TONE, ANIMATION, SOUND } from '../config/engineConfig.js';

/**
 * SmartNotificationEngine
 * -----------------------------------------------------------------------
 * Unlike the other analyzers (which react passively to state), this
 * module models an EXPLICIT digest: it only fires when the host app asks
 * for one via context.isDailySummaryRequest = true (e.g. an app-open event
 * or a scheduled evening notification). It composes several UserState
 * fields into a single, higher-signal notification instead of many small
 * ones - useful exactly when you want ONE smart ping, not five.
 * -----------------------------------------------------------------------
 */

const dailySummaryRule = createRule({
  id: 'notification.dailySummary',
  priority: PRIORITY.MEDIUM,
  category: CATEGORY.NOTIFICATION,
  cooldown: 20 * 60 * 60 * 1000,
  metadata: { source: 'SmartNotificationEngine' },
  conditions: (state, context) => context?.isDailySummaryRequest === true && state.studyWeek > 0,
  action: (state) => {
    const parts = [
      `امروز ${state.studyToday} دقیقه`,
      `این هفته ${state.studyWeek} دقیقه`,
      state.streak > 0 ? `استریک ${state.streak} روزه` : null
    ].filter(Boolean);
    return {
      title: 'خلاصه‌ی امروزت',
      message: parts.join(' · '),
      animation: ANIMATION.FADE_IN,
      sound: SOUND.NONE,
      metadata: {
        studyToday: state.studyToday,
        studyWeek: state.studyWeek,
        streak: state.streak,
        momentumScore: state.momentumScore
      }
    };
  }
});

export function createSmartNotificationRules() {
  return [dailySummaryRule];
}

export default createSmartNotificationRules;
