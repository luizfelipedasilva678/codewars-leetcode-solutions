function moveZeros(arr) {
  return [...arr.filter((v) => v !== 0), ...arr.filter((v) => v === 0)];
}
