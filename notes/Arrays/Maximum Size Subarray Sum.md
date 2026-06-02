# Maximum Size Subarray Sum

## Problem Statement

Given an array of integers arr and an integer k, find the maximum sum of any contiguous subarray of size k.

## Examples

- Input: arr = [2,1,5,1,3,2], k = 3
  Output: 9

## Approach

- Use a sliding window of size k and update the current sum by removing the leftmost element and adding the next element.

## Solution

```js
function maxSizeSubarraySum(arr, k) {
  if (k > arr.length) return 0;
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  let maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

console.log(maxSizeSubarraySum([2,1,5,1,3,2], 3)); // 9
```

## Time Complexity

- O(n)

## Space Complexity

- O(1)

## Notes

- The window size is fixed, so this is a standard sliding window problem.
