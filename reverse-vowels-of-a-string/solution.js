/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const identifiedVowels = new Map();

  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i].toLocaleLowerCase())) identifiedVowels.set(i, s[i]);
  }

  const reversedVowels = Array.from(identifiedVowels)
    .map((entry) => entry[1])
    .reverse();

  let _s = "";
  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i].toLocaleLowerCase())) {
      _s += reversedVowels[0];
      reversedVowels.shift();
    } else {
      _s += s[i];
    }
  }

  return _s;
};

console.log(reverseVowels("IceCreAm"));
