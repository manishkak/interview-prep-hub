const e=`# tree BFSTraversal

## Problem Statement

Describe the problem statement for **tree BFSTraversal** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Breadth First Search aka Level Order Traversal\r
 * Traversal of a tree in a level-by-level order\r
 * Queue is used to keep track of all nodes of one level, before jumping on to the next level\r
 * Space Complexity will be O(W) where W is the max. no. of nodes in any level.\r
 * TC = O(N), N is the no. of nodes in the tree, cos every node is traversed once.\r
 * 1. Push the Root into the Queue\r
 * 2. Keep iterating until the queue is empty.\r
   3. In each iteration, first count the elements in the queue (let’s call it levelSize). We will have these many nodes in the current level.\r
   4. Next, remove levelSize nodes from the queue and push their value in an array to represent the current level.\r
   5. After removing each node from the queue, insert both of its children into the queue.\r
   6. If the queue is not empty, repeat from step 3 for the next level.\r
*/\r
\r
// From ChatGPT->\r
// BFS for Binary Search Tree\r
\r
/* Steps:\r
1. Create a queue and push root node.\r
2. While queue is not empty:\r
  - Remove one node.\r
  - Process it (print or store value).\r
  - Add its left and right children to queue (if present). */\r
\r
class TreeNode {\r
    constructor(value) {\r
        this.value = value;\r
        this.left = null;\r
        this.right = null;\r
    }\r
}\r
\r
function bfs(root) {\r
    if (!root) return [];\r
\r
    let queue = [];\r
    let result = [];\r
\r
    queue.push(root);\r
\r
    while (queue.length > 0) {\r
        let currentNode = queue.shift();\r
        result.push(currentNode.value);\r
\r
        // Add left and right children to the queue\r
        if (currentNode.left) queue.push(currentNode.left);\r
        if (currentNode.right) queue.push(currentNode.right);\r
    }\r
\r
    return result;\r
}\r
\r
// Example usage\r
const root = new TreeNode(10);\r
root.left = new TreeNode(5);\r
root.right = new TreeNode(15);\r
root.left.left = new TreeNode(3);\r
root.left.right = new TreeNode(7);\r
root.right.left = new TreeNode(12);\r
root.right.right = new TreeNode(18);\r
\r
console.log(bfs(root)); // Output: [10, 5, 15, 3, 7, 12, 18]\r
\r
\r
// Solution 2->\r
\r
class Tree {\r
	constructor(value, left, right) {\r
	  this.value = value\r
	  this.left = left\r
	  this.right = right\r
	}\r
  }\r
  \r
  const breadthFirstTraversal = (tree, callback) => {\r
	if (tree == null) {\r
	  return;\r
	}\r
  \r
	let queue = [tree]\r
  \r
	while (queue.length > 0) {\r
	  let item = queue.shift()\r
	  let value = item.value\r
	  callback(value)\r
  \r
	  if (item.left == null && item.right == null) {\r
		continue\r
	  }\r
	  if (item.left != null) {\r
		queue.push(item.left)\r
	  }\r
	  if (item.right != null) {\r
		queue.push(item.right)\r
	  }\r
	}\r
  }\r
  \r
  tree = new Tree(\r
	  1,\r
	  new Tree(2, new Tree(4, new Tree(8)), new Tree(5)),\r
	  new Tree(3, new Tree(6, new Tree(9), new Tree(10)), new Tree(7))\r
	);\r
  \r
  breadthFirstTraversal(tree, console.log)\r
  // Will print "1,2,3,4,5,6,7,8,9,10"\r
\r
  treeTwo = new Tree(\r
	12,\r
	new Tree(7, new Tree(9)),\r
	new Tree(1, new Tree(10), new Tree(5))\r
  );\r
  // Will print "12,7,1,9,10,5"
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
