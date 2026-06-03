const n=`# Numberof Islands

## Problem Statement

Given an m x n 2D grid of '1's (land) and '0's (water), return the number of islands. An island is formed by connecting adjacent land cells horizontally or vertically. All four edges of the grid are surrounded by water.

## Examples

- Input: grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]
- Output: 3

- Input: grid = [["1","1","1"],["0","1","0"],["1","1","1"]]
- Output: 1

## Approach

DFS traversal. Scan every cell in the grid. When a '1' is found, increment the island count and immediately run DFS from that cell. DFS marks all connected land cells as '0' (visited in-place). This ensures connected land cells are never counted more than once.

DFS base case: stop if the cell is out of bounds or is already '0'.

## Solution

\`\`\`js
function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                islandCount++;
                dfs(r, c);
            }
        }
    }

    function dfs(row, col) {
        if (row < 0 || row >= rows ||
            col < 0 || col >= cols ||
            grid[row][col] === '0') {
            return;
        }

        grid[row][col] = '0';

        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
    }

    return islandCount;
}
\`\`\`

## Time Complexity

**O(M x N)** where M and N are the grid dimensions. Each cell is visited at most once.

## Space Complexity

**O(M x N)** in the worst case for the recursion stack when the entire grid is one large island.

## Notes

- Marking cells as '0' in-place acts as the visited mechanism — no separate visited array needed.
- The island count is incremented before DFS, not after — the moment a new '1' is found, that is a new island; DFS just clears its footprint.
- LeetCode #200.
`;export{n as default};
