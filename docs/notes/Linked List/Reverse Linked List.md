# Reverse Linked List

## Problem Statement
Reverse a singly linked list and return the reversed list.

## Examples

```txt
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```

## Approach
Iteratively reverse pointers while traversing the list. Keep track of the previous node and update the next pointer on each step.

## Solution

```ts
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null
  let current = head

  while (current) {
    const nextNode = current.next
    current.next = prev
    prev = current
    current = nextNode
  }

  return prev
}
```

## Time Complexity
O(n)

## Space Complexity
O(1)

## Notes
- Use `prev` and `current` pointers.
- This is a classic iterative linked list reversal.
