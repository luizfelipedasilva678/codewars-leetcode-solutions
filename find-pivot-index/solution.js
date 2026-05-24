/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
  let j = nums.length - 1;
  const prefix = [];
  const suffix = [];
  const aux = new Map();

  for (let i = 0; i < nums.length; i++) {
    prefix[i] = nums[i] + (prefix[i - 1] ?? 0);
    suffix[j] = nums[j] + (suffix[j + 1] ?? 0);

    j--;
  }

  for (let i = 0; i < nums.length; i++) {
    if (prefix[i] === suffix[i]) return i;
  }

  return -1;
};

console.log(pivotIndex([1, -1, 4]));
