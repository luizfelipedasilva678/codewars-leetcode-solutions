/**
 *
 * @param {number[]} numbers
 * @param {number} target
 * @returns
 */
function twoSum(numbers, target) {
  const map = new Map();

  for (const [index, num] of numbers.entries()) {
    const sum = target - num;

    if (map.has(sum)) {
      return [map.get(sum), index];
    }

    map.set(num, index);
  }
}

console.log(twoSum([-3, 4, 3, 90], 0));
