/**
 * @param {string} text
 */
function duplicateCount(text) {
  const letters = text.split("").map((l) => l.toLocaleLowerCase());

  const duplicates = letters.reduce((prevValue, currValue, currIndex) => {
    if (letters.find((l, idx) => l === currValue && currIndex !== idx)) {
      prevValue.add(currValue);
    }

    return prevValue;
  }, new Set());

  return duplicates.size;
}

duplicateCount("indivisibility");
