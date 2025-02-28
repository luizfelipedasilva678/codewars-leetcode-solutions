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

const primes = generatePrimes(3000000);

function f(n) {
  let maxEvenDigits = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];
  for (const prime of primes) {
    if (prime >= n) break;

    const evenDigits = String(prime)
      .split("")
      .filter((v) => Number(v) % 2 === 0).length;

    if (evenDigits >= maxEvenDigits[0] && prime > maxEvenDigits[1]) {
      maxEvenDigits[0] = evenDigits;
      maxEvenDigits[1] = prime;
    }
  }

  return maxEvenDigits[1];
}
