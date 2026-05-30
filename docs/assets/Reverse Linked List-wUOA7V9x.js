const n=`# Reverse Linked List\r
\r
## Problem Statement\r
Reverse a singly linked list and return the reversed list.\r
\r
## Examples\r
\r
\`\`\`txt\r
Input: head = [1,2,3,4,5]\r
Output: [5,4,3,2,1]\r
\`\`\`\r
\r
## Approach\r
Iteratively reverse pointers while traversing the list. Keep track of the previous node and update the next pointer on each step.\r
\r
## Solution\r
\r
\`\`\`ts\r
class ListNode {\r
  val: number\r
  next: ListNode | null\r
  constructor(val?: number, next?: ListNode | null) {\r
    this.val = val === undefined ? 0 : val\r
    this.next = next === undefined ? null : next\r
  }\r
}\r
\r
function reverseList(head: ListNode | null): ListNode | null {\r
  let prev: ListNode | null = null\r
  let current = head\r
\r
  while (current) {\r
    const nextNode = current.next\r
    current.next = prev\r
    prev = current\r
    current = nextNode\r
  }\r
\r
  return prev\r
}\r
\`\`\`\r
\r
## Time Complexity\r
O(n)\r
\r
## Space Complexity\r
O(1)\r
\r
## Notes\r
- Use \`prev\` and \`current\` pointers.\r
- This is a classic iterative linked list reversal.\r
`;export{n as default};
