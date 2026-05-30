const r=`# post Order Traversal

## Problem Statement

Describe the problem statement for **post Order Traversal** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Post-Order Traversal\r
 * The root of the tree will always be the last one to be visited.\r
 * In post-order traversal, the elements are traversed in “left-right-root” order.\r
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
BST.postOrderPrint(BST.root);
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{r as default};
