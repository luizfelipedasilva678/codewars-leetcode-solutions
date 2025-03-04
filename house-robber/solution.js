/**
 * @param {number[]} numbers
 * @return {number}
 */
function rob(numbers) {
  const table = Array(numbers.length + 1);
  table.fill(0);
  table[1] = numbers[0];

  for (let i = 2; i <= numbers.length; i++) {
    table[i] = Math.max(table[i - 1], table[i - 2] + numbers[i - 1]);
  }

  return table[numbers.length];
}
