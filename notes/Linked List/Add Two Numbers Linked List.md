# Add Two Numbers Linked List

## Problem Statement

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list (also in reverse order).

## Examples

- Input: l1 = 2 -> 4 -> 3, l2 = 5 -> 6 -> 4
- Output: 7 -> 0 -> 8
- Explanation: 342 + 465 = 807, stored reversed as 7 -> 0 -> 8.

- Input: l1 = 9 -> 9 -> 9, l2 = 1
- Output: 0 -> 0 -> 0 -> 1
- Explanation: 999 + 1 = 1000.

## Approach

Simulate the addition digit by digit, just like grade-school addition with a carry.

1. Use a dummy head node to simplify building the result list.
2. Traverse both lists simultaneously. At each step: sum the current digits plus carry, compute the new digit (sum % 10), update carry (Math.floor(sum / 10)), and append the new digit node.
3. If one list is exhausted, treat its missing digits as 0.
4. After the loop, if carry is still 1, append a final node with value 1.
5. Return dummyHead.next.

## Solution

```js
function addTwoNumbers(l1, l2) {
    let dummyHead = { data: 0, next: null };
    let current = dummyHead;
    let carry = 0;
    let p = l1;
    let q = l2;

    while (p || q) {
        const x = p ? p.data : 0;
        const y = q ? q.data : 0;
        const sum = x + y + carry;
        carry = Math.floor(sum / 10);
        current.next = { data: sum % 10, next: null };
        current = current.next;

        if (p) p = p.next;
        if (q) q = q.next;
    }

    if (carry > 0) {
        current.next = { data: carry, next: null };
    }

    return dummyHead.next;
}
```

## Time Complexity

**O(max(m, n))** where m and n are the lengths of the two lists. We traverse both lists once, up to the length of the longer one.

## Space Complexity

**O(max(m, n))** for the result list, which has at most max(m, n) + 1 nodes.

## Notes

- The dummy head pattern avoids special-casing the first node insertion.
- The carry after the loop handles cases like 999 + 1 = 1000 where the result is longer than both inputs.
- LeetCode #2.
