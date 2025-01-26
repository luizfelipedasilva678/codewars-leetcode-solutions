/**
 * @param {number[]} list
 * @returns {string}
 */
function solution(list) {
  let str = [],
    idx = 0;

  while (idx < list.length) {
    let shouldContinue = true;
    const range = [];

    while (shouldContinue) {
      range.push(list[idx]);
      shouldContinue = list[idx] + 1 === list[idx + 1];
      idx++;
    }

    if (range.length >= 3) {
      str.push(`${range[0]}-${range[range.length - 1]}`);
      continue;
    }

    str.push(range.join(","));
  }

  return str.join(",");
}
