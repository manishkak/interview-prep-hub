const t=`\uFEFF# trapping Rain Water

## Problem Statement

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

## Examples

- Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
  Output: 6

## Approach

- Use two pointers from both ends.
- Maintain leftMax and rightMax.
- Water trapped at each position is min(leftMax, rightMax) - height[i].

## Solution

\`js
function trap(height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let total = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      total += leftMax - height[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      total += rightMax - height[right];
      right--;
    }
  }

  return total;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
\`

## Time Complexity

- O(n)

## Space Complexity

- O(1)

## Notes

- Use the smaller side to decide the trapped water.
- Two-pointer method is optimal for this problem.\r
`;export{t as default};
