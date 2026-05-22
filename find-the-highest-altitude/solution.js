/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = function (gain) {
  const prefix = [];

  for (let i = 0; i < gain.length; i++) {
    prefix[i] = gain[i] + (prefix[i - 1] ?? 0);
  }

  let aux = 0;
  for (let i = 0; i < prefix.length; i++) {
    if (prefix[i] > aux) {
      aux = prefix[i];
    }
  }

  return aux;
};

console.log(largestAltitude([52, -91, 72]));
