# Kadoma Intelligence Engine — Extension Handoff

This document lets a new AI/engineer pick up work **without reading any
other file first**. It reflects the state after **Stage 4** (scroll to
the bottom for the Stage 4 section, and see the "kie/data/ exists" note
right above it) — the "Ground rules" and "Stage 2 API surface" sections
right below are from the original Stage 2 handoff and are still
accurate, just not the most recent addition.

## Ground rules (unchanged since Stage 1 — do not violate)

- ❌ Never delete or rewrite any class/function/Rule/Engine in `kie/core`,
  `kie/analyzers`, `kie/rules`, `kie/messages`, `kie/utils`, or `kadomaEngine.js`.
- ❌ Never change existing behavior or public API of anything above.
- ❌ Never rename existing variables/structures.
- ✅ Only ADD new modules under `kie/extensions/`, wired in via additive
  properties (`kieInstance.livingPlan`, `livingPlan.progressiveProfiler`,
  `livingPlan.energyMap`, `livingPlan.weeklyStrategy`, `livingPlan.stage2Api`)
  and additive event subscriptions (`kie.on('decision', ...)`), never by
  overriding existing methods.
- ✅ Every attach function (`attachLivingPlan`, `attachStage2`) is
  idempotent — calling it twice is a safe no-op.

## File map

```
kie/extensions/
  allExtensions.js              <- barrel export, single import point for host app
  STAGE_HANDOFF.md              <- this file
  livingPlanExtension.js        <- Stage 1 attach point (attachLivingPlan)
  stage2Extension.js            <- Stage 2 attach point (attachStage2)  [NEW]
  livingPlan/
    LivingPlan.js                Mission/Roadmap/Commitments/History/AdaptiveUpdate
    Commitment.js                 planned/doing/done/postponed/skipped/expired state machine
    ConfidenceSystem.js           computeConfidence / shouldAskUser / ConfidenceScore
    MemoryTimeline.js              append-only history log
    MissionGuard.js                mission immutability guard
    Explainability.js              explain() -> Persian "چون: ..." sentences
  stage2/                        [NEW — all of Stage 2 lives here]
    AdaptiveScheduler.js          #2  computeTodayCapacity / rescheduleTomorrow
    DailyReview.js                #4  submitDailyReview({completion,energy,difficulty})
    ProgressiveProfiling.js       #6  ProgressiveProfiler — one question at a time
    NegotiationEngine.js          #7  negotiate() -> Proposal -> accept/reject
    EnergyEngine.js                #11 EnergyMap, rankByWeight, splitByEnergyFit
    WeeklyStrategy.js              #14 buildWeeklyStrategy, attachWeeklyStrategy
    DynamicRescheduling.js        #15 rebalanceMissedLoad, applyRebalance
test/
  livingPlanExtension.test.js    Stage 1 tests (39 assertions, untouched)
  stage2Extension.test.js        Stage 2 tests (7 tests, all passing)  [NEW]
  e2e.test.js / robustness.test.js / patternMemory.test.js   <- pre-existing core tests, untouched
```

## Feature status (all 18 items from the original brief)

| # | Feature | Stage | Status |
|---|---|---|---|
| 1 | Living Plan | 1 | done |
| 2 | Adaptive Scheduler | 2 | done |
| 3 | Commitment Engine | 1 | done |
| 4 | Daily Review | 2 | done |
| 5 | Confidence System | 1 | done |
| 6 | Progressive Profiling | 2 | done |
| 7 | Negotiation Engine | 2 | done |
| 8 | Curriculum Engine | 3 | done |
| 9 | Chapter Mastery | 3 | done |
| 10 | Subject Graph | 3 | done |
| 11 | Energy Engine | 2 | done |
| 12 | Prediction Engine (extended) | 3 | done |
| 13 | Memory Timeline | 1 | done |
| 14 | Weekly Strategy | 2 | done |
| 15 | Dynamic Rescheduling | 2 | done |
| 16 | Explainability | 1 | done |
| 17 | Study Strategy Engine | 3 | done |
| 18 | Mission Preservation | 1 | done |

## Stage 2 API surface (what Stage 3 can rely on)

