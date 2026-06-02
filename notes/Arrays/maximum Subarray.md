# maximum Subarray

## Problem Statement

Given an integer array nums, find the contiguous subarray with the largest sum and return that sum.

## Examples

- Input: [-2,1,-3,4,-1,2,1,-5,4]
  Output: 6

## Approach

- Use Kadane's algorithm to keep a running maximum subarray sum ending at each position.

## Solution

`js
function maxSubArray(nums) {
  let maxEndingHere = nums[0];
  let maxSoFar = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
`

## Time Complexity

- O(n)

## Space Complexity

- O(1)

## Notes

- Works with negative numbers because the algorithm can restart the subarray at the current element.
