const n=`\uFEFF# rotate Array

## Problem Statement

Given an array nums, rotate the array to the right by k steps, where k is non-negative.

## Examples

- Input: nums = [1,2,3,4,5,6,7], k = 3
  Output: [5,6,7,1,2,3,4]
- Input: nums = [-1,-100,3,99], k = 2
  Output: [3,99,-1,-100]

## Approach

- Normalize k using k % nums.length.
- Reverse the entire array.
- Reverse the first k elements.
- Reverse the rest of the array.

## Solution

\`\`\`js
function rotate(nums, k) {
  const n = nums.length;
  k = k % n;
  if (k === 0) return;

  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);
}

function reverse(arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

const nums = [1,2,3,4,5,6,7];
rotate(nums, 3);
console.log(nums); // [5,6,7,1,2,3,4]
\`\`\`

## Time Complexity

- O(n)

## Space Complexity

- O(1)

## Notes

- The solution is in-place.
- Reversal method works for both left and right rotation with minor changes.
`;export{n as default};
