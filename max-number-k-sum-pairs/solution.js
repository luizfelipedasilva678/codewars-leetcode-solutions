/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);

  let left = 0,
    output = 0,
    right = nums.length - 1;

  while (left < right) {
    if (nums[left] + nums[right] === k) {
      left++;
      right--;
      output++;

      continue;
    }

    if (nums[left] + nums[right] > k) {
      right--;

      continue;
    }

    if (nums[left] + nums[right] < k) {
      left++;
    }
  }

  return output;
};

console.log(maxOperations([1, 2, 3, 4], 5));
