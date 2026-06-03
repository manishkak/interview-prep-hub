const e=`# Swap Nodes In Pairs

## Problem Statement

Given a linked list, swap every two adjacent nodes and return the head of the modified list. You must swap the nodes themselves (not just their values). If the list has an odd number of nodes, the last node remains unswapped.

## Examples

- Input: 1 -> 2 -> 3 -> 4
- Output: 2 -> 1 -> 4 -> 3

- Input: 1 -> 2 -> 3
- Output: 2 -> 1 -> 3

## Approach

Use a dummy node and a prev pointer that tracks the node just before each pair.

While at least two nodes remain (prev.next and prev.next.next both exist):
1. Identify the pair: first = prev.next, second = first.next.
2. Swap: first.next = second.next, second.next = first, prev.next = second.
3. Advance prev to first (which is now the tail of the swapped pair).

## Solution

\`\`\`js
function swapPairs(head) {
    let dummy = { val: 0, next: head };
    let prev = dummy;

    while (prev.next !== null && prev.next.next !== null) {
        let first = prev.next;
        let second = first.next;

        first.next = second.next;
        second.next = first;
        prev.next = second;

        prev = first;
    }

    return dummy.next;
}
\`\`\`

## Time Complexity

**O(n)** — each node is visited once.

## Space Complexity

**O(1)** — in-place swapping with a constant number of pointers.

## Notes

- After each swap, first becomes the tail of the pair and second becomes the head. Moving prev to first sets it up correctly for the next pair.
- The dummy node ensures the head swap (first pair) is handled the same way as any other pair.
- LeetCode #24.
`;export{e as default};
