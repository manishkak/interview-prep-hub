# next Greater Element1

## Problem Statement

Describe the problem statement for **next Greater Element1** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// Problem: Next Greater Element 1 (to the right)
/**
 * Description:
Given an array nums, for each element find the next greater element to its right. If none exists, return -1 for that position.
 */
/**
 * Input: nums = [4, 5, 2, 25]
 * Output: [5, 25, 25, -1]
 */
/*✅ Approach
    - Use a stack to keep track of elements for which the next greater element is not yet found.
    - Traverse the array:
        - While stack is not empty and current element is greater than top of stack → pop and assign next greater element.
        - Push current element to stack.
    - For remaining elements in stack → next greater element is -1.
✅ Steps
    - Initialize result array with -1s (new Array(n).fill(-1))
    - Create an empty stack to store indices.
    - Traverse array:
        - While stack not empty and nums[i] > nums[stack[top]]:
            - result[stack.pop()] = nums[i]
        - Push index i to stack.   // push index not the value; this is important
    - Return result.
*/
function nextGreaterElement(nums) {
    const n = nums.length;
    const result = new Array(n).fill(-1);
    const stack = []; // stores indices

    for (let i = 0; i < n; i++) {   // traverse the entire array
        while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {   // nums[i]=5 > nums[0]=4
            const index = stack.pop();  // first index 0 will be popped
            result[index] = nums[i];    // result[0] will be nums[1] = nums[1] = 5
        }
        stack.push(i);  // first run 0 will be inserted, then 1
    }

    return result;
}

// Example:
console.log(nextGreaterElement([4, 5, 2, 25])); // [5, 25, 25, -1]
console.log(nextGreaterElement([13, 7, 6, 12])); // [-1, 12, 12, -1]

/**
 * ✅ Time Complexity: O(n) (each element pushed and popped at most once)
 * ✅ Space Complexity: O(n) (for the stack and result array)
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
