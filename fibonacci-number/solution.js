const memo = new Map();

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n == 0) return 0;

  if (n == 1) return 1;

  if (memo.has(n)) return memo.get(n);

  memo.set(n, fib(n - 1) + fib(n - 2));

  return memo.get(n);
};
