const n=`# Maximum Average Subarrayof Size K

## Problem Statement

Describe the problem statement for **Maximum Average Subarrayof Size K** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// Maximum Average Subarray of Size K\r
\r
/**\r
 * Problem Statement:\r
 *      Given an array 'nums' and an integer 'k',\r
 *      find the maximum average of any contiguous subarray of length k.\r
 */\r
\r
/**\r
 * Idea:\r
    - Find sum of first k elements — that's your first window\r
    - Slide the window one step at a time:\r
    - Subtract the element leaving\r
    - Add the new element coming in\r
    - Keep track of the max sum seen\r
 */\r
\r
function findMaxAverage(nums, k) {\r
    let sum = 0;\r
    \r
    // Step 1: Initial window\r
    for (let i = 0; i < k; i++) {\r
        sum += nums[i];\r
    }\r
    \r
    let maxSum = sum;\r
    \r
    // Step 2: Slide window\r
    for (let i = k; i < nums.length; i++) {\r
        sum = sum - nums[i - k] + nums[i];\r
        maxSum = Math.max(maxSum, sum);\r
    }\r
    \r
    // Step 3: Return max average\r
    return maxSum / k;\r
}\r
\r
/**\r
 * | Metric | Value |\r
| ------ | ----- |\r
| Time   | O(n)  |\r
| Space  | O(1)  |\r
*/\r
\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
