# Partition List Linked List

## Problem Statement

Describe the problem statement for **Partition List Linked List** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * The "Partition List" problem involves rearranging a linked list such that all nodes with values less than a given pivot value x come before nodes with values greater than or equal to x. The relative order of nodes in each partition should be preserved.
 * Problem Statement: 
 * 		Given a linked list and a value x, partition the list so that all nodes less than x come before nodes greater than or equal to x.
 * Approach:
 * 		Create two dummy nodes: Use two dummy nodes to build two separate lists. One list will contain nodes with values less than x, and the other will contain nodes with values greater than or equal to x.
 * 		Traverse the original list: For each node, decide which list to add it to based on its value.
 * 		Merge the two lists: Finally, connect the two lists to form the desired partitioned list.
 * Steps:
		Initialize "two dummy nodes": One for nodes less than x and one for nodes greater than or equal to x.
		Initialize "two pointers": These will help in building the two lists.
		"Traverse" the original list: For each node, add it to the appropriate list.
		"Connect" the two lists: Ensure the end of the "less than" list points to the start of the "greater than or equal to" list.
		"Return the new head": The head of the new list is the next node of the dummy node for the "less than" list.
 */

// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function partition(head, x) {
    // Create two dummy nodes
    let lessDummy = new ListNode(0); // One list will contain nodes with values less than x
    let greaterDummy = new ListNode(0); // other will contain nodes with values greater than or equal to x
    
    // Pointers to build the two lists.. Initialize "two pointers"
    let less = lessDummy;
    let greater = greaterDummy;
    
    // Traverse the original list
    let current = head;
    while (current !== null) {
        if (current.val < x) {
            less.next = current;
            less = less.next;
        } else {
            greater.next = current;
            greater = greater.next;
        }
        current = current.next;
    }
    
    // Connect the two lists
    greater.next = null; // Ensure the end of the greater list is null
    less.next = greaterDummy.next; // Connect less list to the start of greater list
    
    // Return the new head
    return lessDummy.next;
}

// Example usage:
// Creating the linked list 1 -> 4 -> 3 -> 2 -> 5 -> 2
let head = new ListNode(1);
head.next = new ListNode(4);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(2);

// Print original list
console.log("Original List:");
printLinkedList(head); // Output: 1 -> 4 -> 3 -> 2 -> 5 -> 2

// Partition list with x = 3
let partitionedHead = partition(head, 3);

// Print partitioned list
console.log("Partitioned List:");
printLinkedList(partitionedHead); // Output: 1 -> 2 -> 2 -> 4 -> 3 -> 5

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
The time complexity (TC) and space complexity (SC) for the "Partition List" problem are as follows:

### Time Complexity

The time complexity of the solution is **O(n)**, where **n** is the number of nodes in the linked list.

**Reason**: The algorithm traverses the linked list exactly once, performing a constant amount of work (pointer adjustments) for each node.

### Space Complexity

The space complexity of the solution is **O(1)**.

**Reason**: The algorithm uses a fixed amount of extra space regardless of the size of the input linked list. The extra space is used for the dummy nodes and a few pointers (`less`, `greater`, `current`, etc.), all of which require constant space.

### Summary

- **Time Complexity**: O(n)
- **Space Complexity**: O(1)
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
