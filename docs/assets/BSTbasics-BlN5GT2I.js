const e=`# BSTbasics

## Problem Statement

Describe the problem statement for **BSTbasics** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/*\r
-> Key Properties of a BST\r
\r
Node Structure:\r
Each node in a BST contains:\r
    A value (or key)\r
    A left child (which is itself a BST or null)\r
    A right child (which is itself a BST or null)\r
\r
BST Property:\r
For any given node with value N:\r
    All values in the left subtree are less than N.\r
    All values in the right subtree are greater than N.\r
This property must hold true for every node in the tree.\r
\r
No Duplicate Values:\r
    Typically, a BST does not contain duplicate values. If duplicates are allowed, they are usually handled in a consistent way (e.g., always placed in the right subtree).\r
\r
-> Operations on a BST\r
\r
1. Search Operation:\r
- Start at the root.\r
- If the target value is equal to the root's value, the search is complete.\r
- If the target value is less than the root's value, search in the left subtree.\r
- If the target value is greater than the root's value, search in the right subtree.\r
- This operation has an average time complexity of O(log n) for a balanced tree.\r
\r
2. Insertion Operation:\r
- To insert a new value, start at the root and compare the value with the root.\r
- Recursively move to the left or right child depending on whether the new value is less than or greater than the current node's value.\r
- Insert the new value at the correct position when a null child is reached.\r
\r
3. Deletion Operation:\r
- Deletion can be more complex because it involves rearranging the tree to maintain the BST property.\r
- There are three cases to consider:\r
- Leaf Node: If the node to be deleted is a leaf, it can simply be removed.\r
- One Child: If the node has one child, replace the node with its child.\r
- Two Children: If the node has two children, replace the node with either its inorder predecessor (the largest value in the left subtree) or inorder successor (the smallest value in the right subtree), and then delete that predecessor/successor node.\r
*/\r
\r
class Node {\r
    constructor(value) {\r
        this.val = value;\r
        this.leftChild = null;\r
        this.rightChild = null;\r
    }\r
}\r
\r
class BinarySearchTree {\r
    constructor(root) {\r
        this.root = new Node(root);\r
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
        // but for 'insert' if currentNode which is actually the root, is null, add the new node as the root-> this.root=new Node(newValue);\r
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
    search(currentNode, value) {\r
        // ok in 'search' if currentNode which is actually the root, is null, return null\r
        if (currentNode !== null) {\r
            if (value == currentNode.val) {\r
                return currentNode;\r
            } else if (value < currentNode.val) {\r
                return this.search(currentNode.leftChild, value)\r
            } else {\r
                return this.search(currentNode.rightChild, value)\r
            }\r
        } else {\r
            return null;\r
        }\r
\r
    }\r
\r
    searchBST(value) {\r
        return this.search(this.root, value);\r
    }\r
\r
    delete(currentNode, value) {\r
        //case 1: checking for the empty tree\r
        // if rootNode equals Null\r
        if (currentNode == null) {\r
            return false;\r
        }\r
\r
        var parentNode;\r
        //start traversng the tree\r
        //until we find the value to be deleted\r
        //or end up with a null node\r
        while (currentNode && (currentNode.val != value)) {\r
\r
            parentNode = currentNode;\r
            if (value < currentNode.val) {\r
                currentNode = currentNode.leftChild;\r
            } else {\r
                currentNode = currentNode.rightChild;\r
            }\r
        }\r
        // at the end of this while, currentNode will have the value to be deleted\r
\r
        // case 2 : currentNode IS EQUAL to null. Value not found\r
        if (currentNode === null) {\r
            return false;\r
        } else if (currentNode.leftChild == null && currentNode.rightChild == null) {\r
            //case 3: currentNode is a leaf node\r
            //i.e. right and left EQUAL to null\r
\r
            //now checking if the node to be deleted \r
            //is a left or a right child of its parent or if it's the root\r
            if(currentNode.val==this.root.val){\r
                this.root=null;\r
                return true;\r
            }\r
            else if (currentNode.val < parentNode.val) {\r
                parentNode.leftChild = null;\r
                return true;\r
            } else {\r
                parentNode.rightChild = null;\r
                return true;\r
            }\r
        } else if (currentNode.rightChild == null) {\r
            //if the node to be deleted has a left child only \r
            //we'll link the left child to the parent of \r
            //the node to be deleted\r
            if(currentNode.val==this.root.val){\r
                this.root=currentNode.leftChild;\r
                return true;\r
            }\r
            else if (currentNode.leftChild.val < parentNode.val) {\r
                parentNode.leftChild = currentNode.leftChild;\r
                return true;\r
            } else {\r
                parentNode.rightChild = currentNode.leftChild;\r
                return true;\r
            }\r
\r
        } else if (currentNode.leftChild == null) {\r
            //if the node to be deleted has a right child only \r
            //we'll link the right child to the parent of \r
            //the node to be deleted\r
            if(currentNode.val==this.root.val){\r
                this.root = currentNode.rightChild;\r
                return true;\r
            }\r
            else if (currentNode.rightChild.val < parentNode.val) {\r
                parentNode.leftChild = currentNode.rightChild;\r
                return true;\r
            } else {\r
                parentNode.rightChild = currentNode.rightChild;\r
                return true;\r
            }\r
        } else { \r
            // case where the node to be deleted has 2 children\r
            // starting point for the right sub tree\r
            var minRight = currentNode.rightChild;\r
            // traverse to find the left most node in the right subtree\r
            while (minRight.leftChild !== null) {\r
                minRight = minRight.leftChild;\r
            }\r
            var temp=minRight.val;\r
            // delete the left most node in the right subtree\r
            // by calling in the same delete function\r
            // to cater for whether it has children or not\r
            this.delete(this.root, minRight.val);\r
            // replace the currentNode with left most node in the right subtree\r
            currentNode.val = temp;\r
            return true;\r
        }\r
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
BST.insertBST(3);\r
BST.insertBST(1);\r
\r
BST.inOrderPrint(BST.root);\r
console.log("Delete 9!")\r
console.log(BST.delete(BST.root, 9));\r
BST.inOrderPrint(BST.root);
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
