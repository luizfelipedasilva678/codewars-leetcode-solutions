/**
 *
 * @param {string} s
 * @returns
 */
function getMiddle(s) {
  if (s.length % 2 === 0) {
    return `${s[s.length / 2]}${s[s.length / 2 + 1]}`;
  }

  return s[s.length / 2];
}
