const e=`# invert Binary Tree

## Problem Statement

Describe the problem statement for **invert Binary Tree** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
// 1. If root is null, return null\r
// 2. Create temp variable and assign it to root.left\r
// 3. Change root.left to equal root.right\r
// 4. Change root.right to equal to temp\r
// 5. invertTree(root.left)\r
// 6. invertTree(root.right)\r
\r
// Time Complexity: O(n)\r
// Space Complexity: O(n)\r
// n is the number of nodes\r
\r
solution from here- https://blog.blakeyeboah.com/invert-binary-tree-with-javascript \r
*/\r
\r
// Iterative solution with O(n) space->\r
// Use a queue for a breadth-first traversal, swapping the left and right children of each node.\r
function invertTree(root) {\r
    if (!root) return null;\r
\r
    const queue = [root];\r
    while (queue.length > 0) {\r
        const node = queue.shift();\r
\r
        // Swap left and right children\r
        [node.left, node.right] = [node.right, node.left];\r
\r
        // Add children to the queue if they exist\r
        if (node.left) queue.push(node.left);\r
        if (node.right) queue.push(node.right);\r
    }\r
\r
    return root;\r
}\r
\r
\r
// Recursive solution with O(n) space->\r
class Tree {\r
	constructor(val) {\r
	  this.val = val;\r
	  this.left = null;\r
	  this.right = null;\r
	}\r
  }\r
// from chatgpt\r
function invertTree(root) {\r
    if (root === null) return null;\r
\r
    // Swap the left and right child\r
    let temp = root.left;\r
    root.left = root.right;\r
    root.right = temp;\r
\r
    // Recursively invert the left and right subtrees\r
    invertTree(root.left);\r
    invertTree(root.right);\r
\r
    return root;\r
}\r
// gpt ends\r
\r
var invertTree = function(tree) {\r
	const reverseNode = node => {\r
		if (node == null) {\r
			return null\r
		}\r
		reverseNode(node.left);\r
		reverseNode(node.right);\r
		let holdLeft = node.left;\r
		node.left = node.right;\r
		node.right = holdLeft;\r
		/**\r
		 * another example: \r
		 * let temp = root.left;\r
		 * Swap the left and right children of the root node:\r
		 * (root.left = root.right), (root.right = temp);\r
		 */\r
		return node;\r
	}\r
console.log(reverseNode(tree));\r
};\r
\r
const tree = new Tree(12);\r
tree.left = new Tree(7);\r
tree.right = new Tree(1);\r
tree.left.left = new Tree(9);\r
tree.right.left = new Tree(10);\r
tree.right.right = new Tree(5);\r
\r
invertTree(tree);
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
