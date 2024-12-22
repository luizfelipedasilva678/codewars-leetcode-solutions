function nextPal(val) {
  function isPalindrome(val) {
    return String(val).split("").reverse().join("") == String(val);
  }

  let aux = val + 1;
  while (true) {
    if (isPalindrome(aux)) return aux;
    aux++;
  }
}

console.log(nextPal(11));
