/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const maxSubArray = function (
  nums,
  memo = new Map(),
  start = 0,
  end = nums.length - 1,
) {
  const key = `${start}-${end}`;

  if (memo.has(key)) {
    return memo.get(key);
  }

  if (start === end) return nums[start];

  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += nums[i];
  }

  memo.set(
    key,
    Math.max(
      sum,
      maxSubArray(nums, memo, start + 1, end),
      maxSubArray(nums, memo, start, end - 1),
    ),
  );

  return memo.get(key);
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
