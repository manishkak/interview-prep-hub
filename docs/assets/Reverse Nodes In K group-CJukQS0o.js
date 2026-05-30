const e=`# Reverse Nodes In K group

## Problem Statement

Describe the problem statement for **Reverse Nodes In K group** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Given a singly linked list, reverse the nodes of the list k at a time and return the modified list. If the number of nodes is not a multiple of k, leave the remaining nodes as-is.\r
 */\r
\r
class ListNode {\r
    constructor(val = 0, next = null) {\r
      this.val = val;\r
      this.next = next;\r
    }\r
  }\r
  \r
  function reverseKGroup(head, k) {\r
    if (!head || k === 1) return head;\r
  \r
    const getLength = (node) => {\r
      let length = 0;\r
      while (node) {\r
        length++;\r
        node = node.next;\r
      }\r
      return length;\r
    };\r
  \r
    const reverse = (start, end) => {\r
      let prev = null;\r
      let current = start;\r
      while (current !== end) {\r
        const nextNode = current.next;\r
        current.next = prev;\r
        prev = current;\r
        current = nextNode;\r
      }\r
      return prev;\r
    };\r
  \r
    let length = getLength(head);\r
    let dummy = new ListNode(0, head); // dummy points to the head ('next' part of ListNode is set to head)... dummy -> [1 -> 2 -> 3 -> 4 -> 5]\r
    let prevGroupEnd = dummy; // Initialize Pointers\r
  \r
    while (length >= k) {\r
      let groupStart = prevGroupEnd.next; // points to the first node of the group to reverse\r
      let groupEnd = groupStart; // groupEnd is initialized to the same node as groupStart\r
      for (let i = 0; i < k; i++) {\r
        groupEnd = groupEnd.next; // The loop moves groupEnd forward by k steps\r
      }\r
      const newGroupStart = reverse(groupStart, groupEnd);\r
      prevGroupEnd.next = newGroupStart;\r
      groupStart.next = groupEnd;\r
      prevGroupEnd = groupStart;\r
      length -= k; // This line reduces the remaining length of the linked list 'by k' after a group of k nodes has been processed (reversed and reconnected)... length = length - k;\r
    }\r
  \r
    return dummy.next;\r
  }\r
  \r
  // Helper to create a linked list from an array\r
  function createLinkedList(arr) {\r
    let dummy = new ListNode();\r
    let current = dummy;\r
    for (let val of arr) {\r
      current.next = new ListNode(val);\r
      current = current.next;\r
    }\r
    return dummy.next;\r
  }\r
  \r
  // Helper to convert linked list to array\r
  function toArray(head) {\r
    const result = [];\r
    while (head) {\r
      result.push(head.val);\r
      head = head.next;\r
    }\r
    return result;\r
  }\r
  \r
  // Test case\r
  const head = createLinkedList([1, 2, 3, 4, 5]);\r
  const k = 3;\r
  const result = reverseKGroup(head, k);\r
  console.log(toArray(result)); // Output: [3, 2, 1, 4, 5]\r
  \r
/*\r
Explanation\r
\r
Helper Functions:\r
    getLength: Computes the length of the linked list.\r
    reverse: Reverses a portion of the list from start to end.\r
\r
Main Function:\r
    Uses a dummy node to simplify handling the head of the list.\r
    Iterates through the list in chunks of k nodes.\r
    For each group, reverses the nodes and reconnects the reversed group to the rest of the list.\r
\r
Edge Cases:\r
    If k is 1, no reversal is needed.\r
    If the list's length is less than k, the remaining nodes are left as-is.\r
\r
Time Complexity\r
    Reversal: Each node is visited once, resulting in O(n) for the entire list.\r
    Getting Length: Linear, O(n), done once.\r
    Total: O(n).\r
\r
Space Complexity\r
Iterative approach uses constant extra space: O(1).\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
