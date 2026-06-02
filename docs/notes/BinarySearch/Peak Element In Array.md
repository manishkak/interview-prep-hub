# Peak Element In Array

## Problem Statement

Find any peak element in an array where a peak is defined as an element greater than its neighbors. For edge elements, compare with only one neighbor. Solve in O(log n) time.

## Examples

- Input: nums = [1, 2, 3, 1]
  Output: 2 (index of element 3, which is > 2 and > 1)
- Input: nums = [1, 2, 1, 3, 5, 6, 4]
  Output: 1 or 5 (either 2 or 6 is a valid peak)

## Approach

- Binary search comparing mid with mid+1 to determine gradient direction.
- If nums[mid] > nums[mid+1], peak is on left or at mid (set right = mid).
- If nums[mid] < nums[mid+1], peak must be on right (set left = mid + 1).
- Follow the increasing slope towards the peak.

## Solution

```js
function findPeakElement(nums) {
  let left = 0, right = nums.length - 1;
  
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    
    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  
  return left;
}

const nums = [1, 2, 3, 1];
console.log(findPeakElement(nums)); // 2

const nums2 = [1, 2, 1, 3, 5, 6, 4];
console.log(findPeakElement(nums2)); // 5 (or 1)
```

## Time Complexity

- O(log n) - binary search halving the search range

## Space Complexity

- O(1) - only pointers and temporary variables

## Notes

- A peak exists: guaranteed by problem setup (edge elements compare with one neighbor).
- Compare with next neighbor to determine gradient direction.
- Works because of the strictly increasing/decreasing property of slopes.
- Any peak is acceptable; multiple peaks may exist.
- Intuition: follow increasing slope until plateau/decline indicates peak nearby.


