function generateHashtag(str) {
  if (!str.replace(/\s/g, "")) return false;

  const capitalizedWords = str
    .split(" ")
    .map((word) => capitalizeFirstLetter(word));
  const hashtag = "#" + capitalizedWords.join("");
  return hashtag.length > 140 || hashtag.length === 0 ? false : hashtag;

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
