const e=`\uFEFF# simple Treein JS

## Problem Statement

Basic binary tree implementation demonstrating TreeNode class definition and manual tree construction.

## Examples

- Input: Create tree with root 1, left subtree (2, 4, 5), right subtree (3, 6)
  Output: Tree object with proper node references

## Approach

- Direct class instantiation and manual node assignment using left and right pointers.
- Create nodes individually and link them together.

## Solution

\`\`\`js
class Tree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let tree = new Tree(1);
tree.left = new Tree(2);
tree.right = new Tree(3);
tree.left.left = new Tree(4);
tree.left.right = new Tree(5);
tree.right.left = new Tree(6);

console.log(tree);
\`\`\`

## Time Complexity

- N/A (construction operation)

## Space Complexity

- O(n) for n nodes

## Notes

- Foundational structure for binary trees.
- Each node has left and right child pointers initialized to null.
- Can be extended with methods like insert, search, delete, etc.\r
\r
`;export{e as default};
