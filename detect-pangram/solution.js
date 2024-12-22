/**
 *
 * @param {string} string
 */
function isPangram(string) {
  const letters = new Set();

  for (const letter of string) {
    if (letter.toLowerCase().match(/[a-z]/g)) {
      letters.add(letter.toLowerCase());
    }
  }

  return letters.size === 26;
}

isPangram("The quick brown fox jumps over the lazy dog");
