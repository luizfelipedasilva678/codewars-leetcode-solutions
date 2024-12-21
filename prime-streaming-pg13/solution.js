class Primes {
  static *stream() {
    const primes = Primes.generatePrimesStream(16000000);

    for (const prime of primes) {
      yield prime;
    }
  }

  static generatePrimesStream(limit) {
    const isPrime = Array(limit + 1).fill(true);
    const primes = [];

    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= limit; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= limit; j += i) {
          isPrime[j] = false;
        }
      }
    }

    for (let i = 2; i <= limit; i++) {
      if (isPrime[i]) {
        primes.push(i);
      }
    }

    return primes;
  }
}
