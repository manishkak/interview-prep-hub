const e=`\uFEFF# tree DFSTraversal

## Problem Statement

Depth-First Search (DFS) traversals of binary tree in three orders: Inorder (Left-Node-Right), Preorder (Node-Left-Right), Postorder (Left-Right-Node).

## Examples

- Input: Tree with root 1, left subtree (2, 4, 8, 5), right subtree (3, 6, 9, 10, 7)
  Output: 
  - Inorder: 8, 4, 2, 5, 1, 9, 6, 10, 3, 7
  - Preorder: 1, 2, 4, 8, 5, 3, 6, 9, 10, 7
  - Postorder: 8, 4, 5, 2, 9, 10, 6, 7, 3, 1

## Approach

- Recursive DFS with three visit orderings.
- Inorder: process left, then node, then right (gives BST sorted order).
- Preorder: process node first, then left, then right (useful for copying tree).
- Postorder: process left and right, then node (useful for deletion).

## Solution

\`\`\`js
const inOrderTraversal = (node, cb) => {
  if (node !== undefined) {
    inOrderTraversal(node.left, cb);
    cb(node.value);
    inOrderTraversal(node.right, cb);
  }
};

const preOrderTraversal = (node, cb) => {
  if (node !== undefined) {
    cb(node.value);
    preOrderTraversal(node.left, cb);
    preOrderTraversal(node.right, cb);
  }
};

const postOrderTraversal = (node, cb) => {
  if (node !== undefined) {
    postOrderTraversal(node.left, cb);
    postOrderTraversal(node.right, cb);
    cb(node.value);
  }
};

const tree = { value: 1, left: { value: 2, left: null, right: null }, right: { value: 3, left: null, right: null } };
console.log("Inorder: ");
inOrderTraversal(tree, console.log); // 2, 1, 3
\`\`\`

## Time Complexity

- O(n) where n is number of nodes; each node visited once

## Space Complexity

- O(h) for recursion stack where h is tree height

## Notes

- Inorder on BST gives sorted order.
- Preorder useful for copying tree or serialization.
- Postorder useful for deletion operations.
- Choose based on problem requirements.\r
\r
`;export{e as default};
