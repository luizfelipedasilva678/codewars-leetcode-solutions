/**
 * @param {string[][]} paths
 * @return {string}
 */
const destCity = function (paths) {
  const cities = new Set(paths.flat());

  for (const [cityA] of paths) {
    if (cities.has(cityA)) {
      cities.delete(cityA);
    }
  }

  return Array.from(cities.values()).at(0);
};

console.log(
  destCity([
    ["pYyNGfBYbm", "wxAscRuzOl"],
    ["kzwEQHfwce", "pYyNGfBYbm"],
  ]),
);
