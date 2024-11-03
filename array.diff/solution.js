/**
 * @param {number[]} a
 * @param {number[]} b
 */
function arrayDiff(a, b) {
  const newArr = [];

  for (const [_, value] of a.entries()) {
    if (b.indexOf(value) === -1) {
      newArr.push(value);
    }
  }

  return newArr;
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
