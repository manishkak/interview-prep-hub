# remove Dupes From Array

## Problem Statement

Given a sorted array nums, remove the duplicates in-place such that each element appears only once and return the new length.

## Examples

- Input: [1,1,2]
  Output: length = 2, nums = [1,2]

## Approach

- Use two pointers: one slow pointer for the place to write unique values, and one fast pointer to scan the array.
- When nums[fast] differs from nums[fast-1], write nums[fast] at the slow pointer and increment it.

## Solution

```js
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let write = 1;
  for (let read = 1; read < nums.length; read++) {
    if (nums[read] !== nums[read - 1]) {
      nums[write] = nums[read];
      write++;
    }
  }
  return write;
}

const arr = [1,1,2];
console.log(removeDuplicates(arr), arr.slice(0, 2)); // 2 [1,2]
```

## Time Complexity

- O(n)

## Space Complexity

- O(1)

## Notes

- Works only when the input array is sorted.
- If the array is unsorted, sort first or use a Set.
