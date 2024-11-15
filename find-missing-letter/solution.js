/**
 *
 * @param {string[]} array
 * @returns
 */
function findMissingLetter(array) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const isUpperCase = array[0] === array[0].toLocaleUpperCase();
  const letters = array.map((letter) => letter.toLowerCase());

  let previousIdx = null;
  for (const letter of letters) {
    const alphabetIdx = alphabet.indexOf(letter);

    if (previousIdx !== null && previousIdx + 1 !== alphabetIdx) {
      return isUpperCase
        ? alphabet[previousIdx + 1].toLocaleUpperCase()
        : alphabet[previousIdx + 1];
    }

    previousIdx = alphabetIdx;
  }

  return "";
}
