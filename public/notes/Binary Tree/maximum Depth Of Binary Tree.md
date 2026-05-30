# maximum Depth Of Binary Tree

## Problem Statement

Describe the problem statement for **maximum Depth Of Binary Tree** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Maximum Depth of Binary Tree
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree’s maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * Using Depth First Search(DFS), we are calculating maximum height of tree as recursively.
	- Recursively calculate the height of the tree to the left of the root.
	- Recursively calculate the height of the tree to the right of the root.
	- Pick the larger height from the two answers and add one to it (to account for the root node).
 * Solution here-> https://jsdiet.com/maximum-depth-of-binary-tree-leetcode-solution/
 */
 /*   Approach
    - Use DFS (Depth First Search).
    - The maximum depth of a tree =
        1 + max(depth of left subtree, depth of right subtree).
    - Base case: If node is null, return 0.

    Steps
    - If the tree is empty (root == null), return 0.
    - Recursively calculate:
        - Left depth = max depth of left subtree.
        - Right depth = max depth of right subtree.
    - Answer = 1 + Math.max(leftDepth, rightDepth).
*/

// Recursive DFS
function maxDepth(root) {
  if (root === null) return 0;
  // 1 for current node + max depth of subtrees
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

// Iterative BFS (level order)
function maxDepthBFS(root) {
  if (root === null) return 0;
  const queue = [root];
  let depth = 0;

  while (queue.length > 0) {
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift(); // for production, consider using a dequeue for O(1) pop
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    depth++;
  }
  return depth;
}

// build a test tree:
//      1
//     / \
//    2   3
//   /
//  4
const root = new TreeNode(1,
  new TreeNode(2, new TreeNode(4), null),
  new TreeNode(3)
);

console.log(maxDepth(root));     // 3
console.log(maxDepthBFS(root));  // 3


// Construct Tree

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

    insert(values) {
        const queue = [this];
        let i = 0;
        while (queue.length > 0) {
            let current = queue.shift();
            for (let side of ["left", "right"]) {
                if (!current[side]) {
                    if (values[i] !== null) {
                        current[side] = new TreeNode(values[i]);
                    }
                    i++;
                    if (i >= values.length) return this;
                }
                if (current[side]) queue.push(current[side]);
            }
        }
        return this;
    }
}

const tree = new TreeNode(1);
tree.insert([2, 3, null, 5, null, 4]);


// Execute using DFS
let val = maxDepth(tree);
console.log(val);

/**
 * In the best case of time complexity, we can achieve by O(logn), since we are using binary tree to divide and conquer approach. In Worst case, we might need to traverse all nodes of the tree, so in that case we will be having O(n) time complexity.
 * As we are using recursive approach, our Space complexity will be O(n).
 * DFS is better approach compare to BFS, while finding depth of tree.
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
