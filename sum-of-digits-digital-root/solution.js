/**
 *
 * @param {number} n
 */
function digitalRoot(n) {
  const sumOfDigits = String(n)
    .split("")
    .reduce((prev, curr) => prev + Number(curr), 0);

  if (String(sumOfDigits).split("").length === 1) return sumOfDigits;

  return digitalRoot(sumOfDigits);
}

console.log(digitalRoot(942));
