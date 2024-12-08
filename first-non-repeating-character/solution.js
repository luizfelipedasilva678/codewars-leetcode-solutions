/**
 *
 * @param {string} s
 * @returns
 */
function firstNonRepeatingLetter(s) {
  let letter = "";
  const repeatedLetters = new Map();

  for (let i = 0; i < s.length; i++) {
    letter = s[i];

    for (let j = i + 1; j < s.length; j++) {
      if (repeatedLetters.has(letter)) break;

      if (letter.toLocaleLowerCase() === s[j].toLocaleLowerCase()) {
        repeatedLetters.set(letter, true);
        break;
      }
    }

    if (!repeatedLetters.has(letter)) return letter;
  }

  return "";
}

console.log(firstNonRepeatingLetter("abba"));
