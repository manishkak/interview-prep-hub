const r=`# in Order Traversal

## Problem Statement

Describe the problem statement for **in Order Traversal** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * In Order Traversal\r
 * LNR traversal\r
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
var inorderTraversal = function (root, list = []) {\r
if (!root) {\r
        return [];\r
    }\r
\r
    // Get all the left nodes of given node and\r
    // then get all the right nodes of a given node.\r
    const left_values  = inorderTraversal(root.left);\r
    const right_values = inorderTraversal(root.right);\r
\r
    return [...left_values, root.val, ...right_values];\r
};\r
\r
const tree = new Tree(12);\r
tree.left = new Tree(7);\r
tree.right = new Tree(1);\r
tree.left.left = new Tree(9);\r
tree.right.left = new Tree(10);\r
tree.right.right = new Tree(5);\r
//   in-order:  LNR 9,7,12,10,1,5\r
//   pre-order: NLR 12,7,9,1,10,5 \r
  console.log(inorderTraversal(tree))\r
\r
/**\r
 * Time Complexity:  O(h) | Where h is the height of nodes from the last found value to the root node.\r
 * Space Complexity: O(1)\r
 */\r
\r
\r
// =======================\r
// =======================\r
\r
/**\r
 * From- https://www.educative.io/courses/data-structures-coding-interviews-javascript/in-order-traversal\r
 */\r
class Node {\r
  constructor(value) {\r
      this.val = value;\r
      this.leftChild = null;\r
      this.rightChild = null;\r
  }\r
\r
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
  insertBST(newValue) {\r
      if(this.root==null){\r
          this.root=new Node(newValue);\r
          return;\r
      }\r
      this.insert(this.root, newValue);\r
  }\r
\r
  preOrderPrint(currentNode) {\r
      if (currentNode!==null) {\r
          console.log(currentNode.val);\r
          this.preOrderPrint(currentNode.leftChild);\r
          this.preOrderPrint(currentNode.rightChild);\r
      }\r
\r
  }\r
\r
  inOrderPrint(currentNode) {\r
      if (currentNode!==null) {\r
          this.inOrderPrint(currentNode.leftChild);\r
          console.log(currentNode.val);\r
          this.inOrderPrint(currentNode.rightChild);\r
      }\r
\r
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
\r
BST.inOrderPrint(BST.root);
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{r as default};
