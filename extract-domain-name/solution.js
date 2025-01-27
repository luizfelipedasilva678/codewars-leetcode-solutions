/**
 *
 * @param {string} url
 * @returns {string}
 */
function domainName(url) {
  const pattern = new RegExp(/([a-zA-Z0-9\-]+\.)/g);
  let execArray = null;

  do {
    execArray = pattern.exec(url);

    if (execArray[0] === "www.") continue;

    if (execArray) {
      return execArray[0].replaceAll(".", "");
    }
  } while (execArray);
}

console.log(domainName("www.xakep.ru"));
