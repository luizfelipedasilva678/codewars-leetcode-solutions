function spinWords(str) {
  const pattern = new RegExp(/([\w,!?_\.]+)|(\s+)/, "g");
  let execArray = null;
  const newStr = [];

  do {
    execArray = pattern.exec(str);

    if (execArray) {
      if (execArray[0].length >= 5) {
        newStr.push(execArray[0].split("").reverse().join(""));
        continue;
      }

      newStr.push(execArray[0]);
    }
  } while (execArray);

  return newStr.join("");
}
