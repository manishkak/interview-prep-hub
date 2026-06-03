# Rotate Linked List

## Problem Statement

Given the head of a linked list, rotate the list to the right by k places. Rotating right by 1 moves the last node to the front.

## Examples

- Input: 1 -> 2 -> 3 -> 4 -> 5, k = 2
- Output: 4 -> 5 -> 1 -> 2 -> 3

- Input: 0 -> 1 -> 2, k = 4
- Output: 2 -> 0 -> 1 (k=4 same as k=1 for length 3)

## Approach

1. Find the length of the list. Also reach the tail node.
2. Reduce k modulo n (k = k % n) to eliminate redundant full rotations.
3. If k = 0, return head unchanged.
4. Connect the tail to the head, making it circular.
5. Find the new tail: traverse n - k - 1 steps from head (0-indexed). The new head is its next.
6. Break the circle (newTail.next = null) and return newHead.

## Solution

```js
function rotateRight(head, k) {
    if (!head || k === 0) return head;

    let current = head;
    let n = 1;
    while (current.next) { current = current.next; n++; }

    k = k % n;
    if (k === 0) return head;

    current.next = head;

    let newTail = head;
    for (let i = 1; i < n - k; i++) newTail = newTail.next;

    let newHead = newTail.next;
    newTail.next = null;

    return newHead;
}
```

## Time Complexity

**O(n)** — one pass to find length and tail, one pass to find the new tail.

## Space Complexity

**O(1)** — only pointer manipulation, no extra data structures.

## Notes

- The circular-list trick avoids having to rebuild connections from scratch — just find the break point and sever.
- k % n handles cases where k > n, ensuring no unnecessary traversal.
- LeetCode #61.
