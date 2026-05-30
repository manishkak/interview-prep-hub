const e=`# Partition List Linked List

## Problem Statement

Describe the problem statement for **Partition List Linked List** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * The "Partition List" problem involves rearranging a linked list such that all nodes with values less than a given pivot value x come before nodes with values greater than or equal to x. The relative order of nodes in each partition should be preserved.\r
 * Problem Statement: \r
 * 		Given a linked list and a value x, partition the list so that all nodes less than x come before nodes greater than or equal to x.\r
 * Approach:\r
 * 		Create two dummy nodes: Use two dummy nodes to build two separate lists. One list will contain nodes with values less than x, and the other will contain nodes with values greater than or equal to x.\r
 * 		Traverse the original list: For each node, decide which list to add it to based on its value.\r
 * 		Merge the two lists: Finally, connect the two lists to form the desired partitioned list.\r
 * Steps:\r
		Initialize "two dummy nodes": One for nodes less than x and one for nodes greater than or equal to x.\r
		Initialize "two pointers": These will help in building the two lists.\r
		"Traverse" the original list: For each node, add it to the appropriate list.\r
		"Connect" the two lists: Ensure the end of the "less than" list points to the start of the "greater than or equal to" list.\r
		"Return the new head": The head of the new list is the next node of the dummy node for the "less than" list.\r
 */\r
\r
// Definition for singly-linked list.\r
function ListNode(val, next = null) {\r
    this.val = val;\r
    this.next = next;\r
}\r
\r
function partition(head, x) {\r
    // Create two dummy nodes\r
    let lessDummy = new ListNode(0); // One list will contain nodes with values less than x\r
    let greaterDummy = new ListNode(0); // other will contain nodes with values greater than or equal to x\r
    \r
    // Pointers to build the two lists.. Initialize "two pointers"\r
    let less = lessDummy;\r
    let greater = greaterDummy;\r
    \r
    // Traverse the original list\r
    let current = head;\r
    while (current !== null) {\r
        if (current.val < x) {\r
            less.next = current;\r
            less = less.next;\r
        } else {\r
            greater.next = current;\r
            greater = greater.next;\r
        }\r
        current = current.next;\r
    }\r
    \r
    // Connect the two lists\r
    greater.next = null; // Ensure the end of the greater list is null\r
    less.next = greaterDummy.next; // Connect less list to the start of greater list\r
    \r
    // Return the new head\r
    return lessDummy.next;\r
}\r
\r
// Example usage:\r
// Creating the linked list 1 -> 4 -> 3 -> 2 -> 5 -> 2\r
let head = new ListNode(1);\r
head.next = new ListNode(4);\r
head.next.next = new ListNode(3);\r
head.next.next.next = new ListNode(2);\r
head.next.next.next.next = new ListNode(5);\r
head.next.next.next.next.next = new ListNode(2);\r
\r
// Print original list\r
console.log("Original List:");\r
printLinkedList(head); // Output: 1 -> 4 -> 3 -> 2 -> 5 -> 2\r
\r
// Partition list with x = 3\r
let partitionedHead = partition(head, 3);\r
\r
// Print partitioned list\r
console.log("Partitioned List:");\r
printLinkedList(partitionedHead); // Output: 1 -> 2 -> 2 -> 4 -> 3 -> 5\r
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
/*\r
The time complexity (TC) and space complexity (SC) for the "Partition List" problem are as follows:\r
\r
### Time Complexity\r
\r
The time complexity of the solution is **O(n)**, where **n** is the number of nodes in the linked list.\r
\r
**Reason**: The algorithm traverses the linked list exactly once, performing a constant amount of work (pointer adjustments) for each node.\r
\r
### Space Complexity\r
\r
The space complexity of the solution is **O(1)**.\r
\r
**Reason**: The algorithm uses a fixed amount of extra space regardless of the size of the input linked list. The extra space is used for the dummy nodes and a few pointers (\`less\`, \`greater\`, \`current\`, etc.), all of which require constant space.\r
\r
### Summary\r
\r
- **Time Complexity**: O(n)\r
- **Space Complexity**: O(1)\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
