const r=`# pre Order Traversal

## Problem Statement

Describe the problem statement for **pre Order Traversal** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Binary Tree Preorder Traversal\r
 * also for "Serialize" Binary Tree\r
 * The root of the tree will always be the first one to be visited.\r
 * In pre-order traversal, the elements are traversed in “root-left-right” order.\r
 * https://dev.to/samuelhinchliffe/144-binary-tree-preorder-traversal-jei\r
 */\r
 class Tree {\r
	constructor(val) {\r
	  this.val = val;\r
	  this.left = null;\r
	  this.right = null;\r
	}\r
  }\r
  \r
var preorderTraversal = function (root, list = []) {\r
\r
    /* -------------------------------------------------------------------------- */\r
    /*                     144. Binary Tree Preorder Traversal                    */\r
    /* -------------------------------------------------------------------------- */\r
\r
    // We're at a empty node, so we return our list here\r
    // Just in case the list is empty, we return an empty list\r
    if (!root) {\r
        return list;\r
    }\r
\r
    // We're at a non-empty node, so we add the value to our list\r
    // We're doing this in a preorder manner. \r
    list.push(root.val);\r
\r
    // Traverse to the left node and right nodes\r
    preorderTraversal(root.left, list);\r
    preorderTraversal(root.right, list);\r
\r
    // We traversed this entire little tree\r
    // So let's return our list. \r
    return list;\r
};\r
  \r
  \r
  const tree = new Tree(12);\r
  tree.left = new Tree(7);\r
  tree.right = new Tree(1);\r
  tree.left.left = new Tree(9);\r
  tree.right.left = new Tree(10);\r
  tree.right.right = new Tree(5);\r
//   in-order:  LNR 9,7,12,10,1,5\r
//   pre-order: NLR 12,7,9,1,10,5 \r
  console.log(preorderTraversal(tree))\r
//   console.log(\`Level order traversal: \${breadthFirstTraversal(tree)}\`);\r
\r
/**\r
 * Time Complexity: O(n) | Where n is the number of nodes the tree has | As we will always be traversing the entire tree\r
 * Space Complexity: O(h) | As we will be using the call Stack to store the nodes\r
 */\r
\r
\r
// =======================\r
// =======================\r
\r
/**\r
 * From- https://www.educative.io/courses/data-structures-coding-interviews-javascript/pre-order-traversal\r
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
      if (currentNode!==null) {\r
          console.log(currentNode.val);\r
          this.preOrderPrint(currentNode.leftChild);\r
          this.preOrderPrint(currentNode.rightChild);\r
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
BST.insertBST(10);\r
BST.insertBST(14);\r
\r
BST.preOrderPrint(BST.root);
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{r as default};
