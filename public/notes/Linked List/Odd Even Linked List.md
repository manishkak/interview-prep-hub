# Odd Even Linked List

## Problem Statement

Describe the problem statement for **Odd Even Linked List** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Odd Even Linked List
 * Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
The first node is considered odd, and the second node is even, and so on.
Note that the relative order inside both the even and odd groups should remain as it was in the input.
You must solve the problem in O(1) extra space complexity and O(n) time complexity
	If we have a linked list: 1 -> 2 -> 3 -> 4 -> 5 -> null, the rearranged list should be: 1 -> 3 -> 5 -> 2 -> 4 -> null
 */
/**
 * Approach:
 * Initialization:
 * 		Use two pointers: odd to point to the head of the list (starting at the first node), and even to point to the head of the even-indexed nodes (starting at the second node).
 * Iterate and Rearrange:
 * 		Traverse the list using a loop.
 * 		Connect all odd-indexed nodes together and all even-indexed nodes together.
 * Final Connection:
 * 		Link the last node of the odd-indexed list (oddTail) to the first node of the even-indexed list (evenHead).
 * Edge Cases:
 * 		Handle cases where the list has fewer than two nodes.
 */

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function oddEvenList(head) {
    if (!head || !head.next) {
        return head; // If the list is empty or has only one node, return as it is
    }
    
    let odd = head;
    let even = head.next;
    let evenHead = even; // Store the head of the even-indexed nodes
    
	// Given the linked list: 1 -> 2 -> 3 -> 4 -> 5 -> null
    while (even !== null && even.next !== null) {
		/**
		 * Connect odd-indexed nodes: 1 -> 3
			odd.next = 3
			Move odd to 3: odd = 3
		 */
        odd.next = even.next; // Link odd-indexed nodes
        odd = odd.next;
		/**
		 * Connect even-indexed nodes: 2 -> 4
			even.next = 4
			Move even to 4: even = 4
		 */
        even.next = odd.next; // Link even-indexed nodes
        even = even.next;
    }
    
    odd.next = evenHead; // Connect the end of odd-indexed list to the start of even-indexed list
    
    return head; // Return the modified linked list
}

/**
 * Summary
Time Complexity: O(n), where n is the number of nodes in the linked list.
Space Complexity: O(1), constant space complexity
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
