import { createRule } from '../rules/ruleFactory.js';
import { PRIORITY, CATEGORY, TONE, ANIMATION, SOUND } from '../config/engineConfig.js';
import { getMessage } from '../messages/messageRepository.js';

/**
 * BurnoutDetector
 * -----------------------------------------------------------------------
 * Two-tier escalation purely on UserState.burnoutScore (already computed
 * from consecutive high-load days in StateBuilder). No duplicate math here
 * — this module is intentionally "dumb", it only decides messaging tier.
 * -----------------------------------------------------------------------
 */

const criticalBurnoutRule = createRule({
  id: 'burnout.critical',
  priority: PRIORITY.CRITICAL,
  category: CATEGORY.BURNOUT,
  cooldown: 12 * 60 * 60 * 1000,
  metadata: { source: 'BurnoutDetector' },
  conditions: (state) => state.burnoutScore >= 70,
  action: (state) => ({
    title: 'هشدار خستگی زیاد',
    message: getMessage(CATEGORY.BURNOUT, TONE.WARNING),
    animation: ANIMATION.SHAKE,
    sound: SOUND.WARNING_TONE,
    metadata: { burnoutScore: state.burnoutScore }
  })
});

const moderateBurnoutRule = createRule({
  id: 'burnout.moderate',
  priority: PRIORITY.HIGH,
  category: CATEGORY.BURNOUT,
  cooldown: 20 * 60 * 60 * 1000,
  metadata: { source: 'BurnoutDetector' },
  conditions: (state) => state.burnoutScore >= 40 && state.burnoutScore < 70,
  action: (state) => ({
    title: 'کمی مراقب باش',
    message: getMessage(CATEGORY.BURNOUT, TONE.WARNING),
    animation: ANIMATION.FADE_IN,
    sound: SOUND.SOFT_ALERT,
    metadata: { burnoutScore: state.burnoutScore }
  })
});

export function createBurnoutRules() {
  return [criticalBurnoutRule, moderateBurnoutRule];
}

export default createBurnoutRules;
