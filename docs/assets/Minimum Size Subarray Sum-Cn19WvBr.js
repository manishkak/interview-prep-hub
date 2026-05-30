const n=`# Minimum Size Subarray Sum

## Problem Statement

Describe the problem statement for **Minimum Size Subarray Sum** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// Minimum Size Subarray Sum\r
\r
/**\r
 * Problem Statement:\r
 *      Given an array of positive integers nums and a target integer target,\r
 *      return the minimal length of a contiguous subarray of which the sum is ≥ target.\r
 *      If no such subarray exists, return 0.\r
 */\r
\r
/* Example:\r
    Input: nums = [2,3,1,2,4,3], target = 7  \r
    Output: 2  \r
    Explanation: The subarray [4,3] has the smallest length ≥ 7\r
*/\r
\r
/* Approach: Sliding Window (Shrink When Sum ≥ Target)\r
Idea:\r
    - Expand the window by moving right, add numbers to sum\r
    - When sum ≥ target, try shrinking from the left\r
    - Keep track of the minimum window size that satisfied the condition\r
*/\r
\r
function minSubArrayLen(target, nums) {\r
    let left = 0;\r
    let sum = 0;\r
    let minLen = Infinity;\r
  \r
    for (let right = 0; right < nums.length; right++) {\r
      sum += nums[right];\r
  \r
    // As long as the current window meets or exceeds the target…\r
    // Try to shrink it to see if a smaller window can still satisfy it\r
      while (sum >= target) {\r
\r
        // Calculate the current window length and update minLen if this one is smaller\r
        minLen = Math.min(minLen, right - left + 1);\r
\r
        /**\r
         * Shrink the window from the left:\r
         *      Subtract the value at left\r
         *      Move left forward by one\r
         */\r
        sum -= nums[left];\r
        left++;\r
      }\r
    }\r
  \r
    // If minLen was never updated, it means no subarray met the condition → return 0\r
    // Otherwise, return the smallest valid window length found\r
    return minLen === Infinity ? 0 : minLen;\r
}\r
\r
// Time & Space:\r
// Time: O(n)\r
// Space: O(1)\r
\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
