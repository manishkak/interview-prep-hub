# 01 Matrix

## Problem Statement

Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell. The distance between two adjacent cells is 1.

## Examples

- Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
- Output: [[0,0,0],[0,1,0],[1,2,1]]

- Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
- Output: [[0,0,0],[0,1,0],[0,0,0]]

## Approach

Multi-source BFS starting from all 0 cells simultaneously, rather than running BFS from each 1 cell individually.

Steps:
1. Initialize a result matrix with Infinity for 1-cells and 0 for 0-cells.
2. Push all 0-cell coordinates into the queue.
3. Process BFS: for each dequeued cell, check all four neighbors. If a neighbor's current stored distance is greater than the current cell's distance + 1, update it and enqueue the neighbor.

The condition result[newRow][newCol] > result[row][col] + 1 acts as both the visited check and the distance update guard. Since BFS processes cells in order of distance, the first time a cell is reached is always via the shortest path.

## Solution

```js
function updateMatrix(mat) {
    const rows = mat.length;
    const cols = mat[0].length;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const queue = [];
    const result = Array.from({ length: rows }, () => Array(cols).fill(Infinity));

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (mat[r][c] === 0) {
                queue.push([r, c]);
                result[r][c] = 0;
            }
        }
    }

    while (queue.length > 0) {
        const [row, col] = queue.shift();

        for (const [dRow, dCol] of directions) {
            const newRow = row + dRow;
            const newCol = col + dCol;

            if (
                newRow >= 0 && newRow < rows &&
                newCol >= 0 && newCol < cols &&
                result[newRow][newCol] > result[row][col] + 1
            ) {
                result[newRow][newCol] = result[row][col] + 1;
                queue.push([newRow, newCol]);
            }
        }
    }

    return result;
}
```

## Time Complexity

**O(N)** where N = rows x cols. Each cell is enqueued and dequeued at most once.

## Space Complexity

**O(N)** for the queue and the result matrix, both proportional to the total number of cells.

## Notes

- Multi-source BFS: all 0s are treated as simultaneous starting points at distance 0, so BFS naturally computes the shortest distance to the nearest 0 for every cell in one pass.
- LeetCode #542.
