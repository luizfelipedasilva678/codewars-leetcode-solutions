/**
 *
 * @param {number} hMax
 * @param {number} exp
 */
function eqSumPowdig(hMax, exp) {
  const result = [];

  for (let i = 2; i <= hMax; i++) {
    const digits = String(i)
      .split("")
      .map((str) => Number(str));

    const sumOfDigits = digits.reduce(
      (prev, curr) => prev + Math.pow(curr, exp),
      0
    );

    if (sumOfDigits === i) {
      result.push(i);
    }
  }

  return result;
}
