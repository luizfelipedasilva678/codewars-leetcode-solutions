function findOdd(A) {
  for (const outerElement of A) {
    let quantity = 0;

    for (const innerElement of A) {
      if (outerElement === innerElement) quantity++;
    }

    if (quantity % 2 !== 0) return outerElement;
  }

  return 0;
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
