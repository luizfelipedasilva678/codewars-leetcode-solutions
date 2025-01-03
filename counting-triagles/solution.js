/**
 * @param {number[]} V
 */
function countingTriangles(V) {
  let ways = 0;

  for (let i = 0; i < V.length; i++) {
    for (let j = i + 1; j < V.length; j++) {
      for (let k = j + 1; k < V.length; k++) {
        if (V[i] < V[j] + V[k] && V[j] < V[i] + V[k] && V[k] < V[j] + V[i])
          ways++;
      }
    }
  }

  return ways;
}
