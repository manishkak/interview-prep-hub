const n=`\uFEFF# Maximum Average Subarrayof Size K

## Problem Statement

Given an array nums and an integer k, find the maximum average value of any contiguous subarray of length k.

## Examples

- Input: nums = [1,12,-5,-6,50,3], k = 4
  Output: 12.75

## Approach

- Use a sliding window of size k.
- Track the sum of the current window and update the maximum sum.
- Return the maximum sum divided by k.

## Solution
\`\`\`js
function findMaxAverage(nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let maxSum = sum;

  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum / k;
}

console.log(findMaxAverage([1,12,-5,-6,50,3], 4)); // 12.75
\`\`\`

## Time Complexity

- O(n)

## Space Complexity

- O(1)

## Notes

- Use a fixed-size sliding window.
- Only the sum is updated when the window moves.\r
\r
\r
`;export{n as default};
