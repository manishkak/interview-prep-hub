# middle Of The Linked List

## Problem Statement

Given the head of a singly linked list, return the middle node. If the list has an even number of nodes, return the second middle node.

## Examples

- Input: 1 -> 2 -> 3 -> 4 -> 5
- Output: node with value 3

- Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6
- Output: node with value 4 (second middle)

## Approach

Slow and fast pointer technique. Both pointers start at head. Slow moves one step at a time; fast moves two steps at a time. When fast reaches the end (null) or the last node, slow is at the middle. For even-length lists this naturally lands on the second middle node.

## Solution

```js
function getMiddleNode(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}
```

## Time Complexity

**O(n)** — fast pointer traverses the list once, slow pointer reaches the middle.

## Space Complexity

**O(1)** — only two pointers used.

## Notes

- Fast moves twice as fast as slow, so when fast covers n steps, slow has covered n/2 steps — landing exactly at the middle.
- The condition fast !== null && fast.next !== null handles both odd-length (fast lands on last node) and even-length lists (fast lands on null).
- LeetCode #876.
