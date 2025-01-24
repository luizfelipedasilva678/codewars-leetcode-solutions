/**
 *
 * @param {number} n
 */
function persistence(n) {
  let count = 0;

  function multiply(number) {
    if (String(number).length === 1) return;

    count++;

    const result = String(number)
      .split("")
      .reduce((prev, curr) => prev * Number(curr), 1);

    return multiply(result);
  }

  multiply(n);

  return count;
}

console.log(persistence(39));
