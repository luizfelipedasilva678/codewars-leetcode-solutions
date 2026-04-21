/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {
  let end = Math.min(word1.length, word2.length);
  let longestWord = word1.length > word2.length ? word1 : word2;
  let output = "";

  for (let i = 0; i < end; i++) {
    output += `${word1[i]}${word2[i]}`;
  }

  output += longestWord.slice(end);

  return output;
};

console.log(mergeAlternately("ab", "pqrs"));
