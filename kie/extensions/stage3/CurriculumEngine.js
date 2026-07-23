import { clamp, roundTo, normalizeToScore } from '../../utils/mathUtils.js';
import { daysBetweenKeys, todayKey } from '../../utils/dateUtils.js';
import { generateId } from '../../utils/idUtils.js';
import { explain } from '../livingPlan/Explainability.js';
import { SubjectGraph } from './SubjectGraph.js';
import { ChapterMastery } from './ChapterMastery.js';

/**
 * CurriculumEngine.js  (Stage 3, #8)
 * -----------------------------------------------------------------------
 * Pure additive module. Parses a raw exam structure (e.g. a Qalamchi-style
 * comprehensive test) into the pipeline described in the brief:
 *   Test -> Subjects -> Chapters -> Mastery -> Priority -> Study Strategy
 *
 * Per STAGE_HANDOFF.md this is built on top of Subject Graph (#10) and
 * Chapter Mastery (#9): ingesting a test only ADDS chapters/dependencies
 * that don't already exist (it never overwrites a mastery score or
 * dependency list a chapter already has), so re-ingesting the same or an
 * overlapping test is always safe. The final "Study Strategy" step of the
 * pipeline is intentionally NOT computed here - see
 * StudyStrategyEngine.js (#17), which reads mastery from the same
 * ChapterMastery instance this class was given.
 *
 * Expected raw exam shape:
 *   {
 *     name: 'قلمچی - آزمون جامع 3',
 *     date: '2026-03-10',            // optional YYYY-MM-DD
 *     subjects: [
 *       { name: 'زیست', chapters: [
 *         { id: 'zist-c1', name: 'فصل 1: سلول', weight: 3, requires: [] },
 *         { id: 'zist-c2', name: 'فصل 2: تقسیم سلولی', weight: 4, requires: ['zist-c1'] }
 *       ]}
 *     ]
 *   }
 * -----------------------------------------------------------------------
 */
export class CurriculumEngine {
  /**
   * @param {ChapterMastery} [chapterMastery] - shared instance; a new one is created if omitted
   * @param {SubjectGraph} [subjectGraph] - shared instance; a new one is created if omitted
   */
  constructor(chapterMastery = new ChapterMastery(), subjectGraph = new SubjectGraph()) {
    this.chapterMastery = chapterMastery;
    this.subjectGraph = subjectGraph;
    /** @type {Map<string, object>} testId -> normalized test record */
    this._tests = new Map();
    /** @type {Map<string, {id:string, name:string, subjectName:string, weight:number, testId:string}>} */
    this._chapters = new Map();
  }

  /**
   * @param {object} examSpec - see file header for shape
   * @returns {{id:string, name:string, dateKey:(string|null), subjects:Array<{name:string, chapterIds:string[]}>}}
   */
  ingestExam(examSpec) {
    if (!examSpec || !Array.isArray(examSpec.subjects)) {
      throw new Error('CurriculumEngine.ingestExam requires { name, subjects: [...] }.');
    }
    const testId = generateId('test');
    const subjects = [];

    for (const subject of examSpec.subjects) {
      const chapterIds = [];
      for (const chapter of (subject.chapters || [])) {
        if (!chapter.id) throw new Error('CurriculumEngine.ingestExam: every chapter needs an id.');
        chapterIds.push(chapter.id);

        if (!this._chapters.has(chapter.id)) {
          this._chapters.set(chapter.id, {
            id: chapter.id,
            name: chapter.name || chapter.id,
            subjectName: subject.name || 'نامشخص',
            weight: Number.isFinite(chapter.weight) ? chapter.weight : 1,
            testId
          });
        }

        // Additive only: register the chapter as a known graph node and
        // its prerequisites, but never clear/overwrite dependencies a
        // caller may have set some other way for the same chapter id.
        if (!this.subjectGraph.hasChapter(chapter.id)) {
          this.subjectGraph.setDependencies(chapter.id, chapter.requires || []);
        } else if (Array.isArray(chapter.requires)) {
          for (const req of chapter.requires) this.subjectGraph.addDependency(chapter.id, req);
        }

        // Additive only: never overwrite a mastery score that already exists.
        if (this.chapterMastery.getScore(chapter.id) === 0 && !(chapter.id in this.chapterMastery.getAllScores())) {
          this.chapterMastery.setScore(chapter.id, 0);
        }
      }
      subjects.push({ name: subject.name || 'نامشخص', chapterIds });
    }

    const test = {
      id: testId,
      name: examSpec.name || 'آزمون',
      dateKey: examSpec.date || null,
      subjects
    };
    this._tests.set(testId, test);
    return test;
  }

