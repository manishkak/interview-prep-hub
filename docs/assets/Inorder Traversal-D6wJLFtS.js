const r=`# Inorder Traversal\r
\r
## Problem Statement\r
Print the inorder traversal of a binary tree.\r
\r
## Examples\r
\r
\`\`\`txt\r
Input: root = [1,null,2,3]\r
Output: [1,3,2]\r
\`\`\`\r
\r
## Approach\r
Use recursion or a stack to traverse left subtree, visit the node, then traverse right subtree.\r
\r
## Solution\r
\r
\`\`\`ts\r
class TreeNode {\r
  val: number\r
  left: TreeNode | null\r
  right: TreeNode | null\r
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {\r
    this.val = val === undefined ? 0 : val\r
    this.left = left === undefined ? null : left\r
    this.right = right === undefined ? null : right\r
  }\r
}\r
\r
function inorderTraversal(root: TreeNode | null): number[] {\r
  const result: number[] = []\r
  const stack: TreeNode[] = []\r
  let node: TreeNode | null = root\r
\r
  while (node || stack.length) {\r
    while (node) {\r
      stack.push(node)\r
      node = node.left\r
    }\r
    node = stack.pop() || null\r
    if (!node) break\r
    result.push(node.val)\r
    node = node.right\r
  }\r
\r
  return result\r
}\r
\`\`\`\r
\r
## Time Complexity\r
O(n)\r
\r
## Space Complexity\r
O(n)\r
\r
## Notes\r
- Iterative traversal avoids recursion for deep trees.\r
- Visit left, node, then right.\r
`;export{r as default};
