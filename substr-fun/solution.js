function nthChar(words) {
  let str = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    str += word[i];
  }

  return str;
}
