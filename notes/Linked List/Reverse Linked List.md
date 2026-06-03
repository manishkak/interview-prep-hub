# Reverse Linked List

## Problem Statement

Given the head of a singly linked list, reverse the list and return the new head.

## Examples

- Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
- Output: 5 -> 4 -> 3 -> 2 -> 1 -> null

- Input: 1 -> 2 -> null
- Output: 2 -> 1 -> null

## Approach

Iterative pointer reversal. Traverse the list while keeping track of the previous node. At each step, reverse the current node's next pointer to point backward, then advance both pointers forward.

Three pointers: prev (starts null), current (starts at head), next (saved before overwriting).

## Solution

```js
function reverseList(head) {
    let prev = null;
    let current = head;

    while (current) {
        const nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    return prev;
}
```

## Time Complexity

**O(n)** — each node is visited once.

## Space Complexity

**O(1)** — only three pointers used, no extra data structures.

## Notes

- At the end of the loop, prev points to the new head (the original tail).
- LeetCode #206.
