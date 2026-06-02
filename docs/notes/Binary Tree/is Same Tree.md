# is Same Tree

## Problem Statement

Given the roots of two binary trees p and q, check if they are the same. Two trees are the same if they are structurally identical and the nodes have the same values.

## Examples

- Input: p = [1, 2, 3], q = [1, 2, 3]
  Output: true (same structure and values)
- Input: p = [1, 2], q = [1, null, 2]
  Output: false (different structure)

## Approach

- Recursive DFS to compare both trees simultaneously.
- Check if current nodes are equal in value and both children are same.
- Base cases: both null (same), one null (different), values differ (different).

## Solution

```js
function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

const p = { val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } };
const q = { val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } };
console.log(isSameTree(p, q)); // true
```

## Time Complexity

- O(min(m, n)) where m and n are sizes of the two trees

## Space Complexity

- O(min(h1, h2)) for recursion stack where h1 and h2 are tree heights

## Notes

- Compare structure and values simultaneously.
- Early exit if values differ at any node.
- Handles all edge cases with clear base conditions.

