const t=`# path Sum1Binary Tree

## Problem Statement

Describe the problem statement for **path Sum1Binary Tree** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Binary Tree Path Sum 1\r
 * Problem: Given a binary tree and a target sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.\r
Output: "Return true" if such a path exists, otherwise return false.\r
Key Point: This problem only checks whether such a path exists.\r
 Approach (DFS Recursive)\r
\r
1. Base Case – Empty Node\r
  If the current node is null, return false (no path possible).\r
2. Check Leaf Node\r
  If you’re at a leaf node (node.left == null && node.right == null):\r
    Check if targetSum == node.val.\r
    If yes → return true (a valid path exists).\r
    Otherwise → return false.\r
3. Recursive Step\r
  Subtract the current node’s value from targetSum → newTarget = targetSum - node.val.\r
  Recurse on left and right child with this updated target.\r
4. Combine Results\r
  Return true if either left or right subtree returns true.\r
  (return dfs(node.left, newTarget) || dfs(node.right, newTarget))\r
*/\r
/*\r
Time: O(n), where n = number of nodes (you may visit all nodes in the worst case).\r
Space:\r
O(h) for recursion stack, h = tree height.\r
Worst-case skewed tree: O(n).\r
Best-case balanced tree: O(log n). */\r
\r
/**\r
 * Solution 2 -> Chatgpt sol\r
 */\r
\r
function hasPathSum(root, targetSum) {\r
  if (!root) return false;\r
\r
  // this !root.left && !root.right will make sure that its a leaf node, so this step in important\r
  // if it's a leaf node and we've also got the current target\r
  if (!root.left && !root.right && root.val === targetSum) {\r
      return true;\r
  }\r
\r
  const remainingSum = targetSum - root.val;\r
  return hasPathSum(root.left, remainingSum) || hasPathSum(root.right, remainingSum);\r
}\r
\r
\r
// Solution 1:\r
\r
 var hasPathSum = function(root, targetSum) {\r
    if (root === null) {\r
    return false;\r
  }\r
  const currentSum = 0;\r
  return checkSum(root, targetSum, currentSum);\r
};\r
\r
const checkSum = (root, targetSum, currentSum) => {\r
  if (root === null) {\r
    return false;\r
  }\r
  currentSum = currentSum + root.val;\r
  if (root.left === null && root.right === null) {\r
    return currentSum === targetSum;\r
  }\r
\r
  if (root.left) {\r
    let bool = checkSum(root.left, targetSum, currentSum);\r
    if (bool) {\r
      return bool;\r
    }\r
  }\r
  if (root.right) {\r
    let bool = checkSum(root.right, targetSum, currentSum);\r
    if (bool) {\r
      return bool;\r
    }\r
  }\r
    return false;\r
};\r
\r
  \r
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
tree.insert([2, 3, null, 5, null, 3]);\r
// console.log(tree)\r
\r
let val = hasPathSum(tree,6);\r
console.log(val);
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{t as default};
