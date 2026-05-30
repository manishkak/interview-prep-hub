# Clone Graph

## Problem Statement

Describe the problem statement for **Clone Graph** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// Problem: Clone Graph
// You are given a reference of a node in a connected undirected graph. Each node in the graph contains a value and a list of its neighbors. You need to return a deep copy (clone) of the graph.

/*
Input: adjList = [[2,4],[1,3],[2,4],[1,3]] -> meaning the first node, shown by the first array, is connceted with nodes 2 and 4; second node is connected with 1 and 3; third with 2 and 4; fourth with 1 and 3.
Output: [[2,4],[1,3],[2,4],[1,3]]
*/

/*
Explanation:
- Use DFS with a HashMap (or Map in JS) to avoid re-cloning nodes and to handle cycles
- DFS is initiated from the given node.
- For each node, if it has already been cloned (i.e., it's present in the map), we return the cloned node.
- Otherwise, we create a new Node, store it in the map, and recursively clone all its neighbors.
- Finally, the cloned graph starting from the original node is returned.
*/
/*✅ Approach Steps (DFS method)
1. Handle Edge Case: If the input node is null, return null.
2. Use a Map: "visited" to store the mapping- key= original node → value= cloned node.
3. DFS Function:
    - If node already cloned (in visited), return the clone.
    - Otherwise:
        - Create a new node with the same value.
        - Store it in the visited map.
        - Recursively clone all neighbors and push them into the clone’s neighbors list.
4. Return the clone of the starting node. */

// JavaScript Solution (Using DFS):

/**
 * Definition for a Node.
 * function Node(val, neighbors) {
 *     this.val = val;
 *     this.neighbors = neighbors ? neighbors : [];
 * }
 */

/**
 * @param {Node} node
 * @return {Node}
 */
function cloneGraph(node) {
    if (!node) return null;

    // Map to keep track of all cloned nodes
    // This helps prevent infinite recursion for cyclic graphs and ensures each node is cloned only once
    const visited = new Map();

    // Helper function to perform DFS and clone nodes
    function dfs(currentNode) {
        // If node has already been cloned, return the cloned node
        // Checks if the node is already cloned: If it’s in the visited map, return the existing cloned node to avoid re-cloning
        if (visited.has(currentNode)) {
            return visited.get(currentNode);
        }

        // Clone the current node
        // Creates a new Node instance for the currentNode
        const clonedNode = new Node(currentNode.val);

        // Adds the clone to visited: Maps the currentNode to the cloned node in visited
        visited.set(currentNode, clonedNode);

        // Recursively clone all neighbors and add them to the new node’s neighbors
        // For each neighbor of currentNode, we recursively call dfs and add the cloned neighbor to the neighbors list of the cloned node
        for (let neighbor of currentNode.neighbors) {
            clonedNode.neighbors.push(dfs(neighbor));
        }

        // We start the DFS from the input node and return the cloned graph's starting node.
        return clonedNode;
    }

    // Start DFS from the given node
    return dfs(node);
}

function Node(val, neighbors) {
    this.val = val;
    this.neighbors = neighbors || [];
}  

/*
Time Complexity (TC):
O(V + E):
V is the number of vertices (nodes).
E is the number of edges.
Each node and edge is visited exactly once.

Space Complexity (SC):
O(V):
The space used by the hash map map which stores a copy of each node.
The recursive call stack will also consume space proportional to the depth of the graph (in the worst case, it could be O(V)).
*/

// Walk Through an Example
1 -- 2
|    |
4 -- 3

// Start with node 1. Clone it → store in map. For neighbor 2, not cloned yet → clone it. Same for neighbor 4. When we come back to 1’s neighbor 2, we clone its neighbor 3, and so on. When we hit an already cloned node, we just return the existing copy from the map.

/* Dry Run for [1,2,3,4] above:
Perfect choice — **Clone Graph** is all about the **Map**, so let’s do a **simple BFS-style dry run** and track only that.

---

## Given graph (undirected)

```
1 -- 2
|    |
4 -- 3
```

Connections:

* 1 → [2,4]
* 2 → [1,3]
* 3 → [2,4]
* 4 → [1,3]

---

## What the Map is for (core idea)

**Map = original node → cloned node**

It answers:

> “If I see this original node again, what clone should I use?”

Without this map → infinite loop + duplicate nodes.

---

## Start

* Input node = **1**
* Map = `{}` (empty)

---

## Step-by-step dry run

### 🔹 Step 1: Visit node 1

* Clone 1 → call it `1'`
* Put in map

```
Map:
1 → 1'
```

Queue/stack now explores neighbors of 1: **2, 4**

---

### 🔹 Step 2: Visit node 2

* Not in map
* Clone 2 → `2'`
* Add to map
* Connect: `1' ↔ 2'`

```
Map:
1 → 1'
2 → 2'
```

Neighbors of 2: **1, 3**

* 1 already in map → reuse `1'`
* 3 not seen yet → will process next

---

### 🔹 Step 3: Visit node 4

* Not in map
* Clone 4 → `4'`
* Add to map
* Connect: `1' ↔ 4'`

```
Map:
1 → 1'
2 → 2'
4 → 4'
```

Neighbors of 4: **1, 3**

* 1 already mapped
* 3 not yet mapped

---

### 🔹 Step 4: Visit node 3

* Not in map
* Clone 3 → `3'`
* Add to map
* Connect:

  * `2' ↔ 3'`
  * `4' ↔ 3'`

```
Map:
1 → 1'
2 → 2'
3 → 3'
4 → 4'
```

All nodes processed 🎉

---

## Final cloned graph

Same shape, **entirely new nodes**, wired via the map.

---

## The ONE rule to remember (this solves the problem)

> **Create clone when first seen. Reuse clone from map afterward.**

That’s it.

---

*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
