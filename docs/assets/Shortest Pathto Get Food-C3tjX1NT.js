const n=`# Shortest Pathto Get Food

## Problem Statement

Describe the problem statement for **Shortest Pathto Get Food** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/*\r
Shortest Path to Get Food\r
Pattern: BFS from one source\r
Problem Statement: Given a grid representing a map where:\r
  - 'O' represents open spaces,\r
  - 'X' represents obstacles,\r
  - '*' represents the starting position of a person,\r
  - '#' represents food locations.\r
    Find the shortest path from the person's starting position to any food location. You can move up, down, left, or right, but cannot move through obstacles. Return the length of the shortest path to the nearest food location, or -1 if no such path exists.\r
Approach: Breadth-First Search (BFS)\r
To solve this problem, we can use the Breadth-First Search (BFS) algorithm, which is well-suited for finding the shortest path in an unweighted grid. The BFS will explore all possible paths level by level, ensuring that we find the shortest path to any food location.\r
Steps to Implement the Solution:\r
1. Initialize a queue to keep track of the positions to explore, starting with the person's position.\r
2. Maintain a set to keep track of visited positions to avoid cycles.\r
3. Use a loop to process each position in the queue:\r
   - Dequeue the front position and check if it is a food location ('#'). If it is, return the current path length.\r
   - Explore all four possible directions (up, down, left, right) from the current position.\r
   - For each valid neighboring position (within bounds, not an obstacle, and not visited), enqueue it and mark it as visited.\r
4. If the queue is exhausted without finding food, return -1.\r
*/\r
// Example:\r
// Input grid:\r
//   ["X", "X", "X", "X"],\r
//   ["X", "O", "O", "X"],\r
//   ["X", "O", "*", "X"],\r
//   ["X", "O", "O", "X"],\r
//   ["X", "#", "#", "X"]\r
// ]\r
// output: 3\r
\r
// js program to find shortest path to get food\r
function shortestPathToGetFood(grid) {\r
    const rows = grid.length;\r
    const cols = grid[0].length;\r
    const directions = [[0,1],[1,0],[0,-1],[-1,0]];\r
\r
    // set visited to keep track of visited positions- all false initially\r
    const visited = Array.from({ length: rows }, () =>\r
        Array(cols).fill(false)\r
    );\r
\r
    const queue = [];\r
\r
    // find start\r
    for (let r = 0; r < rows; r++) {\r
        for (let c = 0; c < cols; c++) {\r
            // start position found\r
            if (grid[r][c] === '*') {\r
                // add start position to queue and mark as visited\r
                queue.push([r, c, 0]);\r
                // mark start as visited\r
                visited[r][c] = true;\r
                break;\r
            }\r
        }\r
    }\r
\r
    // start BFS\r
    while (queue.length > 0) {\r
        const [row, col, dist] = queue.shift(); // dequeue front position\r
\r
        // check if we reached food\r
        if (grid[row][col] === '#') return dist;\r
\r
        // explore all four directions\r
        for (const [dr, dc] of directions) {\r
            const nr = row + dr;\r
            const nc = col + dc;\r
\r
            // check if new position is valid and not visited and not an obstacle\r
            if (\r
                nr >= 0 && nr < rows &&\r
                nc >= 0 && nc < cols &&\r
                grid[nr][nc] !== 'X' &&\r
                !visited[nr][nc]\r
            ) {\r
                // mark new position as visited and enqueue it with incremented distance\r
                visited[nr][nc] = true;\r
                queue.push([nr, nc, dist + 1]);\r
            }\r
        }\r
    }\r
\r
    return -1;\r
}\r
\r
// Example usage:\r
const grid = [\r
    ["X", "X", "X", "X"],\r
    ["X", "O", "O", "X"],\r
    ["X", "O", "*", "X"],\r
    ["X", "O", "O", "X"],\r
    ["X", "#", "#", "X"]\r
];\r
console.log(shortestPathToGetFood(grid)); // Output: 2\r
// how is the output 3?\r
// Dry Run:\r
/*\r
Start at (2,2) with distance 0\r
Queue: [(2,2,0)]\r
Visited: {(2,2)}\r
Dequeue (2,2,0)\r
Explore neighbors:\r
(2,3) - Obstacle\r
(3,2) - Empty\r
Queue: [(3,2,1)]\r
Visited: {(2,2), (3,2)}\r
Dequeue (3,2,1)\r
Explore neighbors:\r
(4,2) - Food\r
Return distance 2 + 1 = 3 (how is this 3? in Queue we got [(3,2,1)] so distance is 1, then we go to (4,2) which is food, so distance becomes 1 + 1 = 2, but we started counting from 0, so total steps = 3)\r
*/\r
\r
// Time and Space Complexity\r
/*\r
Time Complexity:\r
O(m * n):\r
In the worst case, we may need to explore every cell in the grid once. Therefore, the time complexity is O(m * n), where m is the number of rows and n is the number of columns in the grid.\r
Space Complexity:\r
O(m * n):\r
We use a queue to store positions to explore and a set to keep track of visited positions. In the worst case, we may need to store all cells in the grid in the queue and visited set, leading to a space complexity of O(m * n).\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
