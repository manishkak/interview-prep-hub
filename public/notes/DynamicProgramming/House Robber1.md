# House Robber1

## Problem Statement

Describe the problem statement for **House Robber1** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/*
🏠 Problem: House Robber (Leetcode #198)
Problem Statement

You are a professional robber planning to rob houses along a street.
Each house has a certain amount of money stashed, represented by an array nums,
where nums[i] is the amount of money in the i-th house.

However, you can’t rob two adjacent houses,
because the security system will alert the police if two neighboring houses are robbed on the same night.

Return the maximum amount of money you can rob without alerting the police.*/

/*Input: nums = [2, 7, 9, 3, 1]
Output: 12
Explanation:
Rob house 1 (money = 2), skip house 2, rob house 3 (money = 9), skip house 4, rob house 5 (money = 1).
Total = 2 + 9 + 1 = 12 */

/*💡 Step-by-Step Thought Process
Let’s reason this out:
If you rob the i-th house,
→ you cannot rob the (i-1)-th house.
If you skip the i-th house,
→ you can take the maximum amount robbed up to (i-1).
So for every house i, you have two choices:
Rob it → nums[i] + dp[i-2]
Skip it → dp[i-1]
We take the maximum of these two.*/

// Recurrence Relation:
// dp[i] = max(nums[i] + dp[i-2], dp[i-1]);
/*Where:
dp[i] → max money that can be robbed up to house i
Base cases:
dp[0] = nums[0]
dp[1] = max(nums[0], nums[1])*/

// Space Optimized:
function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let prev2 = nums[0];                     // dp[i-2]
  let prev1 = Math.max(nums[0], nums[1]);  // dp[i-1]

  for (let i = 2; i < nums.length; i++) {
    const current = Math.max(nums[i] + prev2, prev1);
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}

// 🧭 Summary
// | Concept          | Explanation                                        |
// | ---------------- | -------------------------------------------------- |
// | Type             | 1D Dynamic Programming                             |
// | Recurrence       | `dp[i] = max(nums[i] + dp[i-2], dp[i-1])`          |
// | Base cases       | `dp[0] = nums[0]`, `dp[1] = max(nums[0], nums[1])` |
// | Time complexity  | O(n)                                               |
// | Space complexity | O(1) (space optimized)                             |

```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
