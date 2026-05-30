# pre Order Traversal

## Problem Statement

Describe the problem statement for **pre Order Traversal** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Binary Tree Preorder Traversal
 * also for "Serialize" Binary Tree
 * The root of the tree will always be the first one to be visited.
 * In pre-order traversal, the elements are traversed in “root-left-right” order.
 * https://dev.to/samuelhinchliffe/144-binary-tree-preorder-traversal-jei
 */
 class Tree {
	constructor(val) {
	  this.val = val;
	  this.left = null;
	  this.right = null;
	}
  }
  
var preorderTraversal = function (root, list = []) {

    /* -------------------------------------------------------------------------- */
    /*                     144. Binary Tree Preorder Traversal                    */
    /* -------------------------------------------------------------------------- */

    // We're at a empty node, so we return our list here
    // Just in case the list is empty, we return an empty list
    if (!root) {
        return list;
    }

    // We're at a non-empty node, so we add the value to our list
    // We're doing this in a preorder manner. 
    list.push(root.val);

    // Traverse to the left node and right nodes
    preorderTraversal(root.left, list);
    preorderTraversal(root.right, list);

    // We traversed this entire little tree
    // So let's return our list. 
    return list;
};
  
  
  const tree = new Tree(12);
  tree.left = new Tree(7);
  tree.right = new Tree(1);
  tree.left.left = new Tree(9);
  tree.right.left = new Tree(10);
  tree.right.right = new Tree(5);
//   in-order:  LNR 9,7,12,10,1,5
//   pre-order: NLR 12,7,9,1,10,5 
  console.log(preorderTraversal(tree))
//   console.log(`Level order traversal: ${breadthFirstTraversal(tree)}`);

/**
 * Time Complexity: O(n) | Where n is the number of nodes the tree has | As we will always be traversing the entire tree
 * Space Complexity: O(h) | As we will be using the call Stack to store the nodes
 */


// =======================
// =======================

/**
 * From- https://www.educative.io/courses/data-structures-coding-interviews-javascript/pre-order-traversal
 */
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

  preOrderPrint(currentNode) {
      if (currentNode!==null) {
          console.log(currentNode.val);
          this.preOrderPrint(currentNode.leftChild);
          this.preOrderPrint(currentNode.rightChild);
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
BST.insertBST(10);
BST.insertBST(14);

BST.preOrderPrint(BST.root);
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
