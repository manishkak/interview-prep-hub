const r=`# Maximum Size Subarray Sum\r
\r
## Problem Statement\r
\r
Given an array of integers arr and an integer k, find the maximum sum of any contiguous subarray of size k.\r
\r
## Examples\r
\r
- Input: arr = [2,1,5,1,3,2], k = 3\r
  Output: 9\r
\r
## Approach\r
\r
- Use a sliding window of size k and update the current sum by removing the leftmost element and adding the next element.\r
\r
## Solution\r
\r
\`\`\`js\r
function maxSizeSubarraySum(arr, k) {\r
  if (k > arr.length) return 0;\r
  let windowSum = 0;\r
  for (let i = 0; i < k; i++) {\r
    windowSum += arr[i];\r
  }\r
  let maxSum = windowSum;\r
  for (let i = k; i < arr.length; i++) {\r
    windowSum += arr[i] - arr[i - k];\r
    maxSum = Math.max(maxSum, windowSum);\r
  }\r
  return maxSum;\r
}\r
\r
console.log(maxSizeSubarraySum([2,1,5,1,3,2], 3)); // 9\r
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
- The window size is fixed, so this is a standard sliding window problem.\r
`;export{r as default};
