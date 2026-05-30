const e=`# delete Node From Linked List

## Problem Statement

Describe the problem statement for **delete Node From Linked List** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * delete node from linked list; delete 5 from 4 -> 5 -> 1 -> 9\r
 * In this problem, you are only given a reference to the node to be deleted, not the head of the linked list. So, you need to perform the deletion operation using only this reference.\r
 * Copy the value of the next node to the current node (nodeToBeDel.val = nodeToBeDel.next.val;)\r
	now the list looks like 4 -> 1 -> 1 -> 9\r
 * Link the current node to the next of next node (node.next = node.next.next)\r
	This effectively removes the second 1 node from the list.\r
 * The list now looks like this: 4 -> 1 -> 9\r
 */\r
\r
// Definition for singly-linked list.\r
function ListNode(val, next = null) {\r
    this.val = val;\r
    this.next = next;\r
}\r
\r
// Function to delete a node in a singly linked list\r
// You will not be given access to the head of the list, only the node to be deleted\r
function deleteNode(node) {\r
    if (!node || !node.next) {\r
        return; // Can't delete the node if it's null or the tail node\r
    }\r
\r
    // Copy the value of the next node to the current node\r
    node.val = node.next.val;\r
    // Link the current node to the next of next node\r
    node.next = node.next.next;\r
}\r
\r
// Helper function to create a linked list from an array\r
function createLinkedList(arr) {\r
    if (arr.length === 0) return null;\r
    let head = new ListNode(arr[0]);\r
    let current = head;\r
    for (let i = 1; i < arr.length; i++) {\r
        current.next = new ListNode(arr[i]);\r
        current = current.next;\r
    }\r
    return head;\r
}\r
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
// Example usage:\r
let arr = [4, 5, 1, 9];\r
let head = createLinkedList(arr);\r
\r
// Assuming we want to delete node with value 5\r
let nodeToDelete = head.next; // Node with value 5\r
deleteNode(nodeToDelete);\r
\r
printLinkedList(head); // Output: 4 -> 1 -> 9\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
