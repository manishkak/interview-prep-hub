# Rotate Matrix

## Problem Statement

Describe the problem statement for **Rotate Matrix** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// Rotating a matrix typically involves turning it 90 degrees clockwise or counterclockwise
// First transpose the matrix, then reverse each row

function rotateMatrix(matrix) {
    const n = matrix.length;

    // Step 1: Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // Swap elements to transpose
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Step 2: Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }

    return matrix;
}

// Example usage
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const rotatedMatrix = rotateMatrix(matrix);
console.log(rotatedMatrix);
/*
Output:
[
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
]
*/

/**
 * tc = O(n^2)
 * sc = O(1)
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
