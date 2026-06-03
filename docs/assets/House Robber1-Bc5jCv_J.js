const n=`# House Robber1

## Problem Statement

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, represented by an array nums, where nums[i] is the amount of money in the i-th house.

You cannot rob two adjacent houses because the security system will alert the police if two neighboring houses are robbed on the same night.

Return the maximum amount of money you can rob without alerting the police.

## Examples

- Input: nums = [2, 7, 9, 3, 1]
- Output: 12
- Explanation: Rob house 0 (2), skip house 1, rob house 2 (9), skip house 3, rob house 4 (1). Total = 2 + 9 + 1 = 12.

- Input: nums = [1, 2, 3, 1]
- Output: 4
- Explanation: Rob house 0 (1), skip house 1, rob house 2 (3). Total = 1 + 3 = 4.

## Approach

For every house i, you have two choices:

1. **Rob it** → gain nums[i] plus the best amount robbed up to house i-2 → nums[i] + dp[i-2]
2. **Skip it** → carry forward the best amount robbed up to house i-1 → dp[i-1]

Take the maximum of the two choices:

dp[i] = max(nums[i] + dp[i-2], dp[i-1])

Base cases:
- dp[0] = nums[0]
- dp[1] = max(nums[0], nums[1])

Instead of maintaining a full DP array, two variables (prev2, prev1) are enough since only the last two states are needed.

## Solution

\`\`\`js
function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let prev2 = nums[0];
  let prev1 = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    const current = Math.max(nums[i] + prev2, prev1);
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}
\`\`\`

## Time Complexity

**O(n)** — The array is traversed once from index 2 to n-1.

## Space Complexity

**O(1)** — Only two variables (prev1, prev2) are used instead of a full DP array, making this the space-optimized version.

## Notes

- Classic 1D Dynamic Programming pattern: each state depends only on the previous two states.
- The key constraint "no two adjacent houses" directly maps to the recurrence: you can either take the current house and skip back two, or skip the current house entirely.
- LeetCode #198.
`;export{n as default};
