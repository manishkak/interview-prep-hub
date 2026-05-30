const n=`# rotate Array

## Problem Statement

Describe the problem statement for **rotate Array** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Rotate an Array by N Elements\r
 * Given an integer array, rotate it by 'n' elements.\r
 */\r
\r
/**\r
 * From ChatGPT-\r
 * Reverse the entire array, then reverse the first n elements and finally reverse the remaining length - n elements; this rotates the array in-place by n positions.\r
 */\r
/**\r
 * Complexity Analysis\r
Time Complexity: O(n), where n is the number of elements in the array. Each reversal operation takes O(n) time, and we perform three reversals. Each reverse operation runs in linear time.\r
Space Complexity: O(1), since we are reversing the array in place and not using any extra space apart from a few variables.\r
 */\r
/**\r
 * In-place reversal method for left (anti-clockwise) rotation:\r
   Reverse the first k elements.\r
   Reverse the remaining (n - k) elements.\r
   Reverse the entire array.\r
 * In-place reversal method for right (clockwise) rotation:\r
   Reverse the entire array.\r
   Reverse the first k elements.\r
   Reverse the remaining (n - k) elements.\r
 */\r
\r
function rotate(nums, k) {\r
    // Step 1: Normalize k\r
    k = k % nums.length;\r
    if (k === 0) return; // No rotation needed if k is 0 or a multiple of array length\r
\r
    // Step 2: Reverse the entire array\r
    reverse(nums, 0, nums.length - 1);\r
\r
    // Step 3: Reverse the first k elements\r
    reverse(nums, 0, k - 1);\r
\r
    // Step 4: Reverse the remaining (n - k) elements\r
    reverse(nums, k, nums.length - 1);\r
}\r
\r
function reverse(arr, start, end) {\r
    while (start < end) {\r
        [arr[start], arr[end]] = [arr[end], arr[start]];\r
        start++;\r
        end--;\r
    }\r
}\r
\r
// Example usage:\r
const nums = [1, 2, 3, 4, 5, 6, 7];\r
const k = 3;\r
rotate(nums, k);\r
console.log(nums); // Output: [5, 6, 7, 1, 2, 3, 4]\r
\r
\r
\r
let reverseArray = function(nums, start, end) {\r
	while (start < end) {\r
	  let temp = nums[start];\r
	  nums[start] = nums[end];\r
	  nums[end] = temp;\r
	  start++;\r
	  end--;\r
	}\r
  };\r
  \r
  let rotateArray = function(nums, n) {\r
	let len = nums.length;\r
  \r
	// Normalizing the 'n' rotations\r
	n = n % len;\r
	if (n < 0) {\r
	  // calculate the positive rotations needed.\r
	  n = n + len;\r
	}\r
	// Let's partition the array based on rotations 'n'.\r
	reverseArray(nums, 0, len - 1);\r
	reverseArray(nums, 0, n - 1);\r
	reverseArray(nums, n, len - 1);\r
  };\r
  \r
  let arr = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40];\r
  \r
  console.log("Array Before Rotation ");\r
  // Using a custom printArray function to print a neatly formatted array\r
  console.log(printArray(arr));\r
  \r
  rotateArray(arr, -2);\r
  \r
  console.log("Array After 2 Rotations ");\r
  console.log(printArray(arr));\r
\r
/**\r
 * TC = O(n);\r
 * SC = O(1)\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
