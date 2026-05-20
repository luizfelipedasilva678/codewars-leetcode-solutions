/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
  if (s === "") return true;

  let foundChars = 0;
  let j = 0;

  for (let i = 0; i < t.length; i++) {
    if (s[j] === t[i]) {
      foundChars++;
      j++;
    }
  }

  if (foundChars === s.length) return true;

  return false;
};

console.log(isSubsequence("b", "c"));
