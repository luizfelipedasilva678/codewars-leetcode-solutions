function positiveSum(arr) {
  return arr.reduce((prev, curr) => {
    if (curr < 0) return prev;

    return curr + prev;
  }, 0);
}
