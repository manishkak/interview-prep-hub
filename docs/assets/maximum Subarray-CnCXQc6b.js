const r=`# maximum Subarray

## Problem Statement

Describe the problem statement for **maximum Subarray** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * • Maximum Subarray or maximum sum subarray\r
 * Given an unsorted array nums (the elements can be negative or positive integers), find the sum of the maximum sum subarray\r
 * Array: [1, 2, 2, 3, 3, 1, 4]\r
	Maximum Sum: 16\r
 * Array: [-4, -1, -2, -1, -2]\r
	Maximum Sum: -1\r
 * \r
 * Approach (Kadane’s Algorithm):\r
- Initialize two variables:\r
    - currSum = 0 (tracks sum of current subarray).\r
    - maxSum = -Infinity (tracks max sum found so far).\r
- Iterate over array:\r
    - At each element, either extend the current subarray (currSum + num) or start new subarray (num).\r
    - Update currSum = Math.max(num, currSum + num).\r
    - Update maxSum = Math.max(maxSum, currSum).\r
- Return maxSum.\r
⚡ This works in O(n) time, O(1) space.\r
 */\r
    function maxSubArray(nums) {\r
        let currSum = 0;\r
        let maxSum = -Infinity;\r
      \r
        for (let num of nums) {\r
          currSum = Math.max(num, currSum + num); // extend or restart subarray\r
          maxSum = Math.max(maxSum, currSum);     // update global max\r
        }\r
      \r
        return maxSum;\r
      }\r
      \r
      // Example\r
      console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6\r
      \r
\r
/**\r
 * TC = O(n), because we iterate the input array once.\r
 * SC = O(1), because no extra space is used.\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{r as default};
