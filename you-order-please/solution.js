/**
 *
 * @param {string} str
 */
function order(str) {
  const words = str.split(" ").sort((a, b) => {
    return Number(a.match(/\d/)[0]) - Number(b.match(/\d/)[0]);
  });

  return words.join(" ");
}
