# Transpose Matix

## Problem Statement

Describe the problem statement for **Transpose Matix** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
function transposeMatrix(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return []; // Handle empty matrix case

    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposed = Array.from({ length: cols }, () => Array(rows).fill(0)); // Create an empty transposed matrix

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            transposed[j][i] = matrix[i][j]; // Swap row and column indices
        }
    }

    return transposed;
}

// Example usage
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const transposedMatrix = transposeMatrix(matrix);
console.log(transposedMatrix);
/*
Output:
[
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
]
*/

/**
 * tc = O(m*n)
 * sc = O(m*n) for the new transposed matrix that is created
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
