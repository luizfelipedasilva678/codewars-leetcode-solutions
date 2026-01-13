/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head, currentNode = new ListNode()) {
  if (!head) return null;

  console.log("Before call", head, currentNode);
  const node = new ListNode();
  const newHead = reverseList(head.next, node);
  currentNode.val = head.val;
  console.log("After call", head, currentNode);

  if (newHead) {
    if (!newHead.next) {
      newHead.next = currentNode;
    } else {
      node.next = currentNode;
    }
  } else {
    return currentNode;
  }

  return newHead;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let head = new ListNode();
let curr = head;

for (let i = 1; i <= 2; i++) {
  const node = new ListNode();

  curr.val = i;
  curr.next = node;
  curr = node;
}

const reversedList = reverseList(head);
curr = reversedList;

console.log(curr);

while (curr) {
  if (curr.val) {
    console.log(curr.val);
  }

  curr = curr.next;
}
