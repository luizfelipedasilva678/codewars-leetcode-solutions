/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (
  s,
  letter = s[0],
  index = 0,
  reversedIdx = s.length - 1
) {
  if (index > s.length - 1) return;

  const newIdx = reversedIdx;

  reverseString(s, s[++index], index, --reversedIdx);

  s[newIdx] = letter;
};

const s = ["h", "e", "l", "l", "o"];

reverseString(s);

console.log(s);
