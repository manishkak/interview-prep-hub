# Linked List Cycle2

## Problem Statement

Describe the problem statement for **Linked List Cycle2** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * linked list cycle 2
 */

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function detectCycle(head) {
    if (!head || !head.next) {
        return null;
    }

    let slow = head;
    let fast = head;

    // Step 1: Detect if a cycle exists using Floyd's Tortoise and Hare algorithm
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            break;
        }
    }

    // If no cycle is detected, return null
    // If fast pointer reaches the end, there's no cycle
    if (!fast || !fast.next) {
        return null;
    }

    // Step 2: Find the start of the cycle
    slow = head; // keep fast where it is and move slow to the head of the list
	// keep moving slow and fast one step until they are the same
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow; // or return fast, as they are now equal
}
/** 
Time and Space Complexity
Time Complexity: O(n), where n is the number of nodes in the linked list. In the worst case, we traverse the list twice.
Space Complexity: O(1), since we only use a constant amount of extra space for pointers (slow, fast).
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
