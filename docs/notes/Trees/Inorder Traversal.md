# Inorder Traversal

## Problem Statement
Print the inorder traversal of a binary tree.

## Examples

```txt
Input: root = [1,null,2,3]
Output: [1,3,2]
```

## Approach
Use recursion or a stack to traverse left subtree, visit the node, then traverse right subtree.

## Solution

```ts
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = []
  const stack: TreeNode[] = []
  let node: TreeNode | null = root

  while (node || stack.length) {
    while (node) {
      stack.push(node)
      node = node.left
    }
    node = stack.pop() || null
    if (!node) break
    result.push(node.val)
    node = node.right
  }

  return result
}
```

## Time Complexity
O(n)

## Space Complexity
O(n)

## Notes
- Iterative traversal avoids recursion for deep trees.
- Visit left, node, then right.
