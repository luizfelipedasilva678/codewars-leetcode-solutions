function integrate(coefficient, exponent) {
  return `${Math.floor(coefficient / (exponent + 1))}x^${exponent + 1}`;
}
