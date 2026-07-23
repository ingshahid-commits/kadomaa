import { createRule } from '../rules/ruleFactory.js';
import { PRIORITY, CATEGORY, TONE, ANIMATION, SOUND } from '../config/engineConfig.js';
import { getMessage } from '../messages/messageRepository.js';

/**
 * PersonalPatternAnalyzer
 * -----------------------------------------------------------------------
 * The one genuinely new capability this file adds: comparing TODAY against
 * THIS USER's own historical norm (state.baseline, from core/PatternMemory)
 * instead of a fixed threshold that's the same for everyone. This is what
 * makes "you usually stop around 50 minutes, but today you went 45 minutes
 * further" possible - deterministically, from arithmetic on their own
 * past sessions, no ML involved.
 *
 * Every rule here starts its condition with `state.baseline.confident`,
 * which PatternMemory only sets once there's enough real history (see
 * MIN_SESSIONS_FOR_BASELINE there). Below that, these rules simply don't
 * fire - a wrong personal comparison is worse than no comparison, so a
 * brand-new user gets ordinary messages from the other analyzers instead,
 * never a fabricated "usual" that doesn't mean anything yet.
 * -----------------------------------------------------------------------
 */

const beatYourUsualSessionRule = createRule({
  id: 'personalPattern.beatYourUsualSession',
  priority: PRIORITY.MEDIUM,
  category: CATEGORY.ACHIEVEMENT,
  cooldown: 12 * 60 * 60 * 1000,
  metadata: { source: 'PersonalPatternAnalyzer' },
  conditions: (state) => {
    const b = state.baseline;
    if (!b || !b.confident || !b.typicalSessionMinutes) return false;
    // require a meaningful margin (not just +1 minute) so this feels earned, not automatic
    const margin = state.todaysLongestSession - b.typicalSessionMinutes;
    return margin >= Math.max(15, b.typicalSessionMinutes * 0.3);
  },
  action: (state) => {
    const b = state.baseline;
    const extra = Math.round(state.todaysLongestSession - b.typicalSessionMinutes);
    return {
      title: 'فراتر از روال همیشگیت',
      message: getMessage(CATEGORY.ACHIEVEMENT, TONE.PERSONAL, {
        typical: b.typicalSessionMinutes,
        extra
      }),
      animation: ANIMATION.GLOW_PULSE,
      sound: SOUND.NONE,
      metadata: { typicalSessionMinutes: b.typicalSessionMinutes, todaysLongestSession: state.todaysLongestSession }
    };
  }
});

const belowYourUsualRule = createRule({
  id: 'personalPattern.belowYourUsualDay',
  priority: PRIORITY.LOW,
  category: CATEGORY.MOTIVATION,
  cooldown: 20 * 60 * 60 * 1000,
  metadata: { source: 'PersonalPatternAnalyzer' },
  conditions: (state) => {
    const b = state.baseline;
    if (!b || !b.confident || !b.typicalDailyMinutes) return false;
    // only speak up if there WAS some study today (avoid piling onto an already-covered
    // "long absence" case, which breakAnalyzer/streakAnalyzer own) and it's meaningfully lower
    return state.studyToday > 0 && state.studyToday < b.typicalDailyMinutes * 0.5;
  },
  action: (state) => ({
    title: 'روز سبک‌تری بود',
    message: getMessage(CATEGORY.MOTIVATION, TONE.PERSONAL, {
      typical: state.baseline.typicalDailyMinutes,
      today: state.studyToday
    }),
    animation: ANIMATION.FADE_IN,
    sound: SOUND.NONE,
    metadata: { typicalDailyMinutes: state.baseline.typicalDailyMinutes, studyToday: state.studyToday }
  })
});

const strongHourMatchRule = createRule({
  id: 'personalPattern.strongHourMatch',
  priority: PRIORITY.INFO,
  category: CATEGORY.FOCUS,
  cooldown: 6 * 60 * 60 * 1000,
  metadata: { source: 'PersonalPatternAnalyzer' },
  conditions: (state, context) => {
    const b = state.baseline;
    const hour = context && Number.isFinite(context.hour) ? context.hour : null;
    return !!(b && b.confident && b.typicalStudyHour !== null && hour !== null && hour === b.typicalStudyHour);
  },
  action: (state) => ({
    title: 'ساعت طلایی‌ت',
    message: getMessage(CATEGORY.FOCUS, TONE.PERSONAL, { hour: state.baseline.typicalStudyHour }),
    animation: ANIMATION.NONE,
    sound: SOUND.NONE,
    metadata: { typicalStudyHour: state.baseline.typicalStudyHour }
  })
});

export function createPersonalPatternRules() {
  return [beatYourUsualSessionRule, belowYourUsualRule, strongHourMatchRule];
}

export default createPersonalPatternRules;
