const n=`# Reverse Nodes In K group

## Problem Statement

Given the head of a linked list, reverse the nodes of the list k at a time and return the modified list. If the number of remaining nodes is not a multiple of k, leave those nodes as-is in their original order.

## Examples

- Input: 1 -> 2 -> 3 -> 4 -> 5, k = 2
- Output: 2 -> 1 -> 4 -> 3 -> 5

- Input: 1 -> 2 -> 3 -> 4 -> 5, k = 3
- Output: 3 -> 2 -> 1 -> 4 -> 5

## Approach

Calculate the list length first. Use a dummy node and a prevGroupEnd pointer that tracks the end of the previously processed group.

While remaining length >= k:
1. Set groupStart = prevGroupEnd.next and advance groupEnd k steps to find the group boundary.
2. Reverse nodes from groupStart up to (but not including) groupEnd.
3. Reconnect: prevGroupEnd.next = reversed head, groupStart.next = groupEnd.
4. Advance prevGroupEnd to groupStart (which is now the tail of the reversed group).
5. Decrease remaining length by k.

## Solution

\`\`\`js
function reverseKGroup(head, k) {
    if (!head || k === 1) return head;

    const getLength = (node) => {
        let length = 0;
        while (node) { length++; node = node.next; }
        return length;
    };

    const reverse = (start, end) => {
        let prev = null, current = start;
        while (current !== end) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev;
    };

    let length = getLength(head);
    let dummy = { val: 0, next: head };
    let prevGroupEnd = dummy;

    while (length >= k) {
        let groupStart = prevGroupEnd.next;
        let groupEnd = groupStart;
        for (let i = 0; i < k; i++) groupEnd = groupEnd.next;

        prevGroupEnd.next = reverse(groupStart, groupEnd);
        groupStart.next = groupEnd;
        prevGroupEnd = groupStart;
        length -= k;
    }

    return dummy.next;
}
\`\`\`

## Time Complexity

**O(n)** — each node is visited a constant number of times (once for length, once during reversal).

## Space Complexity

**O(1)** — iterative reversal with a constant number of pointers.

## Notes

- groupEnd points to the node AFTER the group (exclusive boundary), so the reverse helper stops before it and groupStart.next = groupEnd reconnects the tail.
- If length < k, the while loop never executes and the remaining nodes stay unchanged.
- LeetCode #25.
`;export{n as default};
