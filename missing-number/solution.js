/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  const sortedArray = nums.toSorted((a, b) => a - b);

  for (let i = 0; i < sortedArray.length; i++) {
    const nextNum = sortedArray[i] + 1;
    const prevNum = sortedArray[i] - 1;

    if (prevNum >= 0 && prevNum !== sortedArray[i - 1]) return prevNum;

    if (nextNum !== sortedArray[i + 1]) return nextNum;
  }
};

console.log(missingNumber([3, 0, 1]));
