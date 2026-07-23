import { createRule } from '../rules/ruleFactory.js';
import { PRIORITY, CATEGORY, TONE, ANIMATION, SOUND } from '../config/engineConfig.js';
import { getMessage } from '../messages/messageRepository.js';

/**
 * MotivationEngine
 * -----------------------------------------------------------------------
 * Reads UserState.motivationScore (already computed by StateBuilder from
 * momentum + goal progress + streak) and produces the appropriate
 * emotional-support message. Deliberately domain-agnostic — it doesn't
 * re-derive momentum/streak logic, it only reacts to the composite score.
 * -----------------------------------------------------------------------
 */

const lowMotivationRule = createRule({
  id: 'motivation.low',
  priority: PRIORITY.MEDIUM,
  category: CATEGORY.MOTIVATION,
  cooldown: 10 * 60 * 60 * 1000,
  metadata: { source: 'MotivationEngine' },
  conditions: (state) => state.motivationScore < 35,
  action: () => ({
    title: 'یه یادآوری دوستانه',
    message: getMessage(CATEGORY.MOTIVATION, TONE.MOTIVATION),
    animation: ANIMATION.FADE_IN,
    sound: SOUND.NONE
  })
});

const highMotivationRule = createRule({
  id: 'motivation.high',
  priority: PRIORITY.INFO,
  category: CATEGORY.MOTIVATION,
  cooldown: 24 * 60 * 60 * 1000,
  metadata: { source: 'MotivationEngine' },
  conditions: (state) => state.motivationScore >= 80,
  action: () => ({
    title: 'روند فوق‌العاده‌ای داری',
    message: getMessage(CATEGORY.MOTIVATION, TONE.MOTIVATION),
    animation: ANIMATION.GLOW_PULSE,
    sound: SOUND.NONE
  })
});

export function createMotivationRules() {
  return [lowMotivationRule, highMotivationRule];
}

export default createMotivationRules;
