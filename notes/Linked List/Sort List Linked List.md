# Sort List Linked List

## Problem Statement

Describe the problem statement for **Sort List Linked List** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Sort List
 * Given the head of a linked list, return the list after sorting it in ascending order.
 * Approach:
 * 		Sorting a linked list can be achieved using several methods, but one of the most efficient ways is to use Merge Sort because of its O(n log n) time complexity.
 * 		Divide: "Find the middle" of the linked list to divide it into two halves.
 * 		Conquer: "Recursively sort" each half.
 * 		Combine: "Merge the two sorted" halves to produce the sorted linked list
 * For this program we use three helpers- FindMiddle and Merge
 * DummyNode-> dummy node is created and does not contain any meaningful data (often initialized with a value like 0 or null).
 * 		The dummy node's next pointer points to the head of the linked list
 * 		Operations like merging or inserting nodes can be performed starting from the dummy node.
 * 		The dummy node allows you to handle the head of the list in the same way as other nodes, without needing special conditions.
 */

/*
Key Points:
	Dummy Node: Simplifies handling edge cases at the head of the list and ensures that the final sorted list starts from dummy.next.
	Iterative Approach: Avoids recursion, which helps in achieving O(1) space complexity.
	Merge Sort: Divides the list into smaller sublists, merges them in sorted order, and gradually builds up the sorted list.
This approach ensures that the original list is modified in place without requiring additional space proportional to the size of the list, making it efficient for sorting linked lists.
*/


// Definition for singly linked list
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

/*
  Main function to sort the linked list using Merge Sort
*/
function sortList(head) {
  // Step 1: Base case
  // If list is empty or has only one node, it's already sorted
  if (head === null || head.next === null) {
    return head;
  }

  // Step 2: Split the list into two halves
  let mid = getMiddle(head);
  let rightHead = mid.next;
  mid.next = null; // break the list into two parts

  // Step 3: Recursively sort both halves
  let left = sortList(head);
  let right = sortList(rightHead);

  // Step 4: Merge the sorted halves
  return merge(left, right);
}

/*
  Helper function to find the middle of the linked list
  Uses slow & fast pointer technique
*/
function getMiddle(head) {
  let slow = head;
  let fast = head.next;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

/*
  Helper function to merge two sorted linked lists
*/
function merge(l1, l2) {
  let dummy = new ListNode(0);
  let curr = dummy;

  // Compare nodes and attach smaller one
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  // Attach remaining nodes (if any)
  curr.next = l1 !== null ? l1 : l2;

  // Return head of merged list
  return dummy.next;
}
```

/* What this code does (quick summary)

* Recursively **splits** the list into halves
* **Sorts** each half
* **Merges** them back in sorted order
* Uses a dummy node to simplify merging logic
* Achieves **O(n log n)** time complexity and **O(log n)** space due to recursion
*/

// Example usage:
// Creating the linked list 1 -> 5 -> 6 -> 3 -> 4 -> 8 -> 5 -> 6 -> 3 -> 9 -> 7 -> 5 -> 4 -> 6
let head = new ListNode(1);
head.next = new ListNode(5);
head.next.next = new ListNode(6);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(4);
head.next.next.next.next.next = new ListNode(8);
head.next.next.next.next.next.next = new ListNode(5);
head.next.next.next.next.next.next.next = new ListNode(6);
head.next.next.next.next.next.next.next.next = new ListNode(3);
head.next.next.next.next.next.next.next.next.next = new ListNode(9);
head.next.next.next.next.next.next.next.next.next.next = new ListNode(7);
head.next.next.next.next.next.next.next.next.next.next.next = new ListNode(5);
head.next.next.next.next.next.next.next.next.next.next.next.next = new ListNode(4);
head.next.next.next.next.next.next.next.next.next.next.next.next.next = new ListNode(6);

console.log("Original List:");
printLinkedList(head); // Output: 1 -> 5 -> 6 -> 3 -> 4 -> 8 -> 5 -> 6 -> 3 -> 9 -> 7 -> 5 -> 4 -> 6

// Sort the linked list
let sortedHead = sortList(head);

console.log("Sorted List:");
printLinkedList(sortedHead); // Output: 1 -> 3 -> 3 -> 4 -> 4 -> 5 -> 5 -> 5 -> 6 -> 6 -> 6 -> 7 -> 8 -> 9

/*
The iterative merge sort approach splits the linked list into progressively larger sublists and merges them iteratively, avoiding recursion and maintaining O(1) space complexity. The overall time complexity remains O(n log n).
*/


// RECURSIVE solution->
// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Function to merge two sorted linked lists
function merge(l1, l2) {
    // dummy node's next pointer points to the head of the linked list
	let dummy = new ListNode(0);
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    if (l1 !== null) {
        current.next = l1;
    } else if (l2 !== null) {
        current.next = l2;
    }

    return dummy.next;
}

// Function to find the middle of the linked list
function findMiddle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

// Function to sort the linked list
function sortList(head) {
    if (head === null || head.next === null) {
        return head;
    }

    // Find the middle of the linked list
    let middle = findMiddle(head);
    let nextToMiddle = middle.next;

    // Split the linked list into two halves
    middle.next = null;

    // Recursively sort the two halves
    let left = sortList(head);
    let right = sortList(nextToMiddle);

    // Merge the two sorted halves
    let sortedList = merge(left, right);

    return sortedList;
}

// Example usage:
// Creating the linked list 4 -> 2 -> 1 -> 3
let head = new ListNode(4);
head.next = new ListNode(2);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(3);

// Print original list
console.log("Original List:");
printLinkedList(head); // Output: 4 -> 2 -> 1 -> 3

// Sort the linked list
let sortedHead = sortList(head);

// Print sorted list
console.log("Sorted List:");
printLinkedList(sortedHead); // Output: 1 -> 2 -> 3 -> 4

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



/*
Time Complexity (TC)
The time complexity of Merge Sort for a linked list is O(n log n).

Reason: The linked list is divided in half at each step (logarithmic divisions), and merging each half takes linear time. Hence, the overall time complexity is O(n log n).

Space Complexity (SC)
The space complexity of Merge Sort for a linked list is O(log n) due to the recursive call stack.

Reason: Merge Sort is a divide-and-conquer algorithm. Although it doesn’t require additional space for arrays as it operates directly on the linked list, it does use stack space for recursion. The depth of the recursion tree is O(log n), leading to a space complexity of O(log n).

Summary
Time Complexity (TC): O(n log n)
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
