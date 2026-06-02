# complete Binary Tree

## Problem Statement

A complete binary tree is a binary tree in which all levels are fully filled except possibly the last level, which is filled from left to right. Determine if a given binary tree is complete.

## Examples

- Input: [1, 2, 3, 4, 5, 6]
  Output: true (all levels fully filled, last level filled left-to-right)
- Input: [1, 2, 3, 4, 5, null, 7]
  Output: false (last level has gap - 7 without 6)

## Approach

- Use BFS level-order traversal.
- Track nodes with null children.
- Once a node with null child is encountered, all remaining nodes must be null.
- If any non-null node appears after null node, tree is incomplete.

## Solution

```js
function isCompleteTree(root) {
  if (!root) return true;
  
  const queue = [root];
  let nullFound = false;
  
  while (queue.length > 0) {
    const node = queue.shift();
    
    if (!node) {
      nullFound = true;
    } else {
      if (nullFound) return false;
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  
  return true;
}

const tree = { val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } };
console.log(isCompleteTree(tree)); // true
```

## Time Complexity

- O(n) where n is number of nodes

## Space Complexity

- O(w) where w is maximum width; O(n) worst case

## Notes

- Complete tree has all levels filled except possibly last level.
- Last level filled left-to-right means no gaps.
- Key: once null found, no more non-null nodes can appear.

