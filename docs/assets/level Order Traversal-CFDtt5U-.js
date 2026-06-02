const e=`\uFEFF# level Order Traversal

## Problem Statement

Given a binary tree, return the level order traversal (breadth-first) as a list of lists, where each sublist contains all node values at that depth level from left to right.

## Examples

- Input: [3, 9, 20, null, null, 15, 7]
  Output: [[3], [9, 20], [15, 7]]
- Input: [1]
  Output: [[1]]

## Approach

- Use queue for BFS traversal.
- For each level, process exactly levelSize nodes.
- Collect node values into current level array.
- Add all children to queue for next iteration.

## Solution

\`\`\`js
function levelOrder(root) {
  if (!root) return [];
  
  const result = [];
  const queue = [root];
  
  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];
    
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);
      
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    
    result.push(currentLevel);
  }
  
  return result;
}

const tree = { val: 3, left: { val: 9, left: null, right: null }, right: { val: 20, left: null, right: null } };
console.log(levelOrder(tree)); // [[3], [9, 20]]
\`\`\`

## Time Complexity

- O(n) where n is number of nodes; each node visited once

## Space Complexity

- O(w) where w is maximum width; O(n) worst case

## Notes

- Critical to record levelSize at loop start to process exactly one level.
- Without levelSize, would flatten all nodes instead of grouping by level.
- Alternative: use recursion with depth parameter.\r
\r
`;export{e as default};
