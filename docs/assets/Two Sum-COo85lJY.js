const n=`# Two Sum\r
\r
## Problem Statement\r
Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.\r
\r
## Examples\r
\r
\`\`\`txt\r
Input: nums = [2,7,11,15], target = 9\r
Output: [0,1]\r
\`\`\`\r
\r
## Approach\r
Use a hash map to track complements while iterating. If the complement of the current value is already in the map, you have found the answer.\r
\r
## Solution\r
\r
\`\`\`ts\r
function twoSum(nums: number[], target: number): number[] {\r
  const map = new Map<number, number>()\r
  for (let i = 0; i < nums.length; i += 1) {\r
    const complement = target - nums[i]\r
    if (map.has(complement)) {\r
      return [map.get(complement)!, i]\r
    }\r
    map.set(nums[i], i)\r
  }\r
  return []\r
}\r
\`\`\`\r
\r
## Time Complexity\r
O(n)\r
\r
## Space Complexity\r
O(n)\r
\r
## Notes\r
- Be careful with duplicates.\r
- Use a hash map for a single-pass solution.\r
`;export{n as default};
