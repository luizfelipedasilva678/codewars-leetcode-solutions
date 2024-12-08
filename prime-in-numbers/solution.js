/**
 *
 * @param {number} limit
 * @returns number[]
 */
function generatePrimes(limit) {
  const numbers = [];
  const primes = [];

  for (let i = 0; i <= limit; i++) {
    numbers[i] = -1;
  }

  for (let i = 2; i <= limit; i++) {
    if (numbers[i] === -1) {
      numbers[i] = 1;
      primes.push(i);

      for (let j = i + i; j <= limit; j += i) {
        numbers[j] = 0;
      }
    }
  }

  return primes;
}

const primes = generatePrimes(100000000);

/**
 *
 * @param {number} n
 */
function primeFactors(n) {
  const divisors = [];

  let aux = n;
  let idx = 0;
  while (aux !== 1) {
    while (aux % primes[idx] === 0) {
      aux /= primes[idx];
      divisors.push(primes[idx]);
    }

    idx++;
  }

  let factorsCount = {};
  for (const divisor of divisors) {
    if (factorsCount[divisor]) {
      factorsCount[divisor]++;
    } else {
      factorsCount[divisor] = 1;
    }
  }

  let resultStr = "";
  for (const [key, value] of Object.entries(factorsCount)) {
    resultStr += value > 1 ? `(${key}**${value})` : `(${key})`;
  }

  return resultStr;
}
