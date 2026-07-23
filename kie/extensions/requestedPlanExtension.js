import { resolveRequestLine, generateRequestedDailyPlan } from './stage4/RequestedPlanBuilder.js';

/**
 * requestedPlanExtension.js
 * -----------------------------------------------------------------------
 * Pure additive attach point (does not touch stage4Extension.js or
 * anything under kie/core|analyzers|rules|messages|utils). Wraps
 * RequestedPlanBuilder so a host app gets the same bound-function
 * ergonomics as attachStage4.
 *
 * Usage:
 *   const requestedPlanner = attachRequestedPlanner(livingPlan, stage3);
 *   const plan = requestedPlanner.generateRequestedDailyPlan({
 *     startTime: '15:00', endTime: '21:00',
 *     lines: ['زیست دوازدهم: فصل ۳ و ۴', 'زیست یازدهم: فصل ۲', 'شیمی دهم: فصل ۳']
 *   });
 * -----------------------------------------------------------------------
 */
export function attachRequestedPlanner(livingPlan, stage3Api) {
  return {
    resolveRequestLine,
    generateRequestedDailyPlan: (request) => generateRequestedDailyPlan(livingPlan, stage3Api, request)
  };
}

export default attachRequestedPlanner;