```js
import { attachLivingPlan } from './kie/extensions/livingPlanExtension.js';
import { attachStage2 } from './kie/extensions/stage2Extension.js';

const livingPlan = attachLivingPlan(kie, { goal: 'کنکور تجربی 1405' });
const stage2 = attachStage2(livingPlan);

stage2.profiler                 // ProgressiveProfiler instance (livingPlan.progressiveProfiler)
stage2.energyMap                // EnergyMap instance (livingPlan.energyMap)
stage2.submitDailyReview(review, pendingPool, extraSignals)
stage2.negotiate(statement, requestedMinutes, availableMinutes)
stage2.resolveNegotiation(proposal)
stage2.rebalanceMissedLoad(missedCommitments, remainingDaysCount, maxExtraMinutesPerDay)
stage2.setWeeklyStrategy(weekKey, subjectPriorities, totalWeeklyMinutes)  // -> livingPlan.weeklyStrategy
```

Every one of these logs into `livingPlan.memory` (Memory Timeline) with
tags, and every scheduling decision produces an `explain()`-shaped
reasons list — Stage 3's Prediction Engine and Study Strategy Engine
should read from `livingPlan.memory` and `livingPlan.stage2Api` rather
than re-deriving signals from scratch.

## Where Stage 3 starts (5 remaining items: #8, #9, #10, #12, #17)

Suggested build order (each is independent enough to build/test alone,
same additive pattern — new files under `kie/extensions/stage3/`, one
`stage3Extension.js` attach point, append-only edit to `allExtensions.js`
below the Stage 2 section):

