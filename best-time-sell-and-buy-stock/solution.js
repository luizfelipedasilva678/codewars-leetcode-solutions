/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let minPrice = prices[0];
  let profit = 0;
  for (const price of prices) {
    if (price < minPrice) minPrice = price;

    if (price - minPrice > profit) {
      profit = price - minPrice;
    }
  }

  return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
