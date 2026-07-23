/**
 * kie/data/index.js  —  Kadoma knowledge base attach point
 * -----------------------------------------------------------------------
 * Single entry point for wiring the biology + physics knowledge base
 * (user-provided textbook data) into an already-attached Stage 3 api
 * (the object `attachStage3(livingPlan)` returns - see stage3Extension.js).
 *
 * Follows the exact same ground rules as every other extensions/ file:
 *   - Never edits kie/core, kie/analyzers, kie/rules, kie/messages,
 *     kie/utils, kadomaEngine.js, or any Stage 1/2/3 engine file.
 *   - Purely additive: only calls the public `curriculumEngine.ingestExam()`
 *     method (already idempotent/additive by design - see CurriculumEngine's
 *     own header comment) and attaches a new `.knowledgeBase` property.
 *   - Idempotent: calling attachKnowledgeBase twice on the same stage3Api
 *     is a safe no-op.
 *
 * Usage (host app):
 *   import { attachLivingPlan } from './kie/extensions/livingPlanExtension.js';
 *   import { attachStage3 } from './kie/extensions/stage3Extension.js';
 *   import { attachKnowledgeBase } from './kie/data/index.js';
 *
 *   const livingPlan = attachLivingPlan(kie, { goal: 'کنکور تجربی 1405' });
 *   const stage3 = attachStage3(livingPlan);
 *   const kb = attachKnowledgeBase(stage3);
 *
 *   // Curriculum Engine now knows every biology chapter from all 3 grades:
 *   stage3.getPrioritizedChapters({ subjectName: 'زیست‌شناسی (پایه دهم)' });
 *
 *   // Rich topic content (explanations, exam_points, misconceptions, ...)
 *   // for any chapter id CurriculumEngine hands back:
 *   kb.getChapterContent('zist11-c4');           // -> { chapterTitle, topics }
 *
 *   // Exam-pattern / examiner-behavior / diagnostic-rule context (not
 *   // chapter data - see each file's own header for why), for an AI
 *   // advisor or smart-notification module to draw on:
 *   kb.biologyExamIntelligence
 *   kb.physics.phase1 / .phase2 / .phase3
 * -----------------------------------------------------------------------
 */

import { BIOLOGY_10_KB } from './biology10.js';
import { BIOLOGY_11_KB } from './biology11.js';
import { BIOLOGY_12_KB } from './biology12.js';
import { CHEMISTRY_10_KB } from './chemistry10.js';
import { CHEMISTRY_11_KB } from './chemistry11.js';
import { CHEMISTRY_12_KB } from './chemistry12.js';
import { PHYSICS_10_KB } from './physics10.js';
import { PHYSICS_11_KB } from './physics11.js';
import { PHYSICS_12_KB } from './physics12.js';
import { BIOLOGY_EXAM_INTELLIGENCE } from './biologyExamIntelligence.js';
import { PHYSICS_KB_PHASE_1 } from './physicsExtensionPhase1.js';
import { PHYSICS_KB_PHASE_2 } from './physicsExtensionPhase2.js';
import { PHYSICS_KB_PHASE_3 } from './physicsExtensionPhase3.js';
import { textbookToExamSpec, buildChapterLookup } from './curriculumAdapter.js';

const KNOWLEDGE_BASE_MARKER = Symbol.for('kadoma.knowledgeBase.attached');

