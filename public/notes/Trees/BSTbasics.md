# BSTbasics

## Problem Statement

Describe the problem statement for **BSTbasics** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/*
-> Key Properties of a BST

Node Structure:
Each node in a BST contains:
    A value (or key)
    A left child (which is itself a BST or null)
    A right child (which is itself a BST or null)

BST Property:
For any given node with value N:
    All values in the left subtree are less than N.
    All values in the right subtree are greater than N.
This property must hold true for every node in the tree.

No Duplicate Values:
    Typically, a BST does not contain duplicate values. If duplicates are allowed, they are usually handled in a consistent way (e.g., always placed in the right subtree).

-> Operations on a BST

1. Search Operation:
- Start at the root.
- If the target value is equal to the root's value, the search is complete.
- If the target value is less than the root's value, search in the left subtree.
- If the target value is greater than the root's value, search in the right subtree.
- This operation has an average time complexity of O(log n) for a balanced tree.

2. Insertion Operation:
- To insert a new value, start at the root and compare the value with the root.
- Recursively move to the left or right child depending on whether the new value is less than or greater than the current node's value.
- Insert the new value at the correct position when a null child is reached.

3. Deletion Operation:
- Deletion can be more complex because it involves rearranging the tree to maintain the BST property.
- There are three cases to consider:
- Leaf Node: If the node to be deleted is a leaf, it can simply be removed.
- One Child: If the node has one child, replace the node with its child.
- Two Children: If the node has two children, replace the node with either its inorder predecessor (the largest value in the left subtree) or inorder successor (the smallest value in the right subtree), and then delete that predecessor/successor node.
*/

class Node {
    constructor(value) {
        this.val = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}

class BinarySearchTree {
    constructor(root) {
        this.root = new Node(root);
    }

    insert(currentNode, newValue) {
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
        // but for 'insert' if currentNode which is actually the root, is null, add the new node as the root-> this.root=new Node(newValue);
        if(this.root==null){
            this.root=new Node(newValue);
            return;
        }
        this.insert(this.root, newValue);
    }

    preOrderPrint(currentNode) {
        if (currentNode !== null) {
            console.log(currentNode.val);
            this.preOrderPrint(currentNode.leftChild);
            this.preOrderPrint(currentNode.rightChild);
        }

    }

    inOrderPrint(currentNode) {
        if (currentNode !== null) {
            this.inOrderPrint(currentNode.leftChild);
            console.log(currentNode.val);
            this.inOrderPrint(currentNode.rightChild);
        }

    }
    postOrderPrint(currentNode) {
        if (currentNode !== null) {
            this.postOrderPrint(currentNode.leftChild);
            this.postOrderPrint(currentNode.rightChild);
            console.log(currentNode.val);
        }

    }
    search(currentNode, value) {
        // ok in 'search' if currentNode which is actually the root, is null, return null
        if (currentNode !== null) {
            if (value == currentNode.val) {
                return currentNode;
            } else if (value < currentNode.val) {
                return this.search(currentNode.leftChild, value)
            } else {
                return this.search(currentNode.rightChild, value)
            }
        } else {
            return null;
        }

    }

    searchBST(value) {
        return this.search(this.root, value);
    }

    delete(currentNode, value) {
        //case 1: checking for the empty tree
        // if rootNode equals Null
        if (currentNode == null) {
            return false;
        }

        var parentNode;
        //start traversng the tree
        //until we find the value to be deleted
        //or end up with a null node
        while (currentNode && (currentNode.val != value)) {

            parentNode = currentNode;
            if (value < currentNode.val) {
                currentNode = currentNode.leftChild;
            } else {
                currentNode = currentNode.rightChild;
            }
        }
        // at the end of this while, currentNode will have the value to be deleted

        // case 2 : currentNode IS EQUAL to null. Value not found
        if (currentNode === null) {
            return false;
        } else if (currentNode.leftChild == null && currentNode.rightChild == null) {
            //case 3: currentNode is a leaf node
            //i.e. right and left EQUAL to null

            //now checking if the node to be deleted 
            //is a left or a right child of its parent or if it's the root
            if(currentNode.val==this.root.val){
                this.root=null;
                return true;
            }
            else if (currentNode.val < parentNode.val) {
                parentNode.leftChild = null;
                return true;
            } else {
                parentNode.rightChild = null;
                return true;
            }
        } else if (currentNode.rightChild == null) {
            //if the node to be deleted has a left child only 
            //we'll link the left child to the parent of 
            //the node to be deleted
            if(currentNode.val==this.root.val){
                this.root=currentNode.leftChild;
                return true;
            }
            else if (currentNode.leftChild.val < parentNode.val) {
                parentNode.leftChild = currentNode.leftChild;
                return true;
            } else {
                parentNode.rightChild = currentNode.leftChild;
                return true;
            }

        } else if (currentNode.leftChild == null) {
            //if the node to be deleted has a right child only 
            //we'll link the right child to the parent of 
            //the node to be deleted
            if(currentNode.val==this.root.val){
                this.root = currentNode.rightChild;
                return true;
            }
            else if (currentNode.rightChild.val < parentNode.val) {
                parentNode.leftChild = currentNode.rightChild;
                return true;
            } else {
                parentNode.rightChild = currentNode.rightChild;
                return true;
            }
        } else { 
            // case where the node to be deleted has 2 children
            // starting point for the right sub tree
            var minRight = currentNode.rightChild;
            // traverse to find the left most node in the right subtree
            while (minRight.leftChild !== null) {
                minRight = minRight.leftChild;
            }
            var temp=minRight.val;
            // delete the left most node in the right subtree
            // by calling in the same delete function
            // to cater for whether it has children or not
            this.delete(this.root, minRight.val);
            // replace the currentNode with left most node in the right subtree
            currentNode.val = temp;
            return true;
        }
    }

}

var BST = new BinarySearchTree(6);
console.log("The root val for BST : ", BST.root.val)
BST.insertBST(4);
BST.insertBST(9);
BST.insertBST(5);
BST.insertBST(2);
BST.insertBST(8);
BST.insertBST(12);
BST.insertBST(3);
BST.insertBST(1);

BST.inOrderPrint(BST.root);
console.log("Delete 9!")
console.log(BST.delete(BST.root, 9));
BST.inOrderPrint(BST.root);
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
