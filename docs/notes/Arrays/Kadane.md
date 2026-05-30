# Kadane's Algorithm

## Problem Statement
Find the contiguous subarray within a one-dimensional array of numbers that has the largest sum.

## Examples

```txt
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1]
```

## Approach
Track the best subarray ending at each position and keep the global max. Reset the running sum when it becomes negative.

## Solution

```ts
function maxSubArray(nums: number[]): number {
  let current = nums[0]
  let maxSoFar = nums[0]
  for (let i = 1; i < nums.length; i += 1) {
    current = Math.max(nums[i], current + nums[i])
    maxSoFar = Math.max(maxSoFar, current)
  }
  return maxSoFar
}
```

## Time Complexity
O(n)

## Space Complexity
O(1)

## Notes
- Kadane's algorithm is ideal for maximum subarray problems.
- Use it when the input can have negative numbers.
