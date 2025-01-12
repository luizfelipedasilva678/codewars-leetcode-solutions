function reverseWords(str) {
  const pattern = new RegExp(/([\w,!?_\.]+)|(\s+)/, "g");
  let execArray = null;
  const newStr = [];

  do {
    execArray = pattern.exec(str);

    if (execArray) {
      newStr.push(execArray[0].split("").reverse().join(""));
    }
  } while (execArray);

  return newStr.join("");
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
