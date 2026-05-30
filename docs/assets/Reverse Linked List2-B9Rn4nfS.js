const e=`# Reverse Linked List2

## Problem Statement

Describe the problem statement for **Reverse Linked List2** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * The "Reverse Linked List II" problem requires you to reverse a portion of a linked list between two given positions, m and n.\r
 * Example\r
 * 		Given the linked list: 1 -> 2 -> 3 -> 4 -> 5 -> null with m = 2 and n = 4, the output should be: 1 -> 4 -> 3 -> 2 -> 5 -> null.\r
 * Approach:\r
Initialization:\r
	Use a dummy node to simplify edge cases where the head of the list is changed.\r
	Traverse the list to find the node just before the reversal section (prev).\r
Reverse the Sublist:\r
	Reverse the sublist from m to n using a standard linked list reversal approach.\r
Reattach the Sublist:\r
	Reconnect the reversed sublist back to the main list.\r
 */\r
\r
function ListNode(val, next = null) {\r
	this.val = val;\r
	this.next = next;\r
}\r
\r
function reverseBetween(head, m, n) {\r
	if (!head || m === n) {\r
		return head;\r
	}\r
\r
	let dummy = new ListNode(0);\r
	dummy.next = head;\r
	let prev = dummy;\r
\r
	// Step 1: Move \`prev\` to the node just before the m-th node\r
	for (let i = 1; i < m; i++) {\r
		prev = prev.next;\r
	}\r
\r
	// \`start\` will be the first node of the sublist to be reversed\r
	let start = prev.next;\r
	// \`then\` will be the node that will be moved to the front of the sublist\r
	let then = start.next;\r
\r
	// Step 2: Reverse the sublist\r
	for (let i = 0; i < n - m; i++) {\r
		start.next = then.next;\r
		then.next = prev.next;\r
		prev.next = then;\r
		then = start.next;\r
	}\r
\r
	// Return the new head\r
	return dummy.next;\r
}\r
\r
/**\r
 * Time and Space Complexity\r
Time Complexity: O(n), where n is the number of nodes in the linked list. We traverse the list once to find the m-th node and then another traversal within the m to n range to reverse the sublist.\r
Space Complexity: O(1), since we only use a constant amount of extra space for pointers and temporary variables\r
	*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
