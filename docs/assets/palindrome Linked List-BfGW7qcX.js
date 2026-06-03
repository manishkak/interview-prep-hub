const n=`# palindrome Linked List

## Problem Statement

Given the head of a singly linked list, return true if it is a palindrome, false otherwise.

## Examples

- Input: 1 -> 2 -> 2 -> 1
- Output: true

- Input: 1 -> 2
- Output: false

## Approach

Three-step in-place approach — O(n) time, O(1) space:

1. Find the middle using slow/fast pointers.
2. Reverse the second half of the list in-place.
3. Compare the first half (from head) with the reversed second half (from prev). If all values match, it is a palindrome.

This avoids the O(n) extra space needed by the array approach (store all values, then compare with two pointers from both ends).

## Solution

\`\`\`js
function isPalindrome(head) {
    if (!head || !head.next) return true;

    let slow = head, fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null, current = slow;
    while (current !== null) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }

    let firstHalf = head, secondHalf = prev;
    while (secondHalf !== null) {
        if (firstHalf.val !== secondHalf.val) return false;
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }

    return true;
}
\`\`\`

## Time Complexity

**O(n)** — finding the middle is O(n), reversing the second half is O(n/2), comparing both halves is O(n/2).

## Space Complexity

**O(1)** — all operations done in-place with a constant number of pointers.

## Notes

- After finding the middle with slow/fast pointers, slow points to the start of the second half.
- The reversed second half is shorter or equal to the first half, so iterating until secondHalf is null naturally handles both odd and even lengths.
- Restoring the list after comparison is optional but good practice.
- LeetCode #234.
`;export{n as default};
