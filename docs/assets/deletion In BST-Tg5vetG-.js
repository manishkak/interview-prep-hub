const t=`# deletion In BST

## Problem Statement

Describe the problem statement for **deletion In BST** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Deletion in Binary Search Tree\r
	* 1. Deleting an Empty Tree\r
	* 2. Deleting a Leaf Node\r
	* 3. Deleting a Node with One Child\r
	* 4. Deleting a Node with Two Children - From the given node to be deleted, find either the node with the smallest value in the right subtree or the node with the largest value in the left subtree.\r
	Suppose you want to find the smallest value in the right subtree, you do this by moving on to every node’s left child until the last left child is reached.\r
	Replace the node to be deleted with the node found.\r
	Finally, delete the node found which is either the smallest in the right subtree or the largest node in the left subtree.\r
 */\r
\r
class Node {\r
	constructor(value) {\r
		this.val = value;\r
		this.leftChild = null;\r
		this.rightChild = null;\r
	}\r
}\r
\r
class BinarySearchTree {\r
	constructor(rootValue) {\r
		this.root = new Node(rootValue);\r
	}\r
\r
	insert(currentNode, newValue) {\r
		if (currentNode === null) {\r
			currentNode = new Node(newValue);\r
		} else if (newValue < currentNode.val) {\r
			currentNode.leftChild = this.insert(currentNode.leftChild, newValue);\r
		} else {\r
			currentNode.rightChild = this.insert(currentNode.rightChild, newValue);\r
		}\r
		return currentNode;\r
	}\r
\r
	insertBST(newValue) {\r
		if(this.root==null){\r
			this.root=new Node(newValue);\r
			return;\r
		}\r
		this.insert(this.root, newValue);\r
	}\r
\r
	preOrderPrint(currentNode) {\r
		if (currentNode !== null) {\r
			console.log(currentNode.val);\r
			this.preOrderPrint(currentNode.leftChild);\r
			this.preOrderPrint(currentNode.rightChild);\r
		}\r
\r
	}\r
\r
	inOrderPrint(currentNode) {\r
		if (currentNode !== null) {\r
			this.inOrderPrint(currentNode.leftChild);\r
			console.log(currentNode.val);\r
			this.inOrderPrint(currentNode.rightChild);\r
		}\r
\r
	}\r
	postOrderPrint(currentNode) {\r
		if (currentNode !== null) {\r
			this.postOrderPrint(currentNode.leftChild);\r
			this.postOrderPrint(currentNode.rightChild);\r
			console.log(currentNode.val);\r
		}\r
\r
	}\r
	search(currentNode, value) {\r
\r
		if (currentNode !== null) {\r
			if (value == currentNode.val) {\r
\r
				return currentNode;\r
			} else if (value < currentNode.val) {\r
				return this.search(currentNode.leftChild, value)\r
			} else {\r
				return this.search(currentNode.rightChild, value)\r
			}\r
		} else {\r
			return null;\r
		}\r
\r
	}\r
\r
	searchBST(value) {\r
		return this.search(this.root, value);\r
	}\r
	delete(currentNode, value) {\r
		if (currentNode == null) {\r
			return false;\r
		}\r
\r
		var parentNode;\r
		while (currentNode && (currentNode.val != value)) {\r
\r
			parentNode = currentNode;\r
			if (value < currentNode.val) {\r
\r
				currentNode = currentNode.leftChild;\r
			} else {\r
				currentNode = currentNode.rightChild;\r
\r
			}\r
\r
		}\r
\r
		if (currentNode === null) {\r
			return false;\r
		} else if (currentNode.leftChild == null && currentNode.rightChild == null) {\r
			if(currentNode.val==this.root.val){\r
				this.root=null;\r
				return true;\r
			}\r
			else if (currentNode.val < parentNode.val) {\r
				parentNode.leftChild = null;\r
				return true;\r
			} else {\r
				parentNode.rightChild = null;\r
				return true;\r
			}\r
		} else if (currentNode.rightChild == null) {\r
			if(currentNode.val==this.root.val){\r
				this.root=currentNode.leftChild;\r
				return true;\r
			}\r
			else if (currentNode.leftChild.val < parentNode.val) {\r
				parentNode.leftChild = currentNode.leftChild;\r
				return true;\r
			} else {\r
				parentNode.rightChild = currentNode.leftChild;\r
				return true;\r
			}\r
\r
		} else if (currentNode.leftChild == null) {\r
			if(currentNode.val==this.root.val){\r
				this.root = currentNode.rightChild;\r
				return true;\r
			}\r
			else if (currentNode.rightChild.val < parentNode.val) {\r
				parentNode.leftChild = currentNode.rightChild;\r
				return true;\r
			} else {\r
				parentNode.rightChild = currentNode.rightChild;\r
				return true;\r
			}\r
		} else { \r
			var minRight = currentNode.rightChild;\r
			while (minRight.leftChild !== null) {\r
				minRight = minRight.leftChild;\r
			}\r
			var temp=minRight.val;\r
			this.delete(this.root, minRight.val);\r
			currentNode.val = temp;\r
			return true;\r
		}\r
	}\r
\r
}\r
\r
var BST = new BinarySearchTree(6);\r
console.log("The root val for BST : ", BST.root.val)\r
BST.insertBST(4);\r
BST.insertBST(9);\r
BST.insertBST(5);\r
BST.insertBST(2);\r
BST.insertBST(8);\r
BST.insertBST(12);\r
BST.insertBST(3);\r
BST.insertBST(1);\r
\r
BST.inOrderPrint(BST.root);\r
console.log("Delete 9!")\r
console.log(BST.delete(BST.root, 9));\r
BST.inOrderPrint(BST.root);
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{t as default};
