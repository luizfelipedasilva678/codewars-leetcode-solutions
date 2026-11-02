/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  return t.split("").toSorted().join("") === s.split("").toSorted().join("");
};

console.log(isAnagram("rat", "car"));
