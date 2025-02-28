var isSquare = function (n) {
  if (n < 0) return false;

  const result = Math.sqrt(n);

  return Math.trunc(result) === result;
};
