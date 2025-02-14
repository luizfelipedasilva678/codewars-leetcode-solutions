function productFib(prod) {
  let prev = 0,
    next = 1;

  while (prev * next < prod) {
    const curr = prev + next;
    prev = next;
    next = curr;
  }

  return [prev, next, prev * next === prod];
}
