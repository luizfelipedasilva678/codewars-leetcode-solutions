function countSheeps(sheeps) {
  let sum = 0;
  for (const sheep of sheeps) {
    if (sheep) {
      sum += 1;
    }
  }

  return sum;
}
