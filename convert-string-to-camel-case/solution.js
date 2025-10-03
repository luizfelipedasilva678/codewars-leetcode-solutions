/**
 *
 * @param {string} str
 */
function toCamelCase(str) {
  const pattern = new RegExp(/-|_/);
  const words = str.split(pattern);

  for (const [idx] of words.entries()) {
    if (idx === 0) {
      const firstLetter = words[idx].slice(0, 1);
      const isCapitalized = firstLetter.toUpperCase() === firstLetter;

      words[idx] = `${
        isCapitalized ? firstLetter.toUpperCase() : firstLetter
      }${words[idx].slice(1).toLowerCase()}`;

      continue;
    }

    words[idx] = `${words[idx].slice(0, 1).toUpperCase()}${words[idx]
      .slice(1)
      .toLowerCase()}`;
  }

  return words.join("");
}

console.log(toCamelCase("The_Stealth-Warrior"));
