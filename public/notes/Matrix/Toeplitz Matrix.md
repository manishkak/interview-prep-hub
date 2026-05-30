# Toeplitz Matrix

## Problem Statement

Describe the problem statement for **Toeplitz Matrix** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// a matrix where all the elements along each diagonal from top-left to bottom-right are the same

function isToeplitzMatrix(matrix) {
    // Loop through each element in the matrix except the last row and last column
    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix[0].length - 1; col++) {
            // Check if the current element is the same as the element diagonally below and to the right
            if (matrix[row][col] !== matrix[row + 1][col + 1]) {
                return false; // If any diagonal elements differ, it's not a Toeplitz matrix
            }
        }
    }
    return true; // All diagonals matched, so it's a Toeplitz matrix
}

// Example usage
const matrix = [
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2]
];

console.log(isToeplitzMatrix(matrix)); // Output: true

```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
