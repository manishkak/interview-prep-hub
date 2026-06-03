const e=`# Merge Two Sorted Lists

## Problem Statement

Given the heads of two sorted linked lists l1 and l2, merge them into one sorted linked list by splicing together nodes from both lists. Return the head of the merged list.

## Examples

- Input: l1 = 1 -> 2 -> 4, l2 = 1 -> 3 -> 4
- Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

- Input: l1 = null, l2 = 0
- Output: 0

## Approach

Use a dummy head node to simplify building the result. Maintain a current pointer that always points to the last node added to the merged list.

While both lists have remaining nodes, compare their heads and append the smaller one to current, then advance that list's pointer. After one list is exhausted, append the remainder of the other directly (no further comparison needed since it is already sorted).

Return dummy.next.

## Solution

\`\`\`js
function mergeTwoLists(l1, l2) {
    let dummy = { val: 0, next: null };
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 !== null ? l1 : l2;

    return dummy.next;
}
\`\`\`

## Time Complexity

**O(m + n)** where m and n are the lengths of the two lists. Each node is visited at most once.

## Space Complexity

**O(1)** — nodes from the original lists are reused; no new nodes are created.

## Notes

- The dummy node avoids special-casing the first node — current.next = l1/l2 works uniformly for all positions.
- current always points to the tail of the merged list; dummy always points to its head, so returning dummy.next gives the correct result.
- LeetCode #21.
`;export{e as default};
