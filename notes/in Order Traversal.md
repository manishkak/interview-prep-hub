# in Order Traversal

## Problem Statement

Describe the problem statement for **in Order Traversal** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * In Order Traversal
 * LNR traversal
 */

 class Tree {
	constructor(val) {
	  this.val = val;
	  this.left = null;
	  this.right = null;
	}
  }
  
var inorderTraversal = function (root, list = []) {
if (!root) {
        return [];
    }

    // Get all the left nodes of given node and
    // then get all the right nodes of a given node.
    const left_values  = inorderTraversal(root.left);
    const right_values = inorderTraversal(root.right);

    return [...left_values, root.val, ...right_values];
};

const tree = new Tree(12);
tree.left = new Tree(7);
tree.right = new Tree(1);
tree.left.left = new Tree(9);
tree.right.left = new Tree(10);
tree.right.right = new Tree(5);
//   in-order:  LNR 9,7,12,10,1,5
//   pre-order: NLR 12,7,9,1,10,5 
  console.log(inorderTraversal(tree))

/**
 * Time Complexity:  O(h) | Where h is the height of nodes from the last found value to the root node.
 * Space Complexity: O(1)
 */


// =======================
// =======================

/**
 * From- https://www.educative.io/courses/data-structures-coding-interviews-javascript/in-order-traversal
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

  inOrderPrint(currentNode) {
      if (currentNode!==null) {
          this.inOrderPrint(currentNode.leftChild);
          console.log(currentNode.val);
          this.inOrderPrint(currentNode.rightChild);
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

BST.inOrderPrint(BST.root);
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
