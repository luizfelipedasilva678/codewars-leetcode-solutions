class TreeNode {
  value;
  left;
  right;

  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function arrayToTree(array) {
  if (!array.length) return undefined;

  /**
   *
   * @param {number} idx
   */
  function insertNode(idx) {
    if (array[idx] !== undefined) {
      const node = new TreeNode(array[idx]);
      node.left = insertNode(2 * idx + 1);
      node.right = insertNode(2 * idx + 2);
      return node;
    }

    return undefined;
  }

  return insertNode(0);
}

console.log(arrayToTree([17, 0, -4, 3, 15]));
