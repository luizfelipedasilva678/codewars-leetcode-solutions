function findOutlier(integers) {
  const evens = integers.filter((num) => num % 2 === 0);
  const odds = integers.filter((num) => num % 2 !== 0);

  return evens.length === 1 ? evens[0] : odds[0];
}
