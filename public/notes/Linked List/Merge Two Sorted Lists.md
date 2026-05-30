# Merge Two Sorted Lists

## Problem Statement

Describe the problem statement for **Merge Two Sorted Lists** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * "Merge Two Sorted Lists"
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 */
/**
 * Traverse both lists till end (!==null)
	* append smaller nodes to current and move respective list ptr fwd
	* move current fwd
 * If there are remaining nodes in l1 or l2 (l1 or l2 !==null), append them -> current.next = l1;
 * return dummy.next (check explanation at the end below)
 */

/*
Time Complexity: O(m+n)
Space Complexity: O(1)
*/
// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Function to merge two sorted linked lists
function mergeTwoLists(l1, l2) {
    // Initialize a dummy node to form the base of the merged list
    let dummy = new ListNode(0);
    // current stores the merged list, and points to the end of the merged list as it keeps moving forward
    // dummy always points to the beginning of the list as it is never moved and in the end we return dummy.next
    let current = dummy;
    
    // Traverse both lists and merge them
    while (l1 !== null && l2 !== null) {
        /**
		 * Appends the smaller node to the current.next pointer and moves the respective list pointer (l1 or l2) forward
		 */
		if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;			// moves the respective list pointer (l1 or l2) forward
        } else {
            current.next = l2;
            l2 = l2.next;			// moves the respective list pointer (l1 or l2) forward
        }
        current = current.next;		// move the current forward
    }
    
    // If there are remaining nodes in l1 or l2, append them
    // this is required in the case if one list is bigger than the other like:
        // list1: 1 -> 3 -> 5
        // list2: 2 -> 4
    // when the final list is like 1->2->3->4, then list2 is null, but list1 is still 5.
    // So the condition if (list1 !== null) ensures that the remaining 5 is appended to the merged list.
    // Final merged list: 0 -> 1 -> 2 -> 3 -> 4 -> 5

    if (l1 !== null) {
        current.next = l1;
    } else {
        current.next = l2;
    }
    
    // Return the merged list, skipping the dummy node
    return dummy.next;
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
let arr1 = [1, 2, 4];
let arr2 = [1, 3, 4];
let l1 = createLinkedList(arr1);
let l2 = createLinkedList(arr2);
let mergedList = mergeTwoLists(l1, l2);
printLinkedList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

/*
dummy Node:
The dummy node is used as a placeholder to simplify the merging logic. It helps to easily handle the edge cases, such as when one of the lists is empty or when all elements need to be appended to the new list.

The dummy.next points to the head of the merged list once the merging process is completed.

current Pointer:
The current pointer is used to build the merged list by iterating through both input lists and appending nodes to the merged list.

At the end of the merging process, "current points to the last node of the merged list", not the head of the merged list. */

/*
Let’s assume the two linked lists are:

l1 = [1 -> 3 -> 5]
l2 = [2 -> 4 -> 6]
Step-by-step process:

We compare 1 (from l1) and 2 (from l2). Since 1 <= 2, we append the node with value 1 to the merged list.

Merged list so far: 1
Move the l1 pointer to 3.
Next, we compare 3 and 2. Since 2 < 3, we append the node with value 2 from l2.

Merged list so far: 1 -> 2
Move the l2 pointer to 4.
We continue this process, comparing and appending nodes in order, until both lists are fully processed:

Compare 3 and 4, append 3 → 1 -> 2 -> 3
Compare 5 and 4, append 4 → 1 -> 2 -> 3 -> 4
Compare 5 and 6, append 5 → 1 -> 2 -> 3 -> 4 -> 5
Append remaining node 6 → 1 -> 2 -> 3 -> 4 -> 5 -> 6
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
