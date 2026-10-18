/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  const chars = s.split("");

  for (let i = chars.length - 1; i >= 0; i--) {
    const leftNumeral = chars[i - 1];

    if (leftNumeral && numerals[leftNumeral] < numerals[chars[i]]) {
      sum += numerals[chars[i]] - numerals[leftNumeral];
      i -= 1;
    } else {
      sum += numerals[chars[i]];
    }
  }

  return sum;
};

console.log(romanToInt("MCMXCIV"));
