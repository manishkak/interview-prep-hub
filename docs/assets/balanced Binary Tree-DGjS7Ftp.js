const e=`\uFEFF# balanced Binary Tree

## Problem Statement

A balanced binary tree is a binary tree in which the difference between the heights of the left and right subtrees of every node is at most 1. Determine if a given binary tree is balanced.

## Examples

- Input: Tree [3, 9, 20, null, null, 15, 7]
  Output: true (height difference at each node ≤ 1)
- Input: Tree [1, 2, 2, 3, 3, null, null, 4, 4]
  Output: false (leaf nodes differ by more than 1 level)

## Approach

- Use DFS post-order traversal to calculate height.
- At each node, check if left and right subtree heights differ by more than 1.
- Return both height and balance status together.
- If subtree is unbalanced, propagate false upward.

## Solution

\`\`\`js
function isBalanced(root) {
  function checkBalance(node) {
    if (!node) return { balanced: true, height: 0 };
    
    const left = checkBalance(node.left);
    const right = checkBalance(node.right);
    
    const isCurrentBalanced = left.balanced && right.balanced && Math.abs(left.height - right.height) <= 1;
    const height = Math.max(left.height, right.height) + 1;
    
    return { balanced: isCurrentBalanced, height };
  }
  
  return checkBalance(root).balanced;
}

const tree = { val: 3, left: { val: 9, left: null, right: null }, right: { val: 20, left: null, right: null } };
console.log(isBalanced(tree)); // true
\`\`\`

## Time Complexity

- O(n) where n is number of nodes; each node visited once

## Space Complexity

- O(h) for recursion stack where h is tree height

## Notes

- Early termination: if any subtree is unbalanced, return false immediately.
- Efficient to combine height calculation with balance check.
- Alternative: check balance recursively without height combination (less efficient O(n²)).\r
\r
`;export{e as default};
