const n=`# Move All Zeros To The End Of Array\r
\r
## Problem Statement\r
\r
Given an array nums, move all zeros to the end while maintaining the relative order of non-zero elements. Do this in-place.\r
\r
## Examples\r
\r
- Input: [0,1,0,3,12]\r
  Output: [1,3,12,0,0]\r
\r
## Approach\r
\r
- Use two pointers: one for the current scan position and one for where the next non-zero should be placed.\r
- Swap non-zero values forward as they are encountered.\r
\r
## Solution\r
\r
\`\`\`js\r
function moveZeroes(nums) {\r
  let write = 0;\r
  for (let i = 0; i < nums.length; i++) {\r
    if (nums[i] !== 0) {\r
      [nums[write], nums[i]] = [nums[i], nums[write]];\r
      write++;\r
    }\r
  }\r
}\r
\r
const arr = [0,1,0,3,12];\r
moveZeroes(arr);\r
console.log(arr); // [1,3,12,0,0]\r
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
- Maintains the relative order of non-zero values.\r
`;export{n as default};
