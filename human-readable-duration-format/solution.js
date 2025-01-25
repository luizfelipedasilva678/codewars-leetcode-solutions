/**
 *
 * @param {number} _seconds
 * @returns string
 */
function formatDuration(_seconds) {
  if (_seconds === 0) return "now";

  let formattedString = "";
  const ONE_YEAR_IN_SECONDS = 31536000;
  const ONE_DAY_IN_SECONDS = 86400;
  const ONE_HOUR_IN_SECONDS = 3600;
  const ONE_MINUTE_IN_SECONDS = 60;

  const years = Math.floor(_seconds / ONE_YEAR_IN_SECONDS);
  const days = Math.floor(
    (_seconds - years * ONE_YEAR_IN_SECONDS) / ONE_DAY_IN_SECONDS
  );
  const hours = Math.floor(
    (_seconds - years * ONE_YEAR_IN_SECONDS - days * ONE_DAY_IN_SECONDS) /
      ONE_HOUR_IN_SECONDS
  );
  const minutes = Math.floor(
    (_seconds -
      years * ONE_YEAR_IN_SECONDS -
      days * ONE_DAY_IN_SECONDS -
      hours * ONE_HOUR_IN_SECONDS) /
      ONE_MINUTE_IN_SECONDS
  );
  const seconds =
    _seconds -
    years * ONE_YEAR_IN_SECONDS -
    days * ONE_DAY_IN_SECONDS -
    hours * ONE_HOUR_IN_SECONDS -
    minutes * ONE_MINUTE_IN_SECONDS;

  function addPlural(n) {
    if (n === 1) return "";

    return "s";
  }

  const durationInfos = [
    { duration: years, text: `${years} year${addPlural(years)}` },
    { duration: days, text: `${days} day${addPlural(days)}` },
    { duration: hours, text: `${hours} hour${addPlural(hours)}` },
    { duration: minutes, text: `${minutes} minute${addPlural(minutes)}` },
    { duration: seconds, text: `${seconds} second${addPlural(seconds)}` },
  ].filter((v) => v.duration > 0);

  if (durationInfos.length === 5) {
    formattedString = `${durationInfos[0].text}, ${durationInfos[1].text}, ${durationInfos[2].text}, ${durationInfos[3].text} and ${durationInfos[4].text}`;
  } else if (durationInfos.length === 4) {
    formattedString = `${durationInfos[0].text}, ${durationInfos[1].text}, ${durationInfos[2].text} and ${durationInfos[3].text}`;
  } else if (durationInfos.length === 3) {
    formattedString = `${durationInfos[0].text}, ${durationInfos[1].text} and ${durationInfos[2].text}`;
  } else if (durationInfos.length === 2) {
    formattedString = `${durationInfos[0].text} and ${durationInfos[1].text}`;
  } else {
    formattedString = `${durationInfos[0].text}`;
  }

  return formattedString;
}

console.log(formatDuration(63072000));
