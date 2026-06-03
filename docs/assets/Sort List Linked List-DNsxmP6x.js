const n=`# Sort List Linked List

## Problem Statement

Given the head of a linked list, return the list sorted in ascending order.

## Examples

- Input: 4 -> 2 -> 1 -> 3
- Output: 1 -> 2 -> 3 -> 4

- Input: -1 -> 5 -> 3 -> 4 -> 0
- Output: -1 -> 0 -> 3 -> 4 -> 5

## Approach

Merge Sort on a linked list.

1. Base case: if the list has 0 or 1 nodes, it is already sorted — return it.
2. Find the middle using slow/fast pointers and split into two halves.
3. Recursively sort each half.
4. Merge the two sorted halves using the standard merge-two-sorted-lists approach (dummy node + compare-and-advance).

Merge Sort is preferred over quicksort for linked lists because finding the middle and merging work efficiently in O(n), whereas random access for partitioning is O(n).

## Solution

\`\`\`js
function sortList(head) {
    if (head === null || head.next === null) return head;

    let slow = head, fast = head.next;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let rightHead = slow.next;
    slow.next = null;

    let left = sortList(head);
    let right = sortList(rightHead);

    return merge(left, right);
}

function merge(l1, l2) {
    let dummy = { val: 0, next: null };
    let curr = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) { curr.next = l1; l1 = l1.next; }
        else { curr.next = l2; l2 = l2.next; }
        curr = curr.next;
    }

    curr.next = l1 !== null ? l1 : l2;
    return dummy.next;
}
\`\`\`

## Time Complexity

**O(n log n)** — the list is split log n times and each merge level takes O(n) total.

## Space Complexity

**O(log n)** for the recursion call stack (depth = number of splits = log n). No extra arrays are used.

## Notes

- fast starts at head.next instead of head so that for a 2-node list, slow lands on the first node — allowing a clean split into 1 and 1.
- Merge Sort on linked lists achieves O(log n) space (only recursion) vs O(n) for arrays (which need temporary storage).
- LeetCode #148.
`;export{n as default};
