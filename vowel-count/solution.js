function getCount(str) {
  let quantityVowels = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (const char of str) {
    if (vowels.includes(char)) {
      quantityVowels++;
    }
  }

  return quantityVowels;
}
