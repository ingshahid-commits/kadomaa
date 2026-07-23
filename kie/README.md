# Kadoma Intelligence Engine (KIE) — Phase 2: Intelligence Modules

# Kadoma Intelligence Engine (KIE) — Phase 3: Integration & Verification

Offline, rule-based, deterministic decision engine for Kadoma. Pure ES
Modules, zero external dependencies, zero frameworks.

## Status
✅ Phase 1 (foundation) complete.
✅ Phase 2 (intelligence modules) complete — 15 analyzer modules.
✅ Phase 3 (integration, bug-fixing, verification) complete.
✅ **Personal Baseline layer added** — see below. 31 rules total (28 + 3 new).

## Personal Baseline (`core/PatternMemory.js`)

The one addition since Phase 3 that's a genuinely new capability rather
than a bug fix: coaching messages can now reference **the user's own
historical norm** instead of a fixed threshold that's identical for
everyone.

```
"عالی بود، امروز 90 دقیقه مطالعه کردی"                    <- old: same message for everyone
"معمولاً حدود 50 دقیقه ادامه می‌دی، ولی امروز 40 دقیقه      <- new: compared against THIS user's
 بیشتر از حد همیشگیت جلو رفتی"                                own history
```

`PatternMemory.compute(workLogs, referenceDateKey)` looks only at logs
**before** today (so a comparison never leaks into its own baseline) and
computes, once there's enough history:
- `typicalSessionMinutes` — median length of a single sitting
- `typicalDailyMinutes` — median daily total, from days that had study
- `typicalStudyHour` — most frequent session start hour
- `strongestSubject` — subject with the most historical minutes

Every field ships behind a `confident` flag (needs ≥6 prior sessions,
enforced in `PatternMemory.js`). Below that, `state.baseline.confident`
is `false` and the three new rules in `analyzers/personalPatternAnalyzer.js`
simply don't fire — a brand-new user gets the same honest, generic
messages as before, never a fabricated "usual" built from 1-2 data points.

**Explicitly NOT built:** things like "archetype detection", "confidence
estimation", or "behavior drift detection" that get thrown around in
product-vision language but don't correspond to anything a deterministic
system can honestly compute — those would just be arbitrary thresholds
wearing an AI-sounding name, which is worse than not having the feature.
If/when there's a concrete, explainable metric behind one of those names,
it belongs here as another `PatternMemory`-style module; until then adding
the label without the substance would hurt the "the app actually gets me"
goal, not help it.

Tested in `test/patternMemory.test.js`: confirms today's data never
leaks into its own baseline, the achievement rule requires a real margin
(not a trivial +1 min), never fires for new users, and the "below usual"
message is checked against a judgmental-language blocklist.

## What Phase 3 actually found and fixed

The Phase 1/2 files arrived as a flat file listing (all `.js` files in one
folder, no subfolders — an artifact of how they were downloaded/collected).
Phase 3 started by reconstructing the folder tree the import statements
already implied, then **actually executing the engine** (not just reading
it) against realistic data to hunt for bugs. That surfaced six real issues,
all now fixed and covered by regression tests in `test/`:

1. **Broken imports (15 files).** Every `analyzers/*.js` file imported
   `./ruleFactory.js` (same folder), but `ruleFactory.js` lives in
   `rules/`. The engine could not load at all until this was fixed to
   `../rules/ruleFactory.js`.
2. **`consistencyScore` unfairly penalized new users.** A brand-new
   account with only a few days of history had its missing days
   zero-padded across the 14-day consistency window, which read as
   maximally "erratic" even when the days they *did* study were
   perfectly steady. Fixed with the same "not enough data yet → neutral
   score" guard `habitScore` already used.
3. **`weekOverWeekChange` could explode to absurd percentages** (e.g.
   "+1083%") when the previous week's baseline was tiny/near-empty —
   technically correct math, but a misleading, unhelpful message for
   anyone in their first couple of weeks. Added
   `THRESHOLDS.MIN_BASELINE_MINUTES_FOR_TREND`: below that floor, the
   engine now reports "not enough prior data" instead of a wild number.
4. **Contradictory decisions could ship together** — e.g. a 4+ hour
   study day triggered both an "achievement" celebration *and* a
   "burnout" warning in the same batch, sending a mixed message.
   `PriorityEngine` now applies a `SUPPRESSION_RULES` table
   (`config/engineConfig.js`) that drops a decision when a
   semantically-conflicting category is present in the same batch,
   before the existing per-category/total caps run.
