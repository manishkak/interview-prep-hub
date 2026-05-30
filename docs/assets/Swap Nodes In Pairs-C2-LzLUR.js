const n=`# Swap Nodes In Pairs

## Problem Statement

Describe the problem statement for **Swap Nodes In Pairs** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * swap nodes in pairs\r
 * Given a linked list, swap every two adjacent nodes and return its head. For example, given 1 -> 2 -> 3 -> 4, you should return 2 -> 1 -> 4 -> 3.\r
 * STEPS:\r
 * Initialize a dummy node and point its next to the head of the list.\r
Use a prev pointer to track the node before the pair being swapped.\r
Loop through the list and swap nodes in pairs.\r
Update pointers after swapping to continue with the next pair.\r
 */\r
\r
// Definition for singly-linked list.\r
function ListNode(val, next = null) {\r
    this.val = val;\r
    this.next = next;\r
}\r
\r
function swapPairs(head) {\r
    // Initialize a dummy node and point its next to the head\r
    let dummy = new ListNode(0);\r
    dummy.next = head;\r
    \r
    // Initialize the prev pointer to the dummy node\r
    let prev = dummy;\r
    \r
    // Loop until we reach the end of the list\r
    while (prev.next !== null && prev.next.next !== null) {\r
        // Initialize the two nodes to be swapped\r
        let first = prev.next;\r
        let second = first.next;\r
        \r
        // Swapping nodes\r
        first.next = second.next;\r
        second.next = first;\r
        prev.next = second;\r
        \r
        // Move the prev pointer to the end of the swapped pair\r
        prev = first;\r
    }\r
    \r
    // Return the new head of the list\r
    return dummy.next;\r
}\r
\r
// Example usage:\r
// Creating the linked list 1 -> 2 -> 3 -> 4\r
let head = new ListNode(1);\r
head.next = new ListNode(2);\r
head.next.next = new ListNode(3);\r
head.next.next.next = new ListNode(4);\r
\r
// Print original list\r
console.log("Original List:");\r
printLinkedList(head); // Output: 1 -> 2 -> 3 -> 4\r
\r
// Swap nodes in pairs\r
let swappedHead = swapPairs(head);\r
\r
// Print swapped list\r
console.log("Swapped List:");\r
printLinkedList(swappedHead); // Output: 2 -> 1 -> 4 -> 3\r
\r
// Helper function to print the linked list\r
function printLinkedList(head) {\r
    let result = [];\r
    let current = head;\r
    while (current) {\r
        result.push(current.val);\r
        current = current.next;\r
    }\r
    console.log(result.join(" -> "));\r
}\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
