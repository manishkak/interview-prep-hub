# lowest Common Ancestor Binary Tree

## Problem Statement

Given a binary tree and two nodes p and q, find the Lowest Common Ancestor (LCA) - the deepest node that has both p and q as descendants (including the node itself).

## Examples

- Input: root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p = 5, q = 1
  Output: 3 (LCA of 5 and 1)
- Input: root = [3, 5, 1, 6, 2, 0, 8], p = 5, q = 4
  Output: 5 (LCA of 5 and 4)

## Approach

- Recursive DFS: if current node is p or q, return current node.
- Recursively search left and right subtrees.
- If both return non-null, current node is LCA.
- If only left or right returns non-null, that is the LCA.

## Solution

```js
function lowestCommonAncestor(root, p, q) {
  if (!root) return null;
  if (root === p || root === q) return root;
  
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  
  if (left && right) return root;
  return left || right;
}

const root = { val: 3, left: { val: 5, left: null, right: null }, right: { val: 1, left: null, right: null } };
const p = { val: 5 }, q = { val: 1 };
console.log(lowestCommonAncestor(root, p, q)); // root
```

## Time Complexity

- O(n) where n is number of nodes; may visit all nodes in worst case

## Space Complexity

- O(h) for recursion stack where h is tree height

## Notes

- LCA is the deepest node with both p and q as descendants.
- Works for both Binary Trees and BSTs.
- If both found in left subtree, LCA is in left; if both in right, LCA is in right.
- If split (one in left, one in right), current node is LCA.

