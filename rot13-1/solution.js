/**
 *
 * @param {string} message
 * @returns {string}
 */
function rot13(message) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let newMessage = "";

  /**
   *
   * @param {string} char
   * @returns {boolean}
   */
  function isUpperCase(char) {
    return char === char.toUpperCase();
  }

  for (const char of message) {
    if (char.match(/[a-zA-Z]/g)) {
      const idx = alphabet.findIndex((v) => v === char.toLowerCase());
      const letter =
        idx + 13 > alphabet.length - 1
          ? alphabet[idx % 13]
          : alphabet[idx + 13];

      newMessage += isUpperCase(char) ? letter.toUpperCase() : letter;
    } else {
      newMessage += char;
    }
  }

  return newMessage;
}
