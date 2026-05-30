# delete Node From Linked List

## Problem Statement

Describe the problem statement for **delete Node From Linked List** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * delete node from linked list; delete 5 from 4 -> 5 -> 1 -> 9
 * In this problem, you are only given a reference to the node to be deleted, not the head of the linked list. So, you need to perform the deletion operation using only this reference.
 * Copy the value of the next node to the current node (nodeToBeDel.val = nodeToBeDel.next.val;)
	now the list looks like 4 -> 1 -> 1 -> 9
 * Link the current node to the next of next node (node.next = node.next.next)
	This effectively removes the second 1 node from the list.
 * The list now looks like this: 4 -> 1 -> 9
 */

// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Function to delete a node in a singly linked list
// You will not be given access to the head of the list, only the node to be deleted
function deleteNode(node) {
    if (!node || !node.next) {
        return; // Can't delete the node if it's null or the tail node
    }

    // Copy the value of the next node to the current node
    node.val = node.next.val;
    // Link the current node to the next of next node
    node.next = node.next.next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

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

// Example usage:
let arr = [4, 5, 1, 9];
let head = createLinkedList(arr);

// Assuming we want to delete node with value 5
let nodeToDelete = head.next; // Node with value 5
deleteNode(nodeToDelete);

printLinkedList(head); // Output: 4 -> 1 -> 9

```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
