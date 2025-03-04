/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
  const table = Array(numRows + 1)
    .fill()
    .map(() => Array());
  table[1] = [1];

  for (let i = 2; i <= numRows; i++) {
    for (let j = 0; j < i; j++) {
      table[i][j] = (table[i - 1][j - 1] ?? 0) + (table[i - 1][j] ?? 0);
    }
  }

  return table.slice(1);
}
console.log(generate(5));
