/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const answer = [[], []];

  for (const value of set2) {
    if (!set1.has(value)) answer[1].push(value);
  }

  for (const value of set1) {
    if (!set2.has(value)) answer[0].push(value);
  }

  return answer;
};

console.log(findDifference([1, 2, 3], [2, 4, 6]));
