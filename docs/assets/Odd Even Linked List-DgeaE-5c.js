const e=`# Odd Even Linked List

## Problem Statement

Given the head of a singly linked list, group all nodes with odd indices together followed by all nodes with even indices, and return the reordered list. The first node is index 1 (odd), the second is index 2 (even), and so on. The relative order within each group must be preserved. Solve in O(1) extra space and O(n) time.

## Examples

- Input: 1 -> 2 -> 3 -> 4 -> 5
- Output: 1 -> 3 -> 5 -> 2 -> 4

- Input: 2 -> 1 -> 3 -> 5 -> 6 -> 4 -> 7
- Output: 2 -> 3 -> 6 -> 7 -> 1 -> 5 -> 4

## Approach

Maintain two pointers: odd (starts at head, index 1) and even (starts at head.next, index 2). Also save evenHead to reconnect later.

In each loop iteration:
- Link odd to even's next (the next odd-indexed node), advance odd.
- Link even to odd's next (the next even-indexed node), advance even.

After the loop, connect odd.next = evenHead to join the two groups.

## Solution

\`\`\`js
function oddEvenList(head) {
    if (!head || !head.next) return head;

    let odd = head;
    let even = head.next;
    let evenHead = even;

    while (even !== null && even.next !== null) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }

    odd.next = evenHead;

    return head;
}
\`\`\`

## Time Complexity

**O(n)** — one pass through the list.

## Space Complexity

**O(1)** — only a fixed number of pointers; nodes are rewired in-place.

## Notes

- evenHead must be saved before the loop because odd.next will be overwritten during rewiring.
- LeetCode #328.
`;export{e as default};
