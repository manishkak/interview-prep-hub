# binary Tree Right Side View

## Problem Statement

Given a binary tree, return all values visible from the right side when looking at the tree from right to left. In other words, return the rightmost node value at each level.

## Examples

- Input: [1, 2, 3, null, 5, null, 4]
  Output: [1, 3, 4] (rightmost at each level)
- Input: [1, null, 3]
  Output: [1, 3]

## Approach

- Use BFS level-order traversal with queue.
- At each level, process all nodes and record the last (rightmost) node value.
- Continue for next level.

## Solution

```js
function rightSideView(root) {
  if (!root) return [];
  
  const result = [];
  const queue = [root];
  
  while (queue.length > 0) {
    const levelSize = queue.length;
    let rightmost = null;
    
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      rightmost = node.val;
      
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    
    result.push(rightmost);
  }
  
  return result;
}

const tree = { val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } };
console.log(rightSideView(tree)); // [1, 3]
```

## Time Complexity

- O(n) where n is number of nodes

## Space Complexity

- O(w) where w is maximum width (nodes at widest level)

## Notes

- Record last node at each level (automatically rightmost in BFS).
- Alternative: use DFS with level tracking and depth-first map.
- Key insight: rightmost node is always the last one processed in BFS.

