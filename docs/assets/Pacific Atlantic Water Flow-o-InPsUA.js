const n=`# Pacific Atlantic Water Flow

## Problem Statement

Describe the problem statement for **Pacific Atlantic Water Flow** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// Pacific Atlantic Water Flow\r
// Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.\r
// Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.\r
// Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.\r
var pacificAtlantic = function (heights) {\r
    const rows = heights.length;\r
    const cols = heights[0].length;\r
    const pacificReachable = Array.from({ length: rows }, () => Array(cols).fill(false));\r
    const atlanticReachable = Array.from({ length: rows }, () => Array(cols).fill(false));\r
    const result = []; // To store coordinates that can reach both oceans\r
\r
    // DFS function to mark reachable cells\r
    function dfs(r, c, reachable) {\r
        reachable[r][c] = true;\r
        const directions = [\r
            [0, 1], [1, 0], [0, -1], [-1, 0]\r
        ];\r
        for (let [dr, dc] of directions) {\r
            const newRow = r + dr;\r
            const newCol = c + dc;\r
            if (\r
                newRow >= 0 && newRow < rows &&\r
                newCol >= 0 && newCol < cols &&\r
                !reachable[newRow][newCol] &&\r
                heights[newRow][newCol] >= heights[r][c]\r
            ) {\r
                dfs(newRow, newCol, reachable);\r
            }\r
        }\r
    }\r
    // Start DFS from Pacific Ocean borders\r
    for (let r = 0; r < rows; r++) {\r
        dfs(r, 0, pacificReachable); // Left border\r
        dfs(r, cols - 1, atlanticReachable); // Right border\r
    }\r
    for (let c = 0; c < cols; c++) {\r
        dfs(0, c, pacificReachable); // Top border\r
        dfs(rows - 1, c, atlanticReachable); // Bottom border\r
    }\r
    // Collect cells that can reach both oceans\r
    for (let r = 0; r < rows; r++) {\r
        for (let c = 0; c < cols; c++) {\r
            if (pacificReachable[r][c] && atlanticReachable[r][c]) {\r
                result.push([r, c]);\r
            }\r
        }\r
    }\r
    return result;\r
};\r
// Example usage:\r
const heights = [\r
    [1, 2, 2, 3, 5],\r
    [3, 2, 3, 4, 4],\r
    [2, 4, 5, 3, 1],\r
    [6, 7, 1, 4, 5],\r
    [5, 1, 1, 2, 4]\r
];\r
console.log(pacificAtlantic(heights)); // Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]\r
\r
/*\r
Time Complexity (TC):\r
O(m * n):\r
- We perform DFS from each cell on the borders of the matrix. The number of border cells is proportional to m + n.\r
- Each DFS traversal can visit each cell at most once, leading to a total time complexity of O(m * n) for both oceans combined.\r
Space Complexity (SC):\r
O(m * n):\r
- We use two additional m x n matrices to keep track of cells reachable from the Pacific and Atlantic oceans, leading to a space complexity of O(m * n).\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
