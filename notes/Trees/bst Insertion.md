# bst Insertion

## Problem Statement

Describe the problem statement for **bst Insertion** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Binary Search Tree Insertion
 */

// Iteratively
// Recursively

// Insert Implementation (Iterative)

/**
 * The insert(newValue) function starts from the root of the tree and moves on to the left or right subtree depending on the value to be inserted. While traversing, it saves the parent node of each current node.
 */

class Node {
    constructor(value) {
        this.val = value; //value of the Node
        this.leftChild = null; //leftChild (will also be of the Node class)
        this.rightChild = null; //rightChild (will also be of the Node class)
    }

}

class BinarySearchTree {
    constructor(rootValue) {
        this.root = new Node(rootValue); //the rootNode
    }

    insert(newValue) {
        if(this.root==null){
            this.root=new Node(newValue);
            return;
        }
        var currentNode = this.root;
        var parent;
        while (currentNode) {
            parent = currentNode; // While traversing, it saves the parent node of each current node
            if (newValue < currentNode.val) {
                currentNode = currentNode.leftChild
            } else {
                currentNode = currentNode.rightChild;
            }
        }
        if (newValue < parent.val) {
            parent.leftChild = new Node(newValue)
        } else {
            parent.rightChild = new Node(newValue)
        }
    }
}

var BST = new BinarySearchTree(6);
console.log("The root val for BST : ", BST.root.val)
BST.insert(4)
BST.insert(9)
BST.insert(5)
BST.insert(2)
BST.insert(8)
BST.insert(12)
BST.insert(10)
BST.insert(14)

inOrderPrint(BST.root)

/**
 * The time complexity for inserting a node into a binary search tree (BST) depends on whether the tree is balanced or not.
 * In the average case, when the tree remains balanced, the time complexity of inserting a node into a BST is O(log n), where n is the number of nodes in the tree. This is because, in a balanced BST, the height of the tree is logarithmic with respect to the number of nodes, and the insertion operation involves traversing from the root to the appropriate leaf node.
 * However, in the worst-case scenario, when the BST becomes unbalanced (e.g., when inserting sorted elements into the BST), the time complexity of insertion can degrade to O(n), where n is the number of nodes in the tree. This worst-case scenario occurs when the tree resembles a linked list, with all nodes connected in a single linear chain. In such cases, each insertion requires traversing through all nodes to find the correct position, resulting in a linear time complexity.
 */

// Insert Implementation (Recursive)

class Node {
    constructor(value) {
        this.val = value;
        this.leftChild = null;
        this.rightChild = null;
    }

}

class BinarySearchTree {
    constructor(rootValue) {
        this.root = new Node(rootValue);
    }

    insert(currentNode, newValue) {
		// dont forget that currentNode is actually the root
        if (currentNode === null) {
            currentNode = new Node(newValue);
        } else if (newValue < currentNode.val) {
            currentNode.leftChild = this.insert(currentNode.leftChild, newValue);
        } else {
            currentNode.rightChild = this.insert(currentNode.rightChild, newValue);
        }
        return currentNode;
    }
    insertBST(newValue) {
        if(this.root==null){
            this.root=new Node(newValue);
            return;
        }
        this.insert(this.root, newValue);
    }
}

var BST = new BinarySearchTree(6);
console.log("The root val for BST : ", BST.root.val)
BST.insertBST(4)
BST.insertBST(9)
BST.insertBST(5)
BST.insertBST(2)
BST.insertBST(8)
BST.insertBST(12)
BST.insertBST(10)
BST.insertBST(14)

inOrderPrint(BST.root);
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
