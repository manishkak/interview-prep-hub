const n=`# linked List Cycle

## Problem Statement

Describe the problem statement for **linked List Cycle** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Problem: Check whether or not a linked list contains a cycle. If a cycle exists, return TRUE. Otherwise, return FALSE. The cycle means that at least one node can be reached again by traversing the next pointer.\r
 */\r
function detectCycle(head) {\r
    if (!head) {\r
        return false;\r
    }\r
\r
    let slow = head;\r
    let fast = head;\r
\r
    while (fast && fast.next) {\r
        slow = slow.next;\r
        fast = fast.next.next;\r
\r
        if (slow === fast) {\r
            return true;\r
        }\r
    }\r
    \r
    return false;\r
}\r
\r
/**\r
 * TC = O(n)\r
 * SC = O(1) (When we say that an algorithm has a space complexity of O(1), it means that the amount of memory used by the algorithm remains constant regardless of the size of the input)\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
