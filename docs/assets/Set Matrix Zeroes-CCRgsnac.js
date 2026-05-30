const r=`# Set Matrix Zeroes

## Problem Statement

Describe the problem statement for **Set Matrix Zeroes** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// Set Matrix Zeroes\r
// Given an m x n matrix, if an element is 0, set its entire row and column to 0. Do this in place.\r
\r
/*\r
Here’s the step-by-step approach:\r
Identify Rows and Columns to Set to Zero:\r
	- Use the first row and the first column to mark rows and columns that should be zeroed.\r
	- Additionally, use two boolean flags to track if the first row and the first column should be zeroed at the end.\r
Traverse the Matrix:\r
	- If a cell has a zero, mark its row and column in the first row and column.\r
Set Matrix Elements to Zero Using Markers:\r
	- Use the markers in the first row and column to zero out the appropriate rows and columns.\r
Handle the First Row and First Column Separately:\r
	- Zero out the first row and first column if the boolean flags indicate they should be set to zero.\r
*/\r
// YT video for logic- https://www.youtube.com/watch?v=T41rL0L3Pnw\r
/**\r
 * After understanding the logic-\r
 * Start two loops on the matrix and "check if cell is 0", then set first row, first col to 0\r
 * 		matrix[i][0] = 0;	matrix[0][j] = 0;\r
 * 		Mark if the first row and first column should be zeroed- set two flags to zero (these flags set to 0 mean that the entire )\r
 * 		using these flags later we'll set the first row and/or first column to all 0s\r
 * Start two loops again but "starting from 1" (cos we've used the first row and column to 'mark' 0 values)\r
 * 		if first row/col (matrix[i][0] or matrix[0][j]) are 0 (set from the prev steps)\r
 * 			set that cell to 0 (obviously)\r
 * now check if the row flag is set to zero from the first step\r
 * 		run a col loop and set all first row vals to 0 -> matrix[0][j] = 0;\r
 * now check if the col flag is set to zero from the first step\r
 * 		run a row loop and set all first col vals to 0 -> matrix[i][0] = 0;\r
 */\r
\r
function setZeroes(matrix) {\r
    const rows = matrix.length;\r
    const cols = matrix[0].length;\r
\r
    let firstRowZero = false;\r
    let firstColZero = false;\r
\r
    // Step 1: Determine which rows and columns need to be zeroed\r
    for (let i = 0; i < rows; i++) {\r
        for (let j = 0; j < cols; j++) {\r
            if (matrix[i][j] === 0) {\r
                // Mark the row and column by setting first element to 0\r
                matrix[i][0] = 0;\r
                matrix[0][j] = 0;\r
\r
                // Mark if the first row and first column should be zeroed\r
                if (i === 0) firstRowZero = true;\r
                if (j === 0) firstColZero = true;\r
            }\r
        }\r
    }\r
\r
    // Step 2: Use the markers to set rows and columns to zero\r
    for (let i = 1; i < rows; i++) {\r
        for (let j = 1; j < cols; j++) {\r
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {\r
                matrix[i][j] = 0;\r
            }\r
        }\r
    }\r
\r
    // Step 3: Set the first row to zero if needed\r
    if (firstRowZero) {\r
        for (let j = 0; j < cols; j++) {\r
            matrix[0][j] = 0;\r
        }\r
    }\r
\r
    // Step 4: Set the first column to zero if needed\r
    if (firstColZero) {\r
        for (let i = 0; i < rows; i++) {\r
            matrix[i][0] = 0;\r
        }\r
    }\r
\r
    return matrix;\r
}\r
\r
// Example usage\r
const matrix = [\r
    [1, 1, 1],\r
    [1, 0, 1],\r
    [1, 1, 1]\r
];\r
\r
console.log(setZeroes(matrix));\r
/*\r
Output:\r
[\r
    [1, 0, 1],\r
    [0, 0, 0],\r
    [1, 0, 1]\r
]\r
*/\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{r as default};
