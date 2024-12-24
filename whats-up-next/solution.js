/**
 *
 * @param {any[]} xs
 * @param {any} item
 */
function nextItem(xs, item) {
  if (xs.toString() === "[object Generator]") {
    let foundItem = false;

    while (true) {
      const value = xs.next().value;

      if (value == undefined || value == null) return undefined;

      if (foundItem) return value;

      if (value == item) {
        foundItem = true;
      }
    }
  }

  const sequence = Array.from(xs);

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] === item) {
      return sequence[i + 1];
    }
  }

  return undefined;
}
