const e=`# remove Duplicates From Linked List

## Problem Statement

Describe the problem statement for **remove Duplicates From Linked List** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Problem: remove duplicates from a singly linked list\r
 * Approach: you can use a hash table (or set) to keep track of the values you've encountered so far. As you traverse the list, if you encounter a value that is already in the hash table, you remove the node containing that value from the list\r
 * Traversal Strategy:\r
        Unsorted list: Requires a hash set to track visited nodes/values due to random placement of duplicates.\r
        Sorted list: Direct comparison between adjacent nodes suffices to identify and remove duplicates.\r
 */\r
\r
// Sorted\r
class ListNode {\r
    constructor(val = 0, next = null) {\r
        this.val = val;\r
        this.next = next;\r
    }\r
}\r
\r
function removeDuplicatesFromSortedLinkedList(head) {\r
    let current = head;\r
\r
    while (current !== null && current.next !== null) {\r
        if (current.val === current.next.val) {\r
            // Skip the next node as it's a duplicate\r
            current.next = current.next.next;\r
        } else {\r
            // Move to the next node\r
            current = current.next;\r
        }\r
    }\r
    return head;\r
}\r
\r
// Unsorted\r
\r
class Node {\r
    constructor(data) {\r
        this.data = data;\r
        this.next = null;\r
    }\r
}\r
\r
class LinkedList {\r
    constructor() {\r
        this.head = null;\r
    }\r
\r
    // Method to insert a new node at the end of the linked list\r
    append(data) {\r
        const newNode = new Node(data);\r
\r
        if (!this.head) {\r
            this.head = newNode;\r
            return;\r
        }\r
\r
        let current = this.head;\r
        while (current.next !== null) {\r
            current = current.next;\r
        }\r
        current.next = newNode;\r
    }\r
\r
    // Method to remove duplicates from the linked list\r
    removeDuplicatesFromUnsortedLinkedList(head) {\r
        if (head === null) return head;  // Edge case: empty list\r
    \r
        let seen = new Set();  // Hash set to track seen values\r
        let current = head;\r
        let prev = null;       // Pointer to the previous node\r
    \r
        while (current !== null) {\r
            if (seen.has(current.val)) {\r
                // Duplicate found, skip the current node\r
                prev.next = current.next;\r
            } else {\r
                // Value not seen before, add it to the set\r
                seen.add(current.val);\r
                prev = current;  // Move prev forward only if no deletion happened\r
            }\r
            current = current.next;  // Move current forward\r
        }\r
        return head;\r
    }    \r
\r
    // Method to print the linked list\r
    print() {\r
        let current = this.head;\r
        while (current !== null) {\r
            console.log(current.data);\r
            current = current.next;\r
        }\r
    }\r
}\r
\r
// Example usage:\r
const linkedList = new LinkedList();\r
linkedList.append(1);\r
linkedList.append(2);\r
linkedList.append(2);\r
linkedList.append(3);\r
linkedList.append(4);\r
linkedList.append(4);\r
linkedList.removeDuplicates();\r
linkedList.print();\r
\r
/**\r
 * \r
The time complexity of the removeDuplicates method in the provided implementation is O(n), where n is the number of nodes in the linked list.\r
\r
Here's the breakdown of the time complexity:\r
\r
Traversing the List: The method iterates through each node in the linked list once, visiting each node exactly once. This traversal has a time complexity of O(n), where n is the number of nodes in the linked list.\r
Hash Set Operations: Inside the loop, there are constant-time operations to check if a value exists in the hash set (hashSet.has(current.data)) and to add a value to the hash set (hashSet.add(current.data)). These operations are typically considered to have a time complexity of O(1) on average.\r
Since the dominant factor in the time complexity is the traversal of the linked list, the overall time complexity of the removeDuplicates method is O(n), where n is the number of nodes in the linked list. This means the time taken to remove duplicates increases linearly with the size of the linked list.\r
\r
The space complexity of the removeDuplicates method in the provided implementation is O(n), where n is the number of unique elements in the linked list.\r
\r
Here's the breakdown of the space complexity:\r
\r
Hash Set: Inside the removeDuplicates method, a hash set (hashSet) is used to keep track of unique elements encountered while traversing the linked list. The hash set stores the unique values encountered so far. In the worst case, when all elements in the linked list are unique, the hash set will contain all the elements of the linked list. Therefore, the space required to store the hash set is proportional to the number of unique elements in the linked list, which is O(n).\r
Additional Pointers: The method uses a few additional pointers (current, previous) to traverse and manipulate the linked list. However, these pointers require constant space and do not depend on the size of the input.\r
Since the space required for the hash set dominates the overall space complexity, the space complexity of the removeDuplicates method is O(n), where n is the number of unique elements in the linked list. This means the space used by the algorithm increases linearly with the number of unique elements in the linked lis\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