  getTest(testId) {
    return this._tests.get(testId) || null;
  }

  getChapterInfo(chapterId) {
    return this._chapters.get(chapterId) || null;
  }

  /** @param {string} subjectName @returns {Array<{id:string,name:string,subjectName:string,weight:number}>} */
  getSubjectChapters(subjectName) {
    return [...this._chapters.values()].filter(c => c.subjectName === subjectName);
  }

  /**
   * Priority (0-100) for studying a chapter next: how big the mastery gap
   * is, how heavily it's weighted on its exam, and how many other
   * chapters depend on it (unlocking value) - plus a mild urgency boost
   * the closer its exam date is, if the exam that introduced it had one.
   * @param {string} chapterId
   * @returns {{chapterId:string, priority:number, band:object, explanation:object}}
   */
  computePriority(chapterId) {
    const info = this.getChapterInfo(chapterId);
    if (!info) throw new Error(`CurriculumEngine: unknown chapter "${chapterId}" - ingest it via ingestExam first.`);

    const score = this.chapterMastery.getScore(chapterId);
    const masteryGapScore = normalizeToScore(10 - score, 0, 10); // 0..100, higher = weaker chapter
    const maxWeightInSubject = Math.max(1, ...this.getSubjectChapters(info.subjectName).map(c => c.weight));
    const weightScore = normalizeToScore(info.weight, 0, maxWeightInSubject);
    const dependentsCount = this.subjectGraph.getDependents(chapterId).length;
    const dependentsScore = normalizeToScore(dependentsCount, 0, Math.max(3, dependentsCount));

    const test = this.getTest(info.testId);
    let urgencyScore = 50; // neutral when there's no exam date to compare against
    if (test?.dateKey) {
      const daysLeft = daysBetweenKeys(todayKey(), test.dateKey);
      urgencyScore = daysLeft <= 0 ? 100 : normalizeToScore(30 - clamp(daysLeft, 0, 30), 0, 30);
    }

    const priority = roundTo(
      masteryGapScore * 0.45 + weightScore * 0.25 + dependentsScore * 0.15 + urgencyScore * 0.15,
      1
    );

    const reasons = [
      { label: `تسلط فعلی ${roundTo(score, 1)} از 10 است`, weight: 0.45 },
      { label: `اهمیت این فصل در آزمون ${info.weight} است`, weight: 0.25 },
      { label: `${dependentsCount} فصل دیگر به این فصل وابسته‌اند`, weight: 0.15 },
      { label: test?.dateKey ? 'با توجه به فاصله تا آزمون' : 'بدون تاریخ آزمون مشخص', weight: 0.15 }
    ];

    return {
      chapterId,
      priority,
      band: this.chapterMastery.getStrategyBand(chapterId),
      explanation: explain(reasons).toJSON()
    };
  }

  /**
   * @param {object} [opts]
   * @param {string} [opts.subjectName] - restrict to one subject
   * @param {Iterable<string>} [opts.completedChapterIds] - if given, chapters still locked by Subject Graph are excluded
   * @returns {Array<{chapterId:string, priority:number, band:object, explanation:object}>} highest priority first
   */
  getPrioritizedChapters({ subjectName, completedChapterIds } = {}) {
    let ids = [...this._chapters.keys()];
    if (subjectName) ids = ids.filter(id => this._chapters.get(id).subjectName === subjectName);
    if (completedChapterIds) {
      const done = new Set(completedChapterIds);
      ids = ids.filter(id => this.subjectGraph.isUnlocked(id, done));
    }
    return ids.map(id => this.computePriority(id)).sort((a, b) => b.priority - a.priority);
  }

  toJSON() {
    return {
      tests: [...this._tests.values()],
      chapters: [...this._chapters.values()]
    };
  }
}

export default { CurriculumEngine };
