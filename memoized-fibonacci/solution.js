const memo = new Map();

function fibonacci(n) {
  if (n < 2) return n;

  if (memo.has(n)) return memo.get(n);

  memo.set(n, fibonacci(n - 1) + fibonacci(n - 2));

  return memo.get(n);
}
