# BFS DFSAlgos

## Problem Statement

BFS (Breadth-First Search) and DFS (Depth-First Search) are two fundamental graph traversal algorithms used across most graph and grid problems.

- DFS explores as deep as possible along each branch before backtracking. Uses a stack (explicit or via recursion).
- BFS explores all neighbors at the current level before moving deeper. Uses a queue.

Both run in O(V + E) time and O(V) space on graphs. On 2D grids, both run in O(M x N) time and space.

## Examples

Graph: A connects to [B, C], B connects to [D], C connects to [E], D connects to [F]

- DFS from A: [A, B, D, F, C, E]
- BFS from A: [A, B, C, D, E, F]

2D grid traversal starting from (0,0): visits every cell exactly once in DFS or BFS order.

## Approach

For graphs (adjacency list representation):
- Iterative DFS: use a stack, pop a node, if unvisited mark it and push neighbors in reverse order (reverse order matches recursive DFS visit sequence).
- BFS: use a queue, mark start as visited, dequeue a node, enqueue all unvisited neighbors.

For 2D grids (matrix):
- Recursive DFS: check bounds and visited status as base case, mark visited, recurse in 4 directions.
- Iterative BFS: initialize queue with start cell, mark visited, dequeue each cell, enqueue valid unvisited neighbors.

## Solution

```js
// Iterative DFS on a graph (adjacency list)
function dfsIterative(graph, start) {
    const stack = [start];
    const visited = new Set();
    const result = [];

    while (stack.length > 0) {
        const node = stack.pop();
        if (!visited.has(node)) {
            visited.add(node);
            result.push(node);
            for (let i = graph[node].length - 1; i >= 0; i--) {
                stack.push(graph[node][i]);
            }
        }
    }
    return result;
}

const graph = {
    A: ['B', 'C'], B: ['D'], C: ['E'], D: ['F'], E: [], F: []
};
console.log(dfsIterative(graph, 'A')); // [A, B, D, F, C, E]


// Iterative BFS on a graph (adjacency list)
function bfs(graph, start) {
    const queue = [start];
    const visited = new Set();
    const result = [];

    visited.add(start);

    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node);

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
    return result;
}


// Recursive DFS on a 2D grid
function dfsGrid(matrix, x, y, visited) {
    if (
        x < 0 || y < 0 ||
        x >= matrix.length ||
        y >= matrix[0].length ||
        visited[x][y]
    ) {
        return;
    }

    visited[x][y] = true;
    console.log(matrix[x][y]);

    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (let [dx, dy] of directions) {
        dfsGrid(matrix, x + dx, y + dy, visited);
    }
}

const matrix = [[1,2,3],[4,5,6],[7,8,9]];
const visited = Array(matrix.length).fill(null).map(() => Array(matrix[0].length).fill(false));
dfsGrid(matrix, 0, 0, visited);


// Iterative BFS on a 2D grid
function bfsGrid(grid, startRow, startCol) {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const queue = [];

    visited[startRow][startCol] = true;
    queue.push([startRow, startCol]);

    while (queue.length > 0) {
        const [r, c] = queue.shift();
        console.log(`Visiting: (${r}, ${c})`);

        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !visited[nr][nc]) {
                visited[nr][nc] = true;
                queue.push([nr, nc]);
            }
        }
    }
}
```

## Time Complexity

**O(V + E)** for graph traversal (V = vertices, E = edges).
**O(M x N)** for 2D grid traversal where M and N are the grid dimensions.

## Space Complexity

**O(V)** for graph traversal (visited set + stack/queue).
**O(M x N)** for grid traversal (visited array + stack/queue).

## Notes

- For iterative DFS on a graph, push neighbors in reverse order so the leftmost neighbor is processed first — matching the order of recursive DFS.
- Use BFS when the goal is shortest path (unweighted). Use DFS when exploring all paths, detecting cycles, or doing topological sort.
- In 2D grid DFS, the out-of-bounds and visited checks are combined in the same base case to keep the code concise.
- Common problems that use these patterns: Number of Islands (DFS), Flood Fill (DFS), Rotting Oranges (multi-source BFS), 01 Matrix (multi-source BFS), Clone Graph (DFS + map).
