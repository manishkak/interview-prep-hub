const n=`\uFEFF# sort Colors

## Problem Statement

Given an array nums with n objects colored 0, 1, or 2, sort them in-place so that objects of the same color are adjacent, with colors in the order 0, 1, and 2.

## Examples

- Input: [2,0,2,1,1,0]
  Output: [0,0,1,1,2,2]

## Approach

- Use the Dutch National Flag algorithm with three pointers: low, mid, high.
- Move 0s to the front, 2s to the back, and leave 1s in the middle.

## Solution
\`\`\`js
function sortColors(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
}

const nums = [2,0,2,1,1,0];
sortColors(nums);
console.log(nums); // [0,0,1,1,2,2]
\`\`\`

## Time Complexity

- O(n)

## Space Complexity

- O(1)

## Notes

- The algorithm sorts in one pass.
- Works in-place with constant extra memory.\r
\r
\r
`;export{n as default};
