# subtreeof Another Tree

## Problem Statement

Given two binary trees root and subRoot, determine whether subRoot is a subtree of root (contains the entire subRoot as part of its structure).

## Examples

- Input: root tree and subRoot tree to compare
  Output: true if subRoot exists as subtree within root
- Input: root = [3, 4, 5, 1, 2], subRoot = [4, 1, 2]
  Output: true

## Approach

- Two-function DFS approach: isSubtree checks if subRoot matches at any node in root.
- isSame recursively verifies structure and value equality of two trees.

## Solution

```js
function isSubtree(root, subRoot) {
  if (!root) return false;
  
  if (isSame(root, subRoot)) return true;
  
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSame(s, t) {
  if (!s && !t) return true;
  if (!s || !t) return false;
  if (s.val !== t.val) return false;
  
  return isSame(s.left, t.left) && isSame(s.right, t.right);
}

const root = { val: 3, left: { val: 4, left: null, right: null }, right: { val: 5, left: null, right: null } };
const subRoot = { val: 4, left: null, right: null };
console.log(isSubtree(root, subRoot)); // true
```

## Time Complexity

- O(m * n) worst case where m = nodes in root, n = nodes in subRoot

## Space Complexity

- O(h) for recursion stack where h = height of tree

## Notes

- The isSame function must verify both structure and values match exactly.
- Must check both children recursively.
- Subtree means entire structure must match, not just some nodes.

