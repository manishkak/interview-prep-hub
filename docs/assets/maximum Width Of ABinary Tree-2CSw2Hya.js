const n=`\uFEFF# maximum Width Of ABinary Tree

## Problem Statement

Find the maximum width of a binary tree. Width at any level is the number of nodes between leftmost and rightmost non-null nodes (including null positions between them), calculated as (rightmost_index - leftmost_index + 1).

## Examples

- Tree: [1, 3, 2, 5, 3, null, 9] → Maximum width: 4 (level with indices 5, 3, null, 9)
- Tree: [1] → Maximum width: 1
- Tree: [1, 1, 1, null, null, null, 1] → Maximum width: 2

## Approach

- Use BFS level-order traversal with index-based positioning.
- Assign index to each node: root = 0, left child = 2*parent_index, right child = 2*parent_index + 1.
- Width at each level = last_node_index - first_node_index + 1.
- Track maximum width.

## Solution

\`\`\`js
function widthOfBinaryTree(root) {
  if (!root) return 0;
  
  let maxWidth = 0;
  const queue = [{ node: root, index: 0n }];
  
  while (queue.length > 0) {
    const levelSize = queue.length;
    const firstIndex = queue[0].index;
    let lastIndex = firstIndex;
    
    for (let i = 0; i < levelSize; i++) {
      const { node, index } = queue.shift();
      lastIndex = index;
      
      if (node.left) {
        queue.push({ node: node.left, index: 2n * index });
      }
      if (node.right) {
        queue.push({ node: node.right, index: 2n * index + 1n });
      }
    }
    
    maxWidth = Math.max(maxWidth, Number(lastIndex - firstIndex + 1n));
  }
  
  return maxWidth;
}

const tree = { val: 1, left: { val: 3, left: null, right: null }, right: { val: 2, left: null, right: null } };
console.log(widthOfBinaryTree(tree)); // 2
\`\`\`

## Time Complexity

- O(n) - visit each node once

## Space Complexity

- O(w) - where w is maximum width (max nodes at any level)

## Notes

- Use BigInt for indices to avoid integer overflow in deep/wide trees.
- Index-based approach handles null nodes without storing them.
- Width includes null positions between leftmost and rightmost non-null nodes.\r
\r
`;export{n as default};
