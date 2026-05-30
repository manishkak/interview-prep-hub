# palindrome Linked List

## Problem Statement

Describe the problem statement for **palindrome Linked List** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// Optimized Solution with TC: O(n) and SC: O(1)

// ### Optimized Solution: **Reverse the Second Half In-Place**
/*
1. **Find the Middle of the Linked List**:
   - Use the **slow and fast pointer** technique:
     - Slow pointer moves one step at a time.
     - Fast pointer moves two steps at a time.
     - When the fast pointer reaches the end, the slow pointer will be at the middle.

2. **Reverse the Second Half of the Linked List**:
   - Reverse the nodes starting from the middle to the end of the list.

3. **Compare the Two Halves**:
   - Compare the first half of the list with the reversed second half.
   - Use two pointers:
     - One starting at the head of the list.
     - The other starting at the beginning of the reversed second half.

4. **Restore the Original List** (Optional):
   - Reverse the second half back to its original order to maintain the structure of the input list.

5. **Return the Result**:
   - If all values match during the comparison, the linked list is a palindrome; otherwise, it’s not.
*/

function isPalindrome(head) {
    if (!head || !head.next) return true; // Empty or single node list is a palindrome

    // Step 1: Find the middle of the list
    let slow = head, fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next; // at the end of this while loop, slow points to the mid of the LL
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the list (remember this)
    let prev = null, current = slow;
    while (current !== null) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    // "prev" will be pointing to the new head node of the reversed LL

    // Step 3: Compare the two halves
    let firstHalf = head, secondHalf = prev;
    while (secondHalf !== null) {
        if (firstHalf.val !== secondHalf.val) return false;
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }

    // Step 4: Optional - Restore the original list structure (reverse the second half back)
    // This step is not required unless you need to preserve the original list structure.

    return true;
}



// ### **Time Complexity**:
// **O(n)**:
/*- Finding the middle: \( O(n) \).
  - Reversing the second half: \( O(n/2) = O(n) \).
  - Comparing the two halves: \( O(n/2) = O(n) \). */

// ### **Space Complexity**:
// **O(1)**:
/*- The reversal and comparison are done in-place using pointers, so no additional space is used apart from a few variables. */

// ### Why This is Better:
// - The **array-based approach** requires \( O(n) \) additional space to store node values, whereas the optimized solution works entirely in-place.
// - This optimized approach is more memory-efficient and is the preferred method for this problem.



// Easy Solution with TC: O(n) and SC: O(n)

/**
 * 	• Problem: Given the head of a linked list, your task is to check whether the linked list is a palindrome or not. Return TRUE if the linked list is a palindrome; otherwise, return FALSE.
	• Approach: 
		○ Traverse the linked list and store the values of each node in an array.
		○ Use two pointers approach to check whether the array of values is a palindrome.
			§ Start with two pointers, one at the beginning and the other at the end of the array.
			§ Compare the values at the pointers. If they match, move the pointers towards the center of the array. If they don't match, return false.
			§ Continue this process until the pointers meet or cross each other.
		○ If the pointers meet or cross each other without finding any mismatch, return true (the linked list is a palindrome).
 */

function isPalindrome(head) {
    let values = [];
    let current = head;
    
    // Traverse the linked list and store values in an array
    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }
    
    // Use two pointers approach to check if the array is a palindrome
    let left = 0;
    let right = values.length - 1;
    while (left < right) {
        if (values[left] !== values[right]) {
            return false; // Not a palindrome
        }
        left++;
        right--;
    }
    
    return true; // Palindrome
}

/**
 * Time Complexity:
Traversing the linked list to store values in an array: This operation requires visiting each node once, resulting in a time complexity of O(n), where n is the number of nodes in the linked list.
Using the two pointers approach to check if the array is a palindrome: This operation requires iterating over half of the array (or linked list values) once, resulting in a time complexity of O(n/2). Since we drop constants and consider the dominant term, the overall time complexity remains O(n).
Therefore, the overall time complexity of the solution is O(n).

* Space Complexity:
Storing the values of the linked list in an array: This operation requires additional space to store the values of all nodes in the linked list, resulting in a space complexity of O(n), where n is the number of nodes in the linked list.
Other than the input linked list and the output variable, the solution does not use any additional data structures that scale with the size of the input. Thus, the overall space complexity is dominated by the array used to store values, which is O(n).
Therefore, the overall space complexity of the solution is O(n).
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
