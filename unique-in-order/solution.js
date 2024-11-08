var uniqueInOrder = function (iterable) {
  const arr = [];

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i - 1] && iterable[i - 1] === iterable[i]) {
      continue;
    }

    arr.push(iterable[i]);
  }

  return arr;
};
