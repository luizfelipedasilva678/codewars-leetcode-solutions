/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const stack = [];

  for (const token of s.split("")) {
    if (token === "(" || token === "[" || token === "{") {
      stack.push(token);
    } else if (
      stack.pop() !== (token === ")" ? "(" : token === "]" ? "[" : "{")
    ) {
      return false;
    }
  }

  return stack.length === 0;
}
