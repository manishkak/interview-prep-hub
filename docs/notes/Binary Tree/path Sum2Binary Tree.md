# path Sum2Binary Tree

## Problem Statement

Given a binary tree and a target sum, find all root-to-leaf paths where each path's sum equals the given target sum. Return all such paths as a list of lists.

## Examples

- Input: tree = [1, 2, 3, null, 5, null, 4], targetSum = 8
  Output: All paths summing to 8
- Input: tree = [5, 4, 8], targetSum = 22
  Output: [[5, 4, 8]]

## Approach

- Use DFS with backtracking to maintain current path array.
- Add node values as we traverse, backtrack with current.pop() after exploring both subtrees.
- Correctly handle multiple paths by restoring path state.

## Solution

```js
function pathSum(root, targetSum) {
  let result = [];
  
  function dfs(node, current, targetSum) {
    if (!node) return;
    
    current.push(node.val);
    
    if (node.val === targetSum && !node.left && !node.right) {
      result.push([...current]);
    } else {
      const remainingSum = targetSum - node.val;
      dfs(node.left, current, remainingSum);
      dfs(node.right, current, remainingSum);
    }
    
    current.pop();
  }
  
  dfs(root, [], targetSum);
  return result;
}

const tree = { val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } };
console.log(pathSum(tree, 4));
```

## Time Complexity

- O(n) where n is number of nodes; every node is visited once

## Space Complexity

- O(h) for recursion stack where h is tree height

## Notes

- Critical: Use current.pop() for backtracking to remove nodes before exploring other branches.
- Without backtracking, path array would accumulate incorrect nodes from previous recursive calls.
- Make a copy with [...current] when storing valid paths.

