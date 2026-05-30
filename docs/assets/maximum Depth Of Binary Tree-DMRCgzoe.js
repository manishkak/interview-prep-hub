const e=`# maximum Depth Of Binary Tree

## Problem Statement

Describe the problem statement for **maximum Depth Of Binary Tree** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Maximum Depth of Binary Tree\r
 * Given the root of a binary tree, return its maximum depth.\r
 * A binary tree’s maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.\r
 * Using Depth First Search(DFS), we are calculating maximum height of tree as recursively.\r
	- Recursively calculate the height of the tree to the left of the root.\r
	- Recursively calculate the height of the tree to the right of the root.\r
	- Pick the larger height from the two answers and add one to it (to account for the root node).\r
 * Solution here-> https://jsdiet.com/maximum-depth-of-binary-tree-leetcode-solution/\r
 */\r
 /*   Approach\r
    - Use DFS (Depth First Search).\r
    - The maximum depth of a tree =\r
        1 + max(depth of left subtree, depth of right subtree).\r
    - Base case: If node is null, return 0.\r
\r
    Steps\r
    - If the tree is empty (root == null), return 0.\r
    - Recursively calculate:\r
        - Left depth = max depth of left subtree.\r
        - Right depth = max depth of right subtree.\r
    - Answer = 1 + Math.max(leftDepth, rightDepth).\r
*/\r
\r
// Recursive DFS\r
function maxDepth(root) {\r
  if (root === null) return 0;\r
  // 1 for current node + max depth of subtrees\r
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\r
}\r
\r
// Iterative BFS (level order)\r
function maxDepthBFS(root) {\r
  if (root === null) return 0;\r
  const queue = [root];\r
  let depth = 0;\r
\r
  while (queue.length > 0) {\r
    let levelSize = queue.length;\r
    for (let i = 0; i < levelSize; i++) {\r
      const node = queue.shift(); // for production, consider using a dequeue for O(1) pop\r
      if (node.left) queue.push(node.left);\r
      if (node.right) queue.push(node.right);\r
    }\r
    depth++;\r
  }\r
  return depth;\r
}\r
\r
// build a test tree:\r
//      1\r
//     / \\\r
//    2   3\r
//   /\r
//  4\r
const root = new TreeNode(1,\r
  new TreeNode(2, new TreeNode(4), null),\r
  new TreeNode(3)\r
);\r
\r
console.log(maxDepth(root));     // 3\r
console.log(maxDepthBFS(root));  // 3\r
\r
\r
// Construct Tree\r
\r
class TreeNode {\r
    constructor(val) {\r
        this.val = val;\r
        this.left = null;\r
        this.right = null;\r
    }\r
\r
    insert(values) {\r
        const queue = [this];\r
        let i = 0;\r
        while (queue.length > 0) {\r
            let current = queue.shift();\r
            for (let side of ["left", "right"]) {\r
                if (!current[side]) {\r
                    if (values[i] !== null) {\r
                        current[side] = new TreeNode(values[i]);\r
                    }\r
                    i++;\r
                    if (i >= values.length) return this;\r
                }\r
                if (current[side]) queue.push(current[side]);\r
            }\r
        }\r
        return this;\r
    }\r
}\r
\r
const tree = new TreeNode(1);\r
tree.insert([2, 3, null, 5, null, 4]);\r
\r
\r
// Execute using DFS\r
let val = maxDepth(tree);\r
console.log(val);\r
\r
/**\r
 * In the best case of time complexity, we can achieve by O(logn), since we are using binary tree to divide and conquer approach. In Worst case, we might need to traverse all nodes of the tree, so in that case we will be having O(n) time complexity.\r
 * As we are using recursive approach, our Space complexity will be O(n).\r
 * DFS is better approach compare to BFS, while finding depth of tree.\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
