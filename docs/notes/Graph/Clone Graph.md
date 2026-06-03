# Clone Graph

## Problem Statement

Given a reference to a node in a connected undirected graph, return a deep copy (clone) of the graph. Each node contains a value and a list of its neighbors. The clone must be a completely new set of node objects — not references to the original nodes.

## Examples

- Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
  (node 1 connects to 2 and 4; node 2 connects to 1 and 3; node 3 connects to 2 and 4; node 4 connects to 1 and 3)
- Output: [[2,4],[1,3],[2,4],[1,3]] (same structure, entirely new node objects)

- Input: node = null
- Output: null

## Approach

DFS with a HashMap (Map in JS). The map stores: original node → cloned node.

Steps:
1. If the input node is null, return null.
2. Define a dfs(currentNode) helper:
   - If currentNode is already in the map, return its clone immediately (handles cycles and revisits).
   - Otherwise, create a new Node with the same value and store it in the map.
   - Recursively clone all neighbors and push them into the clone's neighbors array.
   - Return the cloned node.
3. Call dfs from the given starting node and return the result.

The map is the key — it prevents infinite recursion on cyclic graphs and ensures each node is cloned exactly once.

## Solution

```js
function cloneGraph(node) {
    if (!node) return null;

    const visited = new Map();

    function dfs(currentNode) {
        if (visited.has(currentNode)) {
            return visited.get(currentNode);
        }

        const clonedNode = new Node(currentNode.val);
        visited.set(currentNode, clonedNode);

        for (let neighbor of currentNode.neighbors) {
            clonedNode.neighbors.push(dfs(neighbor));
        }

        return clonedNode;
    }

    return dfs(node);
}

function Node(val, neighbors) {
    this.val = val;
    this.neighbors = neighbors || [];
}
```

## Time Complexity

**O(V + E)** where V is the number of nodes and E is the number of edges. Each node and edge is visited exactly once.

## Space Complexity

**O(V)** for the map storing one clone per node, plus the recursion stack which is at most O(V) deep.

## Notes

- Core rule: create a clone when a node is first seen, reuse the clone from the map for every subsequent encounter.
- Without the map, cyclic graphs would cause infinite recursion, and shared neighbors would get duplicated.
- LeetCode #133.