5. **Crash on `analyze(null)`.** `rawData = {}` as a default parameter
   only helps for `undefined`, not `null`. Fixed with an explicit
   `rawData = rawData || {}` normalization.
6. **Crash on malformed log entries** (`null`/non-object items in the
   `logs` array). Now filtered out defensively before any field access,
   and negative/zero durations are rejected as invalid rather than
   silently accepted.

## Folder structure
```
kie/
├── kadomaEngine.js            # Public facade: KadomaIntelligenceEngine
├── config/
│   └── engineConfig.js       # PRIORITY, CATEGORY, TONE, ANIMATION, SOUND, THRESHOLDS, SUPPRESSION_RULES
├── utils/
│   ├── mathUtils.js          # clamp, average, stdDev, regression slope, trend, normalize...
│   ├── dateUtils.js          # date-key helpers (YYYY-MM-DD based, timezone-naive/local)
│   └── idUtils.js            # generateId()
├── state/
│   └── UserState.js          # Serializable snapshot of every computed metric
├── core/
│   ├── StateBuilder.js       # raw study logs -> UserState (all scoring formulas live here)
│   ├── EventDispatcher.js    # sync pub/sub, isolates listener errors
│   ├── RuleEngine.js         # registers rules, enforces cooldowns, evaluates -> decisions
│   ├── PriorityEngine.js     # sorts + semantically de-conflicts + caps decisions
│   └── DecisionEngine.js     # thin orchestrator: RuleEngine -> PriorityEngine
├── interfaces/
│   └── BaseRule.js           # contract every rule must satisfy
├── messages/
│   └── messageRepository.js  # category+tone -> randomized, interpolated copy templates
├── rules/
│   ├── ruleRegistry.js       # generic register/getAll/clear registry
│   ├── ruleFactory.js        # createRule() helper, avoids 15x BaseRule subclass boilerplate
│   └── allRules.js           # imports all 15 analyzers, registers their rules
└── analyzers/                # 15 independent intelligence modules
    ├── milestoneEngine.js      # streak + cumulative-minutes milestones
    ├── goalEngine.js           # daily goal progress / met / missed
    ├── motivationEngine.js     # low/high motivationScore reactions
    ├── breakAnalyzer.js        # today's break/work ratio + long absence
    ├── streakAnalyzer.js       # streak broken / steadily growing
    ├── burnoutDetector.js      # burnoutScore escalation (moderate/critical)
    ├── habitAnalyzer.js        # routine regularity (habitScore)
    ├── consistencyAnalyzer.js  # scattered vs steady weekly rhythm
    ├── progressAnalyzer.js     # week-over-week improvement/decline
    ├── recoveryAnalyzer.js     # multi-day recovery quality vs burnout
    ├── productivityAnalyzer.js # raw daily output + evening-idle nudge
    ├── focusAnalyzer.js        # session-length quality vs ideal pomodoro
    ├── smartNotificationEngine.js # on-demand composite daily digest
    ├── recommendationEngine.js # neglected subject + "start now" timing
    ├── timeAwarenessEngine.js  # late-night / early-morning clock-time rules
    └── personalPatternAnalyzer.js # uses core/PatternMemory.js — "vs your own usual" messages
```

## Data flow
```
raw study logs
   │
   ▼
StateBuilder.build()  ──►  UserState (studyToday, streak, burnoutScore, ...)
   │
   ▼
RuleEngine.evaluate(state) ──► [Decision, Decision, ...]   (cooldown-filtered)
   │
   ▼
PriorityEngine.resolveConflicts()
   ├─ suppressConflicts()   (drops semantically contradictory decisions)
   ├─ sortByPriority()
   └─ per-category/total caps
   │
   ▼
EventDispatcher.emit('decision', d)  ──► host app renders notification/animation/sound
```

## Decision output shape
Every fired rule normalizes to:
```js
{
  id, ruleId, type, category, priority,
  title, message, animation, sound,
  cooldown, timestamp, metadata
}
```

## Real integration with Kadoma (`game.html`) — verified, not hypothetical

`test/gameHtmlIntegrationExample.js` is a runnable adapter built from
game.html's **actual** stored data shapes (not a guess):

- `pomoLogs` entries: `{ id, date, title, duration }`, where `id` is
  `Date.now().toString(36) + <6-char random>` — the adapter decodes that
  prefix back into a real completion timestamp to recover an hour-of-day
  for the habit/time-awareness rules, at no cost to the existing save format.
