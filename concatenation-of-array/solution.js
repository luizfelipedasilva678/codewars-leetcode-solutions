/**
 * @param {number[]} nums
 * @return {number[]}
 */
const getConcatenation = function (nums) {
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    nums[length + i] = nums[i];
  }

  return nums;
};

console.log(getConcatenation([1, 2, 1]));
