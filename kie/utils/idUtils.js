/**
 * idUtils.js
 * -----------------------------------------------------------------------
 * Small isolated ID-generation utility. Kept in its own module (rather
 * than inlined) so tests can mock a single import if fully deterministic
 * IDs are ever required.
 * -----------------------------------------------------------------------
 */

let counter = 0;

/** Generates a reasonably unique, sortable id. Not cryptographically secure by design. */
export function generateId(prefix = 'id') {
  counter = (counter + 1) % Number.MAX_SAFE_INTEGER;
  const time = Date.now().toString(36);
  const rand = Math.random().toString(36).slice(2, 8);
  return `${prefix}_${time}_${counter.toString(36)}_${rand}`;
}

export default { generateId };
