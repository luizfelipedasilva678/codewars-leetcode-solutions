/**
 *
 * @param {string} query
 * @param {string[]} seq
 */
function wordSearch(query, seq) {
  const pattern = new RegExp(`.*${query}.*`, "i");
  const result = [];

  for (const str of seq) {
    if (pattern.test(str)) {
      result.push(str);
    }
  }

  return result.length > 0 ? result : result.concat("Empty");
}

console.log(wordSearch("aB", ["za", "AB", "aBc", "zab", "zbc"]));
