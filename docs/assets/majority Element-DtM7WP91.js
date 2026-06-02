const n=`\uFEFF# majority Element

## Problem Statement

Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume the majority element always exists.

## Examples

- Input: [3,2,3]
  Output: 3
- Input: [2,2,1,1,1,2,2]
  Output: 2

## Approach

- Use Boyer-Moore Voting to find the majority candidate in one pass.
- The candidate is guaranteed to be the majority element in this problem.

## Solution
\`\`\`js
function majorityElement(nums) {
  let count = 0;
  let candidate = null;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += candidate === num ? 1 : -1;
  }

  return candidate;
}

console.log(majorityElement([3,2,3])); // 3
console.log(majorityElement([2,2,1,1,1,2,2])); // 2
\`\`\`

## Time Complexity

- O(n)

## Space Complexity

- O(1)

## Notes

- This works because the majority element appears more than half the time.
- Boyer-Moore finds the candidate in one pass.\r
\r
\r
`;export{n as default};
