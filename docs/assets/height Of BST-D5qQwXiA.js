const n=`# height Of BST

## Problem Statement

Describe the problem statement for **height Of BST** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Find the Height of a BST\r
 * Approach: Here, we return 0 if the given node is a leaf node. Then, we call the findHeight() function on the left and right subtrees and return the one that has a greater value plus 1.\r
 * TC: O(n) as all the nodes of the entire tree have to be traversed\r
 */\r
\r
"use strict";\r
const BinarySearchTree = require('./BinarySearchTree.js');\r
const Node = require('./Node.js');\r
\r
function findHeight(rootNode) { \r
    if (rootNode === null) // no node in BST\r
        return 0;\r
    else if (rootNode.leftChild === null && rootNode.rightChild === null) //Base case, leaf nodes have 0 height\r
        return 0;\r
    else {\r
        //Find Height of left subtree and then right subtree\r
        //Return greater height value of left or right subtree (plus 1)\r
        var leftHeight = findHeight(rootNode.leftChild)\r
        var rightHeight = findHeight(rootNode.rightChild)\r
        if (leftHeight > rightHeight)\r
            return leftHeight + 1\r
        else\r
            return rightHeight + 1\r
    }\r
}\r
// this program does not have the method insertBST.. check ChatGPT solution below\r
\r
var BST = new BinarySearchTree(6)\r
BST.insertBST(4)\r
BST.insertBST(9)\r
BST.insertBST(5)\r
BST.insertBST(2)\r
BST.insertBST(8)\r
BST.insertBST(12)\r
console.log(findHeight(BST.root))\r
\r
\r
/**\r
 * solution from cgpt\r
 */\r
class Node {\r
    constructor(value) {\r
        this.value = value;\r
        this.left = null;\r
        this.right = null;\r
    }\r
}\r
\r
class BST {\r
    constructor() {\r
        this.root = null;\r
    }\r
\r
    insert(value) {\r
        const newNode = new Node(value);\r
        if (this.root === null) {\r
            this.root = newNode;\r
        } else {\r
            this.insertNode(this.root, newNode);\r
        }\r
    }\r
\r
    insertNode(node, newNode) {\r
        if (newNode.value < node.value) {\r
            if (node.left === null) {\r
                node.left = newNode;\r
            } else {\r
                this.insertNode(node.left, newNode);\r
            }\r
        } else {\r
            if (node.right === null) {\r
                node.right = newNode;\r
            } else {\r
                this.insertNode(node.right, newNode);\r
            }\r
        }\r
    }\r
\r
    height() {\r
        return this.calculateHeight(this.root);\r
    }\r
\r
    calculateHeight(node) {\r
        if (node === null) {\r
            return -1; // Height of an empty tree is -1\r
        } else {\r
            const leftHeight = this.calculateHeight(node.left);\r
            const rightHeight = this.calculateHeight(node.right);\r
            return Math.max(leftHeight, rightHeight) + 1;\r
        }\r
    }\r
}\r
\r
// Example usage:\r
const bst = new BST();\r
bst.insert(10);\r
bst.insert(5);\r
bst.insert(15);\r
bst.insert(3);\r
bst.insert(7);\r
bst.insert(12);\r
bst.insert(17);\r
\r
console.log("Height of BST:", bst.height()); // Output: 2\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
