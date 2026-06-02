const n=`\uFEFF# invert Binary Tree

## Problem Statement

Invert a binary tree. After inversion, all left children become right children and vice versa.

## Examples

- Input: [4, 2, 7, 1, 3, 6, 9]
  Output: [4, 7, 2, 9, 6, 3, 1]
- Input: [2, 1, 3]
  Output: [2, 3, 1]

## Approach

- Recursive DFS: swap left and right children at each node.
- Process both subtrees recursively.

## Solution

\`\`\`js
function invertTree(root) {
  if (!root) return null;
  
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  
  invertTree(root.left);
  invertTree(root.right);
  
  return root;
}

const tree = { val: 4, left: { val: 2, left: null, right: null }, right: { val: 7, left: null, right: null } };
console.log(invertTree(tree));
\`\`\`

## Time Complexity

- O(n) where n is number of nodes; each node visited once

## Space Complexity

- O(h) for recursion stack where h is tree height

## Notes

- Simple swap operation at each node.
- Can be done iteratively with queue/stack as well.
- Useful for understanding tree traversal and modification.\r
\r
`;export{n as default};
