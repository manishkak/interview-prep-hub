# Rotting Oranges

## Problem Statement

You are given an m x n grid where each cell can have one of three values: 0 (empty), 1 (fresh orange), or 2 (rotten orange). Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten. Return the minimum number of minutes until no fresh oranges remain, or -1 if it is impossible.

## Examples

- Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
- Output: 4

- Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
- Output: -1 (the bottom-left orange is isolated)

- Input: grid = [[0,2]]
- Output: 0 (no fresh oranges)

## Approach

Multi-source BFS. All rotten oranges spread rot simultaneously, so they are all starting points at minute 0.

Steps:
1. Initialize the queue with all rotten orange coordinates and count fresh oranges.
2. If freshCount is 0, return 0 immediately.
3. Process BFS level by level — each full level represents one minute. For each rotten orange in the current queue, check all 4 neighbors. If a neighbor is fresh, rot it (set to 2), decrement freshCount, and add to the next queue.
4. After processing each level, if newQueue is non-empty, increment minutes.
5. After BFS completes, if freshCount > 0 return -1, otherwise return minutes.

## Solution

```js
function orangesRotting(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let queue = [];
    let freshCount = 0;
    let minutes = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c]);
            } else if (grid[r][c] === 1) {
                freshCount++;
            }
        }
    }

    if (freshCount === 0) return 0;

    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    while (queue.length > 0) {
        let newQueue = [];

        for (let [row, col] of queue) {
            for (let [dr, dc] of directions) {
                const newRow = row + dr;
                const newCol = col + dc;

                if (
                    newRow >= 0 && newRow < rows &&
                    newCol >= 0 && newCol < cols &&
                    grid[newRow][newCol] === 1
                ) {
                    grid[newRow][newCol] = 2;
                    freshCount--;
                    newQueue.push([newRow, newCol]);
                }
            }
        }

        queue = newQueue;
        if (queue.length > 0) minutes++;
    }

    return freshCount === 0 ? minutes : -1;
}
```

## Time Complexity

**O(M x N)** where M and N are the grid dimensions. Every cell is visited at most once during BFS.

## Space Complexity

**O(M x N)** for the queue, which in the worst case holds all cells.

## Notes

- Multi-source BFS is the right approach whenever multiple sources spread simultaneously — all rotten oranges corrupt their neighbors at the same time each minute.
- Incrementing minutes only when newQueue is non-empty prevents counting an extra minute after the last round of rotting.
- The final freshCount check handles isolated fresh oranges that BFS can never reach.
- LeetCode #994.
