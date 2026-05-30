const n=`# Convert Binary Numberina Linked Listto Integer

## Problem Statement

Describe the problem statement for **Convert Binary Numberina Linked Listto Integer** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Convert Binary Number in a Linked List to Integer\r
 * Given a singly linked list where each node represents a binary digit (0 or 1), return the decimal value of the number it represents.\r
 * Example\r
 * If the linked list is 1 -> 0 -> 1, it represents the binary number 101, which is 5 in decimal.\r
 * This approach efficiently converts a binary number represented by a linked list into its decimal equivalent using constant space (O(1)) and linear time (O(n)), where n is the number of nodes in the linked list.\r
 */\r
\r
// Definition for singly-linked list.\r
function ListNode(val, next = null) {\r
    this.val = val;\r
    this.next = next;\r
}\r
\r
// Function to convert binary linked list to integer\r
function getDecimalValue(head) {\r
    let result = 0;\r
    let current = head;\r
\r
    while (current !== null) {\r
        // Shift result to the left to make space for the next bit\r
        result = result * 2 + current.val;\r
        current = current.next;\r
    }\r
\r
    return result;\r
}\r
// Example usage:\r
\r
// Creating the linked list representing binary number 1 -> 0 -> 1\r
let head = new ListNode(1);\r
head.next = new ListNode(0);\r
head.next.next = new ListNode(1);\r
\r
// Printing the linked list\r
console.log("Linked List:");\r
printLinkedList(head); // Output: 1 -> 0 -> 1\r
\r
// Convert linked list to decimal value\r
let decimalValue = getDecimalValue(head);\r
console.log("Decimal Value:", decimalValue); // Output: Decimal Value: 5\r
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
