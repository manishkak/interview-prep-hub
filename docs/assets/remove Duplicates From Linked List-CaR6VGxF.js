const e=`# remove Duplicates From Linked List

## Problem Statement

Remove all duplicate nodes from a linked list so that each value appears only once. Return the head of the modified list.

Two variants: sorted list (adjacent duplicates) and unsorted list (duplicates anywhere).

## Examples

- Input (sorted): 1 -> 1 -> 2 -> 3 -> 3
- Output: 1 -> 2 -> 3

- Input (unsorted): 1 -> 2 -> 2 -> 3 -> 1
- Output: 1 -> 2 -> 3

## Approach

Sorted list: compare each node with its next. If they have the same value, skip the next node (current.next = current.next.next). Otherwise advance current. No extra space needed since duplicates are adjacent.

Unsorted list: use a hash Set to track seen values. Traverse with current and prev pointers. If the current node's value is already in the Set, skip it (prev.next = current.next). Otherwise add to Set and advance prev.

## Solution

\`\`\`js
function removeDuplicatesFromSortedList(head) {
    let current = head;
    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
}

function removeDuplicatesFromUnsortedList(head) {
    if (head === null) return head;

    const seen = new Set();
    let current = head;
    let prev = null;

    while (current !== null) {
        if (seen.has(current.val)) {
            prev.next = current.next;
        } else {
            seen.add(current.val);
            prev = current;
        }
        current = current.next;
    }
    return head;
}
\`\`\`

## Time Complexity

**O(n)** for both approaches — each node is visited once.

## Space Complexity

**O(1)** for the sorted approach — no extra data structures.
**O(n)** for the unsorted approach — the Set stores up to n unique values.

## Space Complexity

**O(1)** sorted / **O(n)** unsorted.

## Notes

- For sorted lists: the key observation is that duplicates are always adjacent, so a simple comparison with the next node suffices.
- For unsorted lists: comparing each node against all subsequent nodes would be O(n^2); the Set brings it down to O(n).
- LeetCode #83 (sorted), #82 (remove all duplicates including originals).
`;export{e as default};
