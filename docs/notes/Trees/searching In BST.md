# searching In BST

## Problem Statement

Describe the problem statement for **searching In BST** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Searching in BST
 * Approach: 
	* Here is a high-level description of the algorithm:
	* Set the currentNode equal to root.
	* If the value to be searched is less than the currentNode's value, then move on to the left subtree, otherwise move on to the right subtree.
	* Repeat until the value at the currentNode is equal to the value searched or it becomes null.
	* Return the currentNode.
 */

search(value) { 
	var currentNode = this.root;
	while (currentNode && (currentNode.val != value)) { 
		if (value < currentNode.val) {
			currentNode = currentNode.leftChild;
		} else { 
			currentNode = currentNode.rightChild;

		}
	}
	return currentNode;
}

// Recursive

search(currentNode, value) {
	//if currentNode IS NOT EQUAL to null
   if (currentNode !== null) {
	   if (value == currentNode.val) {
	 //Value Found! Return the currentNode. 
		   return currentNode;
	   } else if (value < currentNode.val) {
		 //Traverse to the left subtree if value < currentNode.val
		   return this.search(currentNode.leftChild, value)
	   } else {
		   //Traverse to the right subtree if value >= currentNode.val
		   return this.search(currentNode.rightChild, value)
	   }
   } else {
	   return null;
	 //finally if we have reached the Null node
	 //Value Not Found! Return null.
   }

}
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
