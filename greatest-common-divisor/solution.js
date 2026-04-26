/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function (str1, str2) {
  const prefixLength = gcd(str1.length, str2.length);

  let shortestStr, longestStr;

  if (str1.length <= str2.length) {
    shortestStr = str1;
    longestStr = str2;
  } else {
    shortestStr = str2;
    longestStr = str1;
  }

  for (let i = 0; i < shortestStr.length; i++) {
    const prefix = shortestStr.substring(0, i + 1);

    if (
      "".padStart(longestStr.length, prefix) === longestStr &&
      "".padStart(shortestStr.length, prefix) === shortestStr &&
      prefix.length === prefixLength
    ) {
      return prefix;
    }
  }

  return "";
};

function gcd(n1, n2) {
  let _n1 = Math.abs(n1);
  let _n2 = Math.abs(n2);

  while (_n2 !== 0) {
    let result = Math.trunc(_n1 % _n2);
    _n1 = _n2;
    _n2 = result;
  }

  return _n1;
}

console.log(gcdOfStrings("AAAAAAAAA", "AAACCC"));
