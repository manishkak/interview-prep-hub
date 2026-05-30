const n=`# Numberof Islands

## Problem Statement

Describe the problem statement for **Numberof Islands** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// Dry Run at the end.\r
\r
/**\r
 * Problem Statement: Given a 2D grid (matrix) consisting of '1's (land) and '0's (water), you need to determine the number of islands. An island is formed by connecting adjacent lands horizontally or vertically. You can assume that all four edges of the grid are surrounded by water.\r
 */\r
\r
/*\r
To solve this problem, we can use either Depth-First Search (DFS) or Breadth-First Search (BFS). The idea is to iterate through each cell in the grid, and when we encounter a '1', it indicates the start of a new island. We then perform a DFS or BFS to mark all the connected '1's as visited (by changing them to '0' or any other marker) to avoid counting the same island multiple times.\r
\r
DFS Approach\r
Steps:\r
- Iterate through each cell in the grid.\r
- When a '1' is found, increment the island count and perform a DFS to mark all connected land ('1's) as visited.\r
- Continue until all cells have been processed.\r
*/\r
\r
/**\r
 * Steps after understanding the logic-\r
 * so what needs to be done here is that when we encounter a 1, count that as one island and all four adjacent values (up, down, left, right) will be set to 0. Then move to the next 1 that we find and repeat the process.\r
 * Start DFS Process-\r
 * check if grid, else return 0\r
 * Start two For loops, one for rows (grid.len) and one for columns (grid[0].len)\r
 *      if 1 i.e. land is found, increment islandCount and call dfs on that row and col; ret islandCount\r
 * Inside dfs-\r
 *      if we're out of bounds or at a water cell i.e. grid[row][col] == 0, return\r
 *      mark current cell as 0 i.e. grid[row][col] = '0';\r
 *      Explore all four directions\r
 */\r
\r
function numIslands(grid) {\r
    // if not grid or grid length is 0 then return\r
    if (!grid || grid.length === 0) return 0;\r
\r
    const rows = grid.length;\r
    const cols = grid[0].length;\r
    let islandCount = 0;\r
\r
    for (let r = 0; r < rows; r++) {\r
        for (let c = 0; c < cols; c++) {\r
            // starts at (0,0), it's 1 so we increment islandCount to 1 and call dfs(0,0)\r
            if (grid[r][c] === '1') {\r
                islandCount++;\r
                dfs(r, c); // Perform dfs(0,0) to mark all connected lands as visited\r
            }\r
        }\r
    }\r
\r
    function dfs(row, col) {\r
        // Base case: check if we're out of bounds or at a water cell(i.e. '0')\r
        if (row < 0 || row >= rows ||\r
            col < 0 || col >= cols ||\r
            grid[row][col] === '0') {\r
            return;\r
        }\r
\r
        // Mark the current cell as visited by setting it to '0', meaning (0,0) becomes '0'\r
        grid[row][col] = '0';\r
\r
        // Explore all four directions (order doesn't matter)\r
        dfs(row + 1, col); // down, (1,0) // this cell is '1', so mark it as '0' and continue dfs\r
        dfs(row - 1, col); // up, (-1,0)  // out of bounds, return\r
        dfs(row, col + 1); // right, (0,1) // this cell is '1', so mark it as '0' and continue dfs\r
        dfs(row, col - 1); // left, (0,-1) // out of bounds, return\r
        // after all the 0 cells are returned, the next 1 cell will be (2,2) and islandCount will be incremented to 2 and dfs(2,2) will be called\r
    }\r
\r
    return islandCount;\r
}\r
\r
// Example usage:\r
const grid = [\r
  ['1', '1', '0', '0', '0'],\r
  ['1', '1', '0', '0', '0'],\r
  ['0', '0', '1', '0', '0'],\r
  ['0', '0', '0', '1', '1']\r
];\r
console.log(numIslands(grid)); // Output: 3\r
\r
/**\r
 * DFS:\r
 * Time Complexity:\r
 this problem, we perform a depth-first search (DFS) or breadth-first search (BFS) starting from each unvisited land cell 1, We visit each cell only once, marking it as visited by setting it to 0. Therefore, the time complexity is O(M*N) where each cell is checked once.\r
 * The space complexity is also O(M*N) due to the recursion stack or queue used for DFS/BFS in the worst-case scenario when the entire grid is one large island.\r
 */\r
\r
//  Dry Run:\r
/*\r
Perfect example. I’ll do a **tight DFS-style dry run**, no code.\r
\r
---\r
\r
## Problem reminder (mental model)\r
\r
* \`'1'\` = land\r
* \`'0'\` = water\r
* **Island = connected 1s** (up, down, left, right)\r
* Goal: **count islands**\r
\r
---\r
\r
## Grid with coordinates\r
\r
\`\`\`\r
(0,0) 1   (0,1) 1   0   0   0\r
(1,0) 1   (1,1) 1   0   0   0\r
  0     0     (2,2) 1   0   0\r
  0     0       0   (3,3) 1 (3,4) 1\r
\`\`\`\r
\r
---\r
\r
## Dry Run (scan row by row)\r
\r
### 1️⃣ Start at (0,0)\r
\r
* \`'1'\` and **not visited** → **Island count = 1**\r
* DFS marks all connected land:\r
\r
  * (0,0) → (0,1)\r
  * (0,0) → (1,0)\r
  * (1,0) → (1,1)\r
* All these become **visited**\r
\r
✅ First island = top-left block\r
\r
---\r
\r
### 2️⃣ Continue scanning\r
\r
* (0,1), (1,0), (1,1) → already visited → skip\r
* All nearby zeros → skip\r
\r
---\r
\r
### 3️⃣ Reach (2,2)\r
\r
* \`'1'\` and not visited → **Island count = 2**\r
* DFS:\r
\r
  * No adjacent land\r
* Single-cell island\r
\r
---\r
\r
### 4️⃣ Reach (3,3)\r
\r
* \`'1'\` and not visited → **Island count = 3**\r
* DFS:\r
\r
  * (3,3) → (3,4)\r
\r
✅ Third island = bottom-right pair\r
\r
---\r
\r
## Final Answer\r
\r
**Total islands = 3**\r
\r
---\r
\r
## Why this always works\r
\r
* You **count only when you find a new unvisited '1'**\r
* DFS/BFS ensures you don’t double-count connected land\r
\r
---\r
\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
