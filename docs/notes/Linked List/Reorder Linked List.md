# Reorder Linked List

## Problem Statement

Describe the problem statement for **Reorder Linked List** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Reorder Linked List
 * You are given the head of a singly linked-list. The list can be represented as:
L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:
L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 * Approach-
 * 	Find the Middle of the Linked List: Use the two-pointer technique (slow and fast pointers) to find the middle node of the linked list.
 * 	Reverse the Second Half: Reverse the linked list from the middle node to the end.
 * 	Merge the Two Halves: Interleave the first half and the reversed second half to reorder the linked list as required.
 */

// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Function to find the middle of the linked list
function findMiddle(head) {
    let slow = head;
    let fast = head;

    // Use fast and slow pointers to find the middle
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

// Function to reverse a linked list
function reverseList(head) {
    let prev = null;
    let current = head;

    while (current) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }

    return prev;
}

// Function to merge two linked lists
function mergeLists(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;

    while (l1 && l2) {
        current.next = l1;
        l1 = l1.next;
        current = current.next;

        current.next = l2;
        l2 = l2.next;
        current = current.next;
    }

    if (l1) {
        current.next = l1;
    }

    if (l2) {
        current.next = l2;
    }

    return dummy.next;
}

// Function to reorder the linked list
function reorderList(head) {
    if (!head || !head.next) {
        return;
    }

    // Step 1: Find the middle of the linked list
    let middle = findMiddle(head);
    let secondHalf = middle.next;
    middle.next = null; // Splitting into two halves

    // Step 2: Reverse the second half
    secondHalf = reverseList(secondHalf);

    // Step 3: Merge the two halves
    head = mergeLists(head, secondHalf);
}

// Example usage:

// Creating the linked list 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);
head.next.next.next.next.next.next = new ListNode(7);
head.next.next.next.next.next.next.next = new ListNode(8);

// Print original list
console.log("Original List:");
printLinkedList(head); // Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8

// Reorder the linked list
reorderList(head);

// Print reordered list
console.log("Reordered List:");
printLinkedList(head); // Output: 1 -> 8 -> 2 -> 7 -> 3 -> 6 -> 4 -> 5

// Helper function to print the linked list
function printLinkedList(head) {
    let result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

/**
Let's analyze the time and space complexity of the "Reorder Linked List" solution implemented in JavaScript:

### Time Complexity

1. **Finding the Middle of the Linked List (`findMiddle` function)**:
   - Uses the two-pointer technique, which takes O(n/2) time complexity, where n is the number of nodes in the linked list. This simplifies to O(n).

2. **Reversing the Second Half (`reverseList` function)**:
   - Reverses half of the linked list, which also takes O(n/2) time complexity, simplifying to O(n).

3. **Merging Two Linked Lists (`mergeLists` function)**:
   - Merges two linked lists, which involves iterating through both lists once. This takes O(n) time complexity, where n is the total number of nodes in both lists.

4. **Overall Time Complexity**:
   - The overall time complexity is dominated by the `findMiddle` and `reverseList` functions, each of which runs in O(n).
   - Therefore, the overall time complexity of the `reorderList` function is O(n).

### Space Complexity

- **Space Complexity**: O(1) - Constant Space
  - The algorithm operates in constant space O(1) because it only uses a few extra pointers (`slow`, `fast`, `prev`, `current`, `dummy`) and does not use any additional data structures that grow with the input size.
  - The operations are done in-place without requiring additional space proportional to the input size.

### Summary

- **Time Complexity**: O(n) - Linear time complexity, where n is the number of nodes in the linked list.
- **Space Complexity**: O(1) - Constant space complexity, as the algorithm uses a fixed amount of extra space regardless of the input size.

This analysis shows that the solution efficiently reorders the linked list while maintaining optimal time and space complexities.
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
