const n=`\uFEFF# First&Last Post Of Target

## Problem Statement

Given a sorted array of integers, find the starting and ending position (indices) of a given target value. If target not found, return [-1, -1]. Must solve in O(log n) time.

## Examples

- Input: nums = [5, 7, 7, 8, 8, 10], target = 8
  Output: [3, 4]
- Input: nums = [5, 7, 7, 8, 8, 10], target = 6
  Output: [-1, -1]
- Input: nums = [8], target = 8
  Output: [0, 0]

## Approach

- Binary search to find leftmost position: when target found, keep moving left.
- Binary search to find rightmost position: when target found, keep moving right.
- Return [leftmost, rightmost] or [-1, -1] if not found.
- Use two separate binary search passes with different termination conditions.

## Solution

\`\`\`js
function searchRange(nums, target) {
  function findLeft(nums, target) {
    let left = 0, right = nums.length - 1;
    let result = -1;
    
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        result = mid;
        right = mid - 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    
    return result;
  }
  
  function findRight(nums, target) {
    let left = 0, right = nums.length - 1;
    let result = -1;
    
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        result = mid;
        left = mid + 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    
    return result;
  }
  
  const left = findLeft(nums, target);
  if (left === -1) return [-1, -1];
  const right = findRight(nums, target);
  return [left, right];
}

const nums = [5, 7, 7, 8, 8, 10];
console.log(searchRange(nums, 8)); // [3, 4]
console.log(searchRange(nums, 6)); // [-1, -1]
\`

## Time Complexity

- O(log n) - two binary searches each O(log n)

## Space Complexity

- O(1) - no additional data structures

## Notes

- Key: continue searching even after finding target to find boundaries.
- Two functions: one minimizes index, other maximizes it.
- Early exit: if left search returns -1, target doesn't exist.
- Pattern: finding first and last occurrences of repeated elements.\r
\r
\r
`;export{n as default};