// ===========================================================================
// 📚 SUBJECT REGISTRY — این آرایه رو برای اضافه کردن درس جدید ویرایش کن.
// هر خط یعنی یک فایل درسی که طبق TEMPLATE_subject.js نوشته شده.
// راهنمای کامل: kie/data/HOW_TO_ADD_A_SUBJECT.md
//
// import { SUBJECT_KB as CHEMISTRY_11_KB } from './chemistry11.js';
// ...و پایین همین آرایه یک خط اضافه کن:
// { kb: CHEMISTRY_11_KB, subjectName: 'شیمی (پایه یازدهم)', idPrefix: 'chem11' },
// ===========================================================================
const SUBJECT_FILES = [
  { kb: BIOLOGY_10_KB, subjectName: 'زیست‌شناسی (پایه دهم)', idPrefix: 'zist10' },
  { kb: BIOLOGY_11_KB, subjectName: 'زیست‌شناسی (پایه یازدهم)', idPrefix: 'zist11' },
  { kb: BIOLOGY_12_KB, subjectName: 'زیست‌شناسی (پایه دوازدهم)', idPrefix: 'zist12' },
  { kb: CHEMISTRY_10_KB, subjectName: 'شیمی (پایه دهم)', idPrefix: 'chem10' },
  { kb: CHEMISTRY_11_KB, subjectName: 'شیمی (پایه یازدهم)', idPrefix: 'chem11' },
  { kb: CHEMISTRY_12_KB, subjectName: 'شیمی (پایه دوازدهم)', idPrefix: 'chem12' },
  { kb: PHYSICS_10_KB, subjectName: 'فیزیک (پایه دهم)', idPrefix: 'phys10' },
  { kb: PHYSICS_11_KB, subjectName: 'فیزیک (پایه یازدهم)', idPrefix: 'phys11' },
  { kb: PHYSICS_12_KB, subjectName: 'فیزیک (پایه دوازدهم)', idPrefix: 'phys12' }
  // ⬇️ درس‌های جدید رو همین‌جا، به همین شکل، اضافه کن
];

/**
 * @param {ReturnType<import('../extensions/stage3Extension.js').attachStage3>} stage3Api
 * @returns {{
 *   getChapterContent: (chapterId:string) => ({chapterTitle:string, topics:object[]}|null),
 *   biology10: object, biology11: object, biology12: object,
 *   biologyExamIntelligence: object,
 *   physics: { phase1:object, phase2:object, phase3:object },
 *   ingestedChapterIds: string[]
 * }}
 */
export function attachKnowledgeBase(stage3Api) {
  if (!stage3Api || !stage3Api.curriculumEngine) {
    throw new Error('attachKnowledgeBase requires the object returned by attachStage3(livingPlan) (needs .curriculumEngine).');
  }
  if (stage3Api[KNOWLEDGE_BASE_MARKER]) {
    return stage3Api.knowledgeBase; // already attached, no-op
  }

  const lookup = new Map(); // chapterId -> {chapterTitle, topics}
  const ingestedChapterIds = [];

  for (const { kb, subjectName, idPrefix } of SUBJECT_FILES) {
    const examSpec = textbookToExamSpec(kb, { subjectName, idPrefix });
    stage3Api.curriculumEngine.ingestExam(examSpec);
    for (const [id, content] of buildChapterLookup(kb, idPrefix)) {
      lookup.set(id, content);
      ingestedChapterIds.push(id);
    }
  }

  const knowledgeBase = {
    getChapterContent: (chapterId) => lookup.get(chapterId) || null,
    biology10: BIOLOGY_10_KB,
    biology11: BIOLOGY_11_KB,
    biology12: BIOLOGY_12_KB,
    chemistry10: CHEMISTRY_10_KB,
    chemistry11: CHEMISTRY_11_KB,
    chemistry12: CHEMISTRY_12_KB,
    physics10: PHYSICS_10_KB,
    physics11: PHYSICS_11_KB,
    physics12: PHYSICS_12_KB,
    biologyExamIntelligence: BIOLOGY_EXAM_INTELLIGENCE,
    physics: {
      phase1: PHYSICS_KB_PHASE_1,
      phase2: PHYSICS_KB_PHASE_2,
      phase3: PHYSICS_KB_PHASE_3
    },
    ingestedChapterIds
  };

  stage3Api.knowledgeBase = knowledgeBase;
  stage3Api[KNOWLEDGE_BASE_MARKER] = true;
  return knowledgeBase;
}

export default { attachKnowledgeBase };
