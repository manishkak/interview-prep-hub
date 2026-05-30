const n=`# Clone Graph

## Problem Statement

Describe the problem statement for **Clone Graph** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// Problem: Clone Graph\r
// You are given a reference of a node in a connected undirected graph. Each node in the graph contains a value and a list of its neighbors. You need to return a deep copy (clone) of the graph.\r
\r
/*\r
Input: adjList = [[2,4],[1,3],[2,4],[1,3]] -> meaning the first node, shown by the first array, is connceted with nodes 2 and 4; second node is connected with 1 and 3; third with 2 and 4; fourth with 1 and 3.\r
Output: [[2,4],[1,3],[2,4],[1,3]]\r
*/\r
\r
/*\r
Explanation:\r
- Use DFS with a HashMap (or Map in JS) to avoid re-cloning nodes and to handle cycles\r
- DFS is initiated from the given node.\r
- For each node, if it has already been cloned (i.e., it's present in the map), we return the cloned node.\r
- Otherwise, we create a new Node, store it in the map, and recursively clone all its neighbors.\r
- Finally, the cloned graph starting from the original node is returned.\r
*/\r
/*✅ Approach Steps (DFS method)\r
1. Handle Edge Case: If the input node is null, return null.\r
2. Use a Map: "visited" to store the mapping- key= original node → value= cloned node.\r
3. DFS Function:\r
    - If node already cloned (in visited), return the clone.\r
    - Otherwise:\r
        - Create a new node with the same value.\r
        - Store it in the visited map.\r
        - Recursively clone all neighbors and push them into the clone’s neighbors list.\r
4. Return the clone of the starting node. */\r
\r
// JavaScript Solution (Using DFS):\r
\r
/**\r
 * Definition for a Node.\r
 * function Node(val, neighbors) {\r
 *     this.val = val;\r
 *     this.neighbors = neighbors ? neighbors : [];\r
 * }\r
 */\r
\r
/**\r
 * @param {Node} node\r
 * @return {Node}\r
 */\r
function cloneGraph(node) {\r
    if (!node) return null;\r
\r
    // Map to keep track of all cloned nodes\r
    // This helps prevent infinite recursion for cyclic graphs and ensures each node is cloned only once\r
    const visited = new Map();\r
\r
    // Helper function to perform DFS and clone nodes\r
    function dfs(currentNode) {\r
        // If node has already been cloned, return the cloned node\r
        // Checks if the node is already cloned: If it’s in the visited map, return the existing cloned node to avoid re-cloning\r
        if (visited.has(currentNode)) {\r
            return visited.get(currentNode);\r
        }\r
\r
        // Clone the current node\r
        // Creates a new Node instance for the currentNode\r
        const clonedNode = new Node(currentNode.val);\r
\r
        // Adds the clone to visited: Maps the currentNode to the cloned node in visited\r
        visited.set(currentNode, clonedNode);\r
\r
        // Recursively clone all neighbors and add them to the new node’s neighbors\r
        // For each neighbor of currentNode, we recursively call dfs and add the cloned neighbor to the neighbors list of the cloned node\r
        for (let neighbor of currentNode.neighbors) {\r
            clonedNode.neighbors.push(dfs(neighbor));\r
        }\r
\r
        // We start the DFS from the input node and return the cloned graph's starting node.\r
        return clonedNode;\r
    }\r
\r
    // Start DFS from the given node\r
    return dfs(node);\r
}\r
\r
function Node(val, neighbors) {\r
    this.val = val;\r
    this.neighbors = neighbors || [];\r
}  \r
\r
/*\r
Time Complexity (TC):\r
O(V + E):\r
V is the number of vertices (nodes).\r
E is the number of edges.\r
Each node and edge is visited exactly once.\r
\r
Space Complexity (SC):\r
O(V):\r
The space used by the hash map map which stores a copy of each node.\r
The recursive call stack will also consume space proportional to the depth of the graph (in the worst case, it could be O(V)).\r
*/\r
\r
// Walk Through an Example\r
1 -- 2\r
|    |\r
4 -- 3\r
\r
// Start with node 1. Clone it → store in map. For neighbor 2, not cloned yet → clone it. Same for neighbor 4. When we come back to 1’s neighbor 2, we clone its neighbor 3, and so on. When we hit an already cloned node, we just return the existing copy from the map.\r
\r
/* Dry Run for [1,2,3,4] above:\r
Perfect choice — **Clone Graph** is all about the **Map**, so let’s do a **simple BFS-style dry run** and track only that.\r
\r
---\r
\r
## Given graph (undirected)\r
\r
\`\`\`\r
1 -- 2\r
|    |\r
4 -- 3\r
\`\`\`\r
\r
Connections:\r
\r
* 1 → [2,4]\r
* 2 → [1,3]\r
* 3 → [2,4]\r
* 4 → [1,3]\r
\r
---\r
\r
## What the Map is for (core idea)\r
\r
**Map = original node → cloned node**\r
\r
It answers:\r
\r
> “If I see this original node again, what clone should I use?”\r
\r
Without this map → infinite loop + duplicate nodes.\r
\r
---\r
\r
## Start\r
\r
* Input node = **1**\r
* Map = \`{}\` (empty)\r
\r
---\r
\r
## Step-by-step dry run\r
\r
### 🔹 Step 1: Visit node 1\r
\r
* Clone 1 → call it \`1'\`\r
* Put in map\r
\r
\`\`\`\r
Map:\r
1 → 1'\r
\`\`\`\r
\r
Queue/stack now explores neighbors of 1: **2, 4**\r
\r
---\r
\r
### 🔹 Step 2: Visit node 2\r
\r
* Not in map\r
* Clone 2 → \`2'\`\r
* Add to map\r
* Connect: \`1' ↔ 2'\`\r
\r
\`\`\`\r
Map:\r
1 → 1'\r
2 → 2'\r
\`\`\`\r
\r
Neighbors of 2: **1, 3**\r
\r
* 1 already in map → reuse \`1'\`\r
* 3 not seen yet → will process next\r
\r
---\r
\r
### 🔹 Step 3: Visit node 4\r
\r
* Not in map\r
* Clone 4 → \`4'\`\r
* Add to map\r
* Connect: \`1' ↔ 4'\`\r
\r
\`\`\`\r
Map:\r
1 → 1'\r
2 → 2'\r
4 → 4'\r
\`\`\`\r
\r
Neighbors of 4: **1, 3**\r
\r
* 1 already mapped\r
* 3 not yet mapped\r
\r
---\r
\r
### 🔹 Step 4: Visit node 3\r
\r
* Not in map\r
* Clone 3 → \`3'\`\r
* Add to map\r
* Connect:\r
\r
  * \`2' ↔ 3'\`\r
  * \`4' ↔ 3'\`\r
\r
\`\`\`\r
Map:\r
1 → 1'\r
2 → 2'\r
3 → 3'\r
4 → 4'\r
\`\`\`\r
\r
All nodes processed 🎉\r
\r
---\r
\r
## Final cloned graph\r
\r
Same shape, **entirely new nodes**, wired via the map.\r
\r
---\r
\r
## The ONE rule to remember (this solves the problem)\r
\r
> **Create clone when first seen. Reuse clone from map afterward.**\r
\r
That’s it.\r
\r
---\r
\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
