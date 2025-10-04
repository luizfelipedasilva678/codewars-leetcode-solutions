/**
 *
 * @param {number} nFloors
 */
function towerBuilder(nFloors) {
  const quantityOfSlots = nFloors * 2 - 1;
  const tower = [];
  let firstIdx = Math.floor(quantityOfSlots / 2),
    finalIdx = firstIdx;

  for (let i = 1; i <= nFloors; i++) {
    let blocks = "";
    for (let j = 0; j < quantityOfSlots; j++) {
      if (j >= firstIdx && j <= finalIdx) {
        blocks += "*";
      } else {
        blocks += " ";
      }
    }
    tower.push(blocks);
    firstIdx -= 1;
    finalIdx += 1;
  }

  return tower;
}

console.log(towerBuilder(20));
