# Square Root Of ANum

## Problem Statement

Describe the problem statement for **Square Root Of ANum** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Square Root of a number using binary search method
 * Uses a binary search to find the square root by repeatedly narrowing the range [low, high] until the difference between high and low is within a specified precision.
 * This method ensures that the result is accurate to the specified precision.
 * just learn it somehow man
 */
/*
Time Complexity:
	O(log x): The binary search halves the search range in each step.
Space Complexity:
	O(1): The algorithm uses only a constant amount of extra space
*/
/**
 * Mental flow:
    too big, meaning mid*mid > x → go left
    too small → save and go right
    exact → done immediately
 */
function squareRoot(x) {
    if (x < 2) return x;

    let left = 1, right = x, result = 0;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid === x) return mid;
        if (mid * mid < x) {
            result = mid; // we save the last mid value whose square is less than x, so that if we exit the loop without finding a perfect square root, we can return this result which is the largest integer whose square is ≤ x.
			// result is set only here and not in the else below cos there are some nos. that do not have a perfect square root, so we need to save a num whose square is <= that num.
			/** eg. last step of dry run with x = 8, result = 2 in one of the prev. steps
			 * Now left > right (left = 3, right = 2), so the loop ends.
			 * Final result = 2, which is the largest integer whose square is ≤ 8
			 */
            left = mid + 1;  // continue searching in the right half
        } else {
            right = mid - 1; // continue searching in the left half
        }
    }
    return result;
}

console.log(squareRoot(8)) // o/p- 2
console.log(squareRoot(9)) // o/p- 3

```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
