# symmetric Tree

## Problem Statement

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center). A binary tree is symmetric if the left subtree is a mirror reflection of the right subtree.

## Examples

- Input: [1, 2, 2, 3, 4, 4, 3]
  Output: true (left subtree mirrors right)
- Input: [1, 2, 2, null, 3, null, 3]
  Output: false (left null, right has node - asymmetric)

## Approach

- Recursive DFS: compare left and right subtrees simultaneously.
- Check if left.left mirrors right.right and left.right mirrors right.left.
- Mirror means same value and symmetric children.

## Solution

```js
function isSymmetric(root) {
  function isMirror(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;
    
    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
  }
  
  return isMirror(root.left, root.right);
}

const tree = { val: 1, left: { val: 2, left: null, right: null }, right: { val: 2, left: null, right: null } };
console.log(isSymmetric(tree)); // true
```

## Time Complexity

- O(n) where n is number of nodes; each node visited once

## Space Complexity

- O(h) for recursion stack where h is tree height

## Notes

- Key insight: mirror comparison requires left-right cross matching.
- Compare left.left with right.right (not left.left with right.left).
- Values must match AND structure must be symmetric.
- Alternative: BFS level-by-level comparison.

