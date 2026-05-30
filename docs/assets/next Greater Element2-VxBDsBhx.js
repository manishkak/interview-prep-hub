const e=`# next Greater Element2

## Problem Statement

Describe the problem statement for **next Greater Element2** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// Problem: Next Greater Element 2 (to the left)\r
/**\r
 * Description:\r
Given an array nums, for each element find the next greater element to its left. If none exists, return -1 for that position.\r
 */\r
/**\r
Input: nums = [4, 5, 2, 25]\r
Output: [-1, -1, 5, -1]\r
 */\r
/*✅ Approach\r
    - Use a stack to store indices instead of values.\r
    - Traverse the array from left to right.\r
    - For each element nums[i]:\r
        - While the stack is not empty and nums[stack[top]] <= nums[i], pop the stack (those elements cannot be the next greater to the left for nums[i]).\r
        - If stack is not empty after popping, the top of stack is the index of the next greater element to the left → result[i] = nums[stack[top]].\r
        - Push the current index i to the stack for future comparisons.\r
✅ Steps\r
    - Initialize result array of size n filled with -1.\r
    - Initialize an empty stack to store indices.\r
    - Loop over i = 0 to n-1:\r
        - While stack not empty and nums[stack[top]] <= nums[i], pop the stack.\r
        - If stack is not empty, set result[i] = nums[stack[top]].\r
        - Push current index i onto the stack.\r
    - Return result.\r
*/\r
function nextGreaterElementLeft(nums) {\r
    const n = nums.length;\r
    const result = new Array(n).fill(-1);\r
    const stack = []; // stores indices\r
\r
    for (let i = 0; i < n; i++) {\r
        // Pop indices whose value <= nums[i]\r
        while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[i]) {\r
            stack.pop();\r
        }\r
\r
        // If the stack is not empty after popping(stack.pop() above), the top of the stack is the index of the next greater element to the left. Assign its value to result[i].\r
        if (stack.length > 0) {\r
            result[i] = nums[stack[stack.length - 1]];\r
        }\r
\r
        // Push current index\r
        stack.push(i);\r
    }\r
\r
    return result;\r
}\r
\r
// Example\r
console.log(nextGreaterElementLeft([4, 5, 2, 25])); // [-1, -1, 5, -1]\r
console.log(nextGreaterElementLeft([13, 7, 6, 12])); // [-1, 13, 7, 13]\r
\r
\r
/**\r
 * ✅ Time Complexity: O(n) (each element pushed and popped at most once)\r
 * ✅ Space Complexity: O(n) (for the stack and result array)\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
