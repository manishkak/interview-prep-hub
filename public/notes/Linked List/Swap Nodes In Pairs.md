# Swap Nodes In Pairs

## Problem Statement

Describe the problem statement for **Swap Nodes In Pairs** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * swap nodes in pairs
 * Given a linked list, swap every two adjacent nodes and return its head. For example, given 1 -> 2 -> 3 -> 4, you should return 2 -> 1 -> 4 -> 3.
 * STEPS:
 * Initialize a dummy node and point its next to the head of the list.
Use a prev pointer to track the node before the pair being swapped.
Loop through the list and swap nodes in pairs.
Update pointers after swapping to continue with the next pair.
 */

// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function swapPairs(head) {
    // Initialize a dummy node and point its next to the head
    let dummy = new ListNode(0);
    dummy.next = head;
    
    // Initialize the prev pointer to the dummy node
    let prev = dummy;
    
    // Loop until we reach the end of the list
    while (prev.next !== null && prev.next.next !== null) {
        // Initialize the two nodes to be swapped
        let first = prev.next;
        let second = first.next;
        
        // Swapping nodes
        first.next = second.next;
        second.next = first;
        prev.next = second;
        
        // Move the prev pointer to the end of the swapped pair
        prev = first;
    }
    
    // Return the new head of the list
    return dummy.next;
}

// Example usage:
// Creating the linked list 1 -> 2 -> 3 -> 4
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

// Print original list
console.log("Original List:");
printLinkedList(head); // Output: 1 -> 2 -> 3 -> 4

// Swap nodes in pairs
let swappedHead = swapPairs(head);

// Print swapped list
console.log("Swapped List:");
printLinkedList(swappedHead); // Output: 2 -> 1 -> 4 -> 3

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

```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
