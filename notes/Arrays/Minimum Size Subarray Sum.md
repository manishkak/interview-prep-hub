# Minimum Size Subarray Sum

## Problem Statement

Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray of which the sum is at least target. If there is no such subarray, return 0.

## Examples

- Input: target = 7, nums = [2,3,1,2,4,3]
  Output: 2

## Approach

- Use a sliding window: expand the right pointer, add values until sum ≥ target, then shrink from the left to find the smallest window.

## Solution

```js
function minSubArrayLen(target, nums) {
  let left = 0, sum = 0, minLen = Infinity;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left++];
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen(7, [2,3,1,2,4,3])); // 2
```

## Time Complexity

- O(n)

## Space Complexity

- O(1)

## Notes

- Only works for positive integers.
