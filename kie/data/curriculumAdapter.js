/**
 * curriculumAdapter.js  —  Kadoma knowledge base -> CurriculumEngine bridge
 * -----------------------------------------------------------------------
 * Pure additive, read-only helper. Does NOT touch CurriculumEngine.js,
 * SubjectGraph.js or ChapterMastery.js - it only builds the `examSpec`
 * object shape those files already expect (see the JSDoc header of
 * CurriculumEngine.ingestExam):
 *
 *   { name, date?, subjects: [ { name, chapters: [
 *       { id, name, weight, requires: [chapterId, ...] }
 *   ] } ] }
 *
 * The three biology textbook files (biology10/11/12) share one schema
 * (a list of chapters, each with a title and a list of topics that carry
 * a difficulty/importance score) even though the array key differs
 * between them (`knowledge_base` in biology10.js vs `chapters` in
 * biology11.js/biology12.js) - `getChapterList()` below normalizes that.
 *
 * Chapter ids are namespaced per textbook (e.g. "zist10-c3") so the same
 * chapter_number across three different grade-books never collides once
 * all three are ingested into the same CurriculumEngine instance.
 * -----------------------------------------------------------------------
 */

function getChapterList(textbookKB) {
  return textbookKB.knowledge_base || textbookKB.chapters || [];
}

/** Average of every topic's importance_score in a chapter (learning_metadata
 *  or the flatter estimated_/importance_for_konkur field some chapters use),
 *  falling back to 1 so a chapter with no scored topics still gets a valid,
 *  neutral weight rather than 0 (which CurriculumEngine would treat as
 *  "no priority at all"). */
function chapterWeight(chapter) {
  const scores = (chapter.topics || [])
    .map(t => (t.learning_metadata && t.learning_metadata.importance_score) ?? t.importance_for_konkur)
    .filter(n => typeof n === 'number' && Number.isFinite(n));
  if (!scores.length) return 1;
  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  return Math.max(1, Math.round(avg));
}

/**
 * Converts one textbook knowledge base (biology10/11/12 shape) into an
 * `examSpec` ready for `curriculumEngine.ingestExam(examSpec)`.
 * @param {object} textbookKB - e.g. BIOLOGY_10_KB
 * @param {object} opts
 * @param {string} opts.subjectName - e.g. 'زیست‌شناسی (پایه دهم)'
 * @param {string} opts.idPrefix - short unique per-book prefix, e.g. 'zist10'
 * @param {string} [opts.examName]
 * @returns {{name:string, subjects:Array<{name:string, chapters:Array<{id:string,name:string,weight:number,requires:string[]}>}>}}
 */
export function textbookToExamSpec(textbookKB, { subjectName, idPrefix, examName } = {}) {
  if (!subjectName || !idPrefix) {
    throw new Error('textbookToExamSpec requires { subjectName, idPrefix }.');
  }
  const chapterList = getChapterList(textbookKB)
    .slice()
    .sort((a, b) => (a.chapter_number ?? 0) - (b.chapter_number ?? 0));

  const chapters = chapterList.map((chapter, index) => {
    const id = `${idPrefix}-c${chapter.chapter_number ?? index + 1}`;
    // Chapters inside one textbook are taught in sequence, so - absent any
    // more specific signal - each chapter's natural prerequisite is simply
    // the previous chapter of the SAME textbook. This mirrors how these
    // books are actually structured/taught and is a safe, conservative
    // default (never invents a dependency across different textbooks).
    const requires = index > 0
      ? [`${idPrefix}-c${chapterList[index - 1].chapter_number ?? index}`]
      : [];
    return {
      id,
      name: chapter.chapter_title || `فصل ${chapter.chapter_number ?? index + 1}`,
      weight: chapterWeight(chapter),
      requires
    };
  });

  return {
    name: examName || (textbookKB.textbook_metadata && textbookKB.textbook_metadata.title) || subjectName,
    subjects: [{ name: subjectName, chapters }]
  };
}

/**
 * Builds a chapterId -> { title, subjectName, idPrefix } lookup so other
 * modules (e.g. an AI advisor wanting the full topic text for a chapter
 * a user is weak in) can go from a CurriculumEngine chapter id back to the
 * original rich topic content in biology10/11/12.js.
 * @param {object} textbookKB
 * @param {string} idPrefix
 * @returns {Map<string, {chapterTitle:string, topics:object[]}>}
 */
export function buildChapterLookup(textbookKB, idPrefix) {
  const map = new Map();
  for (const chapter of getChapterList(textbookKB)) {
    const id = `${idPrefix}-c${chapter.chapter_number}`;
    map.set(id, { chapterTitle: chapter.chapter_title, topics: chapter.topics || [] });
  }
  return map;
}

export default { textbookToExamSpec, buildChapterLookup };
