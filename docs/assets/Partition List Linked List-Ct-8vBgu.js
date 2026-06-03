const e=`# Partition List Linked List

## Problem Statement

Given the head of a linked list and a value x, partition the list so that all nodes with values less than x come before nodes with values greater than or equal to x. The relative order of nodes within each partition must be preserved.

## Examples

- Input: 1 -> 4 -> 3 -> 2 -> 5 -> 2, x = 3
- Output: 1 -> 2 -> 2 -> 4 -> 3 -> 5

- Input: 2 -> 1, x = 2
- Output: 1 -> 2

## Approach

Two dummy nodes — one to build the less-than partition, one for the greater-than-or-equal partition.

Traverse the original list. For each node: if its value < x, append to the less list; otherwise append to the greater list. After traversal, terminate the greater list with null (to avoid cycles), then connect less.next to the head of the greater list.

Return lessDummy.next.

## Solution

\`\`\`js
function partition(head, x) {
    let lessDummy = { val: 0, next: null };
    let greaterDummy = { val: 0, next: null };

    let less = lessDummy;
    let greater = greaterDummy;
    let current = head;

    while (current !== null) {
        if (current.val < x) {
            less.next = current;
            less = less.next;
        } else {
            greater.next = current;
            greater = greater.next;
        }
        current = current.next;
    }

    greater.next = null;
    less.next = greaterDummy.next;

    return lessDummy.next;
}
\`\`\`

## Time Complexity

**O(n)** — the list is traversed exactly once.

## Space Complexity

**O(1)** — only dummy nodes and a few pointers; all original nodes are reused.

## Notes

- greater.next = null is essential to avoid a cycle if the last node in the original list ended up in the less partition and still points to a node in the greater partition.
- LeetCode #86.
`;export{e as default};
