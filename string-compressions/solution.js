/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = function (chars) {
  const map = new Map();
  let group = 0;

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    const key = `${char}${group}`;

    if (chars[i + 1] !== char) {
      group = group + 1;
    }

    if (map.has(key)) {
      const newValue = map.get(key);
      newValue.quantity = newValue.quantity + 1;

      map.set(key, newValue);
    } else {
      map.set(key, { quantity: 1, first: i });
    }
  }

  chars.length = 0;

  for (const entry of map) {
    const [key, { quantity }] = entry;
    const [letter] = key.split("");

    if (quantity === 1) {
      chars.push(letter);

      continue;
    }

    chars.push(
      letter,
      ...(quantity < 10 ? [String(quantity)] : String(quantity).split("")),
    );
  }

  return chars.length;
};
