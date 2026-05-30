# Reverse Nodes In K group

## Problem Statement

Describe the problem statement for **Reverse Nodes In K group** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Given a singly linked list, reverse the nodes of the list k at a time and return the modified list. If the number of nodes is not a multiple of k, leave the remaining nodes as-is.
 */

class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function reverseKGroup(head, k) {
    if (!head || k === 1) return head;
  
    const getLength = (node) => {
      let length = 0;
      while (node) {
        length++;
        node = node.next;
      }
      return length;
    };
  
    const reverse = (start, end) => {
      let prev = null;
      let current = start;
      while (current !== end) {
        const nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
      }
      return prev;
    };
  
    let length = getLength(head);
    let dummy = new ListNode(0, head); // dummy points to the head ('next' part of ListNode is set to head)... dummy -> [1 -> 2 -> 3 -> 4 -> 5]
    let prevGroupEnd = dummy; // Initialize Pointers
  
    while (length >= k) {
      let groupStart = prevGroupEnd.next; // points to the first node of the group to reverse
      let groupEnd = groupStart; // groupEnd is initialized to the same node as groupStart
      for (let i = 0; i < k; i++) {
        groupEnd = groupEnd.next; // The loop moves groupEnd forward by k steps
      }
      const newGroupStart = reverse(groupStart, groupEnd);
      prevGroupEnd.next = newGroupStart;
      groupStart.next = groupEnd;
      prevGroupEnd = groupStart;
      length -= k; // This line reduces the remaining length of the linked list 'by k' after a group of k nodes has been processed (reversed and reconnected)... length = length - k;
    }
  
    return dummy.next;
  }
  
  // Helper to create a linked list from an array
  function createLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
      current.next = new ListNode(val);
      current = current.next;
    }
    return dummy.next;
  }
  
  // Helper to convert linked list to array
  function toArray(head) {
    const result = [];
    while (head) {
      result.push(head.val);
      head = head.next;
    }
    return result;
  }
  
  // Test case
  const head = createLinkedList([1, 2, 3, 4, 5]);
  const k = 3;
  const result = reverseKGroup(head, k);
  console.log(toArray(result)); // Output: [3, 2, 1, 4, 5]
  
/*
Explanation

Helper Functions:
    getLength: Computes the length of the linked list.
    reverse: Reverses a portion of the list from start to end.

Main Function:
    Uses a dummy node to simplify handling the head of the list.
    Iterates through the list in chunks of k nodes.
    For each group, reverses the nodes and reconnects the reversed group to the rest of the list.

Edge Cases:
    If k is 1, no reversal is needed.
    If the list's length is less than k, the remaining nodes are left as-is.

Time Complexity
    Reversal: Each node is visited once, resulting in O(n) for the entire list.
    Getting Length: Linear, O(n), done once.
    Total: O(n).

Space Complexity
Iterative approach uses constant extra space: O(1).
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
