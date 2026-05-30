# Shortest Pathto Get Food

## Problem Statement

Describe the problem statement for **Shortest Pathto Get Food** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/*
Shortest Path to Get Food
Pattern: BFS from one source
Problem Statement: Given a grid representing a map where:
  - 'O' represents open spaces,
  - 'X' represents obstacles,
  - '*' represents the starting position of a person,
  - '#' represents food locations.
    Find the shortest path from the person's starting position to any food location. You can move up, down, left, or right, but cannot move through obstacles. Return the length of the shortest path to the nearest food location, or -1 if no such path exists.
Approach: Breadth-First Search (BFS)
To solve this problem, we can use the Breadth-First Search (BFS) algorithm, which is well-suited for finding the shortest path in an unweighted grid. The BFS will explore all possible paths level by level, ensuring that we find the shortest path to any food location.
Steps to Implement the Solution:
1. Initialize a queue to keep track of the positions to explore, starting with the person's position.
2. Maintain a set to keep track of visited positions to avoid cycles.
3. Use a loop to process each position in the queue:
   - Dequeue the front position and check if it is a food location ('#'). If it is, return the current path length.
   - Explore all four possible directions (up, down, left, right) from the current position.
   - For each valid neighboring position (within bounds, not an obstacle, and not visited), enqueue it and mark it as visited.
4. If the queue is exhausted without finding food, return -1.
*/
// Example:
// Input grid:
//   ["X", "X", "X", "X"],
//   ["X", "O", "O", "X"],
//   ["X", "O", "*", "X"],
//   ["X", "O", "O", "X"],
//   ["X", "#", "#", "X"]
// ]
// output: 3

// js program to find shortest path to get food
function shortestPathToGetFood(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const directions = [[0,1],[1,0],[0,-1],[-1,0]];

    // set visited to keep track of visited positions- all false initially
    const visited = Array.from({ length: rows }, () =>
        Array(cols).fill(false)
    );

    const queue = [];

    // find start
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // start position found
            if (grid[r][c] === '*') {
                // add start position to queue and mark as visited
                queue.push([r, c, 0]);
                // mark start as visited
                visited[r][c] = true;
                break;
            }
        }
    }

    // start BFS
    while (queue.length > 0) {
        const [row, col, dist] = queue.shift(); // dequeue front position

        // check if we reached food
        if (grid[row][col] === '#') return dist;

        // explore all four directions
        for (const [dr, dc] of directions) {
            const nr = row + dr;
            const nc = col + dc;

            // check if new position is valid and not visited and not an obstacle
            if (
                nr >= 0 && nr < rows &&
                nc >= 0 && nc < cols &&
                grid[nr][nc] !== 'X' &&
                !visited[nr][nc]
            ) {
                // mark new position as visited and enqueue it with incremented distance
                visited[nr][nc] = true;
                queue.push([nr, nc, dist + 1]);
            }
        }
    }

    return -1;
}

// Example usage:
const grid = [
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "O", "*", "X"],
    ["X", "O", "O", "X"],
    ["X", "#", "#", "X"]
];
console.log(shortestPathToGetFood(grid)); // Output: 2
// how is the output 3?
// Dry Run:
/*
Start at (2,2) with distance 0
Queue: [(2,2,0)]
Visited: {(2,2)}
Dequeue (2,2,0)
Explore neighbors:
(2,3) - Obstacle
(3,2) - Empty
Queue: [(3,2,1)]
Visited: {(2,2), (3,2)}
Dequeue (3,2,1)
Explore neighbors:
(4,2) - Food
Return distance 2 + 1 = 3 (how is this 3? in Queue we got [(3,2,1)] so distance is 1, then we go to (4,2) which is food, so distance becomes 1 + 1 = 2, but we started counting from 0, so total steps = 3)
*/

// Time and Space Complexity
/*
Time Complexity:
O(m * n):
In the worst case, we may need to explore every cell in the grid once. Therefore, the time complexity is O(m * n), where m is the number of rows and n is the number of columns in the grid.
Space Complexity:
O(m * n):
We use a queue to store positions to explore and a set to keep track of visited positions. In the worst case, we may need to store all cells in the grid in the queue and visited set, leading to a space complexity of O(m * n).
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
