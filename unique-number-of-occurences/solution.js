/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function (arr) {
  const occurrences = new Map();

  for (const n of arr) {
    if (occurrences.has(n)) {
      const newValue = occurrences.get(n) + 1;

      occurrences.set(n, newValue);
    } else {
      occurrences.set(n, 1);
    }
  }

  return occurrences.size === new Set(occurrences.values()).size;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
