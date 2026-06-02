# Move All Zeros To The End Of Array

## Problem Statement

Given an array nums, move all zeros to the end while maintaining the relative order of non-zero elements. Do this in-place.

## Examples

- Input: [0,1,0,3,12]
  Output: [1,3,12,0,0]

## Approach

- Use two pointers: one for the current scan position and one for where the next non-zero should be placed.
- Swap non-zero values forward as they are encountered.

## Solution

```js
function moveZeroes(nums) {
  let write = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[write], nums[i]] = [nums[i], nums[write]];
      write++;
    }
  }
}

const arr = [0,1,0,3,12];
moveZeroes(arr);
console.log(arr); // [1,3,12,0,0]
```

## Time Complexity

- O(n)

## Space Complexity

- O(1)

## Notes

- Maintains the relative order of non-zero values.
