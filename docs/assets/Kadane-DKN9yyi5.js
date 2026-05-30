const n=`# Kadane's Algorithm\r
\r
## Problem Statement\r
Find the contiguous subarray within a one-dimensional array of numbers that has the largest sum.\r
\r
## Examples\r
\r
\`\`\`txt\r
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]\r
Output: 6\r
Explanation: [4,-1,2,1]\r
\`\`\`\r
\r
## Approach\r
Track the best subarray ending at each position and keep the global max. Reset the running sum when it becomes negative.\r
\r
## Solution\r
\r
\`\`\`ts\r
function maxSubArray(nums: number[]): number {\r
  let current = nums[0]\r
  let maxSoFar = nums[0]\r
  for (let i = 1; i < nums.length; i += 1) {\r
    current = Math.max(nums[i], current + nums[i])\r
    maxSoFar = Math.max(maxSoFar, current)\r
  }\r
  return maxSoFar\r
}\r
\`\`\`\r
\r
## Time Complexity\r
O(n)\r
\r
## Space Complexity\r
O(1)\r
\r
## Notes\r
- Kadane's algorithm is ideal for maximum subarray problems.\r
- Use it when the input can have negative numbers.\r
`;export{n as default};
