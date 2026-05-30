const n=`# Sort List Linked List

## Problem Statement

Describe the problem statement for **Sort List Linked List** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Sort List\r
 * Given the head of a linked list, return the list after sorting it in ascending order.\r
 * Approach:\r
 * 		Sorting a linked list can be achieved using several methods, but one of the most efficient ways is to use Merge Sort because of its O(n log n) time complexity.\r
 * 		Divide: "Find the middle" of the linked list to divide it into two halves.\r
 * 		Conquer: "Recursively sort" each half.\r
 * 		Combine: "Merge the two sorted" halves to produce the sorted linked list\r
 * For this program we use three helpers- FindMiddle and Merge\r
 * DummyNode-> dummy node is created and does not contain any meaningful data (often initialized with a value like 0 or null).\r
 * 		The dummy node's next pointer points to the head of the linked list\r
 * 		Operations like merging or inserting nodes can be performed starting from the dummy node.\r
 * 		The dummy node allows you to handle the head of the list in the same way as other nodes, without needing special conditions.\r
 */\r
\r
/*\r
Key Points:\r
	Dummy Node: Simplifies handling edge cases at the head of the list and ensures that the final sorted list starts from dummy.next.\r
	Iterative Approach: Avoids recursion, which helps in achieving O(1) space complexity.\r
	Merge Sort: Divides the list into smaller sublists, merges them in sorted order, and gradually builds up the sorted list.\r
This approach ensures that the original list is modified in place without requiring additional space proportional to the size of the list, making it efficient for sorting linked lists.\r
*/\r
\r
\r
// Definition for singly linked list\r
function ListNode(val, next = null) {\r
  this.val = val;\r
  this.next = next;\r
}\r
\r
/*\r
  Main function to sort the linked list using Merge Sort\r
*/\r
function sortList(head) {\r
  // Step 1: Base case\r
  // If list is empty or has only one node, it's already sorted\r
  if (head === null || head.next === null) {\r
    return head;\r
  }\r
\r
  // Step 2: Split the list into two halves\r
  let mid = getMiddle(head);\r
  let rightHead = mid.next;\r
  mid.next = null; // break the list into two parts\r
\r
  // Step 3: Recursively sort both halves\r
  let left = sortList(head);\r
  let right = sortList(rightHead);\r
\r
  // Step 4: Merge the sorted halves\r
  return merge(left, right);\r
}\r
\r
/*\r
  Helper function to find the middle of the linked list\r
  Uses slow & fast pointer technique\r
*/\r
function getMiddle(head) {\r
  let slow = head;\r
  let fast = head.next;\r
\r
  while (fast !== null && fast.next !== null) {\r
    slow = slow.next;\r
    fast = fast.next.next;\r
  }\r
\r
  return slow;\r
}\r
\r
/*\r
  Helper function to merge two sorted linked lists\r
*/\r
function merge(l1, l2) {\r
  let dummy = new ListNode(0);\r
  let curr = dummy;\r
\r
  // Compare nodes and attach smaller one\r
  while (l1 !== null && l2 !== null) {\r
    if (l1.val <= l2.val) {\r
      curr.next = l1;\r
      l1 = l1.next;\r
    } else {\r
      curr.next = l2;\r
      l2 = l2.next;\r
    }\r
    curr = curr.next;\r
  }\r
\r
  // Attach remaining nodes (if any)\r
  curr.next = l1 !== null ? l1 : l2;\r
\r
  // Return head of merged list\r
  return dummy.next;\r
}\r
\`\`\`\r
\r
/* What this code does (quick summary)\r
\r
* Recursively **splits** the list into halves\r
* **Sorts** each half\r
* **Merges** them back in sorted order\r
* Uses a dummy node to simplify merging logic\r
* Achieves **O(n log n)** time complexity and **O(log n)** space due to recursion\r
*/\r
\r
// Example usage:\r
// Creating the linked list 1 -> 5 -> 6 -> 3 -> 4 -> 8 -> 5 -> 6 -> 3 -> 9 -> 7 -> 5 -> 4 -> 6\r
let head = new ListNode(1);\r
head.next = new ListNode(5);\r
head.next.next = new ListNode(6);\r
head.next.next.next = new ListNode(3);\r
head.next.next.next.next = new ListNode(4);\r
head.next.next.next.next.next = new ListNode(8);\r
head.next.next.next.next.next.next = new ListNode(5);\r
head.next.next.next.next.next.next.next = new ListNode(6);\r
head.next.next.next.next.next.next.next.next = new ListNode(3);\r
head.next.next.next.next.next.next.next.next.next = new ListNode(9);\r
head.next.next.next.next.next.next.next.next.next.next = new ListNode(7);\r
head.next.next.next.next.next.next.next.next.next.next.next = new ListNode(5);\r
head.next.next.next.next.next.next.next.next.next.next.next.next = new ListNode(4);\r
head.next.next.next.next.next.next.next.next.next.next.next.next.next = new ListNode(6);\r
\r
console.log("Original List:");\r
printLinkedList(head); // Output: 1 -> 5 -> 6 -> 3 -> 4 -> 8 -> 5 -> 6 -> 3 -> 9 -> 7 -> 5 -> 4 -> 6\r
\r
// Sort the linked list\r
let sortedHead = sortList(head);\r
\r
console.log("Sorted List:");\r
printLinkedList(sortedHead); // Output: 1 -> 3 -> 3 -> 4 -> 4 -> 5 -> 5 -> 5 -> 6 -> 6 -> 6 -> 7 -> 8 -> 9\r
\r
/*\r
The iterative merge sort approach splits the linked list into progressively larger sublists and merges them iteratively, avoiding recursion and maintaining O(1) space complexity. The overall time complexity remains O(n log n).\r
*/\r
\r
\r
// RECURSIVE solution->\r
// Definition for singly-linked list.\r
function ListNode(val, next = null) {\r
    this.val = val;\r
    this.next = next;\r
}\r
\r
// Function to merge two sorted linked lists\r
function merge(l1, l2) {\r
    // dummy node's next pointer points to the head of the linked list\r
	let dummy = new ListNode(0);\r
    let current = dummy;\r
\r
    while (l1 !== null && l2 !== null) {\r
        if (l1.val < l2.val) {\r
            current.next = l1;\r
            l1 = l1.next;\r
        } else {\r
            current.next = l2;\r
            l2 = l2.next;\r
        }\r
        current = current.next;\r
    }\r
\r
    if (l1 !== null) {\r
        current.next = l1;\r
    } else if (l2 !== null) {\r
        current.next = l2;\r
    }\r
\r
    return dummy.next;\r
}\r
\r
// Function to find the middle of the linked list\r
function findMiddle(head) {\r
    let slow = head;\r
    let fast = head;\r
\r
    while (fast !== null && fast.next !== null && fast.next.next !== null) {\r
        slow = slow.next;\r
        fast = fast.next.next;\r
    }\r
\r
    return slow;\r
}\r
\r
// Function to sort the linked list\r
function sortList(head) {\r
    if (head === null || head.next === null) {\r
        return head;\r
    }\r
\r
    // Find the middle of the linked list\r
    let middle = findMiddle(head);\r
    let nextToMiddle = middle.next;\r
\r
    // Split the linked list into two halves\r
    middle.next = null;\r
\r
    // Recursively sort the two halves\r
    let left = sortList(head);\r
    let right = sortList(nextToMiddle);\r
\r
    // Merge the two sorted halves\r
    let sortedList = merge(left, right);\r
\r
    return sortedList;\r
}\r
\r
// Example usage:\r
// Creating the linked list 4 -> 2 -> 1 -> 3\r
let head = new ListNode(4);\r
head.next = new ListNode(2);\r
head.next.next = new ListNode(1);\r
head.next.next.next = new ListNode(3);\r
\r
// Print original list\r
console.log("Original List:");\r
printLinkedList(head); // Output: 4 -> 2 -> 1 -> 3\r
\r
// Sort the linked list\r
let sortedHead = sortList(head);\r
\r
// Print sorted list\r
console.log("Sorted List:");\r
printLinkedList(sortedHead); // Output: 1 -> 2 -> 3 -> 4\r
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
\r
\r
/*\r
Time Complexity (TC)\r
The time complexity of Merge Sort for a linked list is O(n log n).\r
\r
Reason: The linked list is divided in half at each step (logarithmic divisions), and merging each half takes linear time. Hence, the overall time complexity is O(n log n).\r
\r
Space Complexity (SC)\r
The space complexity of Merge Sort for a linked list is O(log n) due to the recursive call stack.\r
\r
Reason: Merge Sort is a divide-and-conquer algorithm. Although it doesn’t require additional space for arrays as it operates directly on the linked list, it does use stack space for recursion. The depth of the recursion tree is O(log n), leading to a space complexity of O(log n).\r
\r
Summary\r
Time Complexity (TC): O(n log n)\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
