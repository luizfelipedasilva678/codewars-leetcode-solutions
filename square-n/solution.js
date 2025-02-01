function squareSum(numbers) {
  return numbers.reduce((prev, curr) => {
    return Math.pow(curr, 2) + prev;
  }, 0);
}
