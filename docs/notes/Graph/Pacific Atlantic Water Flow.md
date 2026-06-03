# Pacific Atlantic Water Flow

## Problem Statement

Given an m x n matrix of non-negative integers heights representing the height of each cell, find all cells from which water can flow to both the Pacific Ocean and the Atlantic Ocean. Water flows from a cell to an adjacent cell (4-directionally) only if the adjacent cell's height is less than or equal to the current cell's height. The Pacific Ocean touches the top and left borders; the Atlantic Ocean touches the bottom and right borders.

## Examples

- Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
- Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

- Input: heights = [[1]]
- Output: [[0,0]]

## Approach

Reverse DFS from ocean borders instead of forward-simulating water flow from every cell.

Key insight: instead of asking "can water flow from cell X to an ocean?", ask "can the ocean expand to reach cell X?". In reverse, a cell is reachable from an ocean border if its height is >= the border cell's height (since water flows down, the reverse is up).

Steps:
1. Run DFS from all Pacific border cells (top row and left column), marking every reachable cell in pacificReachable.
2. Run DFS from all Atlantic border cells (bottom row and right column), marking every reachable cell in atlanticReachable.
3. Collect all cells where both arrays are true.

In DFS, move to a neighbor only if it is not yet marked and its height >= the current cell's height.

## Solution

```js
var pacificAtlantic = function (heights) {
    const rows = heights.length;
    const cols = heights[0].length;
    const pacificReachable = Array.from({ length: rows }, () => Array(cols).fill(false));
    const atlanticReachable = Array.from({ length: rows }, () => Array(cols).fill(false));
    const result = [];

    function dfs(r, c, reachable) {
        reachable[r][c] = true;
        const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
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

    for (let r = 0; r < rows; r++) {
        dfs(r, 0, pacificReachable);
        dfs(r, cols - 1, atlanticReachable);
    }
    for (let c = 0; c < cols; c++) {
        dfs(0, c, pacificReachable);
        dfs(rows - 1, c, atlanticReachable);
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (pacificReachable[r][c] && atlanticReachable[r][c]) {
                result.push([r, c]);
            }
        }
    }
    return result;
};
```

## Time Complexity

**O(M x N)** where M and N are the grid dimensions. Each cell is visited at most twice — once per ocean's DFS pass.

## Space Complexity

**O(M x N)** for the two reachable matrices and the recursion stack.

## Notes

- The reversal trick — starting BFS/DFS from the ocean borders and moving uphill — is the core insight. It converts a hard many-to-many problem into two simple multi-source traversals.
- The condition heights[newRow][newCol] >= heights[r][c] is the reverse of "water flows downhill."
- LeetCode #417.
