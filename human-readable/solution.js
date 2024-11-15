function humanReadable(s) {
  let hours;
  let minutes;
  let seconds;

  hours = Math.floor(s / 3600);
  minutes = Math.floor((s - hours * 3600) / 60);
  seconds = s - hours * 3600 - minutes * 60;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

console.log(humanReadable(86400));
