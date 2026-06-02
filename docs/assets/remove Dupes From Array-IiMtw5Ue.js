const r=`# remove Dupes From Array\r
\r
## Problem Statement\r
\r
Given a sorted array nums, remove the duplicates in-place such that each element appears only once and return the new length.\r
\r
## Examples\r
\r
- Input: [1,1,2]\r
  Output: length = 2, nums = [1,2]\r
\r
## Approach\r
\r
- Use two pointers: one slow pointer for the place to write unique values, and one fast pointer to scan the array.\r
- When nums[fast] differs from nums[fast-1], write nums[fast] at the slow pointer and increment it.\r
\r
## Solution\r
\r
\`\`\`js\r
function removeDuplicates(nums) {\r
  if (nums.length === 0) return 0;\r
  let write = 1;\r
  for (let read = 1; read < nums.length; read++) {\r
    if (nums[read] !== nums[read - 1]) {\r
      nums[write] = nums[read];\r
      write++;\r
    }\r
  }\r
  return write;\r
}\r
\r
const arr = [1,1,2];\r
console.log(removeDuplicates(arr), arr.slice(0, 2)); // 2 [1,2]\r
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
- Works only when the input array is sorted.\r
- If the array is unsorted, sort first or use a Set.\r
`;export{r as default};
