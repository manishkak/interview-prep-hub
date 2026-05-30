# Set Matrix Zeroes

## Problem Statement

Describe the problem statement for **Set Matrix Zeroes** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// Set Matrix Zeroes
// Given an m x n matrix, if an element is 0, set its entire row and column to 0. Do this in place.

/*
Here’s the step-by-step approach:
Identify Rows and Columns to Set to Zero:
	- Use the first row and the first column to mark rows and columns that should be zeroed.
	- Additionally, use two boolean flags to track if the first row and the first column should be zeroed at the end.
Traverse the Matrix:
	- If a cell has a zero, mark its row and column in the first row and column.
Set Matrix Elements to Zero Using Markers:
	- Use the markers in the first row and column to zero out the appropriate rows and columns.
Handle the First Row and First Column Separately:
	- Zero out the first row and first column if the boolean flags indicate they should be set to zero.
*/
// YT video for logic- https://www.youtube.com/watch?v=T41rL0L3Pnw
/**
 * After understanding the logic-
 * Start two loops on the matrix and "check if cell is 0", then set first row, first col to 0
 * 		matrix[i][0] = 0;	matrix[0][j] = 0;
 * 		Mark if the first row and first column should be zeroed- set two flags to zero (these flags set to 0 mean that the entire )
 * 		using these flags later we'll set the first row and/or first column to all 0s
 * Start two loops again but "starting from 1" (cos we've used the first row and column to 'mark' 0 values)
 * 		if first row/col (matrix[i][0] or matrix[0][j]) are 0 (set from the prev steps)
 * 			set that cell to 0 (obviously)
 * now check if the row flag is set to zero from the first step
 * 		run a col loop and set all first row vals to 0 -> matrix[0][j] = 0;
 * now check if the col flag is set to zero from the first step
 * 		run a row loop and set all first col vals to 0 -> matrix[i][0] = 0;
 */

function setZeroes(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    let firstRowZero = false;
    let firstColZero = false;

    // Step 1: Determine which rows and columns need to be zeroed
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                // Mark the row and column by setting first element to 0
                matrix[i][0] = 0;
                matrix[0][j] = 0;

                // Mark if the first row and first column should be zeroed
                if (i === 0) firstRowZero = true;
                if (j === 0) firstColZero = true;
            }
        }
    }

    // Step 2: Use the markers to set rows and columns to zero
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Step 3: Set the first row to zero if needed
    if (firstRowZero) {
        for (let j = 0; j < cols; j++) {
            matrix[0][j] = 0;
        }
    }

    // Step 4: Set the first column to zero if needed
    if (firstColZero) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }

    return matrix;
}

// Example usage
const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];

console.log(setZeroes(matrix));
/*
Output:
[
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1]
]
*/

```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
