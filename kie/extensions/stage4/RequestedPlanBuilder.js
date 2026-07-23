import { getNextStepForChapter, estimateStepMinutes } from './PlannerGenerator.js';

/**
 * RequestedPlanBuilder.js  (Stage 4 add-on)
 * -----------------------------------------------------------------------
 * Pure additive. Fixes the exact gap found in the 20-scenario review:
 *   1) subject/chapter name recognition ("زیست دوازدهم فصل ۳ و ۴") was
 *      not implemented at all - the old generateDailyPlan only accepted
 *      a subject NAME and then picked chapters itself.
 *   2) start/end clock time was never consumed or produced.
 *   3) the engine silently substituted its OWN top-priority chapter
 *      instead of the exact chapter(s) the student asked for.
 *
 * This module ONLY schedules the exact chapters the user asked for, in
 * the order the user listed them, inside the exact [startTime, endTime]
 * window - nothing else is added, nothing requested is silently swapped.
 *
 * SCOPE (per instruction): biology + chemistry + physics only. Any other
 * subject name (math, Arabic, geology, ...) is reported back as
 * `unresolved`, never silently dropped or faked.
 * -----------------------------------------------------------------------
 */

import { BIOLOGY_10_KB } from '../../data/biology10.js';
import { BIOLOGY_11_KB } from '../../data/biology11.js';
import { BIOLOGY_12_KB } from '../../data/biology12.js';
import { CHEMISTRY_10_KB } from '../../data/chemistry10.js';
import { CHEMISTRY_11_KB } from '../../data/chemistry11.js';
import { CHEMISTRY_12_KB } from '../../data/chemistry12.js';
import { PHYSICS_10_KB } from '../../data/physics10.js';
import { PHYSICS_11_KB } from '../../data/physics11.js';
import { PHYSICS_12_KB } from '../../data/physics12.js';

const FA_DIGITS = '۰۱۲۳۴۵۶۷۸۹';
function faToEnDigits(str) {
  return String(str).replace(/[۰-۹]/g, d => String(FA_DIGITS.indexOf(d)));
}

const GRADE_WORDS = [
  { re: /دوازدهم|سوم\s*تجربی|پیش\s*دانشگاهی|پشت\s*کنکور/, grade: 12 },
  { re: /یازدهم|دوم\s*تجربی/, grade: 11 },
  { re: /دهم|اول\s*تجربی/, grade: 10 }
];

const SUBJECT_WORDS = [
  { re: /زیست/, key: 'biology', idBase: 'zist',
    kb: { 10: BIOLOGY_10_KB, 11: BIOLOGY_11_KB, 12: BIOLOGY_12_KB } },
  { re: /شیمی/, key: 'chemistry', idBase: 'chem',
    kb: { 10: CHEMISTRY_10_KB, 11: CHEMISTRY_11_KB, 12: CHEMISTRY_12_KB } },
  { re: /فیزیک/, key: 'physics', idBase: 'phys',
    kb: { 10: PHYSICS_10_KB, 11: PHYSICS_11_KB, 12: PHYSICS_12_KB } }
];

function getChapterList(kb) {
  return kb.knowledge_base || kb.chapters || [];
}

/** Parses "۳ و ۴" / "۳،۴" / "۱ تا ۵" / "همه"|"کامل"|"مرور کامل" -> array of chapter_numbers, or 'ALL'. */
function parseChapterNumbers(text, maxChapter) {
  const t = faToEnDigits(text);
  if (/همه|کامل|تمام/.test(t)) return 'ALL';
  const rangeMatch = t.match(/(\d+)\s*تا\s*(\d+)/);
  if (rangeMatch) {
    const a = parseInt(rangeMatch[1], 10), b = parseInt(rangeMatch[2], 10);
    const out = [];
    for (let n = Math.min(a, b); n <= Math.max(a, b); n++) out.push(n);
    return out;
  }
  const nums = [...t.matchAll(/\d+/g)].map(m => parseInt(m[0], 10)).filter(n => n >= 1 && n <= (maxChapter || 99));
  return nums.length ? [...new Set(nums)] : null;
}

/** Fuzzy free-name -> chapter_number, for lines like "فیزیک دوازدهم: نوسان" (no explicit "فصل N"). */
function matchByFreeName(kb, text) {
  const chapters = getChapterList(kb);
  const hit = chapters.find(c => text.includes(c.chapter_title) || c.chapter_title.split(/[،,\s]+/).some(w => w.length > 2 && text.includes(w)));
  return hit ? [hit.chapter_number] : null;
}

/**
 * Resolves ONE free-text request line into exact chapterIds.
 * @param {string} line - e.g. "زیست دوازدهم: فصل ۳ و ۴" or "فیزیک یازدهم الکتریسیته"
 * @returns {{ok:true, subjectLabel:string, grade:number, chapterIds:string[], chapterTitles:string[]}
 *          | {ok:false, reason:string, line:string}}
 */
