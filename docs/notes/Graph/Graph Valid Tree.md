# Graph Valid Tree

## Problem Statement

Describe the problem statement for **Graph Valid Tree** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// Graph Valid Tree
/*
Problem Statement:
Given an undirected graph, represented as an adjacency list, determine if it forms a valid tree. A valid tree is a connected graph with no cycles.
Approach:
1. Check for Cycles:
   - Use DFS to traverse the graph and check for cycles. Keep track of visited nodes and the parent node to avoid false positives.
2. Check for Connectivity:
   - After DFS, ensure all nodes have been visited to confirm the graph is connected.
Time Complexity:
O(V + E):
V is the number of vertices (nodes).
E is the number of edges.
Each node and edge is visited exactly once during the DFS traversal.
Space Complexity:
O(V):
The space used by the visited set.
The recursion stack used for DFS in the worst-case scenario.
*/

function isValidTree(graph) {

    // Set to keep track of nodes we have already visited during DFS
    const visited = new Set();

    // Count how many nodes exist in the graph
    // Object keys are the node labels: "0", "1", "2", ...
    const nodes = Object.keys(graph).length;

    // Start DFS from node 0.
    // Parent is set to -1 because node 0 has no parent at the start.
    // If DFS ever returns false, it means a cycle was detected.
    if (!dfs(0, -1)) return false;

    // After DFS finishes:
    // If we visited all nodes (meaning if size of visited set equals number of nodes), the graph is connected.
    return visited.size === nodes;

    function dfs(node, parent) {

        // If we reach a node that was already visited,
        // and it is NOT coming from its parent,
        // then a cycle exists.
        if (visited.has(node)) return false;

        // Mark the current node as visited
        visited.add(node);

        // Loop through all neighbors of the current node
        for (let neighbor of graph[node]) {

            // Skip the edge that goes back to the parent node.
            // This prevents falsely detecting a cycle in undirected graphs. (cos an edge back to the parent is expected, as it's an undirected graph)
            // cycle is only detected if dfs is called on a node that is already visited and is not the parent, check line 44
            if (neighbor === parent) continue;

            // Recursively run DFS on the neighbor.
            // If DFS returns false, a cycle was found deeper in recursion.
            // Immediately return false to propagate the failure upward.
            const result = dfs(neighbor, node);
            if (result === false) {
                return false;
            } // if a dfs is called on a node that is already visited (not parent), it returns false here, when it goes to line 44
        }

        // If all neighbors are processed with no cycles,
        // return true to indicate this path is valid.
        return true;
    }
}

// Example usage:
const graph = {
    0: [1, 2],
    1: [0, 3],
    2: [0],
    3: [1]
};
console.log(isValidTree(graph)); // Output: true
Visualized:-
    2
    |
    0 — 1 — 3
- so no cycles and all nodes connected
/* Dry Run:
1. Initialize visited as an empty set and hasCycle as false.
2. Define the dfs function that takes a node and its parent as arguments.
3. Start DFS from node 0 with parent -1.
4. In DFS:
   - Mark node 0 as visited.
   - Explore neighbors 1 and 2.
   - For neighbor 1:
     - Mark as visited and explore its neighbors (0 and 3).
     - Skip 0 (parent), visit 3, mark as visited.
     - Backtrack to 1, then to 0.
   - For neighbor 2:
     - Mark as visited.
     - Backtrack to 0.
5. After DFS, check if visited size equals number of nodes (4) and hasCycle is false.
6. Return true, indicating the graph is a valid tree.
*/
// example of invalid tree (with cycle)

const graphWithCycle = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1]
};
Visualized:-
    0
   / \
  1---2
- so there is a cycle
console.log(isValidTree(graphWithCycle)); // Output: false
// Dry run for invalid tree:
/*
1. Initialize visited as an empty set and hasCycle as false.
2. Define the dfs function that takes a node and its parent as arguments.
3. Start DFS from node 0 with parent -1.
4. In DFS:
   - Mark node 0 as visited- visited = {0}
   - Explore neighbors 1 and 2.
   - For neighbor 1:
     - Mark as visited- visited = {0, 1} and explore its neighbors (0 and 2).
     - Skip 0 (parent), visit 2, mark as visited.
     - Backtrack to 1, then to 0.
   - For neighbor 2:
     - Mark as visited- visited = {0, 1, 2}
     - Backtrack to 0.
5. After DFS, check if visited size equals number of nodes (3) and hasCycle is true (cycle detected).
6. Return false, indicating the graph is not a valid tree.
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
