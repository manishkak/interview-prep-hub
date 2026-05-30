# tree DFSTraversal

## Problem Statement

Describe the problem statement for **tree DFSTraversal** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// Simple DFS:
function dfs(root) {
  if (!root) return; // Base case: stop recursion if root is null
  // First left is traversed, then node is printed then right is traversed- this is InOrder traversal(LNR)
  dfs(root.left);    // Recurse on the left child
  console.log(root.val); // Print the current node's value
  dfs(root.right);   // Recurse on the right child
}

class Tree {
  constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
  }
}

const tree = new Tree(1);
tree.left = new Tree(2);        // Assign left child
tree.right = new Tree(3);       // Assign right child
tree.left.left = new Tree(4);   // Assign left grandchild
tree.left.right = new Tree(5);  // Assign right grandchild

dfs(tree); // Perform depth-first search and print values


/**
 * Tree with Traversal techniques
 * https://dev.to/ggenya132/depth-first-traversal-in-javascript-3ehp
 * Postorder traversal
    Go to left-subtree
    Go to right-subtree
    Visit Node
 * Preorder traversal
    Visit Node
    Go to left-subtree
    Go to right-subtree
 * Inorder traversal
    Go to left-subtree
    Visit Node
    Go to right-subtree

Use this to check the code online-> https://www.programiz.com/javascript/online-compiler/
*/

class Tree {
	constructor(value, left, right) {
	  this.value = value;
	  this.left = left;
	  this.right = right;
	}
  }
  treeOne = new Tree(1);
  treeOne.left = new Tree(2);
  treeOne.left.left = new Tree(4);
  treeOne.left.right = new Tree(5);
  treeOne.right = new Tree(3);
  /*
  For this to work, in the Tree class change-
  constructor(value) and
  this.left = null;  and
  this.right = null;
  */
  console.log(treeOne, 'tree type 1 ends--------------')
  
  tree = new Tree(
	1,
	new Tree(2, new Tree(4, new Tree(8)), new Tree(5)),
	new Tree(3, new Tree(6, new Tree(9), new Tree(10)), new Tree(7))
  );
  /*
  For this to work, in the Tree class change-
  constructor(value, left, right) and
  this.left = left;  and
  this.right = right;
  */
  console.log(tree, 'tree type 2 ends--------------')
  
  const inOrderTraversal = (node, cb) => {
	if (node !== undefined) {
	  inOrderTraversal(node.left, cb);
	  cb(node.value);
	  inOrderTraversal(node.right, cb);
	}
  };
  
  inOrderTraversal(tree, console.log);
  console.log('inOrderTraversal ends here--------');
  // 8, 4, 2, 5, 1, 9, 6, 10, 3, 7
  
  const preOrderTraversal = (node, cb) => {
	if (node !== undefined) {
	  cb(node.value);
	  preOrderTraversal(node.left, cb);
	  preOrderTraversal(node.right, cb);
	}
  };
  preOrderTraversal(tree, console.log);
  console.log('preOrderTraversal ends here--------');
  // 1, 2, 4, 8, 5, 3, 6, 9, 10, 7
  
  const postOrderTraversal = (node, cb) => {
	if (node !== undefined) {
	  postOrderTraversal(node.left, cb);
	  postOrderTraversal(node.right, cb);
	  cb(node.value);
	}
  };
  postOrderTraversal(tree, console.log);
  console.log('postOrderTraversal ends here--------');
  // 8, 4, 5, 2, 9, 10, 6, 7, 3, 1
  
/**
 * From Educative
 */

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(root) {
        this.root = new Node(root);
    }

    /**
     * the currentNode here is the root node, check on insertBST method. we already checked before if the root is null, but its check here again with currentNode-> this is because the insert method is recursively called from inside the function as well, when it finds the first null it inserts the new node there.
     * if currentNode is null, currentNode is set to the new node
     * else if new node is < currentNode.value, this new node will be added to the left of current
     *      so, currentNode.left = this.insert(curr.left, new node)... else right
     */
    insert(currentNode, newValue) {
        if (currentNode === null) {
            currentNode = new Node(newValue);
        } else if (newValue < currentNode.value) {
            currentNode.leftChild = this.insert(currentNode.leftChild, newValue);
        } else {
            currentNode.rightChild = this.insert(currentNode.rightChild, newValue);
        }
        return currentNode;
    }

    /**
     * if root is null, just add the new node in place of the root, and return
     *  else, call the insert method with 2 arguments- root and new node
     */
    insertBST(newValue) {
        if(this.root==null){
            this.root=new Node(newValue);
            return;
        }
        this.insert(this.root, newValue);
    }

    preOrderPrint(currentNode) {
        if (currentNode!==null) {
          // printing here is very important because its a traversal function
            console.log(currentNode.value); // this is print the 'root' step cos currentNode has the value of root, check line 147
            this.preOrderPrint(currentNode.leftChild);
            this.preOrderPrint(currentNode.rightChild);
        }
    }

    inOrderPrint(currentNode) {
      if (currentNode!==null) {
        // left node, then print root, then right node
          this.inOrderPrint(currentNode.leftChild);
          console.log(currentNode.value);
          this.inOrderPrint(currentNode.rightChild);
      }
    }

    postOrderPrint(currentNode) {
      if (currentNode !== null) {
          this.postOrderPrint(currentNode.leftChild);
          this.postOrderPrint(currentNode.rightChild);
          console.log(currentNode.value);
          // left node, right node and then print root
      }
    }

}

var BST = new BinarySearchTree(6);
console.log("The root val for BST : ", BST.root.value)
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
