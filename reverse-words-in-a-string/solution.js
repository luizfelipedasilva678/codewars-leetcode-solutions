/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  const words = s.split(" ").filter(Boolean);
  let right = words.length - 1,
    left = 0;

  while (left < right) {
    let aux = words[left];
    words[left] = words[right];
    words[right] = aux;

    left++;
    right--;
  }

  return words.join(" ");
};

console.log(reverseWords("a good   example"));
