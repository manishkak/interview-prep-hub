# Kadane's Algorithm

## Problem Statement

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

## Examples

- Input: [-2,1,-3,4,-1,2,1,-5,4]
  Output: 6 (subarray [4,-1,2,1])

## Approach

- Use Kadane's algorithm: track current subarray sum and reset to current element if sum becomes negative; maintain global maximum.

## Solution

```js
function maxSubArray(nums) {
  let current = nums[0], maxSoFar = nums[0];
  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    maxSoFar = Math.max(maxSoFar, current);
  }
  return maxSoFar;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
```

## Time Complexity

- O(n)

## Space Complexity

- O(1)

## Notes

- Works with negative numbers and runs in linear time.
