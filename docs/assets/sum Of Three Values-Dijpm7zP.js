const r=`# sum Of Three Values\r
\r
## Problem Statement\r
\r
Given an array of integers nums and a target value, determine whether there exist three integers in nums such that their sum equals the target.\r
\r
## Examples\r
\r
- Input: nums = [3,7,1,2,8,4,5], target = 15\r
  Output: true\r
- Input: nums = [-1,2,1,-4,5,-3], target = 20\r
  Output: false\r
\r
## Approach\r
\r
- Sort the array.\r
- Fix one value and use a two-pointer search for the remaining two values.\r
- Move pointers inward based on the current sum.\r
\r
## Solution\r
\r
\`\`\`js\r
function sumOfThree(nums, target) {\r
  nums.sort((a, b) => a - b);\r
  for (let i = 0; i < nums.length - 2; i++) {\r
    let left = i + 1;\r
    let right = nums.length - 1;\r
    while (left < right) {\r
      const total = nums[i] + nums[left] + nums[right];\r
      if (total === target) {\r
        return true;\r
      }\r
      if (total < target) {\r
        left++;\r
      } else {\r
        right--;\r
      }\r
    }\r
  }\r
  return false;\r
}\r
\r
console.log(sumOfThree([3,7,1,2,8,4,5], 15)); // true\r
console.log(sumOfThree([-1,2,1,-4,5,-3], 20)); // false\r
\`\`\`\r
\r
## Time Complexity\r
\r
- O(n^2)\r
\r
## Space Complexity\r
\r
- O(1)\r
\r
## Notes\r
\r
- Sorting enables the two-pointer search.\r
- Works well for triplet-sum existence checks.\r
- If you need the actual triplet values, return the indices or values when found.\r
`;export{r as default};
