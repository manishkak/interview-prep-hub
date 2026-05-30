const e=`# Merge Two Sorted Lists

## Problem Statement

Describe the problem statement for **Merge Two Sorted Lists** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * "Merge Two Sorted Lists"\r
 * You are given the heads of two sorted linked lists list1 and list2.\r
 * Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.\r
 * Return the head of the merged linked list.\r
 */\r
/**\r
 * Traverse both lists till end (!==null)\r
	* append smaller nodes to current and move respective list ptr fwd\r
	* move current fwd\r
 * If there are remaining nodes in l1 or l2 (l1 or l2 !==null), append them -> current.next = l1;\r
 * return dummy.next (check explanation at the end below)\r
 */\r
\r
/*\r
Time Complexity: O(m+n)\r
Space Complexity: O(1)\r
*/\r
// Definition for singly-linked list.\r
function ListNode(val, next = null) {\r
    this.val = val;\r
    this.next = next;\r
}\r
\r
// Function to merge two sorted linked lists\r
function mergeTwoLists(l1, l2) {\r
    // Initialize a dummy node to form the base of the merged list\r
    let dummy = new ListNode(0);\r
    // current stores the merged list, and points to the end of the merged list as it keeps moving forward\r
    // dummy always points to the beginning of the list as it is never moved and in the end we return dummy.next\r
    let current = dummy;\r
    \r
    // Traverse both lists and merge them\r
    while (l1 !== null && l2 !== null) {\r
        /**\r
		 * Appends the smaller node to the current.next pointer and moves the respective list pointer (l1 or l2) forward\r
		 */\r
		if (l1.val <= l2.val) {\r
            current.next = l1;\r
            l1 = l1.next;			// moves the respective list pointer (l1 or l2) forward\r
        } else {\r
            current.next = l2;\r
            l2 = l2.next;			// moves the respective list pointer (l1 or l2) forward\r
        }\r
        current = current.next;		// move the current forward\r
    }\r
    \r
    // If there are remaining nodes in l1 or l2, append them\r
    // this is required in the case if one list is bigger than the other like:\r
        // list1: 1 -> 3 -> 5\r
        // list2: 2 -> 4\r
    // when the final list is like 1->2->3->4, then list2 is null, but list1 is still 5.\r
    // So the condition if (list1 !== null) ensures that the remaining 5 is appended to the merged list.\r
    // Final merged list: 0 -> 1 -> 2 -> 3 -> 4 -> 5\r
\r
    if (l1 !== null) {\r
        current.next = l1;\r
    } else {\r
        current.next = l2;\r
    }\r
    \r
    // Return the merged list, skipping the dummy node\r
    return dummy.next;\r
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
// Example usage:\r
let arr1 = [1, 2, 4];\r
let arr2 = [1, 3, 4];\r
let l1 = createLinkedList(arr1);\r
let l2 = createLinkedList(arr2);\r
let mergedList = mergeTwoLists(l1, l2);\r
printLinkedList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4\r
\r
/*\r
dummy Node:\r
The dummy node is used as a placeholder to simplify the merging logic. It helps to easily handle the edge cases, such as when one of the lists is empty or when all elements need to be appended to the new list.\r
\r
The dummy.next points to the head of the merged list once the merging process is completed.\r
\r
current Pointer:\r
The current pointer is used to build the merged list by iterating through both input lists and appending nodes to the merged list.\r
\r
At the end of the merging process, "current points to the last node of the merged list", not the head of the merged list. */\r
\r
/*\r
Let’s assume the two linked lists are:\r
\r
l1 = [1 -> 3 -> 5]\r
l2 = [2 -> 4 -> 6]\r
Step-by-step process:\r
\r
We compare 1 (from l1) and 2 (from l2). Since 1 <= 2, we append the node with value 1 to the merged list.\r
\r
Merged list so far: 1\r
Move the l1 pointer to 3.\r
Next, we compare 3 and 2. Since 2 < 3, we append the node with value 2 from l2.\r
\r
Merged list so far: 1 -> 2\r
Move the l2 pointer to 4.\r
We continue this process, comparing and appending nodes in order, until both lists are fully processed:\r
\r
Compare 3 and 4, append 3 → 1 -> 2 -> 3\r
Compare 5 and 4, append 4 → 1 -> 2 -> 3 -> 4\r
Compare 5 and 6, append 5 → 1 -> 2 -> 3 -> 4 -> 5\r
Append remaining node 6 → 1 -> 2 -> 3 -> 4 -> 5 -> 6\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
