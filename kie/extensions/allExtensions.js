/**
 * allExtensions.js
 * -----------------------------------------------------------------------
 * Single aggregation point for every opt-in extension built on top of the
 * core Kadoma Intelligence Engine. Nothing in kie/core, kie/analyzers,
 * kie/rules, or kadomaEngine.js imports this file - extensions are
 * entirely opt-in from the host app's side.
 *
 * Stage 1 (done): Living Plan foundation.
 * Stage 2 (done): Adaptive Scheduler, Commitment-driven Daily
 *   Review, Progressive Profiling, Negotiation Engine, Energy Engine,
 *   Weekly Strategy, Dynamic Rescheduling.
 * Stage 3 (this stage, done): Subject Graph, Chapter Mastery, Curriculum
 *   Engine, Study Strategy Engine, Prediction Engine (extended).
 * -----------------------------------------------------------------------
 */

// --- Stage 1: Living Plan foundation ---
export { LivingPlan } from './livingPlan/LivingPlan.js';
export { Commitment, COMMITMENT_STATUS, ALLOWED_TRANSITIONS } from './livingPlan/Commitment.js';
export { MissionGuard } from './livingPlan/MissionGuard.js';
export { MemoryTimeline } from './livingPlan/MemoryTimeline.js';
export { computeConfidence, shouldAskUser, ConfidenceScore } from './livingPlan/ConfidenceSystem.js';
export { Explanation, explain, withExplanation } from './livingPlan/Explainability.js';
export { attachLivingPlan } from './livingPlanExtension.js';

// Stage 2 and Stage 3 exports will be appended below this line, in their
// own stage-named sections, without touching anything above.

// --- Stage 2: Adaptive planning layer ---
export { computeTodayCapacity, fitCommitmentsToCapacity, rescheduleTomorrow } from './stage2/AdaptiveScheduler.js';
export { submitDailyReview } from './stage2/DailyReview.js';
export { ProgressiveProfiler } from './stage2/ProgressiveProfiling.js';
export { NEGOTIATION_STATUS, Proposal, negotiate, resolveNegotiation } from './stage2/NegotiationEngine.js';
export { EnergyMap, rankByWeight, splitByEnergyFit } from './stage2/EnergyEngine.js';
export { WeeklyStrategy, buildWeeklyStrategy, attachWeeklyStrategy } from './stage2/WeeklyStrategy.js';
export { rebalanceMissedLoad, applyRebalance } from './stage2/DynamicRescheduling.js';
export { attachStage2 } from './stage2Extension.js';

// Stage 3 exports appended below this line, without touching anything
// above (Stage 1 or Stage 2).

// --- Stage 3: Curriculum & prediction layer ---
export { SubjectGraph } from './stage3/SubjectGraph.js';
export { STRATEGY_BANDS, bandForScore, ChapterMastery } from './stage3/ChapterMastery.js';
export { CurriculumEngine } from './stage3/CurriculumEngine.js';
export { getStudyStrategy, buildStrategyForChapter } from './stage3/StudyStrategyEngine.js';
export { predictDaysBehindSchedule, predictGoalProbability } from './stage3/PredictionEngine.js';
export { attachStage3 } from './stage3Extension.js';

// Stage 4 exports appended below this line, without touching anything
// above (Stage 1, Stage 2, or Stage 3).

// --- Stage 4: Planner Generator (synthesis layer) ---
export { STEP_MINUTES, estimateStepMinutes, recordStepCompleted, getNextStepForChapter, buildSubjectPriorities, generateWeeklyStrategy, DailyPlan, generateDailyPlan, commitDailyPlan } from './stage4/PlannerGenerator.js';
export { attachStage4 } from './stage4Extension.js';
