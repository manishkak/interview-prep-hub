const e=`# middle Of The Linked List

## Problem Statement

Describe the problem statement for **middle Of The Linked List** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Problem: Given the head of a singly linked list, return the middle node of the linked list. If the number of nodes in the linked list is even, there will be two middle nodes, so return the second one\r
 */\r
/**\r
 * 	Approach: \r
		○ Create two pointers, slow and fast, initially at the head of the linked list.\r
		○ While traversing the linked list, move the slow pointer one step forward and the fast pointer two steps forward.\r
		○ When the fast pointer reaches the last node or NULL, the slow pointer will point to the middle node of the linked list. Return the node that the slow pointer points to\r
 */\r
function getMiddleNode(head) {\r
\r
	let slow = head,\r
		fast = head;\r
	\r
	while (fast !== null && fast.next !== null) {\r
		slow = slow.next;\r
		fast = fast.next.next;\r
	}\r
	\r
	return slow;\r
}\r
		  \r
/**\r
 * TC = O(n)\r
 * SC = O(1)\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
