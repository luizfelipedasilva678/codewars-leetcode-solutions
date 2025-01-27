function narcissistic(value) {
  let sum = 0;

  for (const digit of String(value).split("")) {
    sum += Math.pow(Number(digit), String(value).length);
  }

  return sum === value;
}
