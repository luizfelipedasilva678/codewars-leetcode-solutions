/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  const quantities = new Map();
  const n = nums.length / 2;

  for (const num of nums) {
    if (quantities.has(num)) {
      let currQuantity = quantities.get(num);

      quantities.set(num, ++currQuantity);

      continue;
    }

    quantities.set(num, 1);
  }

  let el = null;
  for (const [key, value] of quantities.entries()) {
    if (value > n) {
      el = key;
    }
  }

  return el;
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
