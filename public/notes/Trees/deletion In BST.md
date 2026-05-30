# deletion In BST

## Problem Statement

Describe the problem statement for **deletion In BST** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Deletion in Binary Search Tree
	* 1. Deleting an Empty Tree
	* 2. Deleting a Leaf Node
	* 3. Deleting a Node with One Child
	* 4. Deleting a Node with Two Children - From the given node to be deleted, find either the node with the smallest value in the right subtree or the node with the largest value in the left subtree.
	Suppose you want to find the smallest value in the right subtree, you do this by moving on to every node’s left child until the last left child is reached.
	Replace the node to be deleted with the node found.
	Finally, delete the node found which is either the smallest in the right subtree or the largest node in the left subtree.
 */

class Node {
	constructor(value) {
		this.val = value;
		this.leftChild = null;
		this.rightChild = null;
	}
}

class BinarySearchTree {
	constructor(rootValue) {
		this.root = new Node(rootValue);
	}

	insert(currentNode, newValue) {
		if (currentNode === null) {
			currentNode = new Node(newValue);
		} else if (newValue < currentNode.val) {
			currentNode.leftChild = this.insert(currentNode.leftChild, newValue);
		} else {
			currentNode.rightChild = this.insert(currentNode.rightChild, newValue);
		}
		return currentNode;
	}

	insertBST(newValue) {
		if(this.root==null){
			this.root=new Node(newValue);
			return;
		}
		this.insert(this.root, newValue);
	}

	preOrderPrint(currentNode) {
		if (currentNode !== null) {
			console.log(currentNode.val);
			this.preOrderPrint(currentNode.leftChild);
			this.preOrderPrint(currentNode.rightChild);
		}

	}

	inOrderPrint(currentNode) {
		if (currentNode !== null) {
			this.inOrderPrint(currentNode.leftChild);
			console.log(currentNode.val);
			this.inOrderPrint(currentNode.rightChild);
		}

	}
	postOrderPrint(currentNode) {
		if (currentNode !== null) {
			this.postOrderPrint(currentNode.leftChild);
			this.postOrderPrint(currentNode.rightChild);
			console.log(currentNode.val);
		}

	}
	search(currentNode, value) {

		if (currentNode !== null) {
			if (value == currentNode.val) {

				return currentNode;
			} else if (value < currentNode.val) {
				return this.search(currentNode.leftChild, value)
			} else {
				return this.search(currentNode.rightChild, value)
			}
		} else {
			return null;
		}

	}

	searchBST(value) {
		return this.search(this.root, value);
	}
	delete(currentNode, value) {
		if (currentNode == null) {
			return false;
		}

		var parentNode;
		while (currentNode && (currentNode.val != value)) {

			parentNode = currentNode;
			if (value < currentNode.val) {

				currentNode = currentNode.leftChild;
			} else {
				currentNode = currentNode.rightChild;

			}

		}

		if (currentNode === null) {
			return false;
		} else if (currentNode.leftChild == null && currentNode.rightChild == null) {
			if(currentNode.val==this.root.val){
				this.root=null;
				return true;
			}
			else if (currentNode.val < parentNode.val) {
				parentNode.leftChild = null;
				return true;
			} else {
				parentNode.rightChild = null;
				return true;
			}
		} else if (currentNode.rightChild == null) {
			if(currentNode.val==this.root.val){
				this.root=currentNode.leftChild;
				return true;
			}
			else if (currentNode.leftChild.val < parentNode.val) {
				parentNode.leftChild = currentNode.leftChild;
				return true;
			} else {
				parentNode.rightChild = currentNode.leftChild;
				return true;
			}

		} else if (currentNode.leftChild == null) {
			if(currentNode.val==this.root.val){
				this.root = currentNode.rightChild;
				return true;
			}
			else if (currentNode.rightChild.val < parentNode.val) {
				parentNode.leftChild = currentNode.rightChild;
				return true;
			} else {
				parentNode.rightChild = currentNode.rightChild;
				return true;
			}
		} else { 
			var minRight = currentNode.rightChild;
			while (minRight.leftChild !== null) {
				minRight = minRight.leftChild;
			}
			var temp=minRight.val;
			this.delete(this.root, minRight.val);
			currentNode.val = temp;
			return true;
		}
	}

}

var BST = new BinarySearchTree(6);
console.log("The root val for BST : ", BST.root.val)
BST.insertBST(4);
BST.insertBST(9);
BST.insertBST(5);
BST.insertBST(2);
BST.insertBST(8);
BST.insertBST(12);
BST.insertBST(3);
BST.insertBST(1);

BST.inOrderPrint(BST.root);
console.log("Delete 9!")
console.log(BST.delete(BST.root, 9));
BST.inOrderPrint(BST.root);
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
