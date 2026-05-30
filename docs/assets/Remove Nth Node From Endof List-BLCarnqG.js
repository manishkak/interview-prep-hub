const n=`# Remove Nth Node From Endof List

## Problem Statement

Describe the problem statement for **Remove Nth Node From Endof List** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/** PROBLEM->\r
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.\r
 */\r
\r
/** SOLUTION->\r
 * Set two pointers, right and left, at the head of the linked list.\r
 * Move the right pointer n steps forward.\r
 * Move both the right and left pointers forward until the right pointer reaches the last node. At this point, the left pointer will be pointing to the node behind the nth last node.\r
 * Relink the left node to the node next to left’s next node.\r
 * Return the head of the linked list.\r
 */\r
\r
/**\r
 * The time complexity is O(n), where n is the number of nodes in the linked list\r
 * The space complexity is O(1) because we use constant space to store two pointers\r
 */\r
\r
// this is also the Floyd’s Tortoise and Hare Algorithm\r
function removeNthLastNode(head, n) {\r
    let right = head;  //Set two pointers, at the head of the linked list\r
    let left = head;\r
\r
    for (let i = 0; i < n; i++) {\r
        right = right.next;  //Move the right pointer n steps forward\r
    }\r
\r
    if (!right) {\r
        return head.next;\r
    }\r
\r
    while (right.next != null) {  //Move both pointers forward until the right pointer reaches the last node\r
        right = right.next;  \r
        left = left.next;\r
    }\r
	//At this point, the left pointer will be pointing to the node behind the nth last node\r
\r
    left.next = left.next.next;  //Relink the left node to the node next to left’s next node\r
\r
    return head;  //Return the head of the linked list\r
}\r
\r
function main() {\r
    const inputs = [\r
        [23, 89, 10, 5, 67, 39, 70, 28],\r
        [34, 53, 6, 95, 38, 28, 17, 63, 16, 76],\r
        [288, 224, 275, 390, 4, 383, 330, 60, 193],\r
        [1, 2, 3, 4, 5, 6, 7, 8, 9],\r
        [69, 8, 49, 106, 116, 112, 104, 129, 39, 14, 27, 12]\r
    ];\r
\r
    const n = [4, 1, 6, 9, 11];\r
\r
    for (let i = 0; i < inputs.length; i++) {\r
        const inputLinkedList = new LinkedList();\r
        inputLinkedList.createLinkedList(inputs[i]);\r
        console.log((i + 1) + ".\\tLinked List:\\t\\t", printListWithForwardArrow(inputLinkedList.head));\r
        console.log("\\tn = " + n[i]);\r
        let result = removeNthLastNode(inputLinkedList.head, n[i]);\r
        console.log("\\tUpdated Linked List:\\t", printListWithForwardArrow(result));\r
        console.log("-".repeat(100));\r
    }\r
}\r
\r
main();
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
