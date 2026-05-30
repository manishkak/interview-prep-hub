# height Of BST

## Problem Statement

Describe the problem statement for **height Of BST** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Find the Height of a BST
 * Approach: Here, we return 0 if the given node is a leaf node. Then, we call the findHeight() function on the left and right subtrees and return the one that has a greater value plus 1.
 * TC: O(n) as all the nodes of the entire tree have to be traversed
 */

"use strict";
const BinarySearchTree = require('./BinarySearchTree.js');
const Node = require('./Node.js');

function findHeight(rootNode) { 
    if (rootNode === null) // no node in BST
        return 0;
    else if (rootNode.leftChild === null && rootNode.rightChild === null) //Base case, leaf nodes have 0 height
        return 0;
    else {
        //Find Height of left subtree and then right subtree
        //Return greater height value of left or right subtree (plus 1)
        var leftHeight = findHeight(rootNode.leftChild)
        var rightHeight = findHeight(rootNode.rightChild)
        if (leftHeight > rightHeight)
            return leftHeight + 1
        else
            return rightHeight + 1
    }
}
// this program does not have the method insertBST.. check ChatGPT solution below

var BST = new BinarySearchTree(6)
BST.insertBST(4)
BST.insertBST(9)
BST.insertBST(5)
BST.insertBST(2)
BST.insertBST(8)
BST.insertBST(12)
console.log(findHeight(BST.root))


/**
 * solution from cgpt
 */
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    height() {
        return this.calculateHeight(this.root);
    }

    calculateHeight(node) {
        if (node === null) {
            return -1; // Height of an empty tree is -1
        } else {
            const leftHeight = this.calculateHeight(node.left);
            const rightHeight = this.calculateHeight(node.right);
            return Math.max(leftHeight, rightHeight) + 1;
        }
    }
}

// Example usage:
const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(17);

console.log("Height of BST:", bst.height()); // Output: 2

```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
