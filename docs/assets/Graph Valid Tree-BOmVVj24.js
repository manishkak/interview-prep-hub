const e=`# Graph Valid Tree

## Problem Statement

Describe the problem statement for **Graph Valid Tree** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// Graph Valid Tree\r
/*\r
Problem Statement:\r
Given an undirected graph, represented as an adjacency list, determine if it forms a valid tree. A valid tree is a connected graph with no cycles.\r
Approach:\r
1. Check for Cycles:\r
   - Use DFS to traverse the graph and check for cycles. Keep track of visited nodes and the parent node to avoid false positives.\r
2. Check for Connectivity:\r
   - After DFS, ensure all nodes have been visited to confirm the graph is connected.\r
Time Complexity:\r
O(V + E):\r
V is the number of vertices (nodes).\r
E is the number of edges.\r
Each node and edge is visited exactly once during the DFS traversal.\r
Space Complexity:\r
O(V):\r
The space used by the visited set.\r
The recursion stack used for DFS in the worst-case scenario.\r
*/\r
\r
function isValidTree(graph) {\r
\r
    // Set to keep track of nodes we have already visited during DFS\r
    const visited = new Set();\r
\r
    // Count how many nodes exist in the graph\r
    // Object keys are the node labels: "0", "1", "2", ...\r
    const nodes = Object.keys(graph).length;\r
\r
    // Start DFS from node 0.\r
    // Parent is set to -1 because node 0 has no parent at the start.\r
    // If DFS ever returns false, it means a cycle was detected.\r
    if (!dfs(0, -1)) return false;\r
\r
    // After DFS finishes:\r
    // If we visited all nodes (meaning if size of visited set equals number of nodes), the graph is connected.\r
    return visited.size === nodes;\r
\r
    function dfs(node, parent) {\r
\r
        // If we reach a node that was already visited,\r
        // and it is NOT coming from its parent,\r
        // then a cycle exists.\r
        if (visited.has(node)) return false;\r
\r
        // Mark the current node as visited\r
        visited.add(node);\r
\r
        // Loop through all neighbors of the current node\r
        for (let neighbor of graph[node]) {\r
\r
            // Skip the edge that goes back to the parent node.\r
            // This prevents falsely detecting a cycle in undirected graphs. (cos an edge back to the parent is expected, as it's an undirected graph)\r
            // cycle is only detected if dfs is called on a node that is already visited and is not the parent, check line 44\r
            if (neighbor === parent) continue;\r
\r
            // Recursively run DFS on the neighbor.\r
            // If DFS returns false, a cycle was found deeper in recursion.\r
            // Immediately return false to propagate the failure upward.\r
            const result = dfs(neighbor, node);\r
            if (result === false) {\r
                return false;\r
            } // if a dfs is called on a node that is already visited (not parent), it returns false here, when it goes to line 44\r
        }\r
\r
        // If all neighbors are processed with no cycles,\r
        // return true to indicate this path is valid.\r
        return true;\r
    }\r
}\r
\r
// Example usage:\r
const graph = {\r
    0: [1, 2],\r
    1: [0, 3],\r
    2: [0],\r
    3: [1]\r
};\r
console.log(isValidTree(graph)); // Output: true\r
Visualized:-\r
    2\r
    |\r
    0 — 1 — 3\r
- so no cycles and all nodes connected\r
/* Dry Run:\r
1. Initialize visited as an empty set and hasCycle as false.\r
2. Define the dfs function that takes a node and its parent as arguments.\r
3. Start DFS from node 0 with parent -1.\r
4. In DFS:\r
   - Mark node 0 as visited.\r
   - Explore neighbors 1 and 2.\r
   - For neighbor 1:\r
     - Mark as visited and explore its neighbors (0 and 3).\r
     - Skip 0 (parent), visit 3, mark as visited.\r
     - Backtrack to 1, then to 0.\r
   - For neighbor 2:\r
     - Mark as visited.\r
     - Backtrack to 0.\r
5. After DFS, check if visited size equals number of nodes (4) and hasCycle is false.\r
6. Return true, indicating the graph is a valid tree.\r
*/\r
// example of invalid tree (with cycle)\r
\r
const graphWithCycle = {\r
    0: [1, 2],\r
    1: [0, 2],\r
    2: [0, 1]\r
};\r
Visualized:-\r
    0\r
   / \\\r
  1---2\r
- so there is a cycle\r
console.log(isValidTree(graphWithCycle)); // Output: false\r
// Dry run for invalid tree:\r
/*\r
1. Initialize visited as an empty set and hasCycle as false.\r
2. Define the dfs function that takes a node and its parent as arguments.\r
3. Start DFS from node 0 with parent -1.\r
4. In DFS:\r
   - Mark node 0 as visited- visited = {0}\r
   - Explore neighbors 1 and 2.\r
   - For neighbor 1:\r
     - Mark as visited- visited = {0, 1} and explore its neighbors (0 and 2).\r
     - Skip 0 (parent), visit 2, mark as visited.\r
     - Backtrack to 1, then to 0.\r
   - For neighbor 2:\r
     - Mark as visited- visited = {0, 1, 2}\r
     - Backtrack to 0.\r
5. After DFS, check if visited size equals number of nodes (3) and hasCycle is true (cycle detected).\r
6. Return false, indicating the graph is not a valid tree.\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
