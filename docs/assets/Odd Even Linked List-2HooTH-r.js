const e=`# Odd Even Linked List

## Problem Statement

Describe the problem statement for **Odd Even Linked List** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Odd Even Linked List\r
 * Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.\r
The first node is considered odd, and the second node is even, and so on.\r
Note that the relative order inside both the even and odd groups should remain as it was in the input.\r
You must solve the problem in O(1) extra space complexity and O(n) time complexity\r
	If we have a linked list: 1 -> 2 -> 3 -> 4 -> 5 -> null, the rearranged list should be: 1 -> 3 -> 5 -> 2 -> 4 -> null\r
 */\r
/**\r
 * Approach:\r
 * Initialization:\r
 * 		Use two pointers: odd to point to the head of the list (starting at the first node), and even to point to the head of the even-indexed nodes (starting at the second node).\r
 * Iterate and Rearrange:\r
 * 		Traverse the list using a loop.\r
 * 		Connect all odd-indexed nodes together and all even-indexed nodes together.\r
 * Final Connection:\r
 * 		Link the last node of the odd-indexed list (oddTail) to the first node of the even-indexed list (evenHead).\r
 * Edge Cases:\r
 * 		Handle cases where the list has fewer than two nodes.\r
 */\r
\r
function ListNode(val, next = null) {\r
    this.val = val;\r
    this.next = next;\r
}\r
\r
function oddEvenList(head) {\r
    if (!head || !head.next) {\r
        return head; // If the list is empty or has only one node, return as it is\r
    }\r
    \r
    let odd = head;\r
    let even = head.next;\r
    let evenHead = even; // Store the head of the even-indexed nodes\r
    \r
	// Given the linked list: 1 -> 2 -> 3 -> 4 -> 5 -> null\r
    while (even !== null && even.next !== null) {\r
		/**\r
		 * Connect odd-indexed nodes: 1 -> 3\r
			odd.next = 3\r
			Move odd to 3: odd = 3\r
		 */\r
        odd.next = even.next; // Link odd-indexed nodes\r
        odd = odd.next;\r
		/**\r
		 * Connect even-indexed nodes: 2 -> 4\r
			even.next = 4\r
			Move even to 4: even = 4\r
		 */\r
        even.next = odd.next; // Link even-indexed nodes\r
        even = even.next;\r
    }\r
    \r
    odd.next = evenHead; // Connect the end of odd-indexed list to the start of even-indexed list\r
    \r
    return head; // Return the modified linked list\r
}\r
\r
/**\r
 * Summary\r
Time Complexity: O(n), where n is the number of nodes in the linked list.\r
Space Complexity: O(1), constant space complexity\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
