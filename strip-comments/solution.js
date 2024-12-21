/**
 *
 * @param {string} text
 * @param {string[]} markers
 */
function solution(text, markers) {
  const newText = [];
  let currentPos = 0;

  while (currentPos < text.length) {
    if (markers.includes(text[currentPos])) {
      while (text[currentPos] !== "\n" && currentPos < text.length) {
        currentPos++;
      }
    }

    if (text[currentPos]) {
      newText.push(text[currentPos]);
      currentPos++;
    }
  }

  const textWithWhiteSpacesStriped = newText.filter((char, index, arr) => {
    if (char === " " && arr[index + 1] === "\n") {
      return undefined;
    }
    return char;
  });

  let auxIdx = textWithWhiteSpacesStriped.length - 1;
  while (textWithWhiteSpacesStriped[auxIdx] === " ") {
    textWithWhiteSpacesStriped.pop();
    auxIdx--;
  }

  return textWithWhiteSpacesStriped.join("");
}
