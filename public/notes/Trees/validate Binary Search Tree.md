# validate Binary Search Tree

## Problem Statement

Describe the problem statement for **validate Binary Search Tree** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Is Binary Search Tree Valid
 * Solution- https://leetcode.com/problems/validate-binary-search-tree/solutions/2045697/js-simple-explained-in-order-traversal/
 */

/**
 * prev is initialized to '-Infinity' to keep track of the previous node's value.
 * The inorder function is defined to recursively traverse the tree in inOrder.
 * For each node, it recursively checks the left subtree. If any left subtree is invalid, it returns false.
 * It then compares the current node's value to prev. If the current node's value is not greater than prev, it returns false.
 * It updates prev to the current node's value.
 * Finally, it recursively checks the right subtree. If any right subtree is invalid, it returns false.
 * The isValidBST method returns the result of calling inorder starting from the root node.
 */

 class Tree {
	constructor(val) {
	  this.val = val;
	  this.left = null;
	  this.right = null;
	}
  }

 var isValidBST = function (root) {
    let is_bst_valid = true;
    let prev_node = new Tree(-Infinity, null, null);
    const in_order_traverse = (node) => {
        
        // Empty tree. Base case.
        if (!node || !is_bst_valid) {
            return;
        }

        // Get my left nodes.
        in_order_traverse(node.left);

        // The in order section
        // Check if the current node is greater than the previous node.
        // If not, it's a invalid tree
        if (node.val <= prev_node.val) {
            is_bst_valid = false;
        }

        // Update the previous node.
        prev_node = node;
        in_order_traverse(node.right);
    };

    in_order_traverse(root);

    // Return the flag
    return is_bst_valid;
};

const tree = new Tree(2);
  tree.left = new Tree(1);
  tree.right = new Tree(3);
//   tree.left.left = new Tree(9);
//   tree.right.left = new Tree(10);
//   tree.right.right = new Tree(5);
//   in-order:  LNR 9,7,12,10,1,5
//   pre-order: NLR 12,7,9,1,10,5 
  console.log(isValidBST(tree))

/**
 * Time Complexity: O(n) | Where n is the number of nodes in our Binary Search Tree | As we're going to traverse all of the nodes within the tree.
 * Space Complexity: O(h) | Where h is the height of the Binary Search Tree | Because we're going to store the height of the tree within the Call Stack due to the in-order traversal.
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
