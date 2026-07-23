/**
 * mathUtils.js
 * -----------------------------------------------------------------------
 * Pure, dependency-free numeric helpers. Every function here is
 * deterministic (no Math.random, no Date.now) so results are reproducible
 * and testable in isolation.
 * -----------------------------------------------------------------------
 */

/** Clamp a number between [min, max]. */
export function clamp(value, min, max) {
  if (Number.isNaN(value)) return min;
  return Math.min(max, Math.max(min, value));
}

/** Sum an array of numbers, ignoring non-finite entries. */
export function sum(values) {
  return values.reduce((acc, v) => acc + (Number.isFinite(v) ? v : 0), 0);
}

/** Arithmetic mean. Returns 0 for empty input instead of NaN. */
export function median(values) {
  if (!values || values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

export function average(values) {
  if (!values || values.length === 0) return 0;
  return sum(values) / values.length;
}

/** Population standard deviation. Returns 0 for empty/1-length input. */
export function standardDeviation(values) {
  if (!values || values.length < 2) return 0;
  const mean = average(values);
  const variance = average(values.map(v => (v - mean) * (v - mean)));
  return Math.sqrt(variance);
}

/**
 * Ordinary least squares slope of y over an implicit x = [0..n-1] index.
 * Positive slope => rising trend, negative => falling, ~0 => flat.
 * Returns 0 for fewer than 2 points.
 */
export function linearRegressionSlope(values) {
  const n = values.length;
  if (n < 2) return 0;
  const xs = Array.from({ length: n }, (_, i) => i);
  const xMean = average(xs);
  const yMean = average(values);
  let numerator = 0;
  let denominator = 0;
  for (let i = 0; i < n; i++) {
    numerator += (xs[i] - xMean) * (values[i] - yMean);
    denominator += (xs[i] - xMean) * (xs[i] - xMean);
  }
  if (denominator === 0) return 0;
  return numerator / denominator;
}

/**
 * Classifies a slope into a discrete trend label using a relative
 * threshold so it scales with the magnitude of the values themselves.
 */
export function classifyTrend(values, flatToleranceRatio = 0.05) {
  const slope = linearRegressionSlope(values);
  const scale = Math.max(1, average(values));
  const ratio = slope / scale;
  if (ratio > flatToleranceRatio) return 'up';
  if (ratio < -flatToleranceRatio) return 'down';
  return 'flat';
}

/** Percentage change from `from` to `to`. Guards against divide-by-zero. */
export function percentageChange(from, to) {
  if (from === 0) return to === 0 ? 0 : 1; // treat 0 -> positive as +100%
  return (to - from) / Math.abs(from);
}

/** Simple moving average with a fixed window size (right-aligned). */
export function movingAverage(values, windowSize) {
  if (windowSize <= 0) return values.slice();
  const result = [];
  for (let i = 0; i < values.length; i++) {
    const start = Math.max(0, i - windowSize + 1);
    result.push(average(values.slice(start, i + 1)));
  }
  return result;
}

/** Round to a fixed number of decimal places (default 2). */
export function roundTo(value, decimals = 2) {
  const factor = Math.pow(10, decimals);
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

/** Normalizes a raw value into a 0-100 score given an expected [min, max] operating range. */
export function normalizeToScore(value, min, max) {
  if (max === min) return 0;
  const ratio = (value - min) / (max - min);
  return roundTo(clamp(ratio, 0, 1) * 100, 1);
}

export default {
  clamp,
  sum,
  average,
  standardDeviation,
  linearRegressionSlope,
  classifyTrend,
  percentageChange,
  movingAverage,
  roundTo,
  normalizeToScore
};
