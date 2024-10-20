function solution(str, ending) {
  if (ending == "" || str.slice(-ending.length) === ending) return true;

  return false;
}
