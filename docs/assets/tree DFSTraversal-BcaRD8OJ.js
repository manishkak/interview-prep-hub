const r=`# tree DFSTraversal

## Problem Statement

Describe the problem statement for **tree DFSTraversal** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// Simple DFS:\r
function dfs(root) {\r
  if (!root) return; // Base case: stop recursion if root is null\r
  // First left is traversed, then node is printed then right is traversed- this is InOrder traversal(LNR)\r
  dfs(root.left);    // Recurse on the left child\r
  console.log(root.val); // Print the current node's value\r
  dfs(root.right);   // Recurse on the right child\r
}\r
\r
class Tree {\r
  constructor(val) {\r
      this.val = val;\r
      this.left = null;\r
      this.right = null;\r
  }\r
}\r
\r
const tree = new Tree(1);\r
tree.left = new Tree(2);        // Assign left child\r
tree.right = new Tree(3);       // Assign right child\r
tree.left.left = new Tree(4);   // Assign left grandchild\r
tree.left.right = new Tree(5);  // Assign right grandchild\r
\r
dfs(tree); // Perform depth-first search and print values\r
\r
\r
/**\r
 * Tree with Traversal techniques\r
 * https://dev.to/ggenya132/depth-first-traversal-in-javascript-3ehp\r
 * Postorder traversal\r
    Go to left-subtree\r
    Go to right-subtree\r
    Visit Node\r
 * Preorder traversal\r
    Visit Node\r
    Go to left-subtree\r
    Go to right-subtree\r
 * Inorder traversal\r
    Go to left-subtree\r
    Visit Node\r
    Go to right-subtree\r
\r
Use this to check the code online-> https://www.programiz.com/javascript/online-compiler/\r
*/\r
\r
class Tree {\r
	constructor(value, left, right) {\r
	  this.value = value;\r
	  this.left = left;\r
	  this.right = right;\r
	}\r
  }\r
  treeOne = new Tree(1);\r
  treeOne.left = new Tree(2);\r
  treeOne.left.left = new Tree(4);\r
  treeOne.left.right = new Tree(5);\r
  treeOne.right = new Tree(3);\r
  /*\r
  For this to work, in the Tree class change-\r
  constructor(value) and\r
  this.left = null;  and\r
  this.right = null;\r
  */\r
  console.log(treeOne, 'tree type 1 ends--------------')\r
  \r
  tree = new Tree(\r
	1,\r
	new Tree(2, new Tree(4, new Tree(8)), new Tree(5)),\r
	new Tree(3, new Tree(6, new Tree(9), new Tree(10)), new Tree(7))\r
  );\r
  /*\r
  For this to work, in the Tree class change-\r
  constructor(value, left, right) and\r
  this.left = left;  and\r
  this.right = right;\r
  */\r
  console.log(tree, 'tree type 2 ends--------------')\r
  \r
  const inOrderTraversal = (node, cb) => {\r
	if (node !== undefined) {\r
	  inOrderTraversal(node.left, cb);\r
	  cb(node.value);\r
	  inOrderTraversal(node.right, cb);\r
	}\r
  };\r
  \r
  inOrderTraversal(tree, console.log);\r
  console.log('inOrderTraversal ends here--------');\r
  // 8, 4, 2, 5, 1, 9, 6, 10, 3, 7\r
  \r
  const preOrderTraversal = (node, cb) => {\r
	if (node !== undefined) {\r
	  cb(node.value);\r
	  preOrderTraversal(node.left, cb);\r
	  preOrderTraversal(node.right, cb);\r
	}\r
  };\r
  preOrderTraversal(tree, console.log);\r
  console.log('preOrderTraversal ends here--------');\r
  // 1, 2, 4, 8, 5, 3, 6, 9, 10, 7\r
  \r
  const postOrderTraversal = (node, cb) => {\r
	if (node !== undefined) {\r
	  postOrderTraversal(node.left, cb);\r
	  postOrderTraversal(node.right, cb);\r
	  cb(node.value);\r
	}\r
  };\r
  postOrderTraversal(tree, console.log);\r
  console.log('postOrderTraversal ends here--------');\r
  // 8, 4, 5, 2, 9, 10, 6, 7, 3, 1\r
  \r
/**\r
 * From Educative\r
 */\r
\r
class Node {\r
    constructor(value) {\r
        this.value = value;\r
        this.left = null;\r
        this.right = null;\r
    }\r
}\r
\r
class BinarySearchTree {\r
    constructor(root) {\r
        this.root = new Node(root);\r
    }\r
\r
    /**\r
     * the currentNode here is the root node, check on insertBST method. we already checked before if the root is null, but its check here again with currentNode-> this is because the insert method is recursively called from inside the function as well, when it finds the first null it inserts the new node there.\r
     * if currentNode is null, currentNode is set to the new node\r
     * else if new node is < currentNode.value, this new node will be added to the left of current\r
     *      so, currentNode.left = this.insert(curr.left, new node)... else right\r
     */\r
    insert(currentNode, newValue) {\r
        if (currentNode === null) {\r
            currentNode = new Node(newValue);\r
        } else if (newValue < currentNode.value) {\r
            currentNode.leftChild = this.insert(currentNode.leftChild, newValue);\r
        } else {\r
            currentNode.rightChild = this.insert(currentNode.rightChild, newValue);\r
        }\r
        return currentNode;\r
    }\r
\r
    /**\r
     * if root is null, just add the new node in place of the root, and return\r
     *  else, call the insert method with 2 arguments- root and new node\r
     */\r
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
          // printing here is very important because its a traversal function\r
            console.log(currentNode.value); // this is print the 'root' step cos currentNode has the value of root, check line 147\r
            this.preOrderPrint(currentNode.leftChild);\r
            this.preOrderPrint(currentNode.rightChild);\r
        }\r
    }\r
\r
    inOrderPrint(currentNode) {\r
      if (currentNode!==null) {\r
        // left node, then print root, then right node\r
          this.inOrderPrint(currentNode.leftChild);\r
          console.log(currentNode.value);\r
          this.inOrderPrint(currentNode.rightChild);\r
      }\r
    }\r
\r
    postOrderPrint(currentNode) {\r
      if (currentNode !== null) {\r
          this.postOrderPrint(currentNode.leftChild);\r
          this.postOrderPrint(currentNode.rightChild);\r
          console.log(currentNode.value);\r
          // left node, right node and then print root\r
      }\r
    }\r
\r
}\r
\r
var BST = new BinarySearchTree(6);\r
console.log("The root val for BST : ", BST.root.value)\r
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
