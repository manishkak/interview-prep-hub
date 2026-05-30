const e=`# kth Maximum Valuein BST

## Problem Statement

Describe the problem statement for **kth Maximum Valuein BST** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * kth Maximum Value in Binary Search Tree\r
 * Problem: Given the root to a Binary Search Tree and a number "k", write a function to find the kth maximum value in the tree\r
 * Approach: In this solution, we sort the tree using the variation of the in-order traversal and index and return the kth last element.\r
 * TC: This solution is in O(n) where is the number of nodes in the tree\r
 */\r
\r
function findKthMax(rootNode,k)\r
{\r
  var tree = [];\r
  tree=inOrderTraverse(rootNode, tree);\r
  console.log(tree);\r
  if(((tree.length)-k) >=0 && k>0)\r
  { \r
    return tree[tree.length-k]\r
  }\r
  return null;\r
}\r
//Helper recursive function to traverse the tree inorder\r
function inOrderTraverse(rootNode,tree)\r
{\r
  if( rootNode !== null)\r
  {\r
    tree=inOrderTraverse(rootNode.leftChild,tree)\r
    tree.push(rootNode.val)\r
    tree=inOrderTraverse(rootNode.rightChild,tree)\r
  }\r
  \r
  return tree;\r
}\r
\r
var BST = new BinarySearchTree(6)\r
BST.insertBST(1)\r
BST.insertBST(133)\r
BST.insertBST(12)\r
console.log(findKthMax(BST.root,3));\r
\r
\r
// Recursive (In this solution, we traverse the tree using reverse in order traversal, i.e., instead of left to right as in in-order traversal, we go from right to left to reverse the in-order. This is because as we are looking for the kth maximum number, we first have to check the right node, which will be larger in value than the left node.)\r
\r
function findKthMax(rootNode, k) {\r
	counter = 0;\r
	return reverseInOrder(rootNode, k).val;\r
}\r
\r
function reverseInOrder(rootNode, k) {\r
	if (rootNode) {\r
		var rightChild = reverseInOrder(rootNode.rightChild, k)\r
\r
		if (rightChild) {\r
			if (counter == k) {\r
				return rightChild;\r
			}\r
\r
		} else {\r
			counter++;\r
			if (k == counter) {\r
				return rootNode;\r
			}\r
			return reverseInOrder(rootNode.leftChild, k)\r
		}\r
\r
	}\r
}\r
\r
var BST = new BinarySearchTree(6)\r
BST.insertBST(1)\r
BST.insertBST(133)\r
BST.insertBST(12)\r
console.log(findKthMax(BST.root,3));\r
\r
/**\r
 * The worst-case complexity of this solution is the same as the previous solution, i.e., O(n). But for the best-case scenario, when k = 1 and the root node has no right child, then the complexity of this solution is O(1). On the other hand, the best-case scenario for the previous solution had a time complexity of O(n).Therefore, this solution is more efficient than the previous solution​.\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
