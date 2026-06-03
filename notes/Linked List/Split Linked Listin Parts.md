# Split Linked Listin Parts

## Problem Statement

Given the head of a singly linked list and an integer k, split the list into k consecutive parts. The length of each part should differ by at most 1. Parts that are shorter receive no extra node. Earlier parts should be no shorter than later parts. If the list has fewer than k nodes, some parts will be null.

## Examples

- Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10, k = 3
- Output: [1->2->3->4, 5->6->7, 8->9->10]

- Input: 1 -> 2 -> 3, k = 5
- Output: [1, 2, 3, null, null]

## Approach

1. Find the total length of the list.
2. Compute base part size: partSize = Math.floor(length / k) and extra nodes: extraNodes = length % k. The first extraNodes parts each get one extra node.
3. Traverse the list, cutting it into parts. For each part i: the current part size is partSize + (extraNodes > 0 ? 1 : 0). Advance current by that many nodes, then sever the link.

## Solution

```js
function splitListToParts(head, k) {
    let length = 0;
    let current = head;
    while (current) { length++; current = current.next; }

    let partSize = Math.floor(length / k);
    let extraNodes = length % k;

    let result = new Array(k).fill(null);
    current = head;

    for (let i = 0; i < k; i++) {
        if (!current) break;

        result[i] = current;
        let currentPartSize = partSize + (extraNodes > 0 ? 1 : 0);
        extraNodes--;

        for (let j = 1; j < currentPartSize; j++) current = current.next;

        let next = current.next;
        current.next = null;
        current = next;
    }

    return result;
}
```

## Time Complexity

**O(n + k)** — one pass to find length (O(n)), one pass to split (O(n)), plus O(k) to fill remaining null slots.

## Space Complexity

**O(k)** for the result array of k head pointers.

## Notes

- extraNodes-- inside the loop handles the distribution: the first extraNodes parts are one node longer, after which all remaining parts get exactly partSize nodes.
- LeetCode #725.
