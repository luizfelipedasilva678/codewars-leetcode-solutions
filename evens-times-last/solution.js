function evenLast(numbers) {
  if (!numbers.length) return 0;

  let sum = 0;
  for (const [index, number] of numbers.entries()) {
    if (index % 2 === 0) sum += number;
  }

  return sum * numbers[numbers.length - 1];
}