- `history` entries (manual daily check-in): `{ date, sleep, energy,
  focus, stress, study, deep }`, `study`/`deep` in **hours**. Used only as
  a fallback for days that have a check-in but no timer session.

```js
import { KadomaIntelligenceEngine } from './kie/kadomaEngine.js';
import { buildKieInputFromKadomaState } from './kie/test/gameHtmlIntegrationExample.js';
// (or copy buildKieInputFromKadomaState's ~15 lines directly into game.html's own script)

const kie = new KadomaIntelligenceEngine({ maxPerCategory: 2, maxTotal: 5 });
kie.on('decision', d => showSmartNotification(d)); // wire to your toast/animation system

// call whenever pomoLogs/history change (after logPomoSession(), after
// saving the daily check-in, and once on app load)
const input = buildKieInputFromKadomaState(pomoLogs, history, /* dailyGoalMinutes */ 90);
const decisions = kie.analyze(input, { hour: new Date().getHours() });
```

**Note on `dailyGoalMinutes`:** game.html does not yet persist an explicit
"daily study goal in minutes" setting. The adapter defaults to 90 until
one exists in Settings — pass the real value through as soon as it does.

## Context object
Several rules read an optional `context` argument passed to
`analyze()`/`evaluate()`:
- `context.hour` (0-23) — powers `goal.missedEndOfDay`, `productivity.eveningIdle`,
  `recommendation.startNow`, `timeAwareness.*`.
- `context.isDailySummaryRequest` (boolean) — powers `notification.dailySummary`.
Rules that don't need these fields simply ignore them; nothing breaks if
`context` is omitted entirely.

## Extending the engine (adding rule #29+)
1. Pick (or add) a `CATEGORY` in `config/engineConfig.js`. If it can
   contradict an existing category, add an entry to `SUPPRESSION_RULES`.
2. Add your rule(s) to an existing `analyzers/*.js` file, or create a new
   one following the same `createRule({...})` pattern.
3. If it's a new file, import + register it in `rules/allRules.js`
   (one line, following the existing pattern).
4. Nothing else changes — `core/*` never needs to know your rule exists.

## Verification (Phase 3)
Three runnable suites, no test framework required (`node test/*.js`):

- **`test/e2e.test.js`** — 8 realistic scenarios (healthy streak, burnout
  risk, long absence, sharp decline, improvement, brand-new/empty user,
  erratic schedule, neglected subject). Asserts zero rule-evaluation
  errors and structurally valid decisions for every scenario.
- **`test/robustness.test.js`** — malformed/`null`/garbage input, negative
  durations, duplicate-registration safety, cooldown enforcement, 600 days
  of history for performance (processes in ~10ms), and that
  `maxTotal`/`maxPerCategory` options are actually honored.
- **`test/patternMemory.test.js`** — the new personal baseline layer:
  confirms today's data never leaks into its own baseline, the achievement
  rule requires a real margin, it never fires for brand-new users, and
  the "below usual" message can't contain judgmental language.
- **`test/gameHtmlIntegrationExample.js`** — the real adapter above, run
  against realistic `pomoLogs`/`history`-shaped data end-to-end.

Run all four:
```bash
for f in test/*.test.js test/gameHtmlIntegrationExample.js; do node "$f" || break; done
```
All four currently pass with zero errors.

## Persisting cooldowns across reloads
`RuleEngine` tracks cooldowns in memory only. To survive a page reload,
persist them alongside the rest of Kadoma's localStorage state:
```js
// on app unload / periodically:
save('kieCooldowns', kie.ruleEngine.exportCooldowns());
// on app load, after constructing kie:
kie.ruleEngine.importCooldowns(load('kieCooldowns', {}));
```

## Production readiness checklist
- [x] Every file loads under real ES module resolution (not just visually inspected)
- [x] Zero external dependencies, zero frameworks
- [x] Every rule evaluation is exception-isolated (one broken rule can't crash the batch)
- [x] Null/malformed input handled without throwing
- [x] Performance-tested at 600 days / hundreds of logs (~10ms)
- [x] Semantic conflict suppression between contradictory categories
- [x] Real adapter verified against Kadoma's actual data shapes
- [ ] Cooldown persistence wired into game.html's save/load cycle (drop-in ready, see above — just needs the two lines added to game.html itself)
- [ ] `dailyGoalMinutes` wired to a real Settings field in game.html (currently defaults to 90)

