import { clamp, roundTo } from '../../utils/mathUtils.js';

/**
 * ConfidenceSystem.js
 * -----------------------------------------------------------------------
 * Pure additive utility module (no imports from/edits to core/*, only
 * reuses existing mathUtils exports). Any future analyzer/engine that
 * produces a labeled insight ("Morning Person", "Math Weakness", ...)
 * should wrap it through here instead of inventing its own ad-hoc
 * confidence math, so every insight in the app is comparable on the same
 * 0-100 scale with the same "should I even show this / should I ask
 * instead" logic.
 *
 * Confidence is deliberately simple and explainable (three named,
 * independently-tunable factors), not a black box:
 *   - sampleSize factor: more observations -> more confidence, with
 *     diminishing returns (log-shaped growth).
 *   - consistency factor: how stable/agreeing the observations are
 *     (0..1, e.g. 1 - normalized variance). Caller computes this from
 *     whatever data is relevant to the insight.
 *   - recency factor: how fresh the evidence is (0..1, 1 = very recent).
 * -----------------------------------------------------------------------
 */

const DEFAULT_MIN_SAMPLE = 5;
const DEFAULT_SATURATION_SAMPLE = 20; // sample size at which the sample factor is ~maxed out
const DEFAULT_ASK_THRESHOLD = 60;

/**
 * @param {object} input
 * @param {number} input.sampleSize - number of observations backing the insight
 * @param {number} [input.consistency] - 0..1, how much the observations agree (default 0.7 if unknown)
 * @param {number} [input.recency] - 0..1, how fresh the evidence is (default 1 if unknown)
 * @param {number} [input.minSample] - below this sample size, confidence is forced to 0
 * @param {number} [input.saturationSample] - sample size beyond which more data barely helps
 * @returns {number} confidence 0-100
 */
export function computeConfidence({
  sampleSize = 0,
  consistency = 0.7,
  recency = 1,
  minSample = DEFAULT_MIN_SAMPLE,
  saturationSample = DEFAULT_SATURATION_SAMPLE
} = {}) {
  if (sampleSize < minSample) return 0;

  // log-shaped growth: fast early gains, diminishing returns past saturationSample
  const sampleFactor = clamp(Math.log(sampleSize - minSample + 1) / Math.log(saturationSample - minSample + 1), 0, 1);
  const consistencyFactor = clamp(consistency, 0, 1);
  const recencyFactor = clamp(recency, 0, 1);

  const combined = (sampleFactor * 0.5) + (consistencyFactor * 0.35) + (recencyFactor * 0.15);
  return roundTo(clamp(combined, 0, 1) * 100, 1);
}

/** Whether the engine should ask the user to confirm before acting on this confidence level. */
export function shouldAskUser(confidence, threshold = DEFAULT_ASK_THRESHOLD) {
  return confidence < threshold;
}

/**
 * ConfidenceScore
 * -----------------------------------------------------------------------
 * Uniform wrapper for any labeled insight, e.g.:
 *   new ConfidenceScore('Morning Person', true, { sampleSize: 14, consistency: 0.8 })
 * -----------------------------------------------------------------------
 */
export class ConfidenceScore {
  constructor(label, value, confidenceInput = {}, askThreshold = DEFAULT_ASK_THRESHOLD) {
    this.label = label;
    this.value = value;
    this.confidence = computeConfidence(confidenceInput);
    this.shouldAsk = shouldAskUser(this.confidence, askThreshold);
    this.sampleSize = confidenceInput.sampleSize ?? 0;
  }

  toJSON() {
    return {
      label: this.label,
      value: this.value,
      confidence: this.confidence,
      shouldAsk: this.shouldAsk,
      sampleSize: this.sampleSize
    };
  }
}

export default { computeConfidence, shouldAskUser, ConfidenceScore };
