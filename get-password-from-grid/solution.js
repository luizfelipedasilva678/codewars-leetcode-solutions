/**
 *
 * @param {string[][]} grid
 * @param {string[]} directions
 * @returns {string}
 */
function getPassword(grid, directions) {
  const xPos = getXPos();

  if (!xPos) throw new Error("Unable to find 'x'");

  const [rowIdx, colIdx] = xPos;

  let currRow = rowIdx,
    currCol = colIdx,
    str = "";
  for (const direction of directions) {
    switch (direction.replace("T", "")) {
      case "down": {
        currRow += 1;
        break;
      }
      case "up": {
        currRow -= 1;
        break;
      }
      case "left": {
        currCol -= 1;
        break;
      }
      case "right": {
        currCol += 1;
        break;
      }
    }

    if (shouldConsume(direction)) {
      str += grid[currRow][currCol];
    }
  }

  /**
   *
   * @param {string} direction
   * @returns {boolean}
   */
  function shouldConsume(direction) {
    return direction.endsWith("T");
  }

  function getXPos() {
    for (const [idx, row] of grid.entries()) {
      const xCol = row.findIndex((v) => v === "x");

      if (xCol !== -1) return [idx, xCol];
    }

    return undefined;
  }

  return str;
}
