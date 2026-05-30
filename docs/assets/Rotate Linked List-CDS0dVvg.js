const n=`# Rotate Linked List

## Problem Statement

Describe the problem statement for **Rotate Linked List** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * RotateLinkedList\r
 * To rotate a linked list means to shift the nodes of the list to the right or left by a specified number of positions.\r
 * Approach:\r
 * 		Calculate Length and Adjust K:	\r
 * 			Determine the length of the linked list (n).\r
 * 			Adjust the rotation amount k using modulo operation (k = k % n). This ensures k is within the range of the list length to avoid unnecessary rotations eg. if k > n then doing k % n is imp. to ensure there are no unnecessary rotations.\r
 * 		\r
 * 		Identify the (n-k)th node (new tail) and the (n-k-1)th node (new head)\r
 * 		Set the next of the current tail to point to the original head, making it a circular linked list\r
 * \r
 * 		Update the head to the node after the new tail\r
 * 		Set the next of the new tail to null to break the circular structure.\r
 */\r
\r
// Once you understand the above approach, the solution is pretty straight forward\r
\r
// Definition for singly-linked list.\r
function ListNode(val, next = null) {\r
    this.val = val;\r
    this.next = next;\r
}\r
\r
// Function to rotate the linked list to the right by k positions\r
function rotateRight(head, k) {\r
    if (!head || k === 0) {\r
        return head;\r
    }\r
\r
    // Step 1: Calculate the length of the linked list and adjust k\r
    let current = head;\r
    let n = 1; // Start from 1 because we're already at head\r
    while (current.next) {\r
        current = current.next;\r
        n++;\r
    }\r
    \r
    k = k % n;\r
    if (k === 0) {\r
        return head; // No rotation needed\r
    }\r
\r
    current.next = head; // Make it a circular linked list\r
\r
    // Step 2: Find the break point (n-k)th node and (n-k-1)th node\r
    let newTail = head;\r
    // lets say k = 2 and n = 5, then newTail will be at 3 (n-k)\r
    for (let i = 1; i < n - k; i++) {\r
        newTail = newTail.next;\r
    }\r
\r
    let newHead = newTail.next; // newHead will be next of newTail\r
    newTail.next = null; // Break the circle and make it a normal LL again\r
\r
    return newHead;\r
}\r
\r
// Example usage:\r
\r
// Creating the linked list 1 -> 2 -> 3 -> 4 -> 5\r
let head = new ListNode(1);\r
head.next = new ListNode(2);\r
head.next.next = new ListNode(3);\r
head.next.next.next = new ListNode(4);\r
head.next.next.next.next = new ListNode(5);\r
\r
// Print original list\r
console.log("Original List:");\r
printLinkedList(head); // Output: 1 -> 2 -> 3 -> 4 -> 5\r
\r
// Rotate the linked list to the right by 2 positions\r
let rotatedHead = rotateRight(head, 2);\r
\r
// Print rotated list\r
console.log("Rotated List:");\r
printLinkedList(rotatedHead); // Output: 4 -> 5 -> 1 -> 2 -> 3\r
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
\r
/**\r
 * This implementation efficiently rotates the linked list while maintaining optimal time complexity of O(n), where n is the number of nodes in the linked list, and constant space complexity of O(1).\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