export function resolveRequestLine(line) {
  const gradeHit = GRADE_WORDS.find(g => g.re.test(line));
  const subjectHit = SUBJECT_WORDS.find(s => s.re.test(line));

  if (!subjectHit) return { ok: false, reason: 'درسی که خواستی (زیست/شیمی/فیزیک) توی این خط شناسایی نشد یا خارج از پوششه (فقط زیست/شیمی/فیزیک پشتیبانی می‌شه فعلاً).', line };
  if (!gradeHit) return { ok: false, reason: `پایه (دهم/یازدهم/دوازدهم) توی «${line}» مشخص نیست - بدون پایه نمی‌شه فصل درست رو پیدا کرد.`, line };

  const kb = subjectHit.kb[gradeHit.grade];
  const chapters = getChapterList(kb);
  const maxCh = Math.max(...chapters.map(c => c.chapter_number));

  let chapterNumbers = parseChapterNumbers(line, maxCh);
  if (!chapterNumbers) chapterNumbers = matchByFreeName(kb, line);
  if (!chapterNumbers) return { ok: false, reason: `شماره یا نام فصل توی «${line}» پیدا نشد.`, line };
  if (chapterNumbers === 'ALL') chapterNumbers = chapters.map(c => c.chapter_number);

  const found = chapterNumbers
    .map(n => chapters.find(c => c.chapter_number === n))
    .filter(Boolean);

  if (!found.length) return { ok: false, reason: `فصل‌های خواسته‌شده توی «${line}» توی کتاب ${subjectHit.key} پایه ${gradeHit.grade} وجود ندارن.`, line };

  return {
    ok: true,
    subjectLabel: kb.textbook_metadata?.title || subjectHit.key,
    grade: gradeHit.grade,
    chapterIds: found.map(c => `${subjectHit.idBase}${gradeHit.grade}-c${c.chapter_number}`),
    chapterTitles: found.map(c => c.chapter_title)
  };
}

/** "15:00" / "۱۵:۰۰" / "6:30" -> minutes since midnight. */
function timeToMinutes(t) {
  const [h, m] = faToEnDigits(t).split(':').map(Number);
  return h * 60 + (m || 0);
}
function minutesToTime(mins) {
  mins = ((mins % 1440) + 1440) % 1440;
  const h = Math.floor(mins / 60), m = Math.round(mins % 60);
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

/**
 * Builds a plan using ONLY the chapters the user explicitly listed, placed
 * strictly inside [startTime, endTime] in the order requested. Nothing
 * outside the request is ever added.
 * @param {import('../livingPlan/LivingPlan.js').LivingPlan} livingPlan
 * @param {ReturnType<import('../stage3Extension.js').attachStage3>} stage3Api
 * @param {{startTime:string, endTime:string, lines:string[], breakMinutes?:number}} request
 */
export function generateRequestedDailyPlan(livingPlan, stage3Api, { startTime, endTime, lines, breakMinutes = 10 }) {
  const startMin = timeToMinutes(startTime);
  let endMin = timeToMinutes(endTime);
  if (endMin <= startMin) endMin += 1440; // supports crossing midnight
  const windowMinutes = endMin - startMin;

  const resolved = [];
  const unresolved = [];
  for (const line of lines) {
    const r = resolveRequestLine(line);
    if (r.ok) resolved.push(r); else unresolved.push(r);
  }

  // flatten to one entry per requested chapter, preserving the user's order
  const chapterQueue = [];
  for (const r of resolved) {
    r.chapterIds.forEach((id, i) => chapterQueue.push({ chapterId: id, subject: r.subjectLabel, title: r.chapterTitles[i] }));
  }

  let cursor = startMin;
  const blocks = [];
  const deferred = [];
  for (const item of chapterQueue) {
    let info;
    try {
      info = stage3Api.curriculumEngine.getChapterInfo(item.chapterId);
    } catch {
      info = null;
    }
    const step = getNextStepForChapter(livingPlan, item.chapterId, stage3Api.chapterMastery);
    const plannedMinutes = estimateStepMinutes(step.key);

    if (cursor + plannedMinutes > endMin) {
      deferred.push({ ...item, stepLabel: step.labelFa, plannedMinutes, reason: 'زمان کافی توی بازه‌ی امروز نبود' });
      continue;
    }

    blocks.push({
      chapterId: item.chapterId,
      subject: item.subject,
      title: `${item.title} — ${step.labelFa}`,
      band: step.band,
      startClock: minutesToTime(cursor),
      endClock: minutesToTime(cursor + plannedMinutes),
      plannedMinutes,
      priority: info ? info.name : undefined
    });
    cursor += plannedMinutes + breakMinutes;
  }

  return {
    startTime, endTime, windowMinutes,
    totalPlannedMinutes: blocks.reduce((s, b) => s + b.plannedMinutes, 0),
    blocks,
    deferred,
    unresolved
  };
}

export default { resolveRequestLine, generateRequestedDailyPlan };
