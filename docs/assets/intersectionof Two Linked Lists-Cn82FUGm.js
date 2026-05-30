const e=`# intersectionof Two Linked Lists

## Problem Statement

Describe the problem statement for **intersectionof Two Linked Lists** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. \r
 * If the two linked lists have no intersection at all, return null.\r
 * AKA Intersection point in Y shaped Linked Lists\r
 */\r
\r
/*\r
Approach (Optimal: O(n) time, O(1) space):\r
1. Initialize two pointers: p1 for list A and p2 for list B.\r
2. Traverse both lists. When either pointer reaches the end, redirect it to the head of the other list.\r
3. If the lists intersect, the two pointers will meet at the intersection node after at most m + n steps.\r
4. If they don’t intersect, both pointers will reach the end (null) at the same time.\r
*/\r
\r
/* Steps to Solve:\r
1. Set p1 = headA and p2 = headB.\r
\r
2. While p1 !== p2, move both one step forward.\r
    - If either becomes null, redirect it to the head of the other list.\r
\r
3. When they meet, either at intersection node or both at null, return p1 (or p2).\r
*/\r
// this is the final solution from gpt\r
var getIntersectionNode = function(headA, headB) {\r
    if (!headA || !headB) return null;\r
\r
    let p1 = headA;\r
    let p2 = headB;\r
\r
    while (p1 !== p2) {\r
        p1 = p1 ? p1.next : headB; // if p1 is present meaning not null/end of LL, move to p1.next otherwise move to head of B\r
        p2 = p2 ? p2.next : headA;\r
    }\r
\r
    return p1; // either intersection node or null\r
};\r
\r
// Explanation:\r
// We move both pointers one step at a time.\r
// If one pointer hits the end, we redirect it to the other list's head.\r
// This ensures both pointers traverse the same total distance.\r
// If there's an intersection, they’ll meet there. If not, both will become null at the same time.\r
\r
// Lists-\r
A: 4 → 1 → 8 → 4 → 5\r
B: 5 → 6 → 1 → 8 → 4 → 5\r
\r
A = 5, B = 6\r
\r
// DRY RUN->\r
| Step | pA           | pB           | Comment                                     |\r
| ---- | ------------ | ------------ | ------------------------------------------- |\r
| 1    | 4            | 5            | —                                           |\r
| 2    | 1            | 6            | —                                           |\r
| 3    | 8            | 1            | —                                           |\r
| 4    | 4            | 8            | pB reached intersection, pA will reach soon |\r
| 5    | 5            | 4            | —                                           |\r
| 6    | null → headB | 5            | pA reset to B’s head                        |\r
| 7    | 5            | null → headA | pB reset to A’s head                        |\r
| 8    | 6            | 4            | —                                           |\r
| 9    | 1            | 1            | —                                           |\r
| 10   | 8            | 8            | ✅ Intersect here                            |\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
// Solution using a Hash Set ->\r
\r
// TC: O(n + m)\r
// SC: O(m)\r
// Simple, direct, very readable\r
\r
// Definition for singly-linked list.\r
function ListNode(val, next = null) {\r
    this.val = val;\r
    this.next = next;\r
}\r
\r
// Function to find the intersection of two linked lists using a hash set\r
function getIntersectionNode(headA, headB) {\r
    let nodesInB = new Set();\r
\r
    // Traverse the second list and add its nodes to the set\r
    let current = headB;\r
    while (current !== null) {\r
        nodesInB.add(current);\r
        current = current.next;\r
    }\r
\r
    // Traverse the first list and check if any node is in the set\r
    current = headA;\r
    while (current !== null) {\r
        if (nodesInB.has(current)) {\r
            return current; // Found the intersection node\r
        }\r
        current = current.next;\r
    }\r
\r
    return null; // No intersection found\r
}\r
\r
// Helper function to create a linked list from an array\r
function createLinkedList(arr) {\r
    if (arr.length === 0) return null;\r
    let head = new ListNode(arr[0]);\r
    let current = head;\r
    for (let i = 1; i < arr.length; i++) {\r
        current.next = new ListNode(arr[i]);\r
        current = current.next;\r
    }\r
    return head;\r
}\r
\r
// Creating the shared part of the lists\r
let shared = createLinkedList([4, 5, 7]);\r
\r
// Creating the unique parts and attaching the shared part\r
let list1 = new ListNode(4, new ListNode(1, new ListNode(8, shared)));\r
let list2 = new ListNode(5, new ListNode(0, new ListNode(1, shared)));\r
\r
// Helper function to print the linked list\r
function printLinkedList(head) {\r
    let result = [];\r
    let current = head;\r
    while (current) {\r
        result.push(current.val);\r
        current = current.next;\r
    }\r
    console.log(result.join(" -> "));\r
}\r
\r
// Print lists\r
printLinkedList(list1); // Output: 4 -> 1 -> 8 -> 4 -> 5 -> 7\r
printLinkedList(list2); // Output: 5 -> 0 -> 1 -> 4 -> 5 -> 7\r
\r
let intersectionNode = getIntersectionNode(list1, list2);\r
console.log(intersectionNode ? intersectionNode.val : 'No intersection'); // Output: 4\r
\r
/**\r
 * This approach efficiently finds the intersection in linear time with respect to the combined length of the lists, but it requires additional space proportional to the size of the second list.\r
 * Time Complexity: O(m + n) - Traversing list2: O(n), Traversing list1: O(m), Total Time Complexity: O(m + n)\r
 * Space Complexity: O(n) - Hash Set: O(n), we store all the nodes of list2 in the hash set.\r
 */\r
\r
\r
// TWO POINTER SOLUTION->\r
// https://www.geeksforgeeks.org/write-a-function-to-get-the-intersection-point-of-two-linked-lists/\r
/**\r
 * This algorithm works by traversing the two linked lists simultaneously, using two pointers. When one pointer reaches the end of its list, it is reassigned to the head of the other list. This process continues until the two pointers meet, which indicates that they have reached the intersection point\r
 * Traverse through the lists, one node at a time.\r
        - When ptr1 reaches the end of a list, then redirect it to head2.\r
        - Similarly, when ptr2 reaches the end of a list, redirect it to the head1.\r
        - Once both of them go through reassigning, they will be "equidistant from the collision point"\r
        - If at any node ptr1 meets ptr2, then it is the intersection node\r
 */\r
\r
// Definition for singly-linked list.\r
function ListNode(val, next = null) {\r
    this.val = val;\r
    this.next = next;\r
}\r
\r
// Function to find the intersection of two linked lists using two pointers\r
\r
// Two Pointer (Optimized)\r
// O(n + m)\r
// O(1)\r
// No extra space\r
\r
function getIntersectionNode(headA, headB) {\r
    if (!headA || !headB) return null;\r
\r
    let pointerA = headA;\r
    let pointerB = headB;\r
\r
    // Traverse both lists\r
    while (pointerA !== pointerB) {\r
        // Move pointers to the next node\r
        pointerA = pointerA === null ? headB : pointerA.next;\r
        pointerB = pointerB === null ? headA : pointerB.next;\r
    }\r
\r
    // Either both pointers are null (no intersection) or they meet at the intersection node\r
    return pointerA;\r
}\r
\r
// Example usage:\r
\r
// Creating the shared part of the lists\r
let shared = new ListNode(4, new ListNode(5, new ListNode(7)));\r
\r
// Creating the unique parts and attaching the shared part\r
let list1 = new ListNode(4, new ListNode(1, new ListNode(8, shared)));\r
let list2 = new ListNode(5, new ListNode(0, new ListNode(1, shared)));\r
\r
// Print lists\r
console.log("List1:");\r
printLinkedList(list1); // Output: 4 -> 1 -> 8 -> 4 -> 5 -> 7\r
console.log("List2:");\r
printLinkedList(list2); // Output: 5 -> 0 -> 1 -> 4 -> 5 -> 7\r
\r
// Helper function to print the linked list\r
function printLinkedList(head) {\r
    let result = [];\r
    let current = head;\r
    while (current) {\r
        result.push(current.val);\r
        current = current.next;\r
    }\r
    console.log(result.join(" -> "));\r
}\r
\r
// Finding intersection node\r
let intersectionNode = getIntersectionNode(list1, list2);\r
if (intersectionNode) {\r
    console.log(\`Intersection Node Value: \${intersectionNode.val}\`); // Output: Intersection Node Value: 4\r
} else {\r
    console.log("No intersection found");\r
}\r
\r
\r
/**\r
 * This approach efficiently finds the intersection in linear time with respect to the combined length of the lists, but it requires additional space proportional to the size of the second list.\r
 * Time Complexity: O(m + n) - Traversing list2: O(n), Traversing list1: O(m), Total Time Complexity: O(m + n)\r
 * Space Complexity: Constant Space: O(1), uses only a constant amount of extra space regardless of the input size. This is because it only uses two extra pointers (pointerA and pointerB) to traverse the lists and does not use any additional data structures that grow with input size.\r
 */\r
\r
\r
// Third Solution->\r
/**\r
 * Use 2 nested for loops. The outer loop will be for each node of the 1st list and the inner loop will be for the 2nd list. In the inner loop, check if any of the nodes of the 2nd list is the same as the current node of the first linked list. The time complexity of this method will be O(M * N) where m and n are the numbers of nodes in two lists.\r
 */\r
function getIntesectionNode(head1, head2) {\r
    while (head2) {\r
        let temp = head1;\r
        while (temp) {\r
            if (temp == head2) {\r
                return head2;\r
            }\r
            temp = temp.next;\r
        }\r
        head2 = head2.next;\r
    }\r
    return null;\r
}\r
\r
/*\r
    Time Complexity: O(m*n), where m and n are number of nodes in two linked list.\r
    Auxiliary Space: O(1), Constant Space is used\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
