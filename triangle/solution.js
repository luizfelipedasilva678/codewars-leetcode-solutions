/**
 *
 * @param {number[][]} triangle
 * @returns {number}
 */
function minimumTotal(triangle, row = 0, col = 0, memo = new Map()) {
  const key = `${row}-${col}`;
  if (memo.has(key)) return memo.get(key);
  const currentValue = triangle[row][col];
  if (row === triangle.length - 1) return currentValue;

  const path1 = minimumTotal(triangle, row + 1, col, memo);
  const path2 = minimumTotal(triangle, row + 1, col + 1, memo);

  memo.set(key, currentValue + Math.min(path1, path2));

  return memo.get(key);
}

console.log(minimumTotal([[-10]]));
