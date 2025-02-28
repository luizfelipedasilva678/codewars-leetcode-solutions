function fn() {
  const memo = new Map();

  /**
   * @param {number} m
   * @param {number} n
   * @return {number}
   */
  return function (m, n) {
    const key = `${m}-${n}`;
    if (memo.has(key)) return memo.get(key);
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    memo.set(key, uniquePaths(m, n - 1) + uniquePaths(m - 1, n));

    return memo.get(key);
  };
}

const uniquePaths = fn();
