import { createRule } from '../rules/ruleFactory.js';
import { PRIORITY, CATEGORY, TONE, ANIMATION, SOUND, THRESHOLDS } from '../config/engineConfig.js';
import { getMessage } from '../messages/messageRepository.js';

/**
 * MilestoneEngine
 * -----------------------------------------------------------------------
 * Detects round-number achievements: streak-day milestones and cumulative
 * monthly study-time milestones. Fires exactly once per crossing thanks to
 * the "crossed today" comparison pattern (no external memory needed).
 * -----------------------------------------------------------------------
 */

const MONTHLY_MINUTE_MILESTONES = [300, 600, 1200, 1800, 3000, 6000]; // 5h,10h,20h,30h,50h,100h

const streakMilestoneRule = createRule({
  id: 'milestone.streak',
  priority: PRIORITY.INFO,
  category: CATEGORY.MILESTONE,
  cooldown: 20 * 60 * 60 * 1000,
  metadata: { source: 'MilestoneEngine' },
  conditions: (state) => THRESHOLDS.STREAK_MILESTONES.includes(state.streak),
  action: (state) => ({
    title: 'مایلستون جدید 🔥',
    message: getMessage(CATEGORY.MILESTONE, TONE.CELEBRATION, { streak: state.streak }),
    animation: ANIMATION.CONFETTI,
    sound: SOUND.LEVEL_UP,
    metadata: { streak: state.streak }
  })
});

const monthlyMinutesMilestoneRule = createRule({
  id: 'milestone.monthlyMinutes',
  priority: PRIORITY.INFO,
  category: CATEGORY.MILESTONE,
  cooldown: 20 * 60 * 60 * 1000,
  metadata: { source: 'MilestoneEngine' },
  conditions: (state) => {
    const before = state.studyMonth - state.studyToday;
    return MONTHLY_MINUTE_MILESTONES.some(m => before < m && state.studyMonth >= m);
  },
  action: (state) => {
    const before = state.studyMonth - state.studyToday;
    const crossed = MONTHLY_MINUTE_MILESTONES.find(m => before < m && state.studyMonth >= m);
    const hours = Math.round(crossed / 60);
    return {
      title: 'مایلستون ساعتی 🏆',
      message: `این ماه از مرز ${hours} ساعت مطالعه رد شدی!`,
      animation: ANIMATION.BADGE_POP,
      sound: SOUND.LEVEL_UP,
      metadata: { crossedMinutes: crossed }
    };
  }
});

export function createMilestoneRules() {
  return [streakMilestoneRule, monthlyMinutesMilestoneRule];
}

export default createMilestoneRules;
