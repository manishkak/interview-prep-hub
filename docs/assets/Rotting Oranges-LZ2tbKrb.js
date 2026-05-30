const e=`# Rotting Oranges

## Problem Statement

Describe the problem statement for **Rotting Oranges** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * You are given an m x n grid where each cell can have one of the following three values:\r
\r
0 representing an empty cell,\r
1 representing a fresh orange, or\r
2 representing a rotten orange.\r
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.\r
\r
Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.\r
 * using BFS\r
Approach:\r
This problem can be solved using Breadth-First Search (BFS), where each level of BFS represents the progression of time (minutes). We start BFS from all rotten oranges simultaneously, spreading the rot to adjacent fresh oranges.\r
 */\r
\r
// YT video to understand solution concept- https://www.youtube.com/watch?v=CxrnOTUlNJE\r
\r
/**\r
 * Steps after understanding the logic-\r
 * do two for loops on the grid so that we go through each cell; if its a rotten orange then push inside a Q\r
 *      also save count of "num of fresh oranges"\r
 * Start BFS Process-\r
 * loop over the above Q with rotten oranges (while loop)\r
 *      do a for loop on queue\r
 *          do a for loop on directions\r
 *              then if the 'new row and col' are 1, change it to 2\r
 *              decrement "num of fresh oranges"\r
 *              push this 'new row and col' to a newQueue\r
 *      when both for loops end, set Q to newQueue\r
 */\r
\r
function orangesRotting(grid) {\r
    const rows = grid.length;\r
    const cols = grid[0].length;\r
    let queue = [];\r
    let freshCount = 0;\r
    let minutes = 0;\r
\r
    // Step 1: Initialize the queue with all rotten oranges and count fresh oranges\r
    for (let r = 0; r < rows; r++) {\r
        for (let c = 0; c < cols; c++) {\r
            if (grid[r][c] === 2) {\r
                queue.push([r, c]);\r
            } else if (grid[r][c] === 1) {\r
                freshCount++;\r
            }\r
        }\r
    }\r
\r
    // Step 2: Early exit if there are no fresh oranges\r
    if (freshCount === 0) return 0;\r
\r
    // Direction vectors for moving right, down, left, up respectively\r
    const directions = [\r
        [0, 1], [1, 0], [0, -1], [-1, 0]\r
    ];\r
\r
    // Step 3: Process BFS\r
    while (queue.length > 0) {\r
        let newQueue = [];\r
\r
        for (let [row, col] of queue) {\r
            // This loop goes through each element (which represents a rotten orange) in the queue\r
            for (let [dr, dc] of directions) {\r
                // This calculates the coordinates of an adjacent cell\r
                const newRow = row + dr;\r
                const newCol = col + dc;\r
\r
                // If the new cell is within bounds and is a fresh orange\r
                // checks if: newRow and newCol are within the grid boundaries\r
                // and cell at (newRow, newCol) is a fresh orange\r
                if (\r
                    newRow >= 0 && newRow < rows &&\r
                    newCol >= 0 && newCol < cols &&\r
                    grid[newRow][newCol] === 1\r
                ) {\r
                    grid[newRow][newCol] = 2;  // Rot the orange\r
                    freshCount--;              // Decrease the count of fresh oranges\r
                    newQueue.push([newRow, newCol]); // This adds the newly rotten orange's coordinates to newQueue, so it can continue to spread rot in the next minute\r
                }\r
            }\r
        }\r
\r
        // After each layer of BFS (representing one minute of rotting), queue is set to newQueue, which contains all newly rotten oranges, then program will continue for those newly rotten oranges\r
        queue = newQueue;\r
\r
        // Only increase the minute count if there are new oranges to rot\r
        // meaning after processing each level, increment minutes only if there are more oranges to process\r
        if (queue.length > 0) minutes++;\r
    }\r
\r
    // Step 4: If there are still fresh oranges left, return -1\r
    return freshCount === 0 ? minutes : -1;\r
}\r
\r
\r
/*\r
Time Complexity (TC):\r
O(m * n):\r
m is the number of rows and n is the number of columns in the grid.\r
In the worst case, we need to visit each cell once during the BFS.\r
\r
Space Complexity (SC):\r
O(m * n):\r
The space used by the queue in the worst case could be proportional to the number of cells in the grid, which is m * n.\r
\r
Explanation:\r
- Initialization: We first identify all the rotten oranges and push them into the queue, as they will be the starting points for our BFS. We also count the number of fresh oranges.\r
\r
- BFS Execution: We then perform BFS, where each step represents the passage of one minute. For each rotten orange in the queue, we check its four neighboring cells. If a neighboring cell contains a fresh orange, it becomes rotten and is added to the queue.\r
\r
- Termination: The BFS continues until no fresh oranges are left. The number of minutes elapsed gives us the minimum time required for all oranges to rot. If there are still fresh oranges after BFS completes, we return -1, indicating that it's impossible to rot all the oranges.\r
\r
\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
