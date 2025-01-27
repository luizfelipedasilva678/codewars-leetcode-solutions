function permutations(string) {
  const permutations = new Set();
  const list = String(string).split("");

  if (list.length === 1) return list;

  function permute(i, length) {
    if (i === length) return;

    for (let j = i; j <= length; j++) {
      swap(i, j);
      permutations.add(list.join(""));
      permute(i + 1, length);
      swap(i, j);
    }
  }

  function swap(idx1, idx2) {
    const temp = list[idx1];
    list[idx1] = list[idx2];
    list[idx2] = temp;
  }

  permute(0, list.length - 1);

  return Array.from(permutations.values());
}
