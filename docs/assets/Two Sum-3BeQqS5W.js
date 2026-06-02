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
  # Two Sum\r
\r
  ## Problem Statement\r
\r
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. Assume exactly one solution exists and you may not use the same element twice.\r
\r
  ## Examples\r
\r
  - Input: nums = [2,7,11,15], target = 9\r
    Output: [0,1]\r
\r
  ## Approach\r
\r
  - Use a hash map to store value -> index while iterating.\r
  - For each number, check if target - num exists in the map; if so return indices.\r
\r
  ## Solution\r
\r
  \`\`\`js\r
  function twoSum(nums, target) {\r
    const map = new Map();\r
    for (let i = 0; i < nums.length; i++) {\r
      const complement = target - nums[i];\r
      if (map.has(complement)) return [map.get(complement), i];\r
      map.set(nums[i], i);\r
    }\r
  }\r
\r
  console.log(twoSum([2,7,11,15], 9)); // [0,1]\r
  \`\`\`\r
\r
  ## Time Complexity\r
\r
  - O(n)\r
\r
  ## Space Complexity\r
\r
  - O(n)\r
\r
  ## Notes\r
\r
  - Works in one pass; returns the first matching pair.\r
`;export{n as default};
