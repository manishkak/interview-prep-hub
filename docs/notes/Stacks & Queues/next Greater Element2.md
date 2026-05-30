# next Greater Element2

## Problem Statement

Describe the problem statement for **next Greater Element2** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// Problem: Next Greater Element 2 (to the left)
/**
 * Description:
Given an array nums, for each element find the next greater element to its left. If none exists, return -1 for that position.
 */
/**
Input: nums = [4, 5, 2, 25]
Output: [-1, -1, 5, -1]
 */
/*✅ Approach
    - Use a stack to store indices instead of values.
    - Traverse the array from left to right.
    - For each element nums[i]:
        - While the stack is not empty and nums[stack[top]] <= nums[i], pop the stack (those elements cannot be the next greater to the left for nums[i]).
        - If stack is not empty after popping, the top of stack is the index of the next greater element to the left → result[i] = nums[stack[top]].
        - Push the current index i to the stack for future comparisons.
✅ Steps
    - Initialize result array of size n filled with -1.
    - Initialize an empty stack to store indices.
    - Loop over i = 0 to n-1:
        - While stack not empty and nums[stack[top]] <= nums[i], pop the stack.
        - If stack is not empty, set result[i] = nums[stack[top]].
        - Push current index i onto the stack.
    - Return result.
*/
function nextGreaterElementLeft(nums) {
    const n = nums.length;
    const result = new Array(n).fill(-1);
    const stack = []; // stores indices

    for (let i = 0; i < n; i++) {
        // Pop indices whose value <= nums[i]
        while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[i]) {
            stack.pop();
        }

        // If the stack is not empty after popping(stack.pop() above), the top of the stack is the index of the next greater element to the left. Assign its value to result[i].
        if (stack.length > 0) {
            result[i] = nums[stack[stack.length - 1]];
        }

        // Push current index
        stack.push(i);
    }

    return result;
}

// Example
console.log(nextGreaterElementLeft([4, 5, 2, 25])); // [-1, -1, 5, -1]
console.log(nextGreaterElementLeft([13, 7, 6, 12])); // [-1, 13, 7, 13]


/**
 * ✅ Time Complexity: O(n) (each element pushed and popped at most once)
 * ✅ Space Complexity: O(n) (for the stack and result array)
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
