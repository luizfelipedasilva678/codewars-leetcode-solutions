/**
 *
 * @param {string} str
 * @returns
 */
function disemvowel(str) {
  const pattern = new RegExp(/[aeiouAEIOU]/, "g");

  return str.replace(pattern, "");
}
