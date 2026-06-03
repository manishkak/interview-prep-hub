# Shortest Pathto Get Food

## Problem Statement

Given a grid where each cell is one of: 'O' (open space), 'X' (obstacle), '*' (starting position), or '#' (food), find the shortest path from the person's starting position '*' to any food '#'. You can move up, down, left, or right but cannot move through obstacles. Return the length of the shortest path, or -1 if no food is reachable.

## Examples

- Input:
  [["X","X","X","X"],
   ["X","O","O","X"],
   ["X","O","*","X"],
   ["X","O","O","X"],
   ["X","#","#","X"]]
- Output: 3
  (From (2,2) → (3,2) → (4,2), 3 steps)

## Approach

BFS from the '*' starting cell. BFS guarantees the shortest path in an unweighted grid because it explores cells in order of increasing distance.

Steps:
1. Scan the grid to find the '*' starting position. Push it into the queue with distance 0, mark as visited.
2. Process BFS: dequeue a cell with its distance. If the cell is '#', return the distance immediately.
3. For each valid non-obstacle, unvisited neighbor, mark visited and enqueue with distance + 1.
4. If the queue empties without finding food, return -1.

The distance is stored in the queue tuple as [row, col, dist] to avoid maintaining a separate distance matrix.

## Solution

```js
function shortestPathToGetFood(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const directions = [[0,1],[1,0],[0,-1],[-1,0]];

    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const queue = [];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '*') {
                queue.push([r, c, 0]);
                visited[r][c] = true;
                break;
            }
        }
    }

    while (queue.length > 0) {
        const [row, col, dist] = queue.shift();

        if (grid[row][col] === '#') return dist;

        for (const [dr, dc] of directions) {
            const nr = row + dr;
            const nc = col + dc;

            if (
                nr >= 0 && nr < rows &&
                nc >= 0 && nc < cols &&
                grid[nr][nc] !== 'X' &&
                !visited[nr][nc]
            ) {
                visited[nr][nc] = true;
                queue.push([nr, nc, dist + 1]);
            }
        }
    }

    return -1;
}
```

## Time Complexity

**O(M x N)** where M and N are the grid dimensions. Every cell is visited at most once.

## Space Complexity

**O(M x N)** for the visited array and queue, both proportional to the total number of cells.

## Notes

- BFS is the correct choice for shortest path on unweighted grids — DFS would not guarantee the minimum distance.
- Storing distance in the queue tuple is a clean alternative to a separate distance matrix, especially when only one source exists.
- LeetCode #1730.
