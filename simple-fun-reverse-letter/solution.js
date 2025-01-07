/**
 *
 * @param {string} str
 */
function reverseLetter(str) {
  const pattern = new RegExp(/[^a-zA-Z]/, "g");
  return str.replace(pattern, "").split("").reverse().join("");
}
