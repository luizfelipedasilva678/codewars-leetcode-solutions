/**
 *
 * @param {number} n
 */
function countBits(n) {
  const binary = n.toString(2);
  let count = 0;

  for (const bit of binary) {
    if (bit === "1") count++;
  }

  return count;
}

console.log(countBits(7));
