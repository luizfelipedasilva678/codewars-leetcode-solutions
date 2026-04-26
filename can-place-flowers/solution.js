/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function (flowerbed, n) {
  let _n = n;

  if (flowerbed.length === 1 && flowerbed[0] === 0) return true;

  for (let i = 0; i < flowerbed.length; i++) {
    if (_n === 0) return true;

    if (!flowerbed[i - 1] && flowerbed[i + 1] === 0 && flowerbed[i] === 0) {
      flowerbed[i] = 1;
      _n--;
    }

    if (!flowerbed[i + 1] && flowerbed[i - 1] === 0 && flowerbed[i] === 0) {
      flowerbed[i] = 1;
      _n--;
    }

    if (flowerbed[i - 1] && flowerbed[i + 1]) {
      if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
        flowerbed[i] = 1;
        _n--;
      }
    }
  }

  return _n === 0;
};

const flowerbed = [1, 0, 0, 0, 1];

console.log(canPlaceFlowers(flowerbed, 2));

console.log(flowerbed);
