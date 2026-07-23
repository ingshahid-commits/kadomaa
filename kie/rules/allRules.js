import { registerRules, clearRegistry } from './ruleRegistry.js';

import { createMilestoneRules } from '../analyzers/milestoneEngine.js';
import { createGoalRules } from '../analyzers/goalEngine.js';
import { createMotivationRules } from '../analyzers/motivationEngine.js';
import { createBreakRules } from '../analyzers/breakAnalyzer.js';
import { createStreakRules } from '../analyzers/streakAnalyzer.js';
import { createBurnoutRules } from '../analyzers/burnoutDetector.js';
import { createHabitRules } from '../analyzers/habitAnalyzer.js';
import { createConsistencyRules } from '../analyzers/consistencyAnalyzer.js';
import { createProgressRules } from '../analyzers/progressAnalyzer.js';
import { createRecoveryRules } from '../analyzers/recoveryAnalyzer.js';
import { createProductivityRules } from '../analyzers/productivityAnalyzer.js';
import { createFocusRules } from '../analyzers/focusAnalyzer.js';
import { createSmartNotificationRules } from '../analyzers/smartNotificationEngine.js';
import { createRecommendationRules } from '../analyzers/recommendationEngine.js';
import { createTimeAwarenessRules } from '../analyzers/timeAwarenessEngine.js';
import { createPersonalPatternRules } from '../analyzers/personalPatternAnalyzer.js';

/**
 * allRules.js
 * -----------------------------------------------------------------------
 * The ONLY file that needs to know about every analyzer module. Adding a
 * Phase-2-style module in the future means: write the analyzer file, then
 * add one import + one line here. core/RuleEngine, core/DecisionEngine and
 * kadomaEngine.js never need to change.
 *
 * loadAllRules() is idempotent: it clears the registry first, so calling
 * it more than once (e.g. hot-reload during development) never duplicates
 * rules.
 * -----------------------------------------------------------------------
 */
export function loadAllRules() {
  clearRegistry();
  registerRules([
    ...createMilestoneRules(),
    ...createGoalRules(),
    ...createMotivationRules(),
    ...createBreakRules(),
    ...createStreakRules(),
    ...createBurnoutRules(),
    ...createHabitRules(),
    ...createConsistencyRules(),
    ...createProgressRules(),
    ...createRecoveryRules(),
    ...createProductivityRules(),
    ...createFocusRules(),
    ...createSmartNotificationRules(),
    ...createRecommendationRules(),
    ...createTimeAwarenessRules(),
    ...createPersonalPatternRules()
  ]);
}

// Side-effect: populate the registry as soon as this module is imported,
// so kadomaEngine.js can simply `import './rules/allRules.js'` and trust
// ruleRegistry.getAllRules() to be fully populated.
loadAllRules();

export default loadAllRules;
