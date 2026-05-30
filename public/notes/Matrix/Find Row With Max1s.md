# Find Row With Max1s

## Problem Statement

Describe the problem statement for **Find Row With Max1s** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
function rowWithMax1s(matrix) {
    if (matrix.length === 0) return -1; // Handle empty matrix case

    let maxRowIndex = -1; // To store the index of the row with maximum 1s
    let maxCount = 0; // To store the count of maximum 1s

    for (let i = 0; i < matrix.length; i++) {
        let count = 0; // Count of 1s in the current row- this poisiton is important
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1) {
                count++;
            }
        }
        // Update if current row has more 1s
        if (count > maxCount) {
            maxCount = count;
            maxRowIndex = i;
        }
    }

    return maxRowIndex; // Return the index of the row with maximum 1s
}

// Example usage
const matrix = [
    [0, 0, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [1, 1, 0, 1]
];

console.log(rowWithMax1s(matrix)); // Output: 1 (the second row has the maximum number of 1s)

/**
 * TC = O(m*n)
 * SC = O(1)
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
