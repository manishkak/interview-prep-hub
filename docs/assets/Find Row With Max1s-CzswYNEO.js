const n=`# Find Row With Max1s

## Problem Statement

Describe the problem statement for **Find Row With Max1s** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
function rowWithMax1s(matrix) {\r
    if (matrix.length === 0) return -1; // Handle empty matrix case\r
\r
    let maxRowIndex = -1; // To store the index of the row with maximum 1s\r
    let maxCount = 0; // To store the count of maximum 1s\r
\r
    for (let i = 0; i < matrix.length; i++) {\r
        let count = 0; // Count of 1s in the current row- this poisiton is important\r
        for (let j = 0; j < matrix[i].length; j++) {\r
            if (matrix[i][j] === 1) {\r
                count++;\r
            }\r
        }\r
        // Update if current row has more 1s\r
        if (count > maxCount) {\r
            maxCount = count;\r
            maxRowIndex = i;\r
        }\r
    }\r
\r
    return maxRowIndex; // Return the index of the row with maximum 1s\r
}\r
\r
// Example usage\r
const matrix = [\r
    [0, 0, 1, 1],\r
    [1, 1, 1, 1],\r
    [0, 0, 0, 0],\r
    [1, 1, 0, 1]\r
];\r
\r
console.log(rowWithMax1s(matrix)); // Output: 1 (the second row has the maximum number of 1s)\r
\r
/**\r
 * TC = O(m*n)\r
 * SC = O(1)\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
