# Linked List Cycle2

## Problem Statement

Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

## Examples

- Input: 3 -> 2 -> 0 -> -4, where -4 points back to node 2
- Output: node with value 2

- Input: 1 -> 2, where 2 points back to 1
- Output: node with value 1

- Input: 1 -> null
- Output: null

## Approach

Floyd's Tortoise and Hare — two phases.

Phase 1 (detect cycle): move slow one step and fast two steps until they meet. If fast reaches null, there is no cycle.

Phase 2 (find entry point): reset slow to head, keep fast at the meeting point. Move both one step at a time. They will meet exactly at the cycle entry node.

The math behind phase 2: if the distance from head to cycle entry is F, and the meeting point is D steps into the cycle, then F = cycle_length - D. Moving slow from head F steps and fast from meeting point F steps (which wraps around the cycle) lands both at the entry.

## Solution

```js
function detectCycle(head) {
    if (!head || !head.next) return null;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) break;
    }

    if (!fast || !fast.next) return null;

    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}
```

## Time Complexity

**O(n)** — the list is traversed at most twice.

## Space Complexity

**O(1)** — only two pointers used.

## Notes

- Phase 2 works because of a mathematical property of Floyd's algorithm: the distance from head to the cycle entry equals the distance from the meeting point to the cycle entry (going forward in the cycle).
- LeetCode #142.
