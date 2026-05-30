# kth Maximum Valuein BST

## Problem Statement

Describe the problem statement for **kth Maximum Valuein BST** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * kth Maximum Value in Binary Search Tree
 * Problem: Given the root to a Binary Search Tree and a number "k", write a function to find the kth maximum value in the tree
 * Approach: In this solution, we sort the tree using the variation of the in-order traversal and index and return the kth last element.
 * TC: This solution is in O(n) where is the number of nodes in the tree
 */

function findKthMax(rootNode,k)
{
  var tree = [];
  tree=inOrderTraverse(rootNode, tree);
  console.log(tree);
  if(((tree.length)-k) >=0 && k>0)
  { 
    return tree[tree.length-k]
  }
  return null;
}
//Helper recursive function to traverse the tree inorder
function inOrderTraverse(rootNode,tree)
{
  if( rootNode !== null)
  {
    tree=inOrderTraverse(rootNode.leftChild,tree)
    tree.push(rootNode.val)
    tree=inOrderTraverse(rootNode.rightChild,tree)
  }
  
  return tree;
}

var BST = new BinarySearchTree(6)
BST.insertBST(1)
BST.insertBST(133)
BST.insertBST(12)
console.log(findKthMax(BST.root,3));


// Recursive (In this solution, we traverse the tree using reverse in order traversal, i.e., instead of left to right as in in-order traversal, we go from right to left to reverse the in-order. This is because as we are looking for the kth maximum number, we first have to check the right node, which will be larger in value than the left node.)

function findKthMax(rootNode, k) {
	counter = 0;
	return reverseInOrder(rootNode, k).val;
}

function reverseInOrder(rootNode, k) {
	if (rootNode) {
		var rightChild = reverseInOrder(rootNode.rightChild, k)

		if (rightChild) {
			if (counter == k) {
				return rightChild;
			}

		} else {
			counter++;
			if (k == counter) {
				return rootNode;
			}
			return reverseInOrder(rootNode.leftChild, k)
		}

	}
}

var BST = new BinarySearchTree(6)
BST.insertBST(1)
BST.insertBST(133)
BST.insertBST(12)
console.log(findKthMax(BST.root,3));

/**
 * The worst-case complexity of this solution is the same as the previous solution, i.e., O(n). But for the best-case scenario, when k = 1 and the root node has no right child, then the complexity of this solution is O(1). On the other hand, the best-case scenario for the previous solution had a time complexity of O(n).Therefore, this solution is more efficient than the previous solution​.
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
