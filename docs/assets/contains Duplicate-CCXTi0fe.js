const n=`# contains Duplicate\r
\r
## Problem Statement\r
\r
Given an integer array nums, determine if any value appears at least twice. Return true if any duplicate exists, otherwise return false.\r
\r
## Examples\r
\r
- Input: [1, 2, 3, 1]\r
  Output: true\r
- Input: [1, 2, 3, 4]\r
  Output: false\r
\r
## Approach\r
\r
- Use a Set to track seen values while iterating the array.\r
- If a value is already in the Set, return true.\r
- If iteration completes without duplicates, return false.\r
\r
## Solution\r
\r
\`\`\`js\r
function containsDuplicate(nums) {\r
  const seen = new Set();\r
  for (const n of nums) {\r
    if (seen.has(n)) return true;\r
    seen.add(n);\r
  }\r
  return false;\r
}\r
\r
// examples\r
console.log(containsDuplicate([1,2,3,1])); // true\r
console.log(containsDuplicate([1,2,3,4])); // false\r
\`\`\`\r
\r
## Time Complexity\r
\r
- O(n) where n is the length of nums.\r
\r
## Space Complexity\r
\r
- O(n) for the Set in the worst case.\r
\r
## Notes\r
\r
- Sorting the array and checking adjacent elements is an alternative (O(n log n)).\r
`;export{n as default};
