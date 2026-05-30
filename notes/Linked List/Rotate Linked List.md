# Rotate Linked List

## Problem Statement

Describe the problem statement for **Rotate Linked List** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * RotateLinkedList
 * To rotate a linked list means to shift the nodes of the list to the right or left by a specified number of positions.
 * Approach:
 * 		Calculate Length and Adjust K:	
 * 			Determine the length of the linked list (n).
 * 			Adjust the rotation amount k using modulo operation (k = k % n). This ensures k is within the range of the list length to avoid unnecessary rotations eg. if k > n then doing k % n is imp. to ensure there are no unnecessary rotations.
 * 		
 * 		Identify the (n-k)th node (new tail) and the (n-k-1)th node (new head)
 * 		Set the next of the current tail to point to the original head, making it a circular linked list
 * 
 * 		Update the head to the node after the new tail
 * 		Set the next of the new tail to null to break the circular structure.
 */

// Once you understand the above approach, the solution is pretty straight forward

// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Function to rotate the linked list to the right by k positions
function rotateRight(head, k) {
    if (!head || k === 0) {
        return head;
    }

    // Step 1: Calculate the length of the linked list and adjust k
    let current = head;
    let n = 1; // Start from 1 because we're already at head
    while (current.next) {
        current = current.next;
        n++;
    }
    
    k = k % n;
    if (k === 0) {
        return head; // No rotation needed
    }

    current.next = head; // Make it a circular linked list

    // Step 2: Find the break point (n-k)th node and (n-k-1)th node
    let newTail = head;
    // lets say k = 2 and n = 5, then newTail will be at 3 (n-k)
    for (let i = 1; i < n - k; i++) {
        newTail = newTail.next;
    }

    let newHead = newTail.next; // newHead will be next of newTail
    newTail.next = null; // Break the circle and make it a normal LL again

    return newHead;
}

// Example usage:

// Creating the linked list 1 -> 2 -> 3 -> 4 -> 5
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Print original list
console.log("Original List:");
printLinkedList(head); // Output: 1 -> 2 -> 3 -> 4 -> 5

// Rotate the linked list to the right by 2 positions
let rotatedHead = rotateRight(head, 2);

// Print rotated list
console.log("Rotated List:");
printLinkedList(rotatedHead); // Output: 4 -> 5 -> 1 -> 2 -> 3

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
 * This implementation efficiently rotates the linked list while maintaining optimal time complexity of O(n), where n is the number of nodes in the linked list, and constant space complexity of O(1).
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
