# combination Sum

## Problem Statement

Describe the problem statement for **combination Sum** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Problem: Given an array of distinct integers "candidates" and a target integer "target", return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
 * The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.
 * The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
 */
// Great Solution here: https://www.youtube.com/watch?v=2u_l4GM6dKw
/**
 * Approach:
A common approach to solving this problem involves backtracking and recursion. 
The idea is to explore all possible combinations of elements in the array that sum up to the target value. 
At each step, we choose an element from the candidates array and recursively explore the remaining candidates to form the target sum. 
We continue this process until the target sum is reached or exceeded, at which point we backtrack and try a different combination.

Here's a high-level outline of the algorithm:
	1. Sort the candidates array to ensure that the combinations are generated in non-decreasing order.
	2. Use a recursive backtracking function to explore all possible combinations.
	3. At each step, iterate through the candidates array and choose an element to include in the current combination.
	4. Recursively explore the remaining candidates to form the target sum.
	5. Backtrack and remove the last element added to the combination to explore other possibilities.
	6. Continue this process until all combinations have been explored.
	
This approach provides an efficient solution with a time complexity of O(2^N), where N is the number of elements in the candidates array.
 */

function combinationSum(candidates, target) {
    const result = [];
    
    // Define a recursive backtracking function
    function backtrack(startIndex, currentSum, combination) {
        // If the current sum equals the target, add the combination to the result
        if (currentSum === target) {
            result.push([...combination]);
            return;
        }
        
        // If the current sum exceeds the target or we've exhausted all candidates, stop recursion
        if (currentSum > target || startIndex === candidates.length) {
            return;
        }
        
        // Explore all possible combinations starting from the startIndex
        for (let i = startIndex; i < candidates.length; i++) {
            combination.push(candidates[i]); // Choose the current candidate
            backtrack(i, currentSum + candidates[i], combination); // Recur with the current candidate
            combination.pop(); // Backtrack: remove the current candidate and try the next one
        }
    }

    // Start backtracking from index 0 with an initial sum of 0 and an empty combination
    backtrack(0, 0, []);
    
    return result;
}

// Example usage:
const candidates1 = [2, 3, 6, 7];
const target1 = 7;
console.log(combinationSum(candidates1, target1)); // Output: [[2, 2, 3], [7]]

const candidates2 = [2, 3, 5];
const target2 = 8;
console.log(combinationSum(candidates2, target2)); // Output: [[2, 2, 2, 2], [2, 3, 3], [3, 5]]

/**
 * This solution uses a recursive backtracking function (backtrack) to explore all possible combinations of candidates. It iterates through the candidates array, choosing each candidate one by one and recursively exploring the remaining candidates to form the target sum. The process continues until the target sum is reached or exceeded, at which point it backtracks and tries a different combination. Finally, it returns the list of all unique combinations that sum up to the target value.
 */

/**
 * Time Complexity:
The time complexity of the backtracking solution for the Combination Sum problem is exponential, specifically O(2^n), where n is the number of elements in the candidates array. This is because the algorithm explores all possible combinations of elements from the candidates array, and for each combination, it may involve making recursive calls to explore further combinations.

Space Complexity:
The space complexity of the backtracking solution depends on the depth of the recursion stack and the space used to store the combinations. In the worst case, the recursion depth can be n, and the space complexity is O(n) for the combination storage. Therefore, the overall space complexity is O(n) in the worst case.
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