1. **Subject Graph (#10)** — simplest, no dependencies on the others.
   A dependency map `{ chapterId: [prerequisiteChapterIds] }` +
   topological-sort helper. Everything else in Stage 3 wants this first.
2. **Chapter Mastery (#9)** — per-chapter 0–10 score + the strategy
   bands from the brief (0–3 full study, 4–6 review+test, 7–8 test
   only, 9–10 quick review). Store scores keyed by chapterId so Subject
   Graph and Curriculum Engine can both read them.
3. **Curriculum Engine (#8)** — parses an exam structure (e.g. Kalamchi)
   into Test to Subjects to Chapters, feeding Chapter Mastery + Subject
   Graph. This is the biggest Stage 3 module; build it after #10/#9
   exist so it has somewhere to write results into.
4. **Study Strategy Engine (#17)** — pure function(s) mapping a Chapter
   Mastery score to the strategy band text/plan shape from #9's table.
   Thin layer on top of #9 — should be quick once #9 is solid.
5. **Prediction Engine, extended (#12)** — deterministic projections
   ("4 days behind", "goal probability: 86%"). Build LAST — it's
   the only Stage 3 item that benefits from having real
   AdaptiveScheduler/DailyReview/WeeklyStrategy history (Stage 2) and
   Chapter Mastery trend data (#9) already available to project from.
   Reuse `ConfidenceSystem.computeConfidence` (Stage 1) for the
   probability numbers instead of inventing new confidence math.

Same non-negotiables apply: nothing in Stage 1, Stage 2, or core/*
gets edited — only new files, only additive attach points.

---

## Stage 3 — done

All 5 remaining items (#8, #9, #10, #12, #17) are built, in the exact
order suggested above, under `kie/extensions/stage3/`, with a single
`stage3Extension.js` attach point (`attachStage3(livingPlan, opts)`),
following the same idempotent, additive-only pattern as Stage 1/2.

```
kie/extensions/
  stage3Extension.js            <- Stage 3 attach point (attachStage3)
  stage3/
    SubjectGraph.js               #10  dependency map + topologicalOrder / isUnlocked
    ChapterMastery.js             #9   0-10 score per chapterId, brief's exact 4 bands, attempt smoothing + history
    CurriculumEngine.js           #8   ingestExam() -> Test/Subject/Chapter, computePriority(), getPrioritizedChapters()
    StudyStrategyEngine.js        #17  band -> ordered step pipeline (learning/examples/practice/review, review/test, test/mistake_review, quick_review)
    PredictionEngine.js           #12  predictDaysBehindSchedule(), predictGoalProbability() - reads livingPlan.memory 'daily_review' entries, reuses ConfidenceSystem.computeConfidence
test/
  stage3Extension.test.js       Stage 3 tests (13 tests, all passing; full suite is 22/22)
```

### Stage 3 API surface

```js
import { attachStage3 } from './kie/extensions/stage3Extension.js';

const stage3 = attachStage3(livingPlan); // optionally: { subjectGraph, chapterMastery }

stage3.ingestExam({ name: 'قلمچی', subjects: [{ name: 'زیست', chapters: [
  { id: 'zist-c1', name: 'فصل 1', weight: 5, requires: [] },
  { id: 'zist-c2', name: 'فصل 2', weight: 3, requires: ['zist-c1'] }
]}]});

stage3.getPrioritizedChapters({ subjectName, completedChapterIds }); // highest priority first, explain()-shaped
stage3.recordMasteryAttempt(chapterId, { correct, total });          // updates ChapterMastery AND logs to Memory Timeline
stage3.getStrategyForChapter(chapterId);                            // -> { band, labelFa, steps, explanation }
stage3.predictDaysBehind();                                         // -> { daysBehind, trend, confidence, explanation }
stage3.predictGoalProbability();                                    // -> { probability, supportingStats, explanation }
```

CurriculumEngine's `ingestExam` is additive-safe by design: re-ingesting
the same or an overlapping exam never overwrites an existing mastery
score or an existing chapter's dependency list - it only registers what
wasn't already known. All 18 items from the original brief are now
implemented. (Stage 4 — Planner Generator — was added later; see below.)

---

## ⚠️ Note for whoever reads this next: `kie/data/` exists and isn't in this file yet

Since the "Stage 3 — done" section above was written, a whole knowledge-base
layer was added at `kie/data/` (biology10/11/12.js, chemistry10/11/12.js,
physics10/11/12.js, biologyExamIntelligence.js, physicsExtensionPhase1/2/3.js,
`curriculumAdapter.js`, `index.js`) — **without** ever getting a line in this
handoff. It follows the exact same additive rules as everything else here
(see its own `kie/data/README.md` and `kie/data/HOW_TO_ADD_A_SUBJECT.md`,
both accurate and up to date), so nothing was violated — just undocumented
*here*. Stage 4 below depends on it directly, so if you're picking up after
Stage 4: `kie/data/index.js`'s `attachKnowledgeBase(stage3Api)` is what
ingests all 9 subject files into the real `CurriculumEngine` — call it right
after `attachStage3()` and before anything in Stage 4.

One more thing worth knowing: `kie/data/README.md` still says Physics is
"exposed as-is, not ingested as chapters" (true when it was first written)
— that's now stale too, since `physics10/11/12.js` were added later and ARE
ingested as real chapters via the same `SUBJECT_FILES` path as biology and
chemistry. `physicsExtensionPhase1/2/3.js` (cross-grade dependencies,
diagnostic rules, exam-frequency analytics) remain the *only* physics data
that is genuinely "exposed as-is" — that part of the README is still
correct. Consider fixing that one paragraph if you touch that README again;
it wasn't in scope for Stage 4 to edit an existing file's prose.

---

## Stage 4 — done: Planner Generator

The synthesis layer the original brief was ultimately pointing at: turn
"what's known" (Stage 3 priorities/mastery/strategy + `kie/data/`
content) and "what's possible today" (Stage 2 capacity/energy/weekly
allocation) into actual `Commitment`s — without adding any new scoring
model. Every number Stage 4 produces is read from an existing Stage
1/2/3 function; this stage only orchestrates call order and shape.

```
kie/extensions/
  stage4Extension.js            <- Stage 4 attach point (attachStage4(livingPlan, stage3Api))
  stage4/
    PlannerGenerator.js           STEP_MINUTES, getNextStepForChapter, generateWeeklyStrategy,
                                   generateDailyPlan (read-only draft), commitDailyPlan (the only mutator)
test/
  stage4Extension.test.js       Stage 4 tests (12 tests, all passing; full suite is 38/38)
```

### Why `generateDailyPlan` doesn't mutate anything

It mirrors `NegotiationEngine`'s own contract from Stage 2 (#7): propose
first, mutate only once the caller decides. `generateDailyPlan` always
returns a `DailyPlan` **draft** — real `Commitment`s only get created by
`commitDailyPlan(draft)`, which a host app should call either immediately
(if `draft.negotiationProposal` is `null`) or after the user has
responded to the negotiation message (trim `draft.commitmentSpecs`
yourself first if they countered lower).

### Stage 4 API surface

```js
import { attachLivingPlan } from './kie/extensions/livingPlanExtension.js';
import { attachStage3 } from './kie/extensions/stage3Extension.js';
import { attachStage4 } from './kie/extensions/stage4Extension.js';
import { attachKnowledgeBase } from './kie/data/index.js';

const livingPlan = attachLivingPlan(kie, { goal: 'کنکور تجربی 1405' });
const stage3 = attachStage3(livingPlan);
attachKnowledgeBase(stage3);                 // ingest every subject in kie/data/ (46 chapters currently)
const stage4 = attachStage4(livingPlan, stage3);

stage4.generateWeeklyStrategy(weekKey, totalWeeklyMinutes, subjectNames?);
// -> builds + attaches livingPlan.weeklyStrategy from REAL CurriculumEngine priorities per subject

const draft = stage4.generateDailyPlan(signals, { maxChapters, maxSubjectsPerDay, subjects, completedChapterIds });
// -> DailyPlan { capacityMinutes, commitmentSpecs, deferredChapterIds,
//                negotiationProposal (Proposal|null), questionsForUser, explanation }
// signals = same shape as AdaptiveScheduler.computeTodayCapacity (completionRate/energy/freeTimeMinutes/stress/sleepHours)

stage4.commitDailyPlan(draft);               // -> { committed: Commitment[], explanation } — ONLY mutating call

stage4.getNextStepForChapter(chapterId);     // -> { key, labelFa, band, isFirstOfBand } - derived from Memory Timeline
stage4.recordStepCompleted(chapterId, stepKey); // call when the student finishes that step's commitment
stage4.buildSubjectPriorities(subjectNames?);   // subject -> avg CurriculumEngine priority (what generateWeeklyStrategy uses internally)
```

### Design notes worth knowing before extending this further

- **Chapter step progress has no separate mutable state.** `getNextStepForChapter`
  re-derives the current Study Strategy band from `chapterMastery.getScore()`
  every call, and re-derives "which step comes next" by scanning
  `livingPlan.memory.getByType('planner_step_completed')` — so if mastery
  changes (a `recordMasteryAttempt` call moves a chapter to a new band),
  the very next call automatically restarts at that new band's first step.
  Nothing needed to be invalidated by hand; there's nothing to invalidate.
- **Subject diversity is capped daily** (`capDiversity()`) so one subject
  with many urgent chapters can't eat the entire day — this was a real
  gap the raw `CurriculumEngine.getPrioritizedChapters()` ordering alone
  doesn't protect against.
- **Negotiation only triggers past a real threshold**
  (`NEGOTIATION_DROP_THRESHOLD = 0.3`, i.e. more than 30% of the
  originally-desired minutes would have to be silently dropped) — small,
  ordinary day-to-day trimming to fit capacity stays silent, exactly like
  `fitCommitmentsToCapacity` already behaves on its own in Stage 2.
- **Confidence-gated questions** (`questionsForUser`) come from
  `ConfidenceSystem.shouldAskUser()` on each chapter's mastery-attempt
  history length — a chapter nobody has ever attempted yet will almost
  always ask ("تسلطت رو از ۰ تا ۱۰ چند می‌دونی؟") rather than silently
  assuming a 0 score is the truth. This is Confidence System (#5) +
  Progressive Profiling's (#6) spirit, applied to Stage 4's own output —
  it does NOT call `ProgressiveProfiler` directly (kept as a loose,
  read-only integration rather than a hard dependency on that class's
  internal question bank).

All 18 items from the original brief, plus the `kie/data/` knowledge base
and now this Planner Generator synthesis layer, are implemented and
tested (`test/*.test.js`, 38/38 passing). There is no Stage 5 planned at
this time — the next natural step, if one is ever requested, would be a
thin host-app/UI wiring (calendar rendering, actually asking
`questionsForUser` through some chat/notification surface, resolving
`negotiationProposal`s interactively) rather than a new engine module.
