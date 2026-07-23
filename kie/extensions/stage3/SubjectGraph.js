/**
 * SubjectGraph.js  (Stage 3, #10)
 * -----------------------------------------------------------------------
 * Pure additive module, zero dependencies on any other Stage 3 file (per
 * STAGE_HANDOFF.md this is the simplest Stage 3 item and everything else
 * in Stage 3 wants it first). Stores a dependency map
 * `{ chapterId: [prerequisiteChapterIds] }` and can produce a
 * dependency-respecting study order out of any candidate chapter list.
 *
 * Does not import from kie/core, kie/analyzers, kie/rules, Stage 1, or
 * Stage 2 - it is a standalone data structure that Chapter Mastery (#9)
 * and the Curriculum Engine (#8) read from, exactly as suggested in the
 * handoff's build order.
 * -----------------------------------------------------------------------
 */
export class SubjectGraph {
  constructor() {
    /** @type {Map<string, Set<string>>} chapterId -> set of prerequisite chapterIds */
    this._prereqs = new Map();
  }

  _ensure(chapterId) {
    if (!this._prereqs.has(chapterId)) this._prereqs.set(chapterId, new Set());
    return this._prereqs.get(chapterId);
  }

  /** @param {string} chapterId @param {string} prerequisiteChapterId */
  addDependency(chapterId, prerequisiteChapterId) {
    if (chapterId === prerequisiteChapterId) {
      throw new Error(`SubjectGraph: a chapter cannot depend on itself ("${chapterId}").`);
    }
    this._ensure(chapterId).add(prerequisiteChapterId);
    this._ensure(prerequisiteChapterId); // register it as a known node even with no prereqs of its own
    return this;
  }

  /** Replaces the full prerequisite list for a chapter in one call. @param {string} chapterId @param {string[]} prerequisiteChapterIds */
  setDependencies(chapterId, prerequisiteChapterIds = []) {
    this._ensure(chapterId).clear();
    for (const p of prerequisiteChapterIds) this.addDependency(chapterId, p);
    return this;
  }

  /** @param {string} chapterId @returns {string[]} */
  getPrerequisites(chapterId) {
    return [...(this._prereqs.get(chapterId) || [])];
  }

  /** Reverse lookup: every chapter that lists `chapterId` as a prerequisite. @param {string} chapterId @returns {string[]} */
  getDependents(chapterId) {
    const dependents = [];
    for (const [id, prereqs] of this._prereqs.entries()) {
      if (prereqs.has(chapterId)) dependents.push(id);
    }
    return dependents;
  }

  hasChapter(chapterId) {
    return this._prereqs.has(chapterId);
  }

  allChapterIds() {
    return [...this._prereqs.keys()];
  }

  /**
   * Orders `candidateChapterIds` so every prerequisite comes before the
   * chapters that depend on it (Kahn's algorithm). Prerequisites that
   * aren't in the candidate list are ignored (they're assumed already
   * handled/out of scope), so this never throws for "missing" nodes -
   * only for an actual cycle among the candidates themselves.
   * @param {string[]} candidateChapterIds
   * @returns {string[]} a valid study order
   */
  topologicalOrder(candidateChapterIds) {
    const candidates = new Set(candidateChapterIds);
    const inDegree = new Map([...candidates].map(id => [id, 0]));
    const edges = new Map([...candidates].map(id => [id, []])); // prereq -> [dependents within candidates]

    for (const id of candidates) {
      const prereqs = this.getPrerequisites(id).filter(p => candidates.has(p));
      inDegree.set(id, prereqs.length);
      for (const p of prereqs) edges.get(p).push(id);
    }

    const queue = [...candidates].filter(id => inDegree.get(id) === 0);
    const order = [];

    while (queue.length > 0) {
      const id = queue.shift();
      order.push(id);
      for (const dependent of edges.get(id)) {
        inDegree.set(dependent, inDegree.get(dependent) - 1);
        if (inDegree.get(dependent) === 0) queue.push(dependent);
      }
    }

    if (order.length !== candidates.size) {
      throw new Error('SubjectGraph: cannot produce a topological order - a dependency cycle exists among the given chapters.');
    }
    return order;
  }

  /** True if every prerequisite of `chapterId` is present in `completedChapterIds`. @param {string} chapterId @param {Iterable<string>} completedChapterIds */
  isUnlocked(chapterId, completedChapterIds) {
    const done = new Set(completedChapterIds);
    return this.getPrerequisites(chapterId).every(p => done.has(p));
  }

  toJSON() {
    const out = {};
    for (const [id, prereqs] of this._prereqs.entries()) out[id] = [...prereqs];
    return out;
  }

  /** @param {Object<string,string[]>} obj - shape produced by toJSON() */
  static fromJSON(obj = {}) {
    const graph = new SubjectGraph();
    for (const [id, prereqs] of Object.entries(obj)) graph.setDependencies(id, prereqs);
    return graph;
  }
}

export default SubjectGraph;
