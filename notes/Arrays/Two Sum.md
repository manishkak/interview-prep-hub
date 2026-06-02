# Two Sum

## Problem Statement
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

## Examples

```txt
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
```

## Approach
Use a hash map to track complements while iterating. If the complement of the current value is already in the map, you have found the answer.

## Solution

```ts
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>()
  for (let i = 0; i < nums.length; i += 1) {
    const complement = target - nums[i]
    if (map.has(complement)) {
      return [map.get(complement)!, i]
    }
    map.set(nums[i], i)
  }
  # Two Sum

  ## Problem Statement

  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. Assume exactly one solution exists and you may not use the same element twice.

  ## Examples

  - Input: nums = [2,7,11,15], target = 9
    Output: [0,1]

  ## Approach

  - Use a hash map to store value -> index while iterating.
  - For each number, check if target - num exists in the map; if so return indices.

  ## Solution

  ```js
  function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (map.has(complement)) return [map.get(complement), i];
      map.set(nums[i], i);
    }
  }

  console.log(twoSum([2,7,11,15], 9)); // [0,1]
  ```

  ## Time Complexity

  - O(n)

  ## Space Complexity

  - O(n)

  ## Notes

  - Works in one pass; returns the first matching pair.
