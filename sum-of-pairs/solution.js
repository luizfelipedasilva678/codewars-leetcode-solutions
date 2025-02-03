/**
 *
 * @param {number[]} ints
 * @param {number} s
 * @returns {number[]}
 */
function sumPairs(ints, s) {
  const pairs = new Map();
  const d = new Map();

  for (const [idx, int] of ints.entries()) {
    if (pairs.has(idx)) continue;

    const diff = s - int;

    if (!d.has(diff)) {
      d.set(diff);
    } else {
      continue;
    }

    const pairIdx = ints.findIndex(
      (v, pairIdx) => v === diff && idx !== pairIdx
    );

    if (pairIdx !== -1) {
      pairs.set(pairIdx, idx);
    }
  }

  const result = Array.from(pairs.entries()).sort((a, b) => {
    return a[0] - b[0];
  })[0];

  if (!result) return undefined;

  return [ints[result[1]], ints[result[0]]];
}

console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));
