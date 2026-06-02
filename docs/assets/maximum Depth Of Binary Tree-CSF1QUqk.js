const n=`\uFEFF# maximum Depth Of Binary Tree

## Problem Statement

Given a binary tree, find its maximum depth. The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node (including both the root and leaf).

## Examples

- Input: [3, 9, 20, null, null, 15, 7]
  Output: 3 (path: 3→20→15 or 3→20→7)
- Input: [2, null, 3, null, 4]
  Output: 4
- Input: []
  Output: 0

## Approach

- Recursive DFS: base case is null returns 0.
- Height = 1 + max(height of left subtree, height of right subtree).
- Post-order traversal (process children before parent).

## Solution

\`\`\`js
function maxDepth(root) {
  if (!root) return 0;
  
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  
  return 1 + Math.max(leftDepth, rightDepth);
}

const tree = { val: 3, left: { val: 9, left: null, right: null }, right: { val: 20, left: null, right: null } };
console.log(maxDepth(tree)); // 3
\`\`\`

## Time Complexity

- O(n) where n is number of nodes; each node visited once

## Space Complexity

- O(h) for recursion stack where h is tree height; O(log n) balanced, O(n) worst case

## Notes

- Depth is number of nodes on longest path, not edges.
- Base case: null node has depth 0.
- Alternative: BFS level counting (iterative approach).
- Common interview question, multiple solutions exist.\r
\r
`;export{n as default};
