# Pacific Atlantic Water Flow

## Problem Statement

Describe the problem statement for **Pacific Atlantic Water Flow** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// Pacific Atlantic Water Flow
// Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.
// Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.
// Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.
var pacificAtlantic = function (heights) {
    const rows = heights.length;
    const cols = heights[0].length;
    const pacificReachable = Array.from({ length: rows }, () => Array(cols).fill(false));
    const atlanticReachable = Array.from({ length: rows }, () => Array(cols).fill(false));
    const result = []; // To store coordinates that can reach both oceans

    // DFS function to mark reachable cells
    function dfs(r, c, reachable) {
        reachable[r][c] = true;
        const directions = [
            [0, 1], [1, 0], [0, -1], [-1, 0]
        ];
        for (let [dr, dc] of directions) {
            const newRow = r + dr;
            const newCol = c + dc;
            if (
                newRow >= 0 && newRow < rows &&
                newCol >= 0 && newCol < cols &&
                !reachable[newRow][newCol] &&
                heights[newRow][newCol] >= heights[r][c]
            ) {
                dfs(newRow, newCol, reachable);
            }
        }
    }
    // Start DFS from Pacific Ocean borders
    for (let r = 0; r < rows; r++) {
        dfs(r, 0, pacificReachable); // Left border
        dfs(r, cols - 1, atlanticReachable); // Right border
    }
    for (let c = 0; c < cols; c++) {
        dfs(0, c, pacificReachable); // Top border
        dfs(rows - 1, c, atlanticReachable); // Bottom border
    }
    // Collect cells that can reach both oceans
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (pacificReachable[r][c] && atlanticReachable[r][c]) {
                result.push([r, c]);
            }
        }
    }
    return result;
};
// Example usage:
const heights = [
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4]
];
console.log(pacificAtlantic(heights)); // Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

/*
Time Complexity (TC):
O(m * n):
- We perform DFS from each cell on the borders of the matrix. The number of border cells is proportional to m + n.
- Each DFS traversal can visit each cell at most once, leading to a total time complexity of O(m * n) for both oceans combined.
Space Complexity (SC):
O(m * n):
- We use two additional m x n matrices to keep track of cells reachable from the Pacific and Atlantic oceans, leading to a space complexity of O(m * n).
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
