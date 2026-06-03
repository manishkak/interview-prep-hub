const n=`# Reorder Linked List

## Problem Statement

Given the head of a singly linked list L0 -> L1 -> ... -> Ln-1 -> Ln, reorder it to: L0 -> Ln -> L1 -> Ln-1 -> L2 -> Ln-2 -> ... Modify the list in-place; do not return a new list.

## Examples

- Input: 1 -> 2 -> 3 -> 4
- Output: 1 -> 4 -> 2 -> 3

- Input: 1 -> 2 -> 3 -> 4 -> 5
- Output: 1 -> 5 -> 2 -> 4 -> 3

## Approach

Three steps:

1. Find the middle of the list using slow/fast pointers. Split into two halves.
2. Reverse the second half.
3. Merge the two halves by alternating one node from each: take one from the first half, then one from the (reversed) second half.

## Solution

\`\`\`js
function reorderList(head) {
    if (!head || !head.next) return;

    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null, current = slow.next;
    slow.next = null;
    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    let l1 = head, l2 = prev;
    while (l2) {
        const next1 = l1.next;
        const next2 = l2.next;
        l1.next = l2;
        l2.next = next1;
        l1 = next1;
        l2 = next2;
    }
}
\`\`\`

## Time Complexity

**O(n)** — finding the middle, reversing, and merging each take O(n).

## Space Complexity

**O(1)** — all operations done in-place with a constant number of pointers.

## Notes

- The three-step decomposition (find middle, reverse second half, interleave) is a reusable pattern for many linked list reordering problems.
- LeetCode #143.
`;export{n as default};
