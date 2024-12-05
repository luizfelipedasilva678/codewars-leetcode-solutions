/**
 *
 * @param {Object<string, number>} recipe
 * @param {Object<string, number>} available
 * @returns number
 */
function cakes(recipe, available) {
  const qtdCakesPerIngredient = [];

  for (const [key] of Object.entries(recipe)) {
    if (!(key in available)) return 0;

    qtdCakesPerIngredient.push(Math.trunc(available[key] / recipe[key]));
  }

  return Math.min(...qtdCakesPerIngredient);
}
