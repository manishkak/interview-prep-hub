const r=`\uFEFF# tree Traversals

## Problem Statement

BST tree construction and three DFS traversal methods (Preorder, Inorder, Postorder) implemented as class methods.

## Examples

- Input: BST with values: 30 (root), 50, 20, 14, 44, 34, 26, 10, 19, 54
  Output:
  - Preorder: 30, 20, 14, 10, 19, 26, 24, 50, 44, 34, 54
  - Inorder: 10, 14, 19, 20, 26, 34, 44, 50, 54
  - Postorder: 10, 19, 14, 26, 20, 34, 44, 54, 50, 30

## Approach

- Class-based BST implementation with insert method.
- Three traversal method variants using recursive DFS.

## Solution

\`\`\`js
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  
  preorderTrav(root) {
    if (root !== null) {
      console.log(root.value);
      this.preorderTrav(root.left);
      this.preorderTrav(root.right);
    }
  }
  
  inorderTrav(root) {
    if (root !== null) {
      this.inorderTrav(root.left);
      console.log(root.value);
      this.inorderTrav(root.right);
    }
  }
  
  postorderTrav(root) {
    if (root !== null) {
      this.postorderTrav(root.left);
      this.postorderTrav(root.right);
      console.log(root.value);
    }
  }
}

const tree = new BinarySearchTree(30);
tree.left = new BinarySearchTree(20);
tree.right = new BinarySearchTree(50);
tree.preorderTrav(tree);
\`\`\`

## Time Complexity

- O(n) where n is number of nodes

## Space Complexity

- O(h) for recursion stack where h is tree height

## Notes

- Inorder traversal of BST yields values in ascending order.
- Preorder preserves tree structure for serialization.
- Postorder processes children before parent.\r
\r
`;export{r as default};
