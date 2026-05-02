/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
  const pattern = new RegExp("[aeiouAEIOU]");
  let left = 0,
    right = s.length - 1;

  let _s = Array.from(s);

  while (left < right) {
    if (pattern.test(s[left])) {
      if (pattern.test(s[right])) {
        let aux = _s[right];
        _s[right] = _s[left];
        _s[left] = aux;

        left++;
      }

      right--;
    } else {
      left++;
    }
  }

  return _s.join("");
};

console.log(reverseVowels("IceCreAm"));
