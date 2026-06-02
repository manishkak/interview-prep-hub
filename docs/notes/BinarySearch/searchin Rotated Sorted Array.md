# searchin Rotated Sorted Array

## Problem Statement

Search for a target value in a rotated sorted array with distinct values. The array was originally sorted in ascending order, then rotated at an unknown pivot. Must solve in O(log n) time.

## Examples

- Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 0
  Output: 4 (rotated at index 3, target at index 4)
- Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 3
  Output: -1 (target not found)

## Approach

- Binary search but with a twist: determine which half is properly sorted.
- If left half is sorted, check if target is in that range; otherwise search right.
- If right half is sorted, check if target is in that range; otherwise search left.
- Narrow the search space by eliminating the half that cannot contain target.

## Solution

```js
function search(nums, target) {
  let left = 0, right = nums.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) {
      return mid;
    }
    
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  
  return -1;
}

const nums = [4, 5, 6, 7, 0, 1, 2];
console.log(search(nums, 0)); // 4
console.log(search(nums, 3)); // -1
`

## Time Complexity

- O(log n) - binary search with adjusted conditions for rotation

## Space Complexity

- O(1) - only pointers and variables

## Notes

- Key: identify which half is properly sorted (no rotation).
- Rotation creates a pivot where array drops from larger to smaller value.
- Check if target falls within the sorted range, then adjust search accordingly.
- All elements are distinct, simplifying boundary checks.
- Edge case: rotation could be at index 0 (no actual rotation, still sorted).


