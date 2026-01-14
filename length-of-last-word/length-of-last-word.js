/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  return s.split(" ").findLast(Boolean).length;
};
