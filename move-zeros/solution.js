/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  const noZerosArray = nums
    .map((v, idx) => {
      return v !== 0 ? v : undefined;
    })
    .filter(Boolean);

  const diff = nums.length - noZerosArray.length;
  for (let i = 0; i < diff; i++) {
    noZerosArray.push(0);
  }

  nums.length = 0;
  nums.push(...noZerosArray);
};

const arr = [0, 1, 0, 3, 12];

moveZeroes(arr);

console.log(arr);
