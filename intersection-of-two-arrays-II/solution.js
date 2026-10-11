/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
  const sortedNums1 = nums1.toSorted((a, b) => a - b);
  const sortedNums2 = nums2.toSorted((a, b) => a - b);
  const output = [];
  let shortArr, longArr;

  if (sortedNums1.length < sortedNums2) {
    shortArr = sortedNums1;
    longArr = sortedNums2;
  } else {
    shortArr = sortedNums2;
    longArr = sortedNums1;
  }

  let idx = -1;
  for (let i = 0; i < longArr.length; i++) {
    idx = shortArr.indexOf(longArr[i]);

    if (idx !== -1) {
      output.push(longArr[i]);
      shortArr.splice(idx, 1);
    }

    if (shortArr.length === 0) break;
  }

  return output;
};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
