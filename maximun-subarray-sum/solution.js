/**
 * @param {number[]} arr
 * @returns {number}
 */
const maxSequence = function (arr, sum = 0) {
  if (!arr) return 0;
  if (arr.length === 0) return sum;

  let maxSum = 0;
  for (let j = 0; j < arr.length; j++) {
    const subSequence = arr.slice(0, j + 1);
    const subSequenceSum = subSequence.reduce((p, c) => p + c, 0);

    if (subSequenceSum > maxSum) maxSum = subSequenceSum;
  }

  return maxSequence(arr.slice(1, arr.length), sum > maxSum ? sum : maxSum);
};
