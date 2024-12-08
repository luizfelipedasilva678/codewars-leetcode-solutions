/**
 *
 * @param {string} string
 * @returns
 */
function solution(string) {
  const newString = [];

  for (const [index, char] of string.split("").entries()) {
    if (
      string[index + 1] &&
      string[index + 1].toUpperCase() === string[index + 1]
    ) {
      newString.push(char);
      newString.push(" ");
      continue;
    }

    newString.push(char);
  }

  return newString.join("");
}
