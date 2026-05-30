const e=`# palindrome Linked List

## Problem Statement

Describe the problem statement for **palindrome Linked List** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// Optimized Solution with TC: O(n) and SC: O(1)\r
\r
// ### Optimized Solution: **Reverse the Second Half In-Place**\r
/*\r
1. **Find the Middle of the Linked List**:\r
   - Use the **slow and fast pointer** technique:\r
     - Slow pointer moves one step at a time.\r
     - Fast pointer moves two steps at a time.\r
     - When the fast pointer reaches the end, the slow pointer will be at the middle.\r
\r
2. **Reverse the Second Half of the Linked List**:\r
   - Reverse the nodes starting from the middle to the end of the list.\r
\r
3. **Compare the Two Halves**:\r
   - Compare the first half of the list with the reversed second half.\r
   - Use two pointers:\r
     - One starting at the head of the list.\r
     - The other starting at the beginning of the reversed second half.\r
\r
4. **Restore the Original List** (Optional):\r
   - Reverse the second half back to its original order to maintain the structure of the input list.\r
\r
5. **Return the Result**:\r
   - If all values match during the comparison, the linked list is a palindrome; otherwise, it’s not.\r
*/\r
\r
function isPalindrome(head) {\r
    if (!head || !head.next) return true; // Empty or single node list is a palindrome\r
\r
    // Step 1: Find the middle of the list\r
    let slow = head, fast = head;\r
    while (fast !== null && fast.next !== null) {\r
        slow = slow.next; // at the end of this while loop, slow points to the mid of the LL\r
        fast = fast.next.next;\r
    }\r
\r
    // Step 2: Reverse the second half of the list (remember this)\r
    let prev = null, current = slow;\r
    while (current !== null) {\r
        let nextTemp = current.next;\r
        current.next = prev;\r
        prev = current;\r
        current = nextTemp;\r
    }\r
    // "prev" will be pointing to the new head node of the reversed LL\r
\r
    // Step 3: Compare the two halves\r
    let firstHalf = head, secondHalf = prev;\r
    while (secondHalf !== null) {\r
        if (firstHalf.val !== secondHalf.val) return false;\r
        firstHalf = firstHalf.next;\r
        secondHalf = secondHalf.next;\r
    }\r
\r
    // Step 4: Optional - Restore the original list structure (reverse the second half back)\r
    // This step is not required unless you need to preserve the original list structure.\r
\r
    return true;\r
}\r
\r
\r
\r
// ### **Time Complexity**:\r
// **O(n)**:\r
/*- Finding the middle: \\( O(n) \\).\r
  - Reversing the second half: \\( O(n/2) = O(n) \\).\r
  - Comparing the two halves: \\( O(n/2) = O(n) \\). */\r
\r
// ### **Space Complexity**:\r
// **O(1)**:\r
/*- The reversal and comparison are done in-place using pointers, so no additional space is used apart from a few variables. */\r
\r
// ### Why This is Better:\r
// - The **array-based approach** requires \\( O(n) \\) additional space to store node values, whereas the optimized solution works entirely in-place.\r
// - This optimized approach is more memory-efficient and is the preferred method for this problem.\r
\r
\r
\r
// Easy Solution with TC: O(n) and SC: O(n)\r
\r
/**\r
 * 	• Problem: Given the head of a linked list, your task is to check whether the linked list is a palindrome or not. Return TRUE if the linked list is a palindrome; otherwise, return FALSE.\r
	• Approach: \r
		○ Traverse the linked list and store the values of each node in an array.\r
		○ Use two pointers approach to check whether the array of values is a palindrome.\r
			§ Start with two pointers, one at the beginning and the other at the end of the array.\r
			§ Compare the values at the pointers. If they match, move the pointers towards the center of the array. If they don't match, return false.\r
			§ Continue this process until the pointers meet or cross each other.\r
		○ If the pointers meet or cross each other without finding any mismatch, return true (the linked list is a palindrome).\r
 */\r
\r
function isPalindrome(head) {\r
    let values = [];\r
    let current = head;\r
    \r
    // Traverse the linked list and store values in an array\r
    while (current !== null) {\r
        values.push(current.val);\r
        current = current.next;\r
    }\r
    \r
    // Use two pointers approach to check if the array is a palindrome\r
    let left = 0;\r
    let right = values.length - 1;\r
    while (left < right) {\r
        if (values[left] !== values[right]) {\r
            return false; // Not a palindrome\r
        }\r
        left++;\r
        right--;\r
    }\r
    \r
    return true; // Palindrome\r
}\r
\r
/**\r
 * Time Complexity:\r
Traversing the linked list to store values in an array: This operation requires visiting each node once, resulting in a time complexity of O(n), where n is the number of nodes in the linked list.\r
Using the two pointers approach to check if the array is a palindrome: This operation requires iterating over half of the array (or linked list values) once, resulting in a time complexity of O(n/2). Since we drop constants and consider the dominant term, the overall time complexity remains O(n).\r
Therefore, the overall time complexity of the solution is O(n).\r
\r
* Space Complexity:\r
Storing the values of the linked list in an array: This operation requires additional space to store the values of all nodes in the linked list, resulting in a space complexity of O(n), where n is the number of nodes in the linked list.\r
Other than the input linked list and the output variable, the solution does not use any additional data structures that scale with the size of the input. Thus, the overall space complexity is dominated by the array used to store values, which is O(n).\r
Therefore, the overall space complexity of the solution is O(n).\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
