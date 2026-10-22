/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
  const numStr = String(num);
  const symbols = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  let aux = num;
  let output = "";
  let divisor = Math.pow(10, numStr.length - 1);
  let idx;
  const values = Object.keys(symbols).map(Number);
  const nums = [];

  while (aux !== 0) {
    nums.push(Math.trunc(aux / divisor) * divisor);
    aux = aux % divisor;
    divisor = divisor / 10;
  }

  for (const num of nums) {
    aux = num;
    idx = values.length - 1;

    while (aux !== 0) {
      const newValue = aux - values[idx];

      if (newValue >= 0) {
        output += symbols[values[idx]];
        aux = newValue;
      } else {
        idx -= 1;
      }
    }
  }

  return output;
};

console.log(intToRoman(1994));
