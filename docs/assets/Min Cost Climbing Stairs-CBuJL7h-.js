const n=`# Min Cost Climbing Stairs

## Problem Statement

Describe the problem statement for **Min Cost Climbing Stairs** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/* This teaches "minimize" DP instead of counting/maximization.\r
\r
✅ Intuition\r
To reach step i, you either came from:\r
i-1\r
i-2\r
So:\r
dp[i] = cost[i] + min(dp[i-1], dp[i-2])\r
\r
Return min(dp[n-1], dp[n-2]) because you can end either on last or second last step. */\r
\r
// Standard DP Tabulation solution-\r
function minCostClimbingStairs(cost) {\r
  const n = cost.length;\r
  const dp = new Array(n + 1);\r
\r
  dp[0] = 0;\r
  dp[1] = 0;\r
\r
  for (let i = 2; i <= n; i++) {\r
    dp[i] = Math.min(\r
      dp[i - 1] + cost[i - 1],\r
      dp[i - 2] + cost[i - 2]\r
    );\r
  }\r
\r
  return dp[n];\r
}\r
\r
// Space-optimized version-\r
function minCostClimbingStairs(cost) {\r
  let prev2 = 0; // dp[i-2]\r
  let prev1 = 0; // dp[i-1]\r
\r
  for (let i = 2; i <= cost.length; i++) {\r
    const current = Math.min(\r
      prev1 + cost[i - 1],\r
      prev2 + cost[i - 2]\r
    );\r
    prev2 = prev1;\r
    prev1 = current;\r
  }\r
\r
  return prev1;\r
}\r
// ✅ Time Complexity: O(n)\r
// ✅ Space Complexity: O(1)
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
