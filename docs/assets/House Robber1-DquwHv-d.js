const n=`# House Robber1

## Problem Statement

Describe the problem statement for **House Robber1** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/*\r
🏠 Problem: House Robber (Leetcode #198)\r
Problem Statement\r
\r
You are a professional robber planning to rob houses along a street.\r
Each house has a certain amount of money stashed, represented by an array nums,\r
where nums[i] is the amount of money in the i-th house.\r
\r
However, you can’t rob two adjacent houses,\r
because the security system will alert the police if two neighboring houses are robbed on the same night.\r
\r
Return the maximum amount of money you can rob without alerting the police.*/\r
\r
/*Input: nums = [2, 7, 9, 3, 1]\r
Output: 12\r
Explanation:\r
Rob house 1 (money = 2), skip house 2, rob house 3 (money = 9), skip house 4, rob house 5 (money = 1).\r
Total = 2 + 9 + 1 = 12 */\r
\r
/*💡 Step-by-Step Thought Process\r
Let’s reason this out:\r
If you rob the i-th house,\r
→ you cannot rob the (i-1)-th house.\r
If you skip the i-th house,\r
→ you can take the maximum amount robbed up to (i-1).\r
So for every house i, you have two choices:\r
Rob it → nums[i] + dp[i-2]\r
Skip it → dp[i-1]\r
We take the maximum of these two.*/\r
\r
// Recurrence Relation:\r
// dp[i] = max(nums[i] + dp[i-2], dp[i-1]);\r
/*Where:\r
dp[i] → max money that can be robbed up to house i\r
Base cases:\r
dp[0] = nums[0]\r
dp[1] = max(nums[0], nums[1])*/\r
\r
// Space Optimized:\r
function rob(nums) {\r
  if (nums.length === 0) return 0;\r
  if (nums.length === 1) return nums[0];\r
\r
  let prev2 = nums[0];                     // dp[i-2]\r
  let prev1 = Math.max(nums[0], nums[1]);  // dp[i-1]\r
\r
  for (let i = 2; i < nums.length; i++) {\r
    const current = Math.max(nums[i] + prev2, prev1);\r
    prev2 = prev1;\r
    prev1 = current;\r
  }\r
\r
  return prev1;\r
}\r
\r
// 🧭 Summary\r
// | Concept          | Explanation                                        |\r
// | ---------------- | -------------------------------------------------- |\r
// | Type             | 1D Dynamic Programming                             |\r
// | Recurrence       | \`dp[i] = max(nums[i] + dp[i-2], dp[i-1])\`          |\r
// | Base cases       | \`dp[0] = nums[0]\`, \`dp[1] = max(nums[0], nums[1])\` |\r
// | Time complexity  | O(n)                                               |\r
// | Space complexity | O(1) (space optimized)                             |\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
