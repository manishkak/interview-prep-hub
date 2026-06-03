# Convert Binary Numberina Linked Listto Integer

## Problem Statement

Given the head of a singly linked list where each node's value is either 0 or 1, return the decimal integer value of the binary number represented by the list. The most significant bit is at the head.

## Examples

- Input: 1 -> 0 -> 1
- Output: 5
- Explanation: Binary 101 = 5 in decimal.

- Input: 0
- Output: 0

## Approach

Read the binary number left to right (MSB first). At each step, shift the accumulated result one bit to the left (multiply by 2) and add the current node's value. This is equivalent to building the decimal value digit by digit.

## Solution

```js
function getDecimalValue(head) {
    let result = 0;
    let current = head;

    while (current !== null) {
        result = result * 2 + current.val;
        current = current.next;
    }

    return result;
}
```

## Time Complexity

**O(n)** — each node is visited once.

## Space Complexity

**O(1)** — only a single accumulator variable is used.

## Notes

- The operation result = result * 2 + bit is the standard left-to-right binary-to-decimal conversion — each step shifts existing bits one position left and adds the new bit.
- LeetCode #1290.
