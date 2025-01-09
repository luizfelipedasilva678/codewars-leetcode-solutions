/**
 *
 * @param {string} str
 */
function highAndLow(str) {
  const numbers = str.split(" ").map(Number);

  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
