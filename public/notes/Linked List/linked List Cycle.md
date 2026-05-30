# linked List Cycle

## Problem Statement

Describe the problem statement for **linked List Cycle** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Problem: Check whether or not a linked list contains a cycle. If a cycle exists, return TRUE. Otherwise, return FALSE. The cycle means that at least one node can be reached again by traversing the next pointer.
 */
function detectCycle(head) {
    if (!head) {
        return false;
    }

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }
    
    return false;
}

/**
 * TC = O(n)
 * SC = O(1) (When we say that an algorithm has a space complexity of O(1), it means that the amount of memory used by the algorithm remains constant regardless of the size of the input)
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
