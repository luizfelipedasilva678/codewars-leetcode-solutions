function fn() {
  const memo = new Map();

  /**
   * @param {number} n
   * @return {number}
   */
  return function tribonacci(n) {
    if (memo.has(n)) return memo.get(n);
    if (n <= 0) return 0;
    if (n === 1 || n === 2) return 1;

    memo.set(n, tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3));

    return memo.get(n);
  };
}

const tribonacci = fn();
