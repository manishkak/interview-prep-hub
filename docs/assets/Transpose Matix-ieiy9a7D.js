const n=`# Transpose Matix

## Problem Statement

Describe the problem statement for **Transpose Matix** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
function transposeMatrix(matrix) {\r
    if (matrix.length === 0 || matrix[0].length === 0) return []; // Handle empty matrix case\r
\r
    const rows = matrix.length;\r
    const cols = matrix[0].length;\r
    const transposed = Array.from({ length: cols }, () => Array(rows).fill(0)); // Create an empty transposed matrix\r
\r
    for (let i = 0; i < rows; i++) {\r
        for (let j = 0; j < cols; j++) {\r
            transposed[j][i] = matrix[i][j]; // Swap row and column indices\r
        }\r
    }\r
\r
    return transposed;\r
}\r
\r
// Example usage\r
const matrix = [\r
    [1, 2, 3],\r
    [4, 5, 6],\r
    [7, 8, 9]\r
];\r
\r
const transposedMatrix = transposeMatrix(matrix);\r
console.log(transposedMatrix);\r
/*\r
Output:\r
[\r
    [1, 4, 7],\r
    [2, 5, 8],\r
    [3, 6, 9]\r
]\r
*/\r
\r
/**\r
 * tc = O(m*n)\r
 * sc = O(m*n) for the new transposed matrix that is created\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
