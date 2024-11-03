function squareDigits(num) {
  const numbers = String(num).split("");
  const newNumbers = [];

  for (const number of numbers) {
    newNumbers.push(String(Math.pow(Number(number), 2)));
  }

  return Number(newNumbers.join(""));
}
