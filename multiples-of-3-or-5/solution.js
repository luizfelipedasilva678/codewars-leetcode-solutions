function solution(number) {
  if (number < 0 || number == 0) return 0;

  let sum = 0,
    count = number,
    i;

  for (i = 1; i < count; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }

  return sum;
}
