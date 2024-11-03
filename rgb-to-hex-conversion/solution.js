function roundValueToRGB(value) {
  if (value < 0) return 0;

  if (value > 255) return 255;

  return value;
}

function rgb(r, g, b) {
  const hexRed = roundValueToRGB(r).toString(16).padStart(2, "0");
  const hexGreen = roundValueToRGB(g).toString(16).padStart(2, "0");
  const hexBlue = roundValueToRGB(b).toString(16).padStart(2, "0");

  return `${hexRed}${hexGreen}${hexBlue}`.toLocaleUpperCase();
}
