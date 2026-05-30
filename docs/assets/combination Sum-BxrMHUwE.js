const e=`# combination Sum

## Problem Statement

Describe the problem statement for **combination Sum** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Problem: Given an array of distinct integers "candidates" and a target integer "target", return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.\r
 * The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.\r
 * The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.\r
 */\r
// Great Solution here: https://www.youtube.com/watch?v=2u_l4GM6dKw\r
/**\r
 * Approach:\r
A common approach to solving this problem involves backtracking and recursion. \r
The idea is to explore all possible combinations of elements in the array that sum up to the target value. \r
At each step, we choose an element from the candidates array and recursively explore the remaining candidates to form the target sum. \r
We continue this process until the target sum is reached or exceeded, at which point we backtrack and try a different combination.\r
\r
Here's a high-level outline of the algorithm:\r
	1. Sort the candidates array to ensure that the combinations are generated in non-decreasing order.\r
	2. Use a recursive backtracking function to explore all possible combinations.\r
	3. At each step, iterate through the candidates array and choose an element to include in the current combination.\r
	4. Recursively explore the remaining candidates to form the target sum.\r
	5. Backtrack and remove the last element added to the combination to explore other possibilities.\r
	6. Continue this process until all combinations have been explored.\r
	\r
This approach provides an efficient solution with a time complexity of O(2^N), where N is the number of elements in the candidates array.\r
 */\r
\r
function combinationSum(candidates, target) {\r
    const result = [];\r
    \r
    // Define a recursive backtracking function\r
    function backtrack(startIndex, currentSum, combination) {\r
        // If the current sum equals the target, add the combination to the result\r
        if (currentSum === target) {\r
            result.push([...combination]);\r
            return;\r
        }\r
        \r
        // If the current sum exceeds the target or we've exhausted all candidates, stop recursion\r
        if (currentSum > target || startIndex === candidates.length) {\r
            return;\r
        }\r
        \r
        // Explore all possible combinations starting from the startIndex\r
        for (let i = startIndex; i < candidates.length; i++) {\r
            combination.push(candidates[i]); // Choose the current candidate\r
            backtrack(i, currentSum + candidates[i], combination); // Recur with the current candidate\r
            combination.pop(); // Backtrack: remove the current candidate and try the next one\r
        }\r
    }\r
\r
    // Start backtracking from index 0 with an initial sum of 0 and an empty combination\r
    backtrack(0, 0, []);\r
    \r
    return result;\r
}\r
\r
// Example usage:\r
const candidates1 = [2, 3, 6, 7];\r
const target1 = 7;\r
console.log(combinationSum(candidates1, target1)); // Output: [[2, 2, 3], [7]]\r
\r
const candidates2 = [2, 3, 5];\r
const target2 = 8;\r
console.log(combinationSum(candidates2, target2)); // Output: [[2, 2, 2, 2], [2, 3, 3], [3, 5]]\r
\r
/**\r
 * This solution uses a recursive backtracking function (backtrack) to explore all possible combinations of candidates. It iterates through the candidates array, choosing each candidate one by one and recursively exploring the remaining candidates to form the target sum. The process continues until the target sum is reached or exceeded, at which point it backtracks and tries a different combination. Finally, it returns the list of all unique combinations that sum up to the target value.\r
 */\r
\r
/**\r
 * Time Complexity:\r
The time complexity of the backtracking solution for the Combination Sum problem is exponential, specifically O(2^n), where n is the number of elements in the candidates array. This is because the algorithm explores all possible combinations of elements from the candidates array, and for each combination, it may involve making recursive calls to explore further combinations.\r
\r
Space Complexity:\r
The space complexity of the backtracking solution depends on the depth of the recursion stack and the space used to store the combinations. In the worst case, the recursion depth can be n, and the space complexity is O(n) for the combination storage. Therefore, the overall space complexity is O(n) in the worst case.\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
