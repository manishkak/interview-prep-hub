const n=`# Linked List Cycle2

## Problem Statement

Describe the problem statement for **Linked List Cycle2** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * linked list cycle 2\r
 */\r
\r
function ListNode(val, next = null) {\r
    this.val = val;\r
    this.next = next;\r
}\r
\r
function detectCycle(head) {\r
    if (!head || !head.next) {\r
        return null;\r
    }\r
\r
    let slow = head;\r
    let fast = head;\r
\r
    // Step 1: Detect if a cycle exists using Floyd's Tortoise and Hare algorithm\r
    while (fast && fast.next) {\r
        slow = slow.next;\r
        fast = fast.next.next;\r
        if (slow === fast) {\r
            break;\r
        }\r
    }\r
\r
    // If no cycle is detected, return null\r
    // If fast pointer reaches the end, there's no cycle\r
    if (!fast || !fast.next) {\r
        return null;\r
    }\r
\r
    // Step 2: Find the start of the cycle\r
    slow = head; // keep fast where it is and move slow to the head of the list\r
	// keep moving slow and fast one step until they are the same\r
    while (slow !== fast) {\r
        slow = slow.next;\r
        fast = fast.next;\r
    }\r
\r
    return slow; // or return fast, as they are now equal\r
}\r
/** \r
Time and Space Complexity\r
Time Complexity: O(n), where n is the number of nodes in the linked list. In the worst case, we traverse the list twice.\r
Space Complexity: O(1), since we only use a constant amount of extra space for pointers (slow, fast).\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
