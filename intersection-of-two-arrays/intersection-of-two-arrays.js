/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
  const setA = new Set(nums1);
  const setB = new Set(nums2);
  const intersection = new Set();

  for (const value of setA) {
    if (setB.has(value)) {
      intersection.add(value);
    }
  }

  return Array.from(intersection);
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
