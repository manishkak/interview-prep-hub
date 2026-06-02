# diameter Of ABinary Tree

## Problem Statement

The diameter of a binary tree is the length of the longest path between any two nodes (counted in edges). The path may or may not pass through the root.

## Examples

- Tree: [1, 2, 3, 4, 5] → Diameter: 3 (path 4→2→1→3)
- Tree: [1, 2] → Diameter: 1
- Tree: [1] → Diameter: 0

## Approach

- Use DFS post-order traversal to compute height at each node.
- Diameter passing through node = height of left subtree + height of right subtree.
- Track global maximum diameter.

## Solution

```js
function diameterOfBinaryTree(root) {
  let maxDiameter = 0;
  
  function dfs(node) {
    if (!node) return 0;
    
    const left = dfs(node.left);
    const right = dfs(node.right);
    
    maxDiameter = Math.max(maxDiameter, left + right);
    
    return 1 + Math.max(left, right);
  }
  
  dfs(root);
  return maxDiameter;
}

const tree = { val: 1, left: { val: 2, left: { val: 4, left: null, right: null }, right: { val: 5, left: null, right: null } }, right: { val: 3, left: null, right: null } };
console.log(diameterOfBinaryTree(tree)); // 3
```

## Time Complexity

- O(n) - visit each node exactly once

## Space Complexity

- O(n) - recursion stack in worst case (skewed tree)

## Notes

- Diameter is number of edges, not nodes
- Optimal path may not pass through root
- Height of leaf node is 0

