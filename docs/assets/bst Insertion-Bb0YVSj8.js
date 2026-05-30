const e=`# bst Insertion

## Problem Statement

Describe the problem statement for **bst Insertion** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Binary Search Tree Insertion\r
 */\r
\r
// Iteratively\r
// Recursively\r
\r
// Insert Implementation (Iterative)\r
\r
/**\r
 * The insert(newValue) function starts from the root of the tree and moves on to the left or right subtree depending on the value to be inserted. While traversing, it saves the parent node of each current node.\r
 */\r
\r
class Node {\r
    constructor(value) {\r
        this.val = value; //value of the Node\r
        this.leftChild = null; //leftChild (will also be of the Node class)\r
        this.rightChild = null; //rightChild (will also be of the Node class)\r
    }\r
\r
}\r
\r
class BinarySearchTree {\r
    constructor(rootValue) {\r
        this.root = new Node(rootValue); //the rootNode\r
    }\r
\r
    insert(newValue) {\r
        if(this.root==null){\r
            this.root=new Node(newValue);\r
            return;\r
        }\r
        var currentNode = this.root;\r
        var parent;\r
        while (currentNode) {\r
            parent = currentNode; // While traversing, it saves the parent node of each current node\r
            if (newValue < currentNode.val) {\r
                currentNode = currentNode.leftChild\r
            } else {\r
                currentNode = currentNode.rightChild;\r
            }\r
        }\r
        if (newValue < parent.val) {\r
            parent.leftChild = new Node(newValue)\r
        } else {\r
            parent.rightChild = new Node(newValue)\r
        }\r
    }\r
}\r
\r
var BST = new BinarySearchTree(6);\r
console.log("The root val for BST : ", BST.root.val)\r
BST.insert(4)\r
BST.insert(9)\r
BST.insert(5)\r
BST.insert(2)\r
BST.insert(8)\r
BST.insert(12)\r
BST.insert(10)\r
BST.insert(14)\r
\r
inOrderPrint(BST.root)\r
\r
/**\r
 * The time complexity for inserting a node into a binary search tree (BST) depends on whether the tree is balanced or not.\r
 * In the average case, when the tree remains balanced, the time complexity of inserting a node into a BST is O(log n), where n is the number of nodes in the tree. This is because, in a balanced BST, the height of the tree is logarithmic with respect to the number of nodes, and the insertion operation involves traversing from the root to the appropriate leaf node.\r
 * However, in the worst-case scenario, when the BST becomes unbalanced (e.g., when inserting sorted elements into the BST), the time complexity of insertion can degrade to O(n), where n is the number of nodes in the tree. This worst-case scenario occurs when the tree resembles a linked list, with all nodes connected in a single linear chain. In such cases, each insertion requires traversing through all nodes to find the correct position, resulting in a linear time complexity.\r
 */\r
\r
// Insert Implementation (Recursive)\r
\r
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
		// dont forget that currentNode is actually the root\r
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
}\r
\r
var BST = new BinarySearchTree(6);\r
console.log("The root val for BST : ", BST.root.val)\r
BST.insertBST(4)\r
BST.insertBST(9)\r
BST.insertBST(5)\r
BST.insertBST(2)\r
BST.insertBST(8)\r
BST.insertBST(12)\r
BST.insertBST(10)\r
BST.insertBST(14)\r
\r
inOrderPrint(BST.root);
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
