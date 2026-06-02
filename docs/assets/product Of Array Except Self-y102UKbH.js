const r=`# product Of Array Except Self\r
\r
## Problem Statement\r
\r
Given an integer array nums of length n, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i], without using division.\r
\r
## Examples\r
\r
- Input: [1,2,3,4]\r
  Output: [24,12,8,6]\r
\r
## Approach\r
\r
- Use left and right running products. First pass computes product of values to the left of each index, second pass multiplies by product of values to the right.\r
\r
## Solution\r
\r
\`\`\`js\r
function productExceptSelf(nums) {\r
  const n = nums.length;\r
  const res = new Array(n).fill(1);\r
  let leftProd = 1;\r
  for (let i = 0; i < n; i++) {\r
    res[i] = leftProd;\r
    leftProd *= nums[i];\r
  }\r
  let rightProd = 1;\r
  for (let i = n - 1; i >= 0; i--) {\r
    res[i] *= rightProd;\r
    rightProd *= nums[i];\r
  }\r
  return res;\r
}\r
\r
console.log(productExceptSelf([1,2,3,4])); // [24,12,8,6]\r
\`\`\`\r
\r
## Time Complexity\r
\r
- O(n)\r
\r
## Space Complexity\r
\r
- O(1) extra space (output excluded)\r
\r
## Notes\r
\r
- Handles zeros correctly by constructing left/right products separately.\r
`;export{r as default};
