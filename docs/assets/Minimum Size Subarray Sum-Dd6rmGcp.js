const n=`# Minimum Size Subarray Sum\r
\r
## Problem Statement\r
\r
Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray of which the sum is at least target. If there is no such subarray, return 0.\r
\r
## Examples\r
\r
- Input: target = 7, nums = [2,3,1,2,4,3]\r
  Output: 2\r
\r
## Approach\r
\r
- Use a sliding window: expand the right pointer, add values until sum ≥ target, then shrink from the left to find the smallest window.\r
\r
## Solution\r
\r
\`\`\`js\r
function minSubArrayLen(target, nums) {\r
  let left = 0, sum = 0, minLen = Infinity;\r
  for (let right = 0; right < nums.length; right++) {\r
    sum += nums[right];\r
    while (sum >= target) {\r
      minLen = Math.min(minLen, right - left + 1);\r
      sum -= nums[left++];\r
    }\r
  }\r
  return minLen === Infinity ? 0 : minLen;\r
}\r
\r
console.log(minSubArrayLen(7, [2,3,1,2,4,3])); // 2\r
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
- Only works for positive integers.\r
`;export{n as default};
