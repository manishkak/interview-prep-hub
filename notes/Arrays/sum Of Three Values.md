# sum Of Three Values

## Problem Statement

Given an array of integers nums and a target value, determine whether there exist three integers in nums such that their sum equals the target.

## Examples

- Input: nums = [3,7,1,2,8,4,5], target = 15
  Output: true
- Input: nums = [-1,2,1,-4,5,-3], target = 20
  Output: false

## Approach

- Sort the array.
- Fix one value and use a two-pointer search for the remaining two values.
- Move pointers inward based on the current sum.

## Solution

```js
function sumOfThree(nums, target) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const total = nums[i] + nums[left] + nums[right];
      if (total === target) {
        return true;
      }
      if (total < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return false;
}

console.log(sumOfThree([3,7,1,2,8,4,5], 15)); // true
console.log(sumOfThree([-1,2,1,-4,5,-3], 20)); // false
```

## Time Complexity

- O(n^2)

## Space Complexity

- O(1)

## Notes

- Sorting enables the two-pointer search.
- Works well for triplet-sum existence checks.
- If you need the actual triplet values, return the indices or values when found.
