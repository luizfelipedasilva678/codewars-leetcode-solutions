/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = function (nums) {
  let first = Number.MAX_SAFE_INTEGER,
    second = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= first) {
      first = nums[i];
    } else if (nums[i] < second) {
      second = nums[i];
    }

    if (nums[i] > second) return true;
  }

  return false;
};

console.log(increasingTriplet([20, 100, 10, 12, 5, 13]));
