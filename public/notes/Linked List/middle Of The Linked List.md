# middle Of The Linked List

## Problem Statement

Describe the problem statement for **middle Of The Linked List** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Problem: Given the head of a singly linked list, return the middle node of the linked list. If the number of nodes in the linked list is even, there will be two middle nodes, so return the second one
 */
/**
 * 	Approach: 
		○ Create two pointers, slow and fast, initially at the head of the linked list.
		○ While traversing the linked list, move the slow pointer one step forward and the fast pointer two steps forward.
		○ When the fast pointer reaches the last node or NULL, the slow pointer will point to the middle node of the linked list. Return the node that the slow pointer points to
 */
function getMiddleNode(head) {

	let slow = head,
		fast = head;
	
	while (fast !== null && fast.next !== null) {
		slow = slow.next;
		fast = fast.next.next;
	}
	
	return slow;
}
		  
/**
 * TC = O(n)
 * SC = O(1)
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
