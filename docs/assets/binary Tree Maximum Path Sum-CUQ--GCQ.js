const n=`\uFEFF# binary Tree Maximum Path Sum

## Problem Statement

Given a non-empty binary tree, find the maximum path sum. A path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and need not pass through the root.

## Examples

- Input: [1, 2, 3]
  Output: 6 (path: 2 → 1 → 3)
- Input: [-10, 9, 20, null, null, 15, 7]
  Output: 42 (path: 15 → 20 → 7)

## Approach

- Use DFS post-order traversal.
- At each node, calculate max gain from left and right paths (0 if negative).
- Global max is node value + both subtree gains.
- Return max single-path gain including current node.

## Solution

\`\`\`js
function maxPathSum(root) {
  let max = -Infinity;
  
  function dfs(node) {
    if (!node) return 0;
    
    const leftGain = Math.max(dfs(node.left), 0);
    const rightGain = Math.max(dfs(node.right), 0);
    
    const pathSum = node.val + leftGain + rightGain;
    max = Math.max(max, pathSum);
    
    return node.val + Math.max(leftGain, rightGain);
  }
  
  dfs(root);
  return max;
}

const tree = { val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } };
console.log(maxPathSum(tree)); // 6
\`\`\`

## Time Complexity

- O(n) where n is number of nodes

## Space Complexity

- O(h) for recursion stack where h is tree height

## Notes

- Critical to ignore negative path sums (use Math.max with 0).
- Max path may not include root node.
- Return value differs from global max: must return single path for parent's calculation.\r
\r
`;export{n as default};
