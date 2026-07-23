/**
 * PriorityEngine
 * -----------------------------------------------------------------------
 * Pure functions that turn a raw list of triggered decisions into a
 * clean, ordered, non-redundant list ready to hand to the UI layer.
 * Three responsibilities:
 *   1. Sort by priority (desc), then by category-defined tie-break.
 *   2. Suppress semantically contradictory pairs (e.g. don't celebrate
 *      "great study volume" in the same batch as a burnout warning).
 *   3. Resolve conflicts: cap how many decisions per category surface at
 *      once, so e.g. 5 different "recommend rest" rules don't all fire
 *      in the same batch.
 * -----------------------------------------------------------------------
 */
import { SUPPRESSION_RULES } from '../config/engineConfig.js';

export class PriorityEngine {
  /** Sort decisions by priority (desc). Stable for equal priorities (preserves rule registration order). */
  static sortByPriority(decisions) {
    return [...decisions].sort((a, b) => b.priority - a.priority);
  }

  /**
   * Drops any decision whose category is listed in SUPPRESSION_RULES as
   * being suppressed by another category that is ALSO present in this
   * batch. Independent of ordering/priority - this is a semantic filter,
   * not a ranking one.
   */
  static suppressConflicts(decisions) {
    const presentCategories = new Set(decisions.map(d => d.category));
    return decisions.filter(d => {
      const suppressors = SUPPRESSION_RULES[d.category];
      if (!suppressors || suppressors.length === 0) return true;
      const isSuppressed = suppressors.some(c => presentCategories.has(c));
      return !isSuppressed;
    });
  }

  /**
   * Keeps at most `maxPerCategory` decisions per category (highest priority
   * ones win), and at most `maxTotal` decisions overall.
   */
  static resolveConflicts(decisions, { maxPerCategory = 2, maxTotal = 5 } = {}) {
    const semanticallyClean = PriorityEngine.suppressConflicts(decisions);
    const sorted = PriorityEngine.sortByPriority(semanticallyClean);
    const perCategoryCount = new Map();
    const result = [];

    for (const decision of sorted) {
      const count = perCategoryCount.get(decision.category) || 0;
      if (count >= maxPerCategory) continue;
      result.push(decision);
      perCategoryCount.set(decision.category, count + 1);
      if (result.length >= maxTotal) break;
    }

    return result;
  }
}

export default PriorityEngine;
