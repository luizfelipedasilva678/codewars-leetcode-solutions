/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums, idx = 0, memo = new Map()) {
  if (memo.has(idx)) return memo.get(idx);
  if (idx >= nums.length - 1) return true;

  for (let i = 1; i <= nums[idx]; i++) {
    if (canJump(nums, idx + i, memo)) {
      memo.set(idx, true);
      return true;
    }
  }

  memo.set(idx, false);
  return false;
}

console.log(canJump([1, 0, 8, 0]));
