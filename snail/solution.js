function snail(matrix) {
  if (!matrix.flat().length) return [];

  const newArr = [];
  const n = matrix.length;
  const isEven = n % 2 === 0;
  const middle = isEven ? n / 2 - 1 : Math.floor(n / 2);
  let row = 0;
  let col = 0;
  while (newArr.length !== n * n) {
    if (col === row && (col < middle || (isEven && col <= middle))) {
      while (col + row !== n - 1) {
        newArr.push(matrix[row][col]);
        col++;
      }
      continue;
    }

    if (col === row && (col > middle || (isEven && col >= middle))) {
      while (col + row !== n - 1) {
        newArr.push(matrix[row][col]);
        col--;
      }
      continue;
    }

    if (col + row === n - 1 && col > middle) {
      while (col !== row) {
        newArr.push(matrix[row][col]);
        row++;
      }
      continue;
    }

    if (col + row === n - 1 && col < middle) {
      while (row - col !== 1) {
        newArr.push(matrix[row][col]);
        row--;
      }
      continue;
    }

    if (row - col === 1 && col < middle) {
      while (row !== col) {
        newArr.push(matrix[row][col]);
        col++;
      }
      continue;
    }

    newArr.push(matrix[row][col]);
  }

  return newArr;
}
