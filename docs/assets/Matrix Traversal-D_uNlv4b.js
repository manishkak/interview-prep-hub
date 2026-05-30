const t=`# Matrix Traversal

## Problem Statement

Describe the problem statement for **Matrix Traversal** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// print the other diagonal- right-top to left-bottom\r
for (let row = 0; row < matrix.length; row++) {\r
	// for (let col = 0; col < matrix[0].length -1; col++) {\r
		// print diagonal\r
		// if(row == col) {\r
			console.log(matrix[row][matrix.length-row])\r
			// 00,11,22\r
			// 02, 11, 20\r
		// }\r
	// }\r
}\r
\r
// print the main diagonal\r
for (let row = 0; row < matrix.length; row++) {\r
	for (let col = 0; col < matrix[0].length -1; col++) {\r
		// print diagonal\r
		if(row == col) {\r
			console.log(matrix[row][col])\r
		}\r
	}\r
}\r
\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{t as default};
