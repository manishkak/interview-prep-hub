const e=`# tree BFSTraversal EDUCATIVE

## Problem Statement

Describe the problem statement for **tree BFSTraversal EDUCATIVE** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * BFS code from Educative\r
 * https://www.educative.io/courses/grokking-the-coding-interview/xV7E64m4lnz\r
 */\r
\r
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
class Tree {\r
	constructor(val) {\r
	  this.val = val;\r
	  this.left = null;\r
	  this.right = null;\r
	}\r
  }\r
  \r
  \r
  function breadthFirstTraversal(tree) {\r
	result = [];\r
	if (tree === null) {\r
	  return result;\r
	}\r
  \r
	// const queue = new Deque();\r
	// queue.push(tree);\r
	const queue = [];\r
	queue.push(tree);\r
	while (queue.length > 0) {\r
	  const levelSize = queue.length;\r
	  currentLevel = [];\r
	  for (i = 0; i < levelSize; i++) {\r
		currentNode = queue.shift();\r
		// add the node to the current level\r
		currentLevel.push(currentNode.val);\r
		// insert the children of current node in the queue\r
		if (currentNode.left !== null) {\r
		  queue.push(currentNode.left);\r
		}\r
		if (currentNode.right !== null) {\r
		  queue.push(currentNode.right);\r
		}\r
	  }\r
	  result.push(currentLevel);\r
	}\r
  \r
	return result;\r
  }\r
  \r
  \r
  const tree = new Tree(12);\r
  tree.left = new Tree(7);\r
  tree.right = new Tree(1);\r
  tree.left.left = new Tree(9);\r
  tree.right.left = new Tree(10);\r
  tree.right.right = new Tree(5);\r
  console.log(\`Level order traversal: \${breadthFirstTraversal(tree)}\`);\r
\r
  // Putting an array inside console.log(\`\${arr}\`) will flatten it and change it to a string.
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
