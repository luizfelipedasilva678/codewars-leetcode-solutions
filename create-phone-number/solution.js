function createPhoneNumber(numbers) {
  const part1 = numbers.slice(0, 3).join("");
  const part2 = numbers.slice(3, 6).join("");
  const part3 = numbers.slice(6).join("");

  return `(${part1}) ${part2}-${part3}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
