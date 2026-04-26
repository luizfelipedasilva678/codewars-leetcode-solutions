/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function (candies, extraCandies) {
  return candies.map((quantity, index) => {
    return candies.every(
      (_quantity, _index) => quantity + extraCandies >= _quantity,
    );
  });
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
