# Rotting Oranges

## Problem Statement

Describe the problem statement for **Rotting Oranges** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * You are given an m x n grid where each cell can have one of the following three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
 * using BFS
Approach:
This problem can be solved using Breadth-First Search (BFS), where each level of BFS represents the progression of time (minutes). We start BFS from all rotten oranges simultaneously, spreading the rot to adjacent fresh oranges.
 */

// YT video to understand solution concept- https://www.youtube.com/watch?v=CxrnOTUlNJE

/**
 * Steps after understanding the logic-
 * do two for loops on the grid so that we go through each cell; if its a rotten orange then push inside a Q
 *      also save count of "num of fresh oranges"
 * Start BFS Process-
 * loop over the above Q with rotten oranges (while loop)
 *      do a for loop on queue
 *          do a for loop on directions
 *              then if the 'new row and col' are 1, change it to 2
 *              decrement "num of fresh oranges"
 *              push this 'new row and col' to a newQueue
 *      when both for loops end, set Q to newQueue
 */

function orangesRotting(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let queue = [];
    let freshCount = 0;
    let minutes = 0;

    // Step 1: Initialize the queue with all rotten oranges and count fresh oranges
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c]);
            } else if (grid[r][c] === 1) {
                freshCount++;
            }
        }
    }

    // Step 2: Early exit if there are no fresh oranges
    if (freshCount === 0) return 0;

    // Direction vectors for moving right, down, left, up respectively
    const directions = [
        [0, 1], [1, 0], [0, -1], [-1, 0]
    ];

    // Step 3: Process BFS
    while (queue.length > 0) {
        let newQueue = [];

        for (let [row, col] of queue) {
            // This loop goes through each element (which represents a rotten orange) in the queue
            for (let [dr, dc] of directions) {
                // This calculates the coordinates of an adjacent cell
                const newRow = row + dr;
                const newCol = col + dc;

                // If the new cell is within bounds and is a fresh orange
                // checks if: newRow and newCol are within the grid boundaries
                // and cell at (newRow, newCol) is a fresh orange
                if (
                    newRow >= 0 && newRow < rows &&
                    newCol >= 0 && newCol < cols &&
                    grid[newRow][newCol] === 1
                ) {
                    grid[newRow][newCol] = 2;  // Rot the orange
                    freshCount--;              // Decrease the count of fresh oranges
                    newQueue.push([newRow, newCol]); // This adds the newly rotten orange's coordinates to newQueue, so it can continue to spread rot in the next minute
                }
            }
        }

        // After each layer of BFS (representing one minute of rotting), queue is set to newQueue, which contains all newly rotten oranges, then program will continue for those newly rotten oranges
        queue = newQueue;

        // Only increase the minute count if there are new oranges to rot
        // meaning after processing each level, increment minutes only if there are more oranges to process
        if (queue.length > 0) minutes++;
    }

    // Step 4: If there are still fresh oranges left, return -1
    return freshCount === 0 ? minutes : -1;
}


/*
Time Complexity (TC):
O(m * n):
m is the number of rows and n is the number of columns in the grid.
In the worst case, we need to visit each cell once during the BFS.

Space Complexity (SC):
O(m * n):
The space used by the queue in the worst case could be proportional to the number of cells in the grid, which is m * n.

Explanation:
- Initialization: We first identify all the rotten oranges and push them into the queue, as they will be the starting points for our BFS. We also count the number of fresh oranges.

- BFS Execution: We then perform BFS, where each step represents the passage of one minute. For each rotten orange in the queue, we check its four neighboring cells. If a neighboring cell contains a fresh orange, it becomes rotten and is added to the queue.

- Termination: The BFS continues until no fresh oranges are left. The number of minutes elapsed gives us the minimum time required for all oranges to rot. If there are still fresh oranges after BFS completes, we return -1, indicating that it's impossible to rot all the oranges.


*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
