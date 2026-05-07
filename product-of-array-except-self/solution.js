/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  const suffix = [];
  const prefix = [];
  prefix[0] = nums[0];
  suffix[nums.length - 1] = nums[nums.length - 1];
  let idx = nums.length - 1;
  const output = [];

  for (let i = 0; i < nums.length; i++) {
    prefix[i] = nums[i] * (prefix[i - 1] ?? 1);
    suffix[idx] = nums[idx] * (suffix[idx + 1] ?? 1);
    idx--;
  }

  for (let i = 0; i < nums.length; i++) {
    output[i] = (prefix[i - 1] ?? 1) * (suffix[i + 1] ?? 1);
  }

  return output;
};

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
