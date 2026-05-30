# Min Cost Climbing Stairs

## Problem Statement

Describe the problem statement for **Min Cost Climbing Stairs** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/* This teaches "minimize" DP instead of counting/maximization.

✅ Intuition
To reach step i, you either came from:
i-1
i-2
So:
dp[i] = cost[i] + min(dp[i-1], dp[i-2])

Return min(dp[n-1], dp[n-2]) because you can end either on last or second last step. */

// Standard DP Tabulation solution-
function minCostClimbingStairs(cost) {
  const n = cost.length;
  const dp = new Array(n + 1);

  dp[0] = 0;
  dp[1] = 0;

  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(
      dp[i - 1] + cost[i - 1],
      dp[i - 2] + cost[i - 2]
    );
  }

  return dp[n];
}

// Space-optimized version-
function minCostClimbingStairs(cost) {
  let prev2 = 0; // dp[i-2]
  let prev1 = 0; // dp[i-1]

  for (let i = 2; i <= cost.length; i++) {
    const current = Math.min(
      prev1 + cost[i - 1],
      prev2 + cost[i - 2]
    );
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}
// ✅ Time Complexity: O(n)
// ✅ Space Complexity: O(1)
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
