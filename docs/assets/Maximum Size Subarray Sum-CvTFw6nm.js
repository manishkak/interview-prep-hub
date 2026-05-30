const r=`# Maximum Size Subarray Sum

## Problem Statement

Describe the problem statement for **Maximum Size Subarray Sum** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// the goal is typically to find the maximum sum of a contiguous subarray of a given size k within an array\r
/**\r
 * Given an array of integers arr and an integer k, return the maximum sum of any contiguous subarray of size k.\r
 */\r
/** STEPS:\r
 *  Step 1: Scan over a window of size k (0 to k-1)\r
        Sum the first k elements- maxSum till this point\r
    Step 2: Slide the window forward- Scan again from k to end of array (n-1)\r
        Subtract the element going out (left)- array[i-k]\r
        Add the element coming in (right)- array[i]\r
    Step 3: If this windowSum is > maxSum, then update\r
 */\r
// my code first:\r
let arr = [2, 1, 5, 1, 3, 2];\r
let k = 3;\r
let maxSum = 0;\r
let currSum = 0;\r
let left = 0;\r
\r
for (let right = 0; right < arr.length; right++) {\r
  currSum += arr[right];        // Add the element coming in (right)\r
\r
  if (right - left + 1 === k) { // Sum the first k elements\r
    maxSum = Math.max(maxSum, currSum);\r
    currSum -= arr[left];  // remove the leftmost element\r
    left++;                // slide the window forward\r
  }\r
}\r
\r
return maxSum;\r
\r
/* Time & Space:\r
Time: O(n)\r
Space: O(1) */\r
\r
\r
function maxSizeSubarraySum(arr, k) {\r
    if (arr.length < k) return null; // Not enough elements for the subarray\r
\r
    let maxSum = 0;\r
    let currentSum = 0;\r
\r
    // Calculate the sum of the first k elements\r
    for (let i = 0; i < k; i++) {\r
        currentSum += arr[i];\r
    }\r
\r
    maxSum = currentSum;\r
\r
    // Slide the window\r
    for (let i = k; i < arr.length; i++) {\r
        currentSum += arr[i] - arr[i - k]; // Update the current sum\r
        maxSum = Math.max(maxSum, currentSum); // Update the maximum sum if necessary\r
    }\r
\r
    return maxSum;\r
}\r
\r
// Example usage\r
const array = [2, 1, 5, 1, 3, 2];\r
const k = 3;\r
console.log(maxSizeSubarraySum(array, k)); // Output: 9\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{r as default};
