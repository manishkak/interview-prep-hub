const n=`# next Greater Element1

## Problem Statement

Describe the problem statement for **next Greater Element1** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// Problem: Next Greater Element 1 (to the right)\r
/**\r
 * Description:\r
Given an array nums, for each element find the next greater element to its right. If none exists, return -1 for that position.\r
 */\r
/**\r
 * Input: nums = [4, 5, 2, 25]\r
 * Output: [5, 25, 25, -1]\r
 */\r
/*✅ Approach\r
    - Use a stack to keep track of elements for which the next greater element is not yet found.\r
    - Traverse the array:\r
        - While stack is not empty and current element is greater than top of stack → pop and assign next greater element.\r
        - Push current element to stack.\r
    - For remaining elements in stack → next greater element is -1.\r
✅ Steps\r
    - Initialize result array with -1s (new Array(n).fill(-1))\r
    - Create an empty stack to store indices.\r
    - Traverse array:\r
        - While stack not empty and nums[i] > nums[stack[top]]:\r
            - result[stack.pop()] = nums[i]\r
        - Push index i to stack.   // push index not the value; this is important\r
    - Return result.\r
*/\r
function nextGreaterElement(nums) {\r
    const n = nums.length;\r
    const result = new Array(n).fill(-1);\r
    const stack = []; // stores indices\r
\r
    for (let i = 0; i < n; i++) {   // traverse the entire array\r
        while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {   // nums[i]=5 > nums[0]=4\r
            const index = stack.pop();  // first index 0 will be popped\r
            result[index] = nums[i];    // result[0] will be nums[1] = nums[1] = 5\r
        }\r
        stack.push(i);  // first run 0 will be inserted, then 1\r
    }\r
\r
    return result;\r
}\r
\r
// Example:\r
console.log(nextGreaterElement([4, 5, 2, 25])); // [5, 25, 25, -1]\r
console.log(nextGreaterElement([13, 7, 6, 12])); // [-1, 12, 12, -1]\r
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
`;export{n as default};
