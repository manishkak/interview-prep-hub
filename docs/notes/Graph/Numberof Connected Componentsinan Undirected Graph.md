# Numberof Connected Componentsinan Undirected Graph

## Problem Statement

Given an undirected graph represented as an adjacency list, return the number of connected components. A connected component is a maximal set of nodes where there is a path between every pair of nodes.

## Examples

- Input: graph = {0:[1,2], 1:[0], 2:[0], 3:[4], 4:[3], 5:[]}
- Output: 3
  (Component 1: {0,1,2}, Component 2: {3,4}, Component 3: {5})

- Input: graph = {0:[1], 1:[0], 2:[3], 3:[2]}
- Output: 2

## Approach

DFS from each unvisited node. Maintain a visited set. Iterate through every node in the graph: if the node has not been visited, run DFS from it (which marks all reachable nodes as visited) and increment the component count by 1. Each DFS call from the outer loop represents discovering exactly one new connected component.

## Solution

```js
function countConnectedComponents(graph) {
    const visited = new Set();
    let count = 0;

    for (let node in graph) {
        const n = Number(node);
        if (!visited.has(n)) {
            dfs(n);
            count++;
        }
    }

    function dfs(node) {
        visited.add(node);
        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
    }

    return count;
}
```

## Time Complexity

**O(V + E)** where V = number of nodes and E = number of edges. Each node and edge is visited exactly once across all DFS calls.

## Space Complexity

**O(V)** for the visited set and the recursion stack.

## Notes

- Object keys in JS are strings — converting with Number(node) is necessary to avoid type mismatch bugs when using a numeric Set.
- The outer loop ensures every disconnected node or subgraph is accounted for.
- LeetCode #323.
