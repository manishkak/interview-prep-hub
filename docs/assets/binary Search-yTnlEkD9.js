const e=`\uFEFF# binary Search

## Problem Statement

Search for a target value in a sorted array of integers in ascending order. Return the index if the target is found, otherwise return -1. Must use O(log n) time complexity.

## Examples

- Input: nums = [1, 3, 5, 7, 9], target = 5
  Output: 2 (element at index 2)
- Input: nums = [1, 3, 5, 7, 9], target = 6
  Output: -1 (not found)

## Approach

- Check the middle element: if it equals target, return index.
- If middle element is less than target, search the right half (higher values).
- If middle element is greater than target, search the left half (lower values).
- Repeat until found or search space exhausted.
- Use <= condition for loop to handle single-element case.

## Solution

\`\`\`js
function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}

const nums = [1, 3, 5, 7, 9];
console.log(binarySearch(nums, 5)); // 2
console.log(binarySearch(nums, 6)); // -1
\`

## Time Complexity

- O(log n) where n is length of array; search space halves on each iteration

## Space Complexity

- O(1) for iterative solution; O(log n) for recursive (call stack depth)

## Notes

- Works only on sorted arrays.
- Ensure left <= right to include case when both point to same element.
- Average case faster than linear search: log(1,000,000) ≈ 20 vs 1,000,000.
- Can implement recursively or iteratively; iterative is more space-efficient.\r
\r
\r
`;export{e as default};
