/**
 * @param {number} numRows
 * @return {number[][]}
 */
function getRow(rowIndex) {
  const table = Array(rowIndex + 1)
    .fill()
    .map(() => Array());
  table[0] = [1];

  for (let i = 1; i <= rowIndex; i++) {
    for (let j = 0; j < i + 1; j++) {
      table[i][j] = (table[i - 1][j - 1] ?? 0) + (table[i - 1][j] ?? 0);
    }
  }

  return table[rowIndex];
}
console.log(getRow(3));
