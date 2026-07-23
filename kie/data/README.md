# Kadoma Knowledge Base (`kie/data/`)

> 🆕 **می‌خوای یه درس جدید اضافه کنی؟** برو سراغ
> [`HOW_TO_ADD_A_SUBJECT.md`](./HOW_TO_ADD_A_SUBJECT.md) — ۳ مرحله‌ی
> ساده، بدون نیاز به تغییر کد Engine.

Purely additive. Nothing here edits `kie/core`, `kie/analyzers`, `kie/rules`,
`kie/messages`, `kie/utils`, `kadomaEngine.js`, or any Stage 1/2/3 extension
file — same ground rules as `kie/extensions/STAGE_HANDOFF.md`.

## What's in here

| File | Source | Content |
|---|---|---|
| `biology10.js` | زیست‌شناسی (۱), پایه دهم | 7 chapters, topic-level explanations/key concepts/exam points |
| `biology11.js` | زیست‌شناسی (۲), پایه یازدهم | 9 chapters |
| `biology12.js` | زیست‌شناسی (۳), پایه دوازدهم | 6 chapters (source only covers chapters 1,2,3,5,6,8 — 4 and 7 are genuinely absent from the provided data, nothing was invented to fill the gap) |
| `biologyExamIntelligence.js` | real Konkur exam question analysis | per-question chapter/topic/trap/examiner-intention breakdown, examiner archetypes |
| `physicsExtensionPhase1.js` | cross-grade dependencies, atomic micro-skills, misconceptions, diagnostic rules | |
| `physicsExtensionPhase2.js` | Konkur physics exam question frequency analysis | |
| `physicsExtensionPhase3.js` | diagnostic rules, recovery paths, advisor/personal-optimization metadata | |

Every one of the 7 files above is a **verbatim** re-export of the
user-provided data — the source `.txt` files were hard-wrapped at ~80
columns (not actually broken JSON), so the only change made was
reflowing whitespace back into valid JSON before saving as a `.js`
module. No field was renamed, removed, or invented.

## Why biology and physics are wired in differently

- **Biology** (`biology10/11/12.js`) already has the exact shape
  `CurriculumEngine.ingestExam()` expects: chapters, each with topics
  that carry a difficulty/importance score. `curriculumAdapter.js`
  converts each textbook into a valid `examSpec` and namespaces chapter
  ids per grade (`zist10-c3`, `zist11-c3`, `zist12-c3`, ...) so the same
  `chapter_number` across three different grade-books never collides.
  Chapter weight = average topic importance score in that chapter.
  Chapter prerequisite = the previous chapter of the *same* textbook
  (a conservative default — it never invents a cross-textbook or
  cross-subject dependency that wasn't in the source data).

- **Physics** (`physicsExtensionPhase1/2/3.js`) is a different kind of
  data entirely: cross-grade concept dependencies, atomic micro-skills,
  misconceptions/traps, diagnostic rules, and real-exam frequency
  analysis — not a flat chapter list. There's nothing structurally
  equivalent to "ingest" here, so instead of forcing it through
  `CurriculumEngine` (which would mean fabricating a chapter list that
  isn't in the source data), it's exposed as-is via
  `knowledgeBase.physics.phase1/2/3` for a consumer that actually wants
  this shape — e.g. an AI advisor / smart-notification module reasoning
  about *why* a student got something wrong, not just *which chapter*
  it belongs to.

## Usage

```js
import { attachLivingPlan } from '../extensions/livingPlanExtension.js';
import { attachStage3 } from '../extensions/stage3Extension.js';
import { attachKnowledgeBase } from './index.js';

const livingPlan = attachLivingPlan(kie, { goal: 'کنکور تجربی 1405' });
const stage3 = attachStage3(livingPlan);
const kb = attachKnowledgeBase(stage3); // ingests all 3 biology textbooks

stage3.getPrioritizedChapters({ subjectName: 'زیست‌شناسی (پایه دهم)' });
kb.getChapterContent('zist11-c4');       // -> { chapterTitle, topics }
kb.biologyExamIntelligence;               // real-exam question analysis
kb.physics.phase1 / .phase2 / .phase3;    // physics dependency/diagnostic data
```

`attachKnowledgeBase` is idempotent (safe to call more than once, same
guarantee as `attachLivingPlan`/`attachStage2`/`attachStage3`), and
re-ingesting the same textbook never overwrites an existing mastery
score or dependency — that safety guarantee comes from
`CurriculumEngine.ingestExam()` itself (see its own header comment),
untouched here.

## Verified

`test/knowledgeBase.test.js` (5 tests, run via `node --test`) checks:
chapter counts match the source data (7/9/6), `examSpec` conversion is
correct (namespaced ids, sequential `requires`, positive weights), all
22 biology chapters actually ingest into a real `CurriculumEngine`
instance and produce sane priority scores, rich topic content survives
the round trip and is reachable by chapter id, `attachKnowledgeBase` is
idempotent, and mastery scores correctly drive priority ordering.

Full existing suite (`test/*.test.js`, 27 tests total) still passes
with these additions in place.
