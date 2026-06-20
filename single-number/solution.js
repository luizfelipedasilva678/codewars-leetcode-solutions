/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  const occurrences = new Map();

  for (const num of nums) {
    if (occurrences.has(num)) {
      const newQtd = occurrences.get(num) + 1;

      occurrences.set(num, newQtd);
    } else {
      occurrences.set(num, 1);
    }
  }

  for (const [key, value] of occurrences) {
    if (value === 1) return key;
  }
};

console.log(singleNumber([4, 1, 2, 1, 2]));
