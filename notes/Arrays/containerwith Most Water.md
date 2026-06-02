# containerwith Most Water

## Problem Statement

Given an array of non-negative integers representing the heights of vertical lines on the x-axis, find two lines that together with the x-axis form a container that holds the most water. Return the maximum area.

## Examples

- Input: [1,8,6,2,5,4,8,3,7]
  Output: 49
- Input: [1,1]
  Output: 1

## Approach

- Use a two-pointer technique: place one pointer at the start and one at the end.
- Compute area = width * min(height[left], height[right]). Move the pointer at the smaller height inward.
- Continue until pointers meet; track the maximum area seen.

## Solution

```js
function maxArea(height) {
  let left = 0, right = height.length - 1, maxA = 0;
  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right]);
    maxA = Math.max(maxA, area);
    if (height[left] < height[right]) left++; else right--;
  }
  return maxA;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
```

## Time Complexity

- O(n)

## Space Complexity

- O(1)

## Notes

- The greedy movement of the smaller pointer is key to the O(n) solution.
