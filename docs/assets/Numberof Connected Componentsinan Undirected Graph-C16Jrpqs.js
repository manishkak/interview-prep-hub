const n=`# Numberof Connected Componentsinan Undirected Graph

## Problem Statement

Describe the problem statement for **Numberof Connected Componentsinan Undirected Graph** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// Number of Connected Components in an Undirected Graph\r
/*\r
Problem Statement:\r
Given an undirected graph, represented as an adjacency list, determine the number of connected components in the graph. A connected component is a set of nodes such that there is a path between any two nodes in the set.\r
Approach:\r
1. Initialize a visited set to keep track of visited nodes.\r
2. Initialize a count variable to count the number of connected components.\r
3. Iterate through each node in the graph:\r
   - If the node has not been visited, perform a DFS or BFS starting from that node to mark all reachable nodes as visited.\r
   - Increment the count of connected components.\r
4. Return the count.\r
Time Complexity:\r
O(V + E):\r
V is the number of vertices (nodes).\r
E is the number of edges.\r
Each node and edge is visited exactly once.\r
Space Complexity:\r
O(V):\r
The space used by the visited set.\r
The recursion stack or queue used for DFS/BFS in the worst-case scenario.\r
*/\r
function countConnectedComponents(graph) {\r
    const visited = new Set();\r
    let count = 0;\r
\r
    for (let node in graph) {\r
        // convert node to number, otherwise node becomes '0','1',.. and not numbers 0,1,...\r
        const n = Number(node);\r
        if (!visited.has(n)) {\r
            dfs(n);\r
            count++;\r
        }\r
    }\r
\r
    function dfs(node) {\r
        visited.add(node);\r
        // visit all neighbors, if not visited, call dfs recursively\r
        for (let neighbor of graph[node]) {\r
            if (!visited.has(neighbor)) {\r
                dfs(neighbor);\r
            }\r
        }\r
    }\r
\r
    return count;\r
}\r
\r
// Example usage:\r
const graph = {\r
    0: [1, 2],\r
    1: [0],\r
    2: [0],\r
    3: [4],\r
    4: [3],\r
    5: []\r
};\r
console.log(countConnectedComponents(graph)); // Output: 3\r
\r
// Dry Run:\r
/*\r
Perfect example. I’ll do a **tight DFS-style dry run**, no code.\r
---\r
## Problem reminder (mental model)\r
\r
* Undirected graph\r
* Connected component = nodes connected directly or indirectly\r
* Goal: count connected components\r
---\r
## Graph with components highlighted\r
\`\`\`\r
  0\r
 / \\\r
1---2   3\r
       |\r
       4   5\r
\`\`\`\r
---\r
## Dry Run (step-by-step)\r
### 1️⃣ Start at node 0\r
* Not visited → Start DFS\r
* Mark 0 as visited\r
* Visit neighbors:\r
  * 1: Not visited → DFS\r
    * Mark 1 as visited\r
    * Visit neighbors:\r
      * 0: Already visited → skip\r
  * 2: Not visited → DFS\r
    * Mark 2 as visited\r
    * Visit neighbors:\r
      * 0: Already visited → skip\r
* All reachable nodes (0,1,2) marked visited\r
* **Component count = 1**\r
---\r
### 2️⃣ Next node: 1\r
* Already visited → skip\r
---\r
### 3️⃣ Next node: 2\r
* Already visited → skip\r
---\r
### 4️⃣ Next node: 3\r
* Not visited → Start DFS\r
* Mark 3 as visited\r
* Visit neighbors:\r
  * 4: Not visited → DFS\r
    * Mark 4 as visited\r
    * Visit neighbors:\r
      * 3: Already visited → skip\r
* All reachable nodes (3,4) marked visited\r
* **Component count = 2**\r
---\r
### 5️⃣ Next node: 4\r
* Already visited → skip\r
---\r
### 6️⃣ Next node: 5\r
* Not visited → Start DFS\r
* Mark 5 as visited\r
* No neighbors to visit\r
* **Component count = 3**\r
---\r
### Final Result\r
* Total connected components = 3\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
