/**
 * @param {number[][]} grid
 * @return {number}
 */
function minPathSum(grid, m = 0, n = 0, memo = new Map()) {
  const key = `${m}-${n}`;
  if (memo.has(key)) return memo.get(key);
  if (m === grid.length - 1 && n === grid[0].length - 1) return grid[m][n];
  if (m > grid.length - 1 || n > grid[0].length - 1) return null;

  const path1 = minPathSum(grid, m + 1, n, memo);
  const path2 = minPathSum(grid, m, n + 1, memo);

  if (path1 !== null && path2 !== null) {
    memo.set(key, path1 < path2 ? path1 + grid[m][n] : path2 + grid[m][n]);

    return memo.get(key);
  }

  if (path1 !== null) {
    memo.set(key, path1 + grid[m][n]);

    return memo.get(key);
  }

  if (path2 !== null) {
    memo.set(key, path2 + grid[m][n]);

    return memo.get(key);
  }

  return null;
}
