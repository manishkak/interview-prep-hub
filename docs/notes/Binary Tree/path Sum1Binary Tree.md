# path Sum1Binary Tree

## Problem Statement

Given a binary tree and a target sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given target sum.

## Examples

- Input: tree = [1, 2, 3, null, 5, null, 3], targetSum = 6
  Output: true (Path: 1 → 2 → 3 = 6)
- Input: tree = [1, 2], targetSum = 1
  Output: false

## Approach

- Use DFS recursion, subtracting current node's value from target sum.
- Recurse on left and right children with remaining sum.
- At leaf nodes, check if remaining sum equals node value.

## Solution

```js
function hasPathSum(root, targetSum) {
  if (!root) return false;
  
  if (!root.left && !root.right && root.val === targetSum) {
    return true;
  }
  
  const remainingSum = targetSum - root.val;
  return hasPathSum(root.left, remainingSum) || hasPathSum(root.right, remainingSum);
}

const tree = { val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } };
console.log(hasPathSum(tree, 4)); // true
```

## Time Complexity

- O(n) where n is the number of nodes (may visit all nodes in worst case)

## Space Complexity

- O(h) for recursion stack where h is tree height; best O(log n) balanced, worst O(n) skewed

## Notes

- Only checks whether one valid path exists, not all paths.
- Important to verify leaf node before checking sum equality.
- Leaf node condition: node.left === null && node.right === null

