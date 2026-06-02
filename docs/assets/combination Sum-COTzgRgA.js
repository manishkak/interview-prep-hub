const n=`# combination Sum\r
\r
## Problem Statement\r
\r
Given an array of distinct positive integers candidates and a target integer target, return all unique combinations of candidates where the chosen numbers sum to target. Candidates may be chosen multiple times.\r
\r
## Examples\r
\r
- Input: candidates = [2,3,6,7], target = 7\r
    Output: [[2,2,3],[7]]\r
- Input: candidates = [2,3,5], target = 8\r
    Output: [[2,2,2,2],[2,3,3],[3,5]]\r
\r
## Approach\r
\r
- Use backtracking to explore combinations. Sort candidates (optional) and recursively include a candidate multiple times.\r
- Track current sum and combination; backtrack when sum exceeds target or when target reached.\r
\r
## Solution\r
\r
\`\`\`js\r
function combinationSum(candidates, target) {\r
    const res = [];\r
    candidates.sort((a,b) => a-b);\r
\r
    function backtrack(start, sum, comb) {\r
        if (sum === target) { res.push([...comb]); return; }\r
        if (sum > target) return;\r
        for (let i = start; i < candidates.length; i++) {\r
            comb.push(candidates[i]);\r
            backtrack(i, sum + candidates[i], comb);\r
            comb.pop();\r
        }\r
    }\r
\r
    backtrack(0, 0, []);\r
    return res;\r
}\r
\r
console.log(combinationSum([2,3,6,7],7)); // [[2,2,3],[7]]\r
\`\`\`\r
\r
## Time Complexity\r
\r
- Exponential in worst case, depends on number of combinations.\r
\r
## Space Complexity\r
\r
- O(target/min(candidates)) recursion depth and output storage.\r
\r
## Notes\r
\r
- Use pruning by sorting candidates to improve performance.\r
`;export{n as default};
