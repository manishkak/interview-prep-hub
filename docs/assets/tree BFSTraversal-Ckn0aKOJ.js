const e=`\uFEFF# tree BFSTraversal

## Problem Statement

Breadth-First Search (BFS) / Level Order Traversal - traverse binary tree level by level from top to bottom, processing all nodes at current level before moving to next.

## Examples

- Input: Tree with root=10, left=5 (left=3, right=7), right=15 (left=12, right=18)
  Output: [10, 5, 15, 3, 7, 12, 18]
- Input: Single node tree with value 1
  Output: [1]

## Approach

- Use queue data structure (FIFO).
- Push root, then iteratively: remove from queue, process node, add children to queue.
- Continue until queue is empty.

## Solution

\`\`\`js
function bfs(root) {
  if (!root) return [];
  
  let queue = [];
  let result = [];
  queue.push(root);
  
  while (queue.length > 0) {
    let currentNode = queue.shift();
    result.push(currentNode.value);
    
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }
  
  return result;
}

const tree = { value: 10, left: { value: 5, left: null, right: null }, right: { value: 15, left: null, right: null } };
console.log(bfs(tree)); // [10, 5, 15]
\`\`\`

## Time Complexity

- O(n) where n is number of nodes; each node visited once

## Space Complexity

- O(w) where w is maximum width (nodes in a single level); best O(1), worst O(n)

## Notes

- Queue (FIFO) ensures level-by-level processing.
- Unlike DFS which uses stack for depth traversal.
- Useful for finding shortest path in unweighted graphs.\r
\r
`;export{e as default};
