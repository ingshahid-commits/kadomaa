import { rescheduleTomorrow } from './AdaptiveScheduler.js';

/**
 * DailyReview.js  (Stage 2, #4)
 * -----------------------------------------------------------------------
 * Pure additive module. Per brief #4: "هر شب Engine فقط سه ورودی بگیرد:
 * Completion, Energy, Difficulty - و بر اساس آن Scheduler را بروزرسانی
 * کند." This module is intentionally that narrow - it is the ONLY
 * entry point Stage 2 expects a host UI to call once per day, and it
 * forwards into the (already-built) AdaptiveScheduler rather than
 * duplicating scheduling logic.
 * -----------------------------------------------------------------------
 */

/**
 * @param {object} review
 * @param {number} review.completion - 0..1, fraction of today's commitments actually done
 * @param {number} review.energy - 0..10, how the user felt today
 * @param {number} review.difficulty - 0..10, how hard today's plan felt (10 = way too much)
 * @param {import('../livingPlan/LivingPlan.js').LivingPlan} livingPlan
 * @param {import('../livingPlan/Commitment.js').Commitment[]} pendingPoolForTomorrow
 * @param {object} [extraSignals] - optional stress/sleepHours/freeTimeMinutes to blend in if the host has them
 */
export function submitDailyReview({ completion, energy, difficulty }, livingPlan, pendingPoolForTomorrow, extraSignals = {}) {
  if (completion == null || energy == null || difficulty == null) {
    throw new Error('DailyReview requires exactly completion, energy and difficulty.');
  }

  livingPlan.memory.record(
    'daily_review',
    { completion, energy, difficulty },
    { tags: ['daily_review'] }
  );

  // "difficulty" feeds capacity as an inverse stress-like signal: a day
  // that felt too hard (high difficulty) should shrink tomorrow's load,
  // even if the user's own self-reported "stress" signal is separate.
  const blendedStress = extraSignals.stress != null
    ? (extraSignals.stress + difficulty) / 2
    : difficulty;

  const result = rescheduleTomorrow(livingPlan, pendingPoolForTomorrow, {
    completionRate: completion,
    energy,
    stress: blendedStress,
    sleepHours: extraSignals.sleepHours,
    freeTimeMinutes: extraSignals.freeTimeMinutes
  });

  return { review: { completion, energy, difficulty }, ...result };
}

export default { submitDailyReview };
