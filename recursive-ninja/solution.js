function chirp(n, chirps = []) {
  if (n === 0)
    return chirps.reduce((p, c, i) => p + (i === 0 ? "" : "-") + c, "");

  chirps.push("chirp");

  return chirp(n - 1, chirps);
}

console.log(chirp(5));
