function oddOrEven(array) {
  return array.reduce((p, c) => p + c, 0) % 2 == 0 ? "even" : "odd";
}
