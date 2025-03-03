/**
 * @param {number[]} numbers
 * @return {number}
 */
function rob(numbers, memo = new Map()) {
  const key = numbers.join(",");
  if (memo.has(key)) return memo.get(key);
  if (numbers.length === 1) return numbers[0];
  if (numbers.length === 0) return 0;

  let maxAmount = 0;
  for (const [numIdx, num] of numbers.entries()) {
    const noAdjacentNumbers = numbers.filter(
      (_, idx) => idx !== numIdx + 1 && idx !== numIdx - 1 && numIdx !== idx
    );

    const amount = rob(noAdjacentNumbers, memo) + num;
    maxAmount = Math.max(maxAmount, amount);
  }

  memo.set(key, maxAmount);
  return maxAmount;
}
