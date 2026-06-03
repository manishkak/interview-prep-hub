# Remove Nth Node From Endof List

## Problem Statement

Given the head of a linked list, remove the nth node from the end of the list and return the head.

## Examples

- Input: 1 -> 2 -> 3 -> 4 -> 5, n = 2
- Output: 1 -> 2 -> 3 -> 5

- Input: 1, n = 1
- Output: null (empty list)

## Approach

Two-pointer technique with a single pass.

1. Advance the right pointer n steps ahead of left.
2. Move both pointers forward simultaneously until right reaches the last node.
3. At this point, left points to the node just before the one to delete.
4. Set left.next = left.next.next.

Edge case: if right becomes null after step 1, the node to delete is the head — return head.next.

## Solution

```js
function removeNthLastNode(head, n) {
    let right = head;
    let left = head;

    for (let i = 0; i < n; i++) {
        right = right.next;
    }

    if (!right) return head.next;

    while (right.next !== null) {
        right = right.next;
        left = left.next;
    }

    left.next = left.next.next;

    return head;
}
```

## Time Complexity

**O(n)** — the list is traversed once with both pointers in a single pass.

## Space Complexity

**O(1)** — only two pointers used.

## Notes

- The n-step gap between the pointers ensures left stops exactly one node before the target, allowing the deletion by rewiring left.next.
- LeetCode #19.
