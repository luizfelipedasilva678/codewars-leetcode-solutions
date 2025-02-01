const memo = new Map();

/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  if (n == 0 || n == 1) return 1;

  if (memo.has(n)) return memo.get(n);

  memo.set(n, climbStairs(n - 1) + climbStairs(n - 2));

  return memo.get(n);
}
