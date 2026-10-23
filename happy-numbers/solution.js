/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
  const seen = new Map();

  let aux = n;
  while (aux !== 1) {
    const sum = String(aux)
      .split("")
      .map(Number)
      .map((n) => Math.pow(n, 2))
      .reduce((prev, acc) => prev + acc, 0);

    if (seen.has(sum)) {
      const currValue = seen.get(sum);

      seen.set(sum, currValue + 1);
    } else {
      seen.set(sum, 1);
    }

    if (seen.get(sum) > 1) return false;

    aux = sum;
  }

  return true;
};

console.log(isHappy(2));
