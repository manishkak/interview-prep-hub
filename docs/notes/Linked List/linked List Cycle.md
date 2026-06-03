# linked List Cycle

## Problem Statement

Given the head of a linked list, determine if the list contains a cycle. A cycle exists if some node can be reached again by continuously following the next pointer. Return true if a cycle exists, false otherwise.

## Examples

- Input: 3 -> 2 -> 0 -> -4, where -4 points back to 2
- Output: true

- Input: 1 -> 2, where 2 points back to 1
- Output: true

- Input: 1 -> null
- Output: false

## Approach

Floyd's Tortoise and Hare algorithm. Use two pointers: slow moves one step at a time, fast moves two steps at a time. If there is a cycle, the fast pointer will eventually lap the slow pointer and they will meet. If there is no cycle, the fast pointer will reach null.

## Solution

```js
function detectCycle(head) {
    if (!head) return false;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) return true;
    }

    return false;
}
```

## Time Complexity

**O(n)** — in the worst case (no cycle) fast traverses the whole list; with a cycle, the pointers meet within one full loop.

## Space Complexity

**O(1)** — only two pointers used regardless of list size.

## Notes

- Floyd's algorithm works because if a cycle exists, the fast pointer gains one step per iteration on the slow pointer and is guaranteed to catch up.
- LeetCode #141.
