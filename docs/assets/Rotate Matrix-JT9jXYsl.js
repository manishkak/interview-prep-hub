const n=`# Rotate Matrix

## Problem Statement

Describe the problem statement for **Rotate Matrix** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// Rotating a matrix typically involves turning it 90 degrees clockwise or counterclockwise\r
// First transpose the matrix, then reverse each row\r
\r
function rotateMatrix(matrix) {\r
    const n = matrix.length;\r
\r
    // Step 1: Transpose the matrix\r
    for (let i = 0; i < n; i++) {\r
        for (let j = i + 1; j < n; j++) {\r
            // Swap elements to transpose\r
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];\r
        }\r
    }\r
\r
    // Step 2: Reverse each row\r
    for (let i = 0; i < n; i++) {\r
        matrix[i].reverse();\r
    }\r
\r
    return matrix;\r
}\r
\r
// Example usage\r
const matrix = [\r
    [1, 2, 3],\r
    [4, 5, 6],\r
    [7, 8, 9]\r
];\r
\r
const rotatedMatrix = rotateMatrix(matrix);\r
console.log(rotatedMatrix);\r
/*\r
Output:\r
[\r
    [7, 4, 1],\r
    [8, 5, 2],\r
    [9, 6, 3]\r
]\r
*/\r
\r
/**\r
 * tc = O(n^2)\r
 * sc = O(1)\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
