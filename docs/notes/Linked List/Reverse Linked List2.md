# Reverse Linked List2

## Problem Statement

Given the head of a singly linked list and two integers left and right (1-indexed), reverse the nodes of the list from position left to position right. Return the modified head.

## Examples

- Input: 1 -> 2 -> 3 -> 4 -> 5, left = 2, right = 4
- Output: 1 -> 4 -> 3 -> 2 -> 5

- Input: 5, left = 1, right = 1
- Output: 5

## Approach

Use a dummy node so the head can be changed without special-casing. Traverse to the node just before position left (call it prev). Then use an insertion-based reversal for the sublist from left to right: repeatedly take the node just after start and insert it right after prev.

Variables: start = the first node of the sublist (stays fixed while nodes get inserted in front of it), then = the next node to be moved.

## Solution

```js
function reverseBetween(head, left, right) {
    if (!head || left === right) return head;

    let dummy = { val: 0, next: head };
    let prev = dummy;

    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    let start = prev.next;
    let then = start.next;

    for (let i = 0; i < right - left; i++) {
        start.next = then.next;
        then.next = prev.next;
        prev.next = then;
        then = start.next;
    }

    return dummy.next;
}
```

## Time Complexity

**O(n)** — traversal to position left plus reversal of right - left nodes.

## Space Complexity

**O(1)** — in-place reversal using a constant number of pointers.

## Notes

- The insertion-based reversal works by repeatedly "plucking" the node at then and inserting it at the front of the reversed section (right after prev).
- The dummy node handles the edge case where left = 1 (the head itself needs to change).
- LeetCode #92.
