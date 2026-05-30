const e=`# Reorder Linked List

## Problem Statement

Describe the problem statement for **Reorder Linked List** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Reorder Linked List\r
 * You are given the head of a singly linked-list. The list can be represented as:\r
L0 → L1 → … → Ln - 1 → Ln\r
Reorder the list to be on the following form:\r
L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …\r
 * Approach-\r
 * 	Find the Middle of the Linked List: Use the two-pointer technique (slow and fast pointers) to find the middle node of the linked list.\r
 * 	Reverse the Second Half: Reverse the linked list from the middle node to the end.\r
 * 	Merge the Two Halves: Interleave the first half and the reversed second half to reorder the linked list as required.\r
 */\r
\r
// Definition for singly-linked list.\r
function ListNode(val, next = null) {\r
    this.val = val;\r
    this.next = next;\r
}\r
\r
// Function to find the middle of the linked list\r
function findMiddle(head) {\r
    let slow = head;\r
    let fast = head;\r
\r
    // Use fast and slow pointers to find the middle\r
    while (fast && fast.next) {\r
        slow = slow.next;\r
        fast = fast.next.next;\r
    }\r
\r
    return slow;\r
}\r
\r
// Function to reverse a linked list\r
function reverseList(head) {\r
    let prev = null;\r
    let current = head;\r
\r
    while (current) {\r
        let nextTemp = current.next;\r
        current.next = prev;\r
        prev = current;\r
        current = nextTemp;\r
    }\r
\r
    return prev;\r
}\r
\r
// Function to merge two linked lists\r
function mergeLists(l1, l2) {\r
    let dummy = new ListNode(0);\r
    let current = dummy;\r
\r
    while (l1 && l2) {\r
        current.next = l1;\r
        l1 = l1.next;\r
        current = current.next;\r
\r
        current.next = l2;\r
        l2 = l2.next;\r
        current = current.next;\r
    }\r
\r
    if (l1) {\r
        current.next = l1;\r
    }\r
\r
    if (l2) {\r
        current.next = l2;\r
    }\r
\r
    return dummy.next;\r
}\r
\r
// Function to reorder the linked list\r
function reorderList(head) {\r
    if (!head || !head.next) {\r
        return;\r
    }\r
\r
    // Step 1: Find the middle of the linked list\r
    let middle = findMiddle(head);\r
    let secondHalf = middle.next;\r
    middle.next = null; // Splitting into two halves\r
\r
    // Step 2: Reverse the second half\r
    secondHalf = reverseList(secondHalf);\r
\r
    // Step 3: Merge the two halves\r
    head = mergeLists(head, secondHalf);\r
}\r
\r
// Example usage:\r
\r
// Creating the linked list 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8\r
let head = new ListNode(1);\r
head.next = new ListNode(2);\r
head.next.next = new ListNode(3);\r
head.next.next.next = new ListNode(4);\r
head.next.next.next.next = new ListNode(5);\r
head.next.next.next.next.next = new ListNode(6);\r
head.next.next.next.next.next.next = new ListNode(7);\r
head.next.next.next.next.next.next.next = new ListNode(8);\r
\r
// Print original list\r
console.log("Original List:");\r
printLinkedList(head); // Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8\r
\r
// Reorder the linked list\r
reorderList(head);\r
\r
// Print reordered list\r
console.log("Reordered List:");\r
printLinkedList(head); // Output: 1 -> 8 -> 2 -> 7 -> 3 -> 6 -> 4 -> 5\r
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
Let's analyze the time and space complexity of the "Reorder Linked List" solution implemented in JavaScript:\r
\r
### Time Complexity\r
\r
1. **Finding the Middle of the Linked List (\`findMiddle\` function)**:\r
   - Uses the two-pointer technique, which takes O(n/2) time complexity, where n is the number of nodes in the linked list. This simplifies to O(n).\r
\r
2. **Reversing the Second Half (\`reverseList\` function)**:\r
   - Reverses half of the linked list, which also takes O(n/2) time complexity, simplifying to O(n).\r
\r
3. **Merging Two Linked Lists (\`mergeLists\` function)**:\r
   - Merges two linked lists, which involves iterating through both lists once. This takes O(n) time complexity, where n is the total number of nodes in both lists.\r
\r
4. **Overall Time Complexity**:\r
   - The overall time complexity is dominated by the \`findMiddle\` and \`reverseList\` functions, each of which runs in O(n).\r
   - Therefore, the overall time complexity of the \`reorderList\` function is O(n).\r
\r
### Space Complexity\r
\r
- **Space Complexity**: O(1) - Constant Space\r
  - The algorithm operates in constant space O(1) because it only uses a few extra pointers (\`slow\`, \`fast\`, \`prev\`, \`current\`, \`dummy\`) and does not use any additional data structures that grow with the input size.\r
  - The operations are done in-place without requiring additional space proportional to the input size.\r
\r
### Summary\r
\r
- **Time Complexity**: O(n) - Linear time complexity, where n is the number of nodes in the linked list.\r
- **Space Complexity**: O(1) - Constant space complexity, as the algorithm uses a fixed amount of extra space regardless of the input size.\r
\r
This analysis shows that the solution efficiently reorders the linked list while maintaining optimal time and space complexities.\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
