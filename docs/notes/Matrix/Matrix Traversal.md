# Matrix Traversal

## Problem Statement

Describe the problem statement for **Matrix Traversal** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// print the other diagonal- right-top to left-bottom
for (let row = 0; row < matrix.length; row++) {
	// for (let col = 0; col < matrix[0].length -1; col++) {
		// print diagonal
		// if(row == col) {
			console.log(matrix[row][matrix.length-row])
			// 00,11,22
			// 02, 11, 20
		// }
	// }
}

// print the main diagonal
for (let row = 0; row < matrix.length; row++) {
	for (let col = 0; col < matrix[0].length -1; col++) {
		// print diagonal
		if(row == col) {
			console.log(matrix[row][col])
		}
	}
}


```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
