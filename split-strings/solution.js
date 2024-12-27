/**
 *
 * @param {string} str
 */
function solution(str) {
  const result = [];
  const pattern = new RegExp(/\w{1,2}/, "g");
  let execArray = null;

  do {
    execArray = pattern.exec(str);

    if (execArray) {
      result.push(execArray.at(0));
    }
  } while (execArray);

  const lastIdx = result.length - 1;

  if (result.at(lastIdx) && result.at(lastIdx).length < 2)
    result[lastIdx] += "_";

  return result;
}
