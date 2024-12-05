/**
 *
 * @param {string[]} names
 */
function likes(names) {
  if (!names.length) return "no one likes this";

  if (names.length <= 3) {
    if (names[0] && names[1] && names[2]) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    }

    if (names[0] && names[1]) {
      return `${names[0]} and ${names[1]} like this`;
    }

    return `${names[0]} likes this`;
  }

  return `${names[0]}, ${names[1]} and ${
    names.slice(2).length
  } others like this`;
}
