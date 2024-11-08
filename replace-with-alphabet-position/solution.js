/**
 *
 * @param {string} text
 */
function alphabetPosition(text) {
  let newText = "";

  for (const char of text) {
    if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
      newText += ` ${char.charCodeAt() - 64}`;
    }

    if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
      newText += ` ${char.charCodeAt() - 96}`;
    }
  }

  return newText.trimStart();
}
