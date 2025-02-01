/**
 *
 * @param {string} str
 * @returns {string}
 */
function averageString(str) {
  if (str.length === 0) return "n/a";

  const numbers = str.split(" ");
  const dict = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let sum = 0;
  for (const number of numbers) {
    if (!(number in dict)) return "n/a";

    sum += dict[number];
  }

  return Object.entries(dict).find(
    (v) => v[1] === Math.floor(sum / numbers.length)
  )[0];
}

console.log(averageString("zero nine five two"));
