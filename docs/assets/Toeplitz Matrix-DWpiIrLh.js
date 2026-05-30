const n=`# Toeplitz Matrix

## Problem Statement

Describe the problem statement for **Toeplitz Matrix** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// a matrix where all the elements along each diagonal from top-left to bottom-right are the same\r
\r
function isToeplitzMatrix(matrix) {\r
    // Loop through each element in the matrix except the last row and last column\r
    for (let row = 0; row < matrix.length - 1; row++) {\r
        for (let col = 0; col < matrix[0].length - 1; col++) {\r
            // Check if the current element is the same as the element diagonally below and to the right\r
            if (matrix[row][col] !== matrix[row + 1][col + 1]) {\r
                return false; // If any diagonal elements differ, it's not a Toeplitz matrix\r
            }\r
        }\r
    }\r
    return true; // All diagonals matched, so it's a Toeplitz matrix\r
}\r
\r
// Example usage\r
const matrix = [\r
    [1, 2, 3, 4],\r
    [5, 1, 2, 3],\r
    [9, 5, 1, 2]\r
];\r
\r
console.log(isToeplitzMatrix(matrix)); // Output: true\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
