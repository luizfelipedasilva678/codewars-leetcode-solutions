/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const duplicate = new Map();

  for (const num of nums) {
    if (duplicate.has(num)) {
      duplicate.set(num, duplicate.get(num) + 1);
    } else {
      duplicate.set(num, 1);
    }
  }

  for (const [_, value] of duplicate) {
    if (value !== 1) return true;
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
