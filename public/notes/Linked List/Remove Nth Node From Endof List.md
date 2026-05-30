# Remove Nth Node From Endof List

## Problem Statement

Describe the problem statement for **Remove Nth Node From Endof List** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/** PROBLEM->
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 */

/** SOLUTION->
 * Set two pointers, right and left, at the head of the linked list.
 * Move the right pointer n steps forward.
 * Move both the right and left pointers forward until the right pointer reaches the last node. At this point, the left pointer will be pointing to the node behind the nth last node.
 * Relink the left node to the node next to left’s next node.
 * Return the head of the linked list.
 */

/**
 * The time complexity is O(n), where n is the number of nodes in the linked list
 * The space complexity is O(1) because we use constant space to store two pointers
 */

// this is also the Floyd’s Tortoise and Hare Algorithm
function removeNthLastNode(head, n) {
    let right = head;  //Set two pointers, at the head of the linked list
    let left = head;

    for (let i = 0; i < n; i++) {
        right = right.next;  //Move the right pointer n steps forward
    }

    if (!right) {
        return head.next;
    }

    while (right.next != null) {  //Move both pointers forward until the right pointer reaches the last node
        right = right.next;  
        left = left.next;
    }
	//At this point, the left pointer will be pointing to the node behind the nth last node

    left.next = left.next.next;  //Relink the left node to the node next to left’s next node

    return head;  //Return the head of the linked list
}

function main() {
    const inputs = [
        [23, 89, 10, 5, 67, 39, 70, 28],
        [34, 53, 6, 95, 38, 28, 17, 63, 16, 76],
        [288, 224, 275, 390, 4, 383, 330, 60, 193],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [69, 8, 49, 106, 116, 112, 104, 129, 39, 14, 27, 12]
    ];

    const n = [4, 1, 6, 9, 11];

    for (let i = 0; i < inputs.length; i++) {
        const inputLinkedList = new LinkedList();
        inputLinkedList.createLinkedList(inputs[i]);
        console.log((i + 1) + ".\tLinked List:\t\t", printListWithForwardArrow(inputLinkedList.head));
        console.log("\tn = " + n[i]);
        let result = removeNthLastNode(inputLinkedList.head, n[i]);
        console.log("\tUpdated Linked List:\t", printListWithForwardArrow(result));
        console.log("-".repeat(100));
    }
}

main();
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
