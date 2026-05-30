# Reverse Linked List2

## Problem Statement

Describe the problem statement for **Reverse Linked List2** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * The "Reverse Linked List II" problem requires you to reverse a portion of a linked list between two given positions, m and n.
 * Example
 * 		Given the linked list: 1 -> 2 -> 3 -> 4 -> 5 -> null with m = 2 and n = 4, the output should be: 1 -> 4 -> 3 -> 2 -> 5 -> null.
 * Approach:
Initialization:
	Use a dummy node to simplify edge cases where the head of the list is changed.
	Traverse the list to find the node just before the reversal section (prev).
Reverse the Sublist:
	Reverse the sublist from m to n using a standard linked list reversal approach.
Reattach the Sublist:
	Reconnect the reversed sublist back to the main list.
 */

function ListNode(val, next = null) {
	this.val = val;
	this.next = next;
}

function reverseBetween(head, m, n) {
	if (!head || m === n) {
		return head;
	}

	let dummy = new ListNode(0);
	dummy.next = head;
	let prev = dummy;

	// Step 1: Move `prev` to the node just before the m-th node
	for (let i = 1; i < m; i++) {
		prev = prev.next;
	}

	// `start` will be the first node of the sublist to be reversed
	let start = prev.next;
	// `then` will be the node that will be moved to the front of the sublist
	let then = start.next;

	// Step 2: Reverse the sublist
	for (let i = 0; i < n - m; i++) {
		start.next = then.next;
		then.next = prev.next;
		prev.next = then;
		then = start.next;
	}

	// Return the new head
	return dummy.next;
}

/**
 * Time and Space Complexity
Time Complexity: O(n), where n is the number of nodes in the linked list. We traverse the list once to find the m-th node and then another traversal within the m to n range to reverse the sublist.
Space Complexity: O(1), since we only use a constant amount of extra space for pointers and temporary variables
	*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
