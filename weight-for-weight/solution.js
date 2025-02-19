/**
 *
 * @param {string} str
 */
function orderWeight(str) {
  return str
    .split(" ")
    .sort((n1, n2) => {
      const sumN1 = n1
        .split("")
        .map(Number)
        .reduce((p, c) => p + c, 0);

      const sumN2 = n2
        .split("")
        .map(Number)
        .reduce((p, c) => p + c, 0);

      if (sumN1 < sumN2) return -1;
      else if (sumN1 > sumN2) return 1;

      if (n1 < n2) return -1;
      else if (n1 > n2) return 1;

      return 0;
    })
    .join(" ");
}
