/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function (nums, k) {
  let maxAverage = 0;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  maxAverage = sum / k;

  let windowAvg = maxAverage;
  for (let i = k; i < nums.length; i++) {
    windowAvg += (nums[i] - nums[i - k]) / k;
    maxAverage = Math.max(windowAvg, maxAverage);
  }

  return maxAverage;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
