const n=`# cutting Wood

## Problem Statement

Describe the problem statement for **cutting Wood** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// Problem:\r
// Given heights of trees/wood pieces and required wood amount k, find the maximum saw height so that cutting above that height gives at least k wood.\r
\r
// Example:\r
// Input: heights = [4, 42, 40, 26, 46], k = 20\r
// Output: 36\r
// Explanation: Cutting at height 36 gives us (42-36) + (40-36) + (46-36) = 6 + 4 + 10 = 20 wood, which meets the requirement.\r
\r
/*\r
Time Complexity:\r
O(n log m), where n is the number of trees and m is the maximum height of the trees. The binary search runs in O(log m) and for each mid value, we calculate the total wood collected in O(n).\r
Space Complexity:\r
O(1), as we are using only a constant amount of extra space for variables.\r
*/\r
\r
// Mental solution:\r
// Binary search the answer (saw height): if enough wood, try higher; else go lower.\r
\r
function cuttingWood(trees, k) {\r
  let left = 0;\r
  let right = Math.max(...trees);\r
  let ans = 0;\r
\r
  while (left <= right) {\r
    let mid = Math.floor((left + right) / 2);\r
\r
    let wood = 0;\r
    for (let h of trees) {\r
      if (h > mid) wood += h - mid;\r
    }\r
\r
    if (wood >= k) {\r
      ans = mid;        // valid, try higher\r
      left = mid + 1;\r
    } else {\r
      right = mid - 1;  // too high, lower it\r
    }\r
  }\r
\r
  return ans;\r
}
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
