const r=`# BFS DFSAlgos

## Problem Statement

Describe the problem statement for **BFS DFSAlgos** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// Iterative DFS from ChatGPT\r
/*\r
Iterative DFS Traversal – Steps\r
    - Use a Stack – Instead of recursion, maintain a stack for nodes.\r
    - Initialize:\r
        - Push the start node to the stack.\r
        - Use a Set to track visited nodes.\r
        - Create an array result to store the traversal order.\r
    - Loop until stack is empty:\r
        - Pop the top node from the stack.\r
        - If not visited:\r
            - Mark as visited.\r
            - Add to result.\r
            - Push all unvisited neighbors to the stack (often in reverse order to mimic recursion).\r
    - Return result.\r
*/\r
function dfsIterative(graph, start) {\r
    const stack = [start];\r
    const visited = new Set();\r
    const result = [];\r
  \r
    while (stack.length > 0) {\r
      const node = stack.pop();\r
      if (!visited.has(node)) {\r
        visited.add(node);\r
        result.push(node);\r
        // Push neighbors (reverse order to mimic recursive DFS)\r
        for (let i = graph[node].length - 1; i >= 0; i--) {\r
          stack.push(graph[node][i]); // pushes [C,B] into the 'stack', in two iterations\r
        }\r
      }\r
    }\r
    return result;\r
}\r
/* The reason for inverse for loop is:\r
A: [B, C] -> Recursive DFS from A: Visit A → Visit B → Visit C\r
but stack pops the last element first, so-\r
Next pop → C gets visited before B. So the order becomes: A → C → B\r
\r
Fix: reverse neighbors\r
Push neighbors in reverse order: for (let i = graph[node].length - 1; i >= 0; i--)\r
*/\r
  \r
  // Example\r
  const graph = {\r
    A: ['B', 'C'],\r
    B: ['D'],\r
    C: ['E'],\r
    D: ['F'],\r
    E: [],\r
    F: []\r
  };\r
  \r
console.log(dfsIterative(graph, 'A')); // Output: [ 'A', 'B', 'D', 'F', 'C', 'E' ]\r
\r
\r
\r
// Iterative BFS from ChatGPT\r
/* Iterative BFS for a Graph – Steps\r
\r
1. Use a Queue – BFS works level by level, so use a queue (FIFO).\r
2. Initialize:\r
    - Push the start node into the queue.\r
    - Use a Set to track visited nodes.\r
    - Create an array result for traversal order.\r
3. Loop until queue is empty:\r
    - Dequeue (shift) the first node.\r
    - If not visited:\r
        - Mark as visited.\r
        - Add to result.\r
        - Enqueue all its unvisited neighbors.\r
4. Return result. */\r
\r
function bfs(graph, start) {\r
    const queue = [start]; // Use a queue for BFS\r
    const visited = new Set();\r
    const result = [];\r
\r
    visited.add(start); // Mark the starting node as visited\r
\r
    while (queue.length > 0) {\r
        const node = queue.shift(); // Dequeue the first node\r
        result.push(node);\r
\r
        // Add unvisited neighbors to the queue\r
        for (let neighbor of graph[node]) {\r
            if (!visited.has(neighbor)) {\r
                visited.add(neighbor); // Mark as visited\r
                queue.push(neighbor);\r
            }\r
        }\r
    }\r
    return result;\r
}\r
// TC for both: O(V+E)\r
// SC for both: O(V)\r
\r
\r
\r
\r
// Recursive DFS on a 2D grid (matrix)\r
// Starting from one cell, visit every reachable neighboring cell exactly once.\r
/**\r
 * If you see:\r
 * “2D grid”, “matrix”, “neighbors”, “islands”, “regions”, 👉 This pattern is almost guaranteed.\r
 * Using a visited array matters here to avoid cycles/infinite recursion and re-visiting cells.\r
 */\r
function dfs(matrix, x, y, visited) {\r
    // Check if current position is out of bounds or already visited\r
    if (\r
        x < 0 || y < 0 || \r
        x >= matrix.length || \r
        y >= matrix[0].length || \r
        visited[x][y]\r
    ) {\r
        return;\r
    }\r
\r
    // Mark the current cell as visited\r
    visited[x][y] = true;\r
\r
    // Process the current cell (if needed)\r
    // For example, you can print or modify the matrix here\r
    console.log(matrix[x][y]);\r
\r
    // Explore the four possible directions (up, down, left, right)\r
    const directions = [\r
        [1, 0],  // down\r
        [-1, 0], // up\r
        [0, 1],  // right\r
        [0, -1]  // left\r
    ];\r
\r
    for (let [dx, dy] of directions) {\r
        dfs(matrix, x + dx, y + dy, visited);\r
    }\r
}\r
\r
// Example usage:\r
let matrix = [\r
    [1, 2, 3],\r
    [4, 5, 6],\r
    [7, 8, 9]\r
];\r
\r
let visited = Array(matrix.length).fill(null).map(() => Array(matrix[0].length).fill(false));\r
/*\r
The visited array would look like this initially:\r
let visited = [\r
    [false, false, false],\r
    [false, false, false],\r
    [false, false, false]\r
];\r
*/\r
\r
\r
// Start DFS from the top-left corner (0, 0)\r
dfs(matrix, 0, 0, visited);\r
\r
\r
\r
\r
// Recursive BFS on a 2D grid (matrix)\r
function recursiveBFS(grid, startRow, startCol) {\r
    const rows = grid.length; // number of rows\r
    const cols = grid[0].length; // number of columns\r
\r
    const visited = Array.from({ length: rows }, () =>\r
        Array(cols).fill(false)\r
    ); // 2D array to track visited cells\r
\r
    // Possible directions to move in the grid (up, down, left, right)\r
    const directions = [\r
        [1, 0],  // down\r
        [-1, 0], // up\r
        [0, 1],  // right\r
        [0, -1]  // left\r
    ];\r
\r
    const queue = [];   // Initialize an empty queue\r
\r
    // Helper function to check if a cell is within bounds and not visited\r
    function isValid(r, c) {\r
        return (\r
            r >= 0 &&\r
            r < rows &&\r
            c >= 0 &&\r
            c < cols &&\r
            !visited[r][c]\r
        );\r
    }\r
\r
    function bfs() {\r
        if (queue.length === 0) return; // Base case: if queue is empty, return\r
\r
        const [r, c] = queue.shift(); // Dequeue the first cell\r
\r
        // Process first cell\r
        console.log(\`Visiting: (\${r}, \${c})\`);\r
\r
        // Explore all four directions\r
        for (const [dr, dc] of directions) {\r
            const nr = r + dr;\r
            const nc = c + dc;\r
\r
            // If the new cell is valid (meaning it's within bounds and not visited), mark it visited and push to the queue\r
            if (isValid(nr, nc)) {\r
                visited[nr][nc] = true;\r
                queue.push([nr, nc]);\r
            }\r
        }\r
\r
        bfs(); // recursive call\r
    }\r
\r
    // Initialize BFS\r
    visited[startRow][startCol] = true;\r
    queue.push([startRow, startCol]);\r
    bfs();\r
}\r
\r
\r
\r
\r
/**\r
 * number of islands- DFS\r
 * flood fill- DFS\r
 * clone graph- DFS with hashmap (Map())\r
 * rotten oranges- BFS\r
 * grid[newRow][newCol] = 2;\r
    freshOranges -= 1;\r
    queue.push([newRow, newCol]);\r
 * 01 Matrix- BFS \r
    distance[newRow][newCol] = distance[row][col] + 1;\r
    queue.push([newRow, newCol]);\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{r as default};
