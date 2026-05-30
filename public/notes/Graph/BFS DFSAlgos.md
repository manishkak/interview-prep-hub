# BFS DFSAlgos

## Problem Statement

Describe the problem statement for **BFS DFSAlgos** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// Iterative DFS from ChatGPT
/*
Iterative DFS Traversal – Steps
    - Use a Stack – Instead of recursion, maintain a stack for nodes.
    - Initialize:
        - Push the start node to the stack.
        - Use a Set to track visited nodes.
        - Create an array result to store the traversal order.
    - Loop until stack is empty:
        - Pop the top node from the stack.
        - If not visited:
            - Mark as visited.
            - Add to result.
            - Push all unvisited neighbors to the stack (often in reverse order to mimic recursion).
    - Return result.
*/
function dfsIterative(graph, start) {
    const stack = [start];
    const visited = new Set();
    const result = [];
  
    while (stack.length > 0) {
      const node = stack.pop();
      if (!visited.has(node)) {
        visited.add(node);
        result.push(node);
        // Push neighbors (reverse order to mimic recursive DFS)
        for (let i = graph[node].length - 1; i >= 0; i--) {
          stack.push(graph[node][i]); // pushes [C,B] into the 'stack', in two iterations
        }
      }
    }
    return result;
}
/* The reason for inverse for loop is:
A: [B, C] -> Recursive DFS from A: Visit A → Visit B → Visit C
but stack pops the last element first, so-
Next pop → C gets visited before B. So the order becomes: A → C → B

Fix: reverse neighbors
Push neighbors in reverse order: for (let i = graph[node].length - 1; i >= 0; i--)
*/
  
  // Example
  const graph = {
    A: ['B', 'C'],
    B: ['D'],
    C: ['E'],
    D: ['F'],
    E: [],
    F: []
  };
  
console.log(dfsIterative(graph, 'A')); // Output: [ 'A', 'B', 'D', 'F', 'C', 'E' ]



// Iterative BFS from ChatGPT
/* Iterative BFS for a Graph – Steps

1. Use a Queue – BFS works level by level, so use a queue (FIFO).
2. Initialize:
    - Push the start node into the queue.
    - Use a Set to track visited nodes.
    - Create an array result for traversal order.
3. Loop until queue is empty:
    - Dequeue (shift) the first node.
    - If not visited:
        - Mark as visited.
        - Add to result.
        - Enqueue all its unvisited neighbors.
4. Return result. */

function bfs(graph, start) {
    const queue = [start]; // Use a queue for BFS
    const visited = new Set();
    const result = [];

    visited.add(start); // Mark the starting node as visited

    while (queue.length > 0) {
        const node = queue.shift(); // Dequeue the first node
        result.push(node);

        // Add unvisited neighbors to the queue
        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor); // Mark as visited
                queue.push(neighbor);
            }
        }
    }
    return result;
}
// TC for both: O(V+E)
// SC for both: O(V)




// Recursive DFS on a 2D grid (matrix)
// Starting from one cell, visit every reachable neighboring cell exactly once.
/**
 * If you see:
 * “2D grid”, “matrix”, “neighbors”, “islands”, “regions”, 👉 This pattern is almost guaranteed.
 * Using a visited array matters here to avoid cycles/infinite recursion and re-visiting cells.
 */
function dfs(matrix, x, y, visited) {
    // Check if current position is out of bounds or already visited
    if (
        x < 0 || y < 0 || 
        x >= matrix.length || 
        y >= matrix[0].length || 
        visited[x][y]
    ) {
        return;
    }

    // Mark the current cell as visited
    visited[x][y] = true;

    // Process the current cell (if needed)
    // For example, you can print or modify the matrix here
    console.log(matrix[x][y]);

    // Explore the four possible directions (up, down, left, right)
    const directions = [
        [1, 0],  // down
        [-1, 0], // up
        [0, 1],  // right
        [0, -1]  // left
    ];

    for (let [dx, dy] of directions) {
        dfs(matrix, x + dx, y + dy, visited);
    }
}

// Example usage:
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let visited = Array(matrix.length).fill(null).map(() => Array(matrix[0].length).fill(false));
/*
The visited array would look like this initially:
let visited = [
    [false, false, false],
    [false, false, false],
    [false, false, false]
];
*/


// Start DFS from the top-left corner (0, 0)
dfs(matrix, 0, 0, visited);




// Recursive BFS on a 2D grid (matrix)
function recursiveBFS(grid, startRow, startCol) {
    const rows = grid.length; // number of rows
    const cols = grid[0].length; // number of columns

    const visited = Array.from({ length: rows }, () =>
        Array(cols).fill(false)
    ); // 2D array to track visited cells

    // Possible directions to move in the grid (up, down, left, right)
    const directions = [
        [1, 0],  // down
        [-1, 0], // up
        [0, 1],  // right
        [0, -1]  // left
    ];

    const queue = [];   // Initialize an empty queue

    // Helper function to check if a cell is within bounds and not visited
    function isValid(r, c) {
        return (
            r >= 0 &&
            r < rows &&
            c >= 0 &&
            c < cols &&
            !visited[r][c]
        );
    }

    function bfs() {
        if (queue.length === 0) return; // Base case: if queue is empty, return

        const [r, c] = queue.shift(); // Dequeue the first cell

        // Process first cell
        console.log(`Visiting: (${r}, ${c})`);

        // Explore all four directions
        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            // If the new cell is valid (meaning it's within bounds and not visited), mark it visited and push to the queue
            if (isValid(nr, nc)) {
                visited[nr][nc] = true;
                queue.push([nr, nc]);
            }
        }

        bfs(); // recursive call
    }

    // Initialize BFS
    visited[startRow][startCol] = true;
    queue.push([startRow, startCol]);
    bfs();
}




/**
 * number of islands- DFS
 * flood fill- DFS
 * clone graph- DFS with hashmap (Map())
 * rotten oranges- BFS
 * grid[newRow][newCol] = 2;
    freshOranges -= 1;
    queue.push([newRow, newCol]);
 * 01 Matrix- BFS 
    distance[newRow][newCol] = distance[row][col] + 1;
    queue.push([newRow, newCol]);
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
