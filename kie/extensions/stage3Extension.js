import { SubjectGraph } from './stage3/SubjectGraph.js';
import { ChapterMastery } from './stage3/ChapterMastery.js';
import { CurriculumEngine } from './stage3/CurriculumEngine.js';
import { getStudyStrategy, buildStrategyForChapter } from './stage3/StudyStrategyEngine.js';
import { predictDaysBehindSchedule, predictGoalProbability } from './stage3/PredictionEngine.js';

/**
 * stage3Extension.js
 * -----------------------------------------------------------------------
 * The single attach point for every Stage 3 module, exactly mirroring
 * how stage2Extension.js attaches Stage 2: it only ADDS properties to an
 * existing LivingPlan instance (`.subjectGraph`, `.chapterMastery`,
 * `.curriculumEngine`) and a bound `.stage3Api` - it does not edit
 * LivingPlan.js, any Stage 1 file, or any Stage 2 file, and calling it
 * twice is a no-op (same idempotency guarantee as attachLivingPlan /
 * attachStage2).
 *
 * Usage (host app, fully opt-in):
 *   import { attachLivingPlan } from './kie/extensions/livingPlanExtension.js';
 *   import { attachStage3 } from './kie/extensions/stage3Extension.js';
 *
 *   const livingPlan = attachLivingPlan(kie, { goal: 'کنکور تجربی 1405' });
 *   const stage3 = attachStage3(livingPlan);
 *
 *   stage3.ingestExam({ name: 'قلمچی', subjects: [...] });
 *   const next = stage3.getPrioritizedChapters();
 *   const plan = stage3.getStrategyForChapter(next[0].chapterId);
 *   const forecast = stage3.predictGoalProbability();
 * -----------------------------------------------------------------------
 */

const STAGE3_MARKER = Symbol.for('kadoma.stage3.attached');

/**
 * @param {import('./livingPlan/LivingPlan.js').LivingPlan} livingPlan
 * @param {object} [opts]
 * @param {SubjectGraph} [opts.subjectGraph]
 * @param {ChapterMastery} [opts.chapterMastery]
 */
export function attachStage3(livingPlan, opts = {}) {
  if (!livingPlan) throw new Error('attachStage3 requires a LivingPlan instance (see attachLivingPlan in Stage 1).');
  if (livingPlan[STAGE3_MARKER]) {
    return livingPlan.stage3Api; // already attached, no-op (idempotent, same guarantee as attachStage2)
  }

  const subjectGraph = opts.subjectGraph instanceof SubjectGraph ? opts.subjectGraph : new SubjectGraph();
  const chapterMastery = opts.chapterMastery instanceof ChapterMastery ? opts.chapterMastery : new ChapterMastery();
  const curriculumEngine = new CurriculumEngine(chapterMastery, subjectGraph);

  // Additive properties only - LivingPlan's own fields, and anything
  // Stage 2 attached (progressiveProfiler, energyMap, stage2Api), are
  // completely untouched.
  livingPlan.subjectGraph = subjectGraph;
  livingPlan.chapterMastery = chapterMastery;
  livingPlan.curriculumEngine = curriculumEngine;

  const api = {
    subjectGraph,
    chapterMastery,
    curriculumEngine,

    /** See CurriculumEngine.ingestExam. */
    ingestExam: (examSpec) => curriculumEngine.ingestExam(examSpec),

    /** See CurriculumEngine.getPrioritizedChapters. */
    getPrioritizedChapters: (queryOpts) => curriculumEngine.getPrioritizedChapters(queryOpts),

    /**
     * Records a practice/test attempt for a chapter AND logs it into the
     * Memory Timeline (#13) as an additional, additive entry - so the
     * Prediction Engine's trend data and any future recap over
     * livingPlan.memory can see mastery attempts alongside daily
     * reviews, without changing what DailyReview/MemoryTimeline already do.
     * @param {string} chapterId
     * @param {{correct:number, total:number}} attempt
     */
    recordMasteryAttempt: (chapterId, attempt) => {
      const score = chapterMastery.recordAttempt(chapterId, attempt);
      livingPlan.memory.record(
        'mastery_attempt',
        { chapterId, correct: attempt.correct, total: attempt.total, score },
        { tags: ['mastery', chapterId] }
      );
      return score;
    },

    /** See StudyStrategyEngine.getStudyStrategy. */
    getStudyStrategy: (masteryScore) => getStudyStrategy(masteryScore),

    /** See StudyStrategyEngine.buildStrategyForChapter, bound to this LivingPlan's ChapterMastery. */
    getStrategyForChapter: (chapterId) => buildStrategyForChapter(chapterId, chapterMastery),

    /** See PredictionEngine.predictDaysBehindSchedule, bound to this LivingPlan's Memory Timeline. */
    predictDaysBehind: (predictOpts) => predictDaysBehindSchedule(livingPlan, predictOpts),

    /** See PredictionEngine.predictGoalProbability, bound to this LivingPlan's Memory Timeline + ChapterMastery. */
    predictGoalProbability: (predictOpts) =>
      predictGoalProbability(livingPlan, { ...predictOpts, chapterMastery })
  };

  livingPlan[STAGE3_MARKER] = true;
  livingPlan.stage3Api = api;
  return api;
}

export default attachStage3;
