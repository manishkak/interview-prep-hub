# triplet Sum Close To Target

## Problem Statement

Given an integer array nums and a target value, find the sum of three integers in nums such that the sum is closest to the target.

## Examples

- Input: nums = [-1,2,1,-4], target = 1
  Output: 2
- Input: nums = [0,0,0], target = 1
  Output: 0

## Approach

- Sort the array.
- Fix one element, then use two pointers to search for the best pair.
- Track the closest sum found so far.

## Solution

`js
function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  let closest = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(target - sum) < Math.abs(target - closest)) {
        closest = sum;
      }
      if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }

  return closest;
}

console.log(threeSumClosest([-1,2,1,-4], 1)); // 2
`

## Time Complexity

- O(n^2)

## Space Complexity

- O(1)

## Notes

- Sorting enables the two-pointer search.
- Keep the closest sum updated while scanning pairs.
