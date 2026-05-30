# Convert Binary Numberina Linked Listto Integer

## Problem Statement

Describe the problem statement for **Convert Binary Numberina Linked Listto Integer** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Convert Binary Number in a Linked List to Integer
 * Given a singly linked list where each node represents a binary digit (0 or 1), return the decimal value of the number it represents.
 * Example
 * If the linked list is 1 -> 0 -> 1, it represents the binary number 101, which is 5 in decimal.
 * This approach efficiently converts a binary number represented by a linked list into its decimal equivalent using constant space (O(1)) and linear time (O(n)), where n is the number of nodes in the linked list.
 */

// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Function to convert binary linked list to integer
function getDecimalValue(head) {
    let result = 0;
    let current = head;

    while (current !== null) {
        // Shift result to the left to make space for the next bit
        result = result * 2 + current.val;
        current = current.next;
    }

    return result;
}
// Example usage:

// Creating the linked list representing binary number 1 -> 0 -> 1
let head = new ListNode(1);
head.next = new ListNode(0);
head.next.next = new ListNode(1);

// Printing the linked list
console.log("Linked List:");
printLinkedList(head); // Output: 1 -> 0 -> 1

// Convert linked list to decimal value
let decimalValue = getDecimalValue(head);
console.log("Decimal Value:", decimalValue); // Output: Decimal Value: 5

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
