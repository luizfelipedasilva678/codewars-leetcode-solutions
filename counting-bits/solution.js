/**
 * @param {number} n
 * @return {number[]}
 */
function countBits(n) {
  if (n === 0) return [0];

  const table = [];

  for (let i = 0; i <= n; i++) {
    table[i] = i.toString(2).replaceAll("0", "").length;
  }

  return table;
}

console.log(countBits(5));
