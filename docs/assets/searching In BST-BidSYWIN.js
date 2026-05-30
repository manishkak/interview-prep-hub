const e=`# searching In BST

## Problem Statement

Describe the problem statement for **searching In BST** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Searching in BST\r
 * Approach: \r
	* Here is a high-level description of the algorithm:\r
	* Set the currentNode equal to root.\r
	* If the value to be searched is less than the currentNode's value, then move on to the left subtree, otherwise move on to the right subtree.\r
	* Repeat until the value at the currentNode is equal to the value searched or it becomes null.\r
	* Return the currentNode.\r
 */\r
\r
search(value) { \r
	var currentNode = this.root;\r
	while (currentNode && (currentNode.val != value)) { \r
		if (value < currentNode.val) {\r
			currentNode = currentNode.leftChild;\r
		} else { \r
			currentNode = currentNode.rightChild;\r
\r
		}\r
	}\r
	return currentNode;\r
}\r
\r
// Recursive\r
\r
search(currentNode, value) {\r
	//if currentNode IS NOT EQUAL to null\r
   if (currentNode !== null) {\r
	   if (value == currentNode.val) {\r
	 //Value Found! Return the currentNode. \r
		   return currentNode;\r
	   } else if (value < currentNode.val) {\r
		 //Traverse to the left subtree if value < currentNode.val\r
		   return this.search(currentNode.leftChild, value)\r
	   } else {\r
		   //Traverse to the right subtree if value >= currentNode.val\r
		   return this.search(currentNode.rightChild, value)\r
	   }\r
   } else {\r
	   return null;\r
	 //finally if we have reached the Null node\r
	 //Value Not Found! Return null.\r
   }\r
\r
}
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
