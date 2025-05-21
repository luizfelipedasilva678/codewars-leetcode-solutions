/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (
  l1,
  l2,
  resultList = new ListNode(),
  carry = 0
) {
  if (!l1 && !l2) {
    if (carry) resultList.next = new ListNode(carry);
    return resultList;
  }

  let sum;
  let newNode = new ListNode();
  if (l1 && l2) {
    sum = l1.val + l2.val + carry;
    newNode.val = sum % 10;
    resultList.next = newNode;
    addTwoNumbers(
      l1.next,
      l2.next,
      newNode,
      sum >= 10 ? Math.floor(sum / 10) : 0
    );
  } else if (l1) {
    sum = l1.val + carry;
    newNode.val = sum % 10;
    resultList.next = newNode;
    addTwoNumbers(l1.next, l2, newNode, sum >= 10 ? Math.floor(sum / 10) : 0);
  } else if (l2) {
    sum = l2.val + carry;
    newNode.val = sum % 10;
    resultList.next = newNode;
    addTwoNumbers(l1, l2.next, newNode, sum >= 10 ? Math.floor(sum / 10) : 0);
  }

  return newNode;
};
