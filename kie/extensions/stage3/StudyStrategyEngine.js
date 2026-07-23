import { bandForScore } from './ChapterMastery.js';
import { explain } from '../livingPlan/Explainability.js';

/**
 * StudyStrategyEngine.js  (Stage 3, #17)
 * -----------------------------------------------------------------------
 * Pure additive module - a thin layer on top of Chapter Mastery's bands
 * (#9), per STAGE_HANDOFF.md ("quick once #9 is solid"). Maps a mastery
 * band to the concrete step pipeline from the brief:
 *   Low mastery  -> Learning -> Examples -> Practice -> Review
 *   High mastery -> Exam -> Mistake Review
 * combined with #9's four named bands so every band gets an unambiguous,
 * ordered plan instead of just a label.
 * -----------------------------------------------------------------------
 */

const STEP_LABELS_FA = {
  learning: 'یادگیری مفهوم',
  examples: 'حل مثال',
  practice: 'تمرین',
  review: 'مرور',
  test: 'تست زنی',
  quick_review: 'مرور سریع',
  mistake_review: 'مرور اشتباهات'
};

/** band key -> ordered step keys. See file header for the brief's two reference pipelines. */
const BAND_STEPS = {
  full_study: ['learning', 'examples', 'practice', 'review'],
  review_and_test: ['review', 'test'],
  test_only: ['test', 'mistake_review'],
  quick_review: ['quick_review']
};

/**
 * @param {number} masteryScore - 0..10
 * @returns {{band:string, labelFa:string, steps:Array<{key:string, labelFa:string}>, explanation:object}}
 */
export function getStudyStrategy(masteryScore) {
  const band = bandForScore(masteryScore);
  const steps = (BAND_STEPS[band.key] || BAND_STEPS.full_study).map(key => ({ key, labelFa: STEP_LABELS_FA[key] }));
  const reasons = [
    { label: `تسلط ${masteryScore} از 10 در بازه «${band.labelFa}» قرار دارد`, weight: 1 }
  ];
  return {
    band: band.key,
    labelFa: band.labelFa,
    steps,
    explanation: explain(reasons).toJSON()
  };
}

/**
 * Convenience wrapper reading the score straight from a ChapterMastery instance.
 * @param {string} chapterId
 * @param {import('./ChapterMastery.js').ChapterMastery} chapterMastery
 */
export function buildStrategyForChapter(chapterId, chapterMastery) {
  return { chapterId, ...getStudyStrategy(chapterMastery.getScore(chapterId)) };
}

export default { getStudyStrategy, buildStrategyForChapter };
