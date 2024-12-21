function getLargerNumbers(a, b) {
  const newArr = [];

  for (const [idx, value] of a.entries()) {
    if (value > b[idx]) {
      newArr.push(value);
    } else {
      newArr.push(b[idx]);
    }
  }

  return newArr;
}
