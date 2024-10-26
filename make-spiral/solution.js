function spiralize(size) {
  const matrix = Array.from({ length: size }, () => []);
  const isEven = size % 2 === 0;
  const middleIndex = isEven ? size / 2 - 1 : Math.floor(size / 2);
  let rowIndex = 0;
  let colIndex = 0;
  let value = 1;

  console.log(middleIndex);

  while (matrix.flat().length !== size * size) {
    if (
      colIndex === rowIndex &&
      (colIndex < middleIndex || (isEven && colIndex <= middleIndex))
    ) {
      while (colIndex + rowIndex !== size - 1) {
        matrix[rowIndex][colIndex] = value;
        colIndex++;
      }
      continue;
    }

    if (
      colIndex === rowIndex &&
      (colIndex > middleIndex || (isEven && colIndex >= middleIndex))
    ) {
      while (colIndex + rowIndex !== size - 1) {
        matrix[rowIndex][colIndex] = value;
        colIndex--;
      }
      continue;
    }

    if (colIndex + rowIndex === size - 1 && colIndex > middleIndex) {
      while (colIndex !== rowIndex) {
        matrix[rowIndex][colIndex] = value;
        rowIndex++;
      }
      continue;
    }

    if (colIndex + rowIndex === size - 1 && colIndex < middleIndex) {
      while (rowIndex - colIndex !== 1) {
        matrix[rowIndex][colIndex] = value;
        rowIndex--;
      }
      continue;
    }

    if (rowIndex - colIndex === 1 && colIndex < middleIndex) {
      if (value === 0) value = 1;
      else value = 0;

      while (rowIndex !== colIndex) {
        matrix[rowIndex][colIndex] = value;
        colIndex++;
      }
      continue;
    }

    matrix[rowIndex][colIndex] = value;
  }

  if (isEven) {
    matrix[middleIndex + 1][middleIndex] = 0;
  }

  return matrix;
}
