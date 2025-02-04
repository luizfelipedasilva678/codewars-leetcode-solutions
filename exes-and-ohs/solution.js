/**
 *
 * @param {string} str
 */
function XO(str) {
  let x = 0,
    o = 0;

  for (const c of str) {
    const char = c.toLowerCase();

    if (char === "o") {
      o++;
    } else if (char === "x") {
      x++;
    }
  }

  if (x === o) return true;

  return false;
}
