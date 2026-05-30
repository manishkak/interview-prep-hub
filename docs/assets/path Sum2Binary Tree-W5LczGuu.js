const t=`# path Sum2Binary Tree

## Problem Statement

Describe the problem statement for **path Sum2Binary Tree** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Path Sum II\r
 * Problem: Given a binary tree and a target sum, "find all" root-to-leaf paths where each path's sum equals the given sum.\r
Output: Return a list of all such paths. Each path should be represented as a list of node values.\r
Key Point: This problem requires you to return all the paths that satisfy the condition, not just check if one exists.\r
 * Find all paths that match the sum.\r
 * https://alkeshghorpade.me/post/leetcode-path-sum-ii\r
 */\r
\r
// Time Complexity:\r
// O(n): Every node is visited once.\r
// Space Complexity:\r
// O(h): The height of the recursion stack, where h is the height of the tree\r
\r
/**Final Solution */\r
// best explanation-> https://www.youtube.com/watch?v=4-IHOsNSdLE\r
var pathSum = function(root, targetSum) {\r
    let result = [];\r
\r
    var getPathSum = function(root, current, targetSum) {\r
        if (root === null) return;\r
\r
        current.push(root.val);  /**The line current.push(root.val); adds the current node’s value to the path (represented by the current array) as we traverse the binary tree. This is essential because we are constructing potential paths from the root to the leaf nodes */\r
\r
        if (root.val === targetSum && root.left === null && root.right === null) {\r
            result.push([...current]); // Make a copy only when a valid path is found\r
        } else {\r
            let remainingTargetSum = targetSum - root.val;\r
            // this follows a DFS method, keeps going on left subtree till it reaches a leaf node, then backtracks, does current.pop(), and searches on the right node\r
            getPathSum(root.left, current, remainingTargetSum);\r
            getPathSum(root.right, current, remainingTargetSum);\r
        }\r
\r
        current.pop(); // Backtrack\r
        /**We use current.pop() to backtrack in the recursive process.\r
When performing a depth-first traversal, we add nodes to the current path with current.push(root.val). Once a node and its children are processed, we need to remove that node (backtrack) before exploring the next branch, so that the path remains correct for other recursive calls.\r
Without current.pop(), the path would accumulate unnecessary nodes from previous recursive calls, resulting in incorrect paths being explored or returned.*/\r
    }\r
\r
    getPathSum(root, [], targetSum);\r
    return result;\r
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
tree.insert([2, 3, null, 5, null, 4]);\r
// console.log(tree)\r
\r
let val = pathSum(tree,8);\r
console.log(val);\r
\r
/**\r
 * Chatgpt sol\r
 */\r
\r
function pathSum(root, targetSum) {\r
    const result = [];\r
\r
    function dfs(node, currentSum, path) {\r
        if (!node) return;\r
\r
        currentSum += node.val;\r
        path.push(node.val);\r
\r
        if (!node.left && !node.right && currentSum === targetSum) {\r
            result.push([...path]);\r
        } else {\r
            dfs(node.left, currentSum, path);\r
            dfs(node.right, currentSum, path);\r
        }\r
\r
        path.pop();\r
    }\r
\r
    dfs(root, 0, []);\r
    return result;\r
}\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{t as default};
