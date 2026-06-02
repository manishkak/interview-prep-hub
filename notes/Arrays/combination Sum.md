# combination Sum

## Problem Statement

Given an array of distinct positive integers candidates and a target integer target, return all unique combinations of candidates where the chosen numbers sum to target. Candidates may be chosen multiple times.

## Examples

- Input: candidates = [2,3,6,7], target = 7
    Output: [[2,2,3],[7]]
- Input: candidates = [2,3,5], target = 8
    Output: [[2,2,2,2],[2,3,3],[3,5]]

## Approach

- Use backtracking to explore combinations. Sort candidates (optional) and recursively include a candidate multiple times.
- Track current sum and combination; backtrack when sum exceeds target or when target reached.

## Solution

```js
function combinationSum(candidates, target) {
    const res = [];
    candidates.sort((a,b) => a-b);

    function backtrack(start, sum, comb) {
        if (sum === target) { res.push([...comb]); return; }
        if (sum > target) return;
        for (let i = start; i < candidates.length; i++) {
            comb.push(candidates[i]);
            backtrack(i, sum + candidates[i], comb);
            comb.pop();
        }
    }

    backtrack(0, 0, []);
    return res;
}

console.log(combinationSum([2,3,6,7],7)); // [[2,2,3],[7]]
```

## Time Complexity

- Exponential in worst case, depends on number of combinations.

## Space Complexity

- O(target/min(candidates)) recursion depth and output storage.

## Notes

- Use pruning by sorting candidates to improve performance.
