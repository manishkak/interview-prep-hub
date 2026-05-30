# Numberof Connected Componentsinan Undirected Graph

## Problem Statement

Describe the problem statement for **Numberof Connected Componentsinan Undirected Graph** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// Number of Connected Components in an Undirected Graph
/*
Problem Statement:
Given an undirected graph, represented as an adjacency list, determine the number of connected components in the graph. A connected component is a set of nodes such that there is a path between any two nodes in the set.
Approach:
1. Initialize a visited set to keep track of visited nodes.
2. Initialize a count variable to count the number of connected components.
3. Iterate through each node in the graph:
   - If the node has not been visited, perform a DFS or BFS starting from that node to mark all reachable nodes as visited.
   - Increment the count of connected components.
4. Return the count.
Time Complexity:
O(V + E):
V is the number of vertices (nodes).
E is the number of edges.
Each node and edge is visited exactly once.
Space Complexity:
O(V):
The space used by the visited set.
The recursion stack or queue used for DFS/BFS in the worst-case scenario.
*/
function countConnectedComponents(graph) {
    const visited = new Set();
    let count = 0;

    for (let node in graph) {
        // convert node to number, otherwise node becomes '0','1',.. and not numbers 0,1,...
        const n = Number(node);
        if (!visited.has(n)) {
            dfs(n);
            count++;
        }
    }

    function dfs(node) {
        visited.add(node);
        // visit all neighbors, if not visited, call dfs recursively
        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
    }

    return count;
}

// Example usage:
const graph = {
    0: [1, 2],
    1: [0],
    2: [0],
    3: [4],
    4: [3],
    5: []
};
console.log(countConnectedComponents(graph)); // Output: 3

// Dry Run:
/*
Perfect example. I’ll do a **tight DFS-style dry run**, no code.
---
## Problem reminder (mental model)

* Undirected graph
* Connected component = nodes connected directly or indirectly
* Goal: count connected components
---
## Graph with components highlighted
```
  0
 / \
1---2   3
       |
       4   5
```
---
## Dry Run (step-by-step)
### 1️⃣ Start at node 0
* Not visited → Start DFS
* Mark 0 as visited
* Visit neighbors:
  * 1: Not visited → DFS
    * Mark 1 as visited
    * Visit neighbors:
      * 0: Already visited → skip
  * 2: Not visited → DFS
    * Mark 2 as visited
    * Visit neighbors:
      * 0: Already visited → skip
* All reachable nodes (0,1,2) marked visited
* **Component count = 1**
---
### 2️⃣ Next node: 1
* Already visited → skip
---
### 3️⃣ Next node: 2
* Already visited → skip
---
### 4️⃣ Next node: 3
* Not visited → Start DFS
* Mark 3 as visited
* Visit neighbors:
  * 4: Not visited → DFS
    * Mark 4 as visited
    * Visit neighbors:
      * 3: Already visited → skip
* All reachable nodes (3,4) marked visited
* **Component count = 2**
---
### 5️⃣ Next node: 4
* Already visited → skip
---
### 6️⃣ Next node: 5
* Not visited → Start DFS
* Mark 5 as visited
* No neighbors to visit
* **Component count = 3**
---
### Final Result
* Total connected components = 3
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
