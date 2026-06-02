const n=`# Kadane's Algorithm\r
\r
## Problem Statement\r
\r
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.\r
\r
## Examples\r
\r
- Input: [-2,1,-3,4,-1,2,1,-5,4]\r
  Output: 6 (subarray [4,-1,2,1])\r
\r
## Approach\r
\r
- Use Kadane's algorithm: track current subarray sum and reset to current element if sum becomes negative; maintain global maximum.\r
\r
## Solution\r
\r
\`\`\`js\r
function maxSubArray(nums) {\r
  let current = nums[0], maxSoFar = nums[0];\r
  for (let i = 1; i < nums.length; i++) {\r
    current = Math.max(nums[i], current + nums[i]);\r
    maxSoFar = Math.max(maxSoFar, current);\r
  }\r
  return maxSoFar;\r
}\r
\r
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6\r
\`\`\`\r
\r
## Time Complexity\r
\r
- O(n)\r
\r
## Space Complexity\r
\r
- O(1)\r
\r
## Notes\r
\r
- Works with negative numbers and runs in linear time.\r
`;export{n as default};
