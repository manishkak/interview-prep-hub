# intersectionof Two Linked Lists

## Problem Statement

Describe the problem statement for **intersectionof Two Linked Lists** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. 
 * If the two linked lists have no intersection at all, return null.
 * AKA Intersection point in Y shaped Linked Lists
 */

/*
Approach (Optimal: O(n) time, O(1) space):
1. Initialize two pointers: p1 for list A and p2 for list B.
2. Traverse both lists. When either pointer reaches the end, redirect it to the head of the other list.
3. If the lists intersect, the two pointers will meet at the intersection node after at most m + n steps.
4. If they don’t intersect, both pointers will reach the end (null) at the same time.
*/

/* Steps to Solve:
1. Set p1 = headA and p2 = headB.

2. While p1 !== p2, move both one step forward.
    - If either becomes null, redirect it to the head of the other list.

3. When they meet, either at intersection node or both at null, return p1 (or p2).
*/
// this is the final solution from gpt
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;

    let p1 = headA;
    let p2 = headB;

    while (p1 !== p2) {
        p1 = p1 ? p1.next : headB; // if p1 is present meaning not null/end of LL, move to p1.next otherwise move to head of B
        p2 = p2 ? p2.next : headA;
    }

    return p1; // either intersection node or null
};

// Explanation:
// We move both pointers one step at a time.
// If one pointer hits the end, we redirect it to the other list's head.
// This ensures both pointers traverse the same total distance.
// If there's an intersection, they’ll meet there. If not, both will become null at the same time.

// Lists-
A: 4 → 1 → 8 → 4 → 5
B: 5 → 6 → 1 → 8 → 4 → 5

A = 5, B = 6

// DRY RUN->
| Step | pA           | pB           | Comment                                     |
| ---- | ------------ | ------------ | ------------------------------------------- |
| 1    | 4            | 5            | —                                           |
| 2    | 1            | 6            | —                                           |
| 3    | 8            | 1            | —                                           |
| 4    | 4            | 8            | pB reached intersection, pA will reach soon |
| 5    | 5            | 4            | —                                           |
| 6    | null → headB | 5            | pA reset to B’s head                        |
| 7    | 5            | null → headA | pB reset to A’s head                        |
| 8    | 6            | 4            | —                                           |
| 9    | 1            | 1            | —                                           |
| 10   | 8            | 8            | ✅ Intersect here                            |













// Solution using a Hash Set ->

// TC: O(n + m)
// SC: O(m)
// Simple, direct, very readable

// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Function to find the intersection of two linked lists using a hash set
function getIntersectionNode(headA, headB) {
    let nodesInB = new Set();

    // Traverse the second list and add its nodes to the set
    let current = headB;
    while (current !== null) {
        nodesInB.add(current);
        current = current.next;
    }

    // Traverse the first list and check if any node is in the set
    current = headA;
    while (current !== null) {
        if (nodesInB.has(current)) {
            return current; // Found the intersection node
        }
        current = current.next;
    }

    return null; // No intersection found
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

// Creating the shared part of the lists
let shared = createLinkedList([4, 5, 7]);

// Creating the unique parts and attaching the shared part
let list1 = new ListNode(4, new ListNode(1, new ListNode(8, shared)));
let list2 = new ListNode(5, new ListNode(0, new ListNode(1, shared)));

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

// Print lists
printLinkedList(list1); // Output: 4 -> 1 -> 8 -> 4 -> 5 -> 7
printLinkedList(list2); // Output: 5 -> 0 -> 1 -> 4 -> 5 -> 7

let intersectionNode = getIntersectionNode(list1, list2);
console.log(intersectionNode ? intersectionNode.val : 'No intersection'); // Output: 4

/**
 * This approach efficiently finds the intersection in linear time with respect to the combined length of the lists, but it requires additional space proportional to the size of the second list.
 * Time Complexity: O(m + n) - Traversing list2: O(n), Traversing list1: O(m), Total Time Complexity: O(m + n)
 * Space Complexity: O(n) - Hash Set: O(n), we store all the nodes of list2 in the hash set.
 */


// TWO POINTER SOLUTION->
// https://www.geeksforgeeks.org/write-a-function-to-get-the-intersection-point-of-two-linked-lists/
/**
 * This algorithm works by traversing the two linked lists simultaneously, using two pointers. When one pointer reaches the end of its list, it is reassigned to the head of the other list. This process continues until the two pointers meet, which indicates that they have reached the intersection point
 * Traverse through the lists, one node at a time.
        - When ptr1 reaches the end of a list, then redirect it to head2.
        - Similarly, when ptr2 reaches the end of a list, redirect it to the head1.
        - Once both of them go through reassigning, they will be "equidistant from the collision point"
        - If at any node ptr1 meets ptr2, then it is the intersection node
 */

// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Function to find the intersection of two linked lists using two pointers

// Two Pointer (Optimized)
// O(n + m)
// O(1)
// No extra space

function getIntersectionNode(headA, headB) {
    if (!headA || !headB) return null;

    let pointerA = headA;
    let pointerB = headB;

    // Traverse both lists
    while (pointerA !== pointerB) {
        // Move pointers to the next node
        pointerA = pointerA === null ? headB : pointerA.next;
        pointerB = pointerB === null ? headA : pointerB.next;
    }

    // Either both pointers are null (no intersection) or they meet at the intersection node
    return pointerA;
}

// Example usage:

// Creating the shared part of the lists
let shared = new ListNode(4, new ListNode(5, new ListNode(7)));

// Creating the unique parts and attaching the shared part
let list1 = new ListNode(4, new ListNode(1, new ListNode(8, shared)));
let list2 = new ListNode(5, new ListNode(0, new ListNode(1, shared)));

// Print lists
console.log("List1:");
printLinkedList(list1); // Output: 4 -> 1 -> 8 -> 4 -> 5 -> 7
console.log("List2:");
printLinkedList(list2); // Output: 5 -> 0 -> 1 -> 4 -> 5 -> 7

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

// Finding intersection node
let intersectionNode = getIntersectionNode(list1, list2);
if (intersectionNode) {
    console.log(`Intersection Node Value: ${intersectionNode.val}`); // Output: Intersection Node Value: 4
} else {
    console.log("No intersection found");
}


/**
 * This approach efficiently finds the intersection in linear time with respect to the combined length of the lists, but it requires additional space proportional to the size of the second list.
 * Time Complexity: O(m + n) - Traversing list2: O(n), Traversing list1: O(m), Total Time Complexity: O(m + n)
 * Space Complexity: Constant Space: O(1), uses only a constant amount of extra space regardless of the input size. This is because it only uses two extra pointers (pointerA and pointerB) to traverse the lists and does not use any additional data structures that grow with input size.
 */


// Third Solution->
/**
 * Use 2 nested for loops. The outer loop will be for each node of the 1st list and the inner loop will be for the 2nd list. In the inner loop, check if any of the nodes of the 2nd list is the same as the current node of the first linked list. The time complexity of this method will be O(M * N) where m and n are the numbers of nodes in two lists.
 */
function getIntesectionNode(head1, head2) {
    while (head2) {
        let temp = head1;
        while (temp) {
            if (temp == head2) {
                return head2;
            }
            temp = temp.next;
        }
        head2 = head2.next;
    }
    return null;
}

/*
    Time Complexity: O(m*n), where m and n are number of nodes in two linked list.
    Auxiliary Space: O(1), Constant Space is used
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
