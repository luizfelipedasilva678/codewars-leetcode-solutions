/**
 * @param {string} text
 */
function getDuplicates(text) {
  const letters = text.split("").map((l) => l.toLocaleLowerCase());

  const duplicates = letters.reduce((prevValue, currValue, currIndex) => {
    if (letters.find((l, idx) => l === currValue && currIndex !== idx)) {
      prevValue.add(currValue);
    }

    return prevValue;
  }, new Set());

  return duplicates;
}

/**
 * @param {string} word
 */
function duplicateEncode(word) {
  const duplicates = getDuplicates(word);
  const letters = word.split("").map((l) => l.toLocaleLowerCase());
  let newStr = "";

  for (const letter of letters) {
    if (duplicates.has(letter)) {
      newStr += ")";
      continue;
    }

    newStr += "(";
  }

  return newStr;
}
