const e=`# reverse Level Order Traversal

## Problem Statement

Describe the problem statement for **reverse Level Order Traversal** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Reverse Level Order Traversal\r
 * The only difference will be that instead of appending the current level at the end, we will append the current level at the beginning of the result list.\r
 * https://www.educative.io/courses/grokking-the-coding-interview/m2N6GwARL8r\r
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
  function reverseLevelOrderTraversal(tree) {\r
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
	  result.unshift(currentLevel);   //ONLY THIS LINE CHANGE FROM THE ORIGINAL BFS\r
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
  console.log(\`Reverse Level order traversal: \${reverseLevelOrderTraversal(tree)}\`);
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
