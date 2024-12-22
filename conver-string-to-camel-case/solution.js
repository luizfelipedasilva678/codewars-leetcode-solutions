/**
 *
 * @param {string} str
 */
function toCamelCase(str) {
  const words = str.split(/[_-]/g);
  const newStr = [];

  for (const [idx, word] of words.entries()) {
    if (idx !== 0) {
      newStr.push(`${word[0].toLocaleUpperCase()}${word.slice(1)}`);
      continue;
    }

    newStr.push(word);
  }

  return newStr.join("");
}

console.log(toCamelCase("the-stealth-warrior"));
