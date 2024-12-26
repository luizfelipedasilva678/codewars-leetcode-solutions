/**
 *
 * @param {string[][]} tablet
 */
function isSatorSquare(tablet) {
  /**
   *
   * @param {string} wordToFind
   * @param {string[][]} tablet
   * @returns boolean
   */
  function testTopToBottom(wordToFind, tablet) {
    let word = "";

    for (let i = 0; i < tablet.length; i++) {
      word = "";
      for (let j = 0; j < tablet.length; j++) {
        word += tablet[j][i];
      }

      if (word === wordToFind) return true;
    }

    return false;
  }

  /**
   *
   * @param {string} wordToFind
   * @param {string[][]} tablet
   * @returns boolean
   */
  function testBottomToTop(wordToFind, tablet) {
    let word = "";

    for (let i = 0; i < tablet.length; i++) {
      word = "";
      for (let j = tablet.length - 1; j >= 0; j--) {
        word += tablet[j][i];
      }

      if (word === wordToFind) return true;
    }

    return false;
  }

  /**
   *
   * @param {string} wordToFind
   * @param {string[][]} tablet
   * @returns boolean
   */
  function testRightToLeft(wordToFind, tablet) {
    let word = "";

    for (let i = 0; i < tablet.length; i++) {
      word = "";
      for (let j = tablet.length - 1; j >= 0; j--) {
        word += tablet[i][j];
      }

      if (word === wordToFind) return true;
    }

    return false;
  }

  for (const arr of tablet) {
    const word = arr.join("");

    if (
      !testBottomToTop(word, tablet) ||
      !testRightToLeft(word, tablet) ||
      !testTopToBottom(word, tablet)
    )
      return false;
  }

  return true;
}

console.log(
  isSatorSquare([
    ["P", "A", "R", "T"],
    ["A", "G", "A", "R"],
    ["R", "A", "G", "A"],
    ["T", "R", "A", "M"],
  ])
);
