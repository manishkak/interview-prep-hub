# Search In A2DMatrix

## Problem Statement

Describe the problem statement for **Search In A2DMatrix** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// search in a 2D matrix
/**
 * Given an m x n matrix, where each row is sorted in ascending order, and each column is also sorted in ascending order:
- Write a function to determine if a given integer target exists in the matrix.
- Return true if the target exists, and false otherwise
 */

// This is using Binary Search

function searchMatrix(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) return false; // Handle empty matrix

    const rows = matrix.length;
    const cols = matrix[0].length;
    let left = 0;
    let right = rows * cols - 1; // Treat the matrix as a single array

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = matrix[Math.floor(mid / cols)][mid % cols]; // Convert 1D index to 2D indices

        if (midValue === target) {
            return true; // Target found
        } else if (midValue < target) {
            left = mid + 1; // Move to the right half
        } else {
            right = mid - 1; // Move to the left half
        }
    }

    return false; // Target not found
}

// Example usage
const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
];

const target1 = 3;
const target2 = 13;

console.log(searchMatrix(matrix, target1)); // Output: true
console.log(searchMatrix(matrix, target2)); // Output: false

/**
 * TC = O(log(m*n))
 * SC = O(1)
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
