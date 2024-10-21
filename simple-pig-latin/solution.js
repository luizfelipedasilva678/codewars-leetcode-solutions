function pigIt(str) {
  const regex = new RegExp(/[A-Za-z]+/, "g");
  const matches = str.matchAll(regex);
  const newWords = [];
  const symbols = str
    .split(new RegExp(/([A-Za-z]+)|(\s|,|!|\*|\.)/, "g"))
    .filter(Boolean);

  for (const match of matches) {
    const letters = match[0].split("");
    letters.push(letters[0]);
    letters.shift();
    letters.push("a");
    letters.push("y");
    newWords.push(letters.join(""));
  }

  let newWordsIdx = 0;
  for (let i = 0; i < symbols.length; i++) {
    if (regex.exec(symbols[i])) {
      symbols[i] = newWords[newWordsIdx++];
    }
  }

  return symbols.join("");
}

/*
const a = [1, 2, 3, 4, 5];

function shiftToRight(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i > 1) {
      newArr[i + 2] = arr[i];
    } else {
      newArr[i] = arr[i];
    }
  }
}

shiftToRight(a);
*/
