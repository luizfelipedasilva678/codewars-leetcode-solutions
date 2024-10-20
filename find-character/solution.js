function findCharacters(matrix) {
  const characterCount = {};

  for (const char of matrix) {
    if (char === "\n") continue;

    if (!characterCount[char]) characterCount[char] = 1;
    else characterCount[char]++;
  }

  let smallestCount = Infinity;
  for (const char in characterCount) {
    if (characterCount[char] < smallestCount)
      smallestCount = characterCount[char];
  }

  const mostCommonChars = Object.keys(characterCount)
    .filter((char) => characterCount[char] === smallestCount)
    .join("");

  const sortedLetters = mostCommonChars.match(/[a-zA-z]/g) || [];
  const sortedNumbers = mostCommonChars.match(/[0-9]/g) || [];

  return sortedLetters.sort().join("") + sortedNumbers.sort().join("");
}

console.log(findCharacters(matrix));
