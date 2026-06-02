const n=`\uFEFF# contiguous Array

## Problem Statement

Given a binary array nums, find the maximum length of a contiguous subarray with an equal number of 0s and 1s.

## Examples

- Input: [0,1,0]
  Output: 2
- Input: [0,1,0,0,1,1,0]
  Output: 6

## Approach

- Convert 0 to -1 and use a prefix sum.
- Track the first index where each sum appears in a map.
- If the same sum appears again, the subarray between the two indices has equal numbers of 0 and 1.

## Solution

\`js
function findMaxLength(nums) {
  const indexMap = new Map([[0, -1]]);
  let maxLength = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    count += nums[i] === 1 ? 1 : -1;
    if (indexMap.has(count)) {
      maxLength = Math.max(maxLength, i - indexMap.get(count));
    } else {
      indexMap.set(count, i);
    }
  }

  return maxLength;
}

console.log(findMaxLength([0,1,0])); // 2
console.log(findMaxLength([0,1,0,0,1,1,0])); // 6
\`

## Time Complexity

- O(n)

## Space Complexity

- O(n)

## Notes

- Use a cumulative sum with 0 → -1 and 1 → +1.
- Store the first occurrence of each sum in a map.\r
`;export{n as default};
