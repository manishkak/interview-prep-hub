# Graph Valid Tree

## Problem Statement

Given an undirected graph represented as an adjacency list with n nodes, determine if it forms a valid tree. A valid tree is a connected graph with no cycles (equivalently, it has exactly n - 1 edges).

## Examples

- Input: graph = {0:[1,2], 1:[0,3], 2:[0], 3:[1]}
- Output: true (connected, no cycles — visualized: 2-0-1-3)

- Input: graph = {0:[1,2], 1:[0,2], 2:[0,1]}
- Output: false (cycle exists: 0-1-2-0)

## Approach

DFS cycle detection combined with a connectivity check.

1. Run DFS from node 0, passing the parent node to each recursive call.
2. If a visited node is reached that is not the parent, a cycle is detected — return false.
3. In an undirected graph, an edge back to the parent is expected (not a cycle), so skip it.
4. After DFS completes, check if visited.size equals the total number of nodes. If not, the graph is disconnected — not a valid tree.

## Solution

```js
function isValidTree(graph) {
    const visited = new Set();
    const nodes = Object.keys(graph).length;

    if (!dfs(0, -1)) return false;

    return visited.size === nodes;

    function dfs(node, parent) {
        if (visited.has(node)) return false;

        visited.add(node);

        for (let neighbor of graph[node]) {
            if (neighbor === parent) continue;

            const result = dfs(neighbor, node);
            if (result === false) return false;
        }

        return true;
    }
}
```

## Time Complexity

**O(V + E)** where V = number of nodes and E = number of edges. Each node and edge is visited exactly once.

## Space Complexity

**O(V)** for the visited set and the recursion stack (at most V deep).

## Notes

- Two conditions must both be true for a valid tree: no cycles (DFS returns true) AND all nodes are connected (visited.size === nodes).
- In an undirected graph, every edge appears twice in the adjacency list — skipping the parent prevents a false cycle detection on the back edge.
- LeetCode #261.
