# contains Duplicate

## Problem Statement

Given an integer array nums, determine if any value appears at least twice. Return true if any duplicate exists, otherwise return false.

## Examples

- Input: [1, 2, 3, 1]
  Output: true
- Input: [1, 2, 3, 4]
  Output: false

## Approach

- Use a Set to track seen values while iterating the array.
- If a value is already in the Set, return true.
- If iteration completes without duplicates, return false.

## Solution

```js
function containsDuplicate(nums) {
  const seen = new Set();
  for (const n of nums) {
    if (seen.has(n)) return true;
    seen.add(n);
  }
  return false;
}

// examples
console.log(containsDuplicate([1,2,3,1])); // true
console.log(containsDuplicate([1,2,3,4])); // false
```

## Time Complexity

- O(n) where n is the length of nums.

## Space Complexity

- O(n) for the Set in the worst case.

## Notes

- Sorting the array and checking adjacent elements is an alternative (O(n log n)).
