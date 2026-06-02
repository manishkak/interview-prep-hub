const t=`# containerwith Most Water\r
\r
## Problem Statement\r
\r
Given an array of non-negative integers representing the heights of vertical lines on the x-axis, find two lines that together with the x-axis form a container that holds the most water. Return the maximum area.\r
\r
## Examples\r
\r
- Input: [1,8,6,2,5,4,8,3,7]\r
  Output: 49\r
- Input: [1,1]\r
  Output: 1\r
\r
## Approach\r
\r
- Use a two-pointer technique: place one pointer at the start and one at the end.\r
- Compute area = width * min(height[left], height[right]). Move the pointer at the smaller height inward.\r
- Continue until pointers meet; track the maximum area seen.\r
\r
## Solution\r
\r
\`\`\`js\r
function maxArea(height) {\r
  let left = 0, right = height.length - 1, maxA = 0;\r
  while (left < right) {\r
    const area = (right - left) * Math.min(height[left], height[right]);\r
    maxA = Math.max(maxA, area);\r
    if (height[left] < height[right]) left++; else right--;\r
  }\r
  return maxA;\r
}\r
\r
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49\r
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
- The greedy movement of the smaller pointer is key to the O(n) solution.\r
`;export{t as default};
