# Min Cost Climbing Stairs

## Problem Statement

You are given an integer array cost where cost[i] is the cost of the i-th step on a staircase. Once you pay the cost, you can climb either one or two steps.

You can start from the step with index 0 or the step with index 1.

Return the minimum cost to reach the top of the floor (one step beyond the last index).

## Examples

- Input: cost = [10, 15, 20]
- Output: 15
- Explanation: Start at index 1, pay 15, climb two steps to reach the top. Total = 15.

- Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
- Output: 6
- Explanation: Take the cheap steps, paying 1 each time and skipping the 100-cost steps.

## Approach

To reach step i, you came from either step i-1 or step i-2. The cost to reach step i is:

dp[i] = min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2])

Think of dp[i] as the minimum cost to reach position i (the "top" is position n).

Base cases:
- dp[0] = 0 (start here for free)
- dp[1] = 0 (start here for free)

The answer is dp[n] — the minimum cost to reach one step beyond the array.

The space-optimized version uses only two variables since only the previous two dp values are needed at each step.

## Solution

```js
// Standard DP tabulation
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

// Space-optimized version
function minCostClimbingStairs(cost) {
  let prev2 = 0;
  let prev1 = 0;

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
```

## Time Complexity

**O(n)** — A single pass from index 2 to n iterates over the array once.

## Space Complexity

**O(n)** for the standard DP tabulation (storing the full dp array).
**O(1)** for the space-optimized version (only prev1 and prev2 are maintained).

## Notes

- This is a "minimize" DP problem, contrasting with "maximize" problems like House Robber.
- The "top of floor" is index n (one beyond the last element), not n-1 — so we iterate up to and including n.
- You can start at either index 0 or index 1 for free, which is why both dp[0] and dp[1] are initialized to 0.
- LeetCode #746.
