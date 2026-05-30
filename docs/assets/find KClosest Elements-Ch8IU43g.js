const e=`# find KClosest Elements

## Problem Statement

Describe the problem statement for **find KClosest Elements** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Find K Closest Elements\r
 * Given a sorted array arr, two integers k and x, find the k closest elements to x in the array. The result should also be sorted in ascending order. If there is a tie, the smaller elements are always preferred.\r
 * https://beizhedenglong.github.io/leetcode-solutions/docs/find-k-closest-elements\r
 */\r
/*\r
To solve the **"Find K Closest Elements"** problem in JavaScript, we can approach it using a **binary search** combined with a **two-pointer technique**. The task is to find the \`k\` closest integers to a given target \`x\` in a sorted array.\r
\r
### Problem:\r
Given a sorted array \`arr\`, two integers \`k\` and \`x\`, return the \`k\` closest integers to \`x\`. The result should also be sorted in ascending order.\r
\r
### Approach:\r
1. **Binary Search**: First, find the position where the element \`x\` would fit in the array using binary search.\r
2. **Two Pointers**: Once the position is found, use two pointers (one starting from the closest lower or equal value, and the other starting from the closest higher value) to expand and find the \`k\` closest elements.\r
3. **Sorting**: Ensure the result is sorted before returning it.\r
*/\r
\r
// JavaScript Solution:\r
\r
\r
function findClosestElements(arr, k, x) {\r
    let left = 0;\r
    let right = arr.length - 1;\r
\r
    // Binary search to reduce the window to size k\r
    while (right - left >= k) {\r
        // Compare distances from x on both sides\r
        if (Math.abs(arr[left] - x) > Math.abs(arr[right] - x)) {\r
            left++; // If left is farther, increment left\r
        } else {\r
            right--; // Otherwise, decrement right\r
        }\r
    }\r
\r
    // Return the slice of the array from left to left + k\r
    return arr.slice(left, left + k);\r
}\r
\r
// Example usage:\r
let arr = [1, 2, 3, 4, 5];\r
let k = 4;\r
let x = 3;\r
console.log(findClosestElements(arr, k, x)); // Output: [1, 2, 3, 4]\r
\r
/*Explanation:\r
1. **Binary Search Window Shrinking**: \r
   - We start with two pointers, \`left\` at the beginning and \`right\` at the end of the array.\r
   - The loop continues until the window size is exactly \`k\`. In each iteration, we compare the absolute difference of \`arr[left]\` and \`arr[right]\` from \`x\`. We move the pointer that is farther from \`x\` (either \`left\` or \`right\`).\r
   - This ensures that after the loop, we have a subarray of size \`k\` that contains the closest elements.\r
\r
2. **Slicing the Result**:\r
   - After narrowing down the window, the \`k\` closest elements will be between \`left\` and \`left + k\`. We simply slice the array and return this result.\r
\r
### Time Complexity:\r
- **Binary Search Window Shrinking**: \`O(n - k)\` where \`n\` is the length of the array. In each iteration, we are shrinking the window by 1.\r
- **Final Slice**: Creating a slice of size \`k\` takes \`O(k)\`.\r
\r
Thus, the total time complexity is **O(n - k + k) = O(n)**, which is linear in the size of the input array.\r
\r
### Example Dry Run:\r
\r
Input: \`arr = [1, 2, 3, 4, 5]\`, \`k = 4\`, \`x = 3\`\r
\r
- Initial \`left = 0\`, \`right = 4\`.\r
- First iteration: \`|arr[0] - 3| = 2\`, \`|arr[4] - 3| = 2\` → Both are equal, decrement \`right → 3\`.\r
- Second iteration: \`|arr[0] - 3| = 2\`, \`|arr[3] - 3| = 1\` → Decrement \`right → 2\`.\r
- Stop when \`right - left + 1 = k\`. Slice the array from \`left = 0\` to \`left + k = 4\`.\r
- Result: \`[1, 2, 3, 4]\`.\r
\r
This approach efficiently finds the closest elements using binary search and two-pointer techniques.\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
