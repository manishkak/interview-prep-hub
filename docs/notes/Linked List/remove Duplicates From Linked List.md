# remove Duplicates From Linked List

## Problem Statement

Describe the problem statement for **remove Duplicates From Linked List** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Problem: remove duplicates from a singly linked list
 * Approach: you can use a hash table (or set) to keep track of the values you've encountered so far. As you traverse the list, if you encounter a value that is already in the hash table, you remove the node containing that value from the list
 * Traversal Strategy:
        Unsorted list: Requires a hash set to track visited nodes/values due to random placement of duplicates.
        Sorted list: Direct comparison between adjacent nodes suffices to identify and remove duplicates.
 */

// Sorted
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function removeDuplicatesFromSortedLinkedList(head) {
    let current = head;

    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            // Skip the next node as it's a duplicate
            current.next = current.next.next;
        } else {
            // Move to the next node
            current = current.next;
        }
    }
    return head;
}

// Unsorted

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to insert a new node at the end of the linked list
    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Method to remove duplicates from the linked list
    removeDuplicatesFromUnsortedLinkedList(head) {
        if (head === null) return head;  // Edge case: empty list
    
        let seen = new Set();  // Hash set to track seen values
        let current = head;
        let prev = null;       // Pointer to the previous node
    
        while (current !== null) {
            if (seen.has(current.val)) {
                // Duplicate found, skip the current node
                prev.next = current.next;
            } else {
                // Value not seen before, add it to the set
                seen.add(current.val);
                prev = current;  // Move prev forward only if no deletion happened
            }
            current = current.next;  // Move current forward
        }
        return head;
    }    

    // Method to print the linked list
    print() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(4);
linkedList.removeDuplicates();
linkedList.print();

/**
 * 
The time complexity of the removeDuplicates method in the provided implementation is O(n), where n is the number of nodes in the linked list.

Here's the breakdown of the time complexity:

Traversing the List: The method iterates through each node in the linked list once, visiting each node exactly once. This traversal has a time complexity of O(n), where n is the number of nodes in the linked list.
Hash Set Operations: Inside the loop, there are constant-time operations to check if a value exists in the hash set (hashSet.has(current.data)) and to add a value to the hash set (hashSet.add(current.data)). These operations are typically considered to have a time complexity of O(1) on average.
Since the dominant factor in the time complexity is the traversal of the linked list, the overall time complexity of the removeDuplicates method is O(n), where n is the number of nodes in the linked list. This means the time taken to remove duplicates increases linearly with the size of the linked list.

The space complexity of the removeDuplicates method in the provided implementation is O(n), where n is the number of unique elements in the linked list.

Here's the breakdown of the space complexity:

Hash Set: Inside the removeDuplicates method, a hash set (hashSet) is used to keep track of unique elements encountered while traversing the linked list. The hash set stores the unique values encountered so far. In the worst case, when all elements in the linked list are unique, the hash set will contain all the elements of the linked list. Therefore, the space required to store the hash set is proportional to the number of unique elements in the linked list, which is O(n).
Additional Pointers: The method uses a few additional pointers (current, previous) to traverse and manipulate the linked list. However, these pointers require constant space and do not depend on the size of the input.
Since the space required for the hash set dominates the overall space complexity, the space complexity of the removeDuplicates method is O(n), where n is the number of unique elements in the linked list. This means the space used by the algorithm increases linearly with the number of unique elements in the linked lis
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
