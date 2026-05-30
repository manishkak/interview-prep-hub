const e=`# Square Root Of ANum

## Problem Statement

Describe the problem statement for **Square Root Of ANum** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Square Root of a number using binary search method\r
 * Uses a binary search to find the square root by repeatedly narrowing the range [low, high] until the difference between high and low is within a specified precision.\r
 * This method ensures that the result is accurate to the specified precision.\r
 * just learn it somehow man\r
 */\r
/*\r
Time Complexity:\r
	O(log x): The binary search halves the search range in each step.\r
Space Complexity:\r
	O(1): The algorithm uses only a constant amount of extra space\r
*/\r
/**\r
 * Mental flow:\r
    too big, meaning mid*mid > x → go left\r
    too small → save and go right\r
    exact → done immediately\r
 */\r
function squareRoot(x) {\r
    if (x < 2) return x;\r
\r
    let left = 1, right = x, result = 0;\r
    while (left <= right) {\r
        let mid = Math.floor((left + right) / 2);\r
        if (mid * mid === x) return mid;\r
        if (mid * mid < x) {\r
            result = mid; // we save the last mid value whose square is less than x, so that if we exit the loop without finding a perfect square root, we can return this result which is the largest integer whose square is ≤ x.\r
			// result is set only here and not in the else below cos there are some nos. that do not have a perfect square root, so we need to save a num whose square is <= that num.\r
			/** eg. last step of dry run with x = 8, result = 2 in one of the prev. steps\r
			 * Now left > right (left = 3, right = 2), so the loop ends.\r
			 * Final result = 2, which is the largest integer whose square is ≤ 8\r
			 */\r
            left = mid + 1;  // continue searching in the right half\r
        } else {\r
            right = mid - 1; // continue searching in the left half\r
        }\r
    }\r
    return result;\r
}\r
\r
console.log(squareRoot(8)) // o/p- 2\r
console.log(squareRoot(9)) // o/p- 3\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
