# flatten Binary Tree To Linked List

## Problem Statement

Describe the problem statement for **flatten Binary Tree To Linked List** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Flatten Linked List to Binary Tree
 * This is actually also the PreOrder DFS Traversal of a Binary Tree
 * We start at the root node, and for each node, find the right-most node in its left subtree. We set the right pointer of the right-most node to the current node’s right pointer. After that, we set the current node’s right pointer to the current node’s left pointer. Finally, we set the current node’s left pointer to NULL. We will repeat this process for all nodes in the binary tree.
 * Solution summary->
	For every node, 
		check whether it has a "left child" or not. 	// IF: current.left != null
			If the left child "does not exist",
				move on to the right child. 			// current = current.right;
			Otherwise find, 							// Else,  last = current.left;
				- node on the right-most branch			// while (last.right != null)
				- of the left subtree 					// if (current.left != null)
				- which does not have a right child.  	// last = last.right;
				Once this rightmost node is found, 
					connect it with the right child of the current node. // last.right = current.right;
				After connecting, 
					set 
						right child of the current node to
						left child of the current node.		// current.right = current.left;
				Finally, 
					set the left child of the current node to NULL.	// current.left = null;
 */

class Tree {
	constructor(val) {
	  this.val = val;
	  this.left = null;
	  this.right = null;
	}
  }
  
function flattenTree(root) {
    if (root == null) return;

    let current = root;
    while (current != null) {

        if (current.left != null) {
            let last = current.left;
            while (last.right != null) {
                last = last.right;
            }
            
            last.right = current.right;
            current.right = current.left;
            current.left = null;
        }
        current = current.right;	// if there is no current.left, move curr to curr.rt, & cont. loop
    }
    return root;
}
  
  
  const tree = new Tree(12);
  tree.left = new Tree(7);
  tree.right = new Tree(1);
  tree.left.left = new Tree(9);
  tree.right.left = new Tree(10);
  tree.right.right = new Tree(5);
//   in-order:  LNR 9,7,12,10,1,5
//   pre-order: NLR 12,7,9,1,10,5 
  console.log(flattenTree(tree))

  /**
   * Time complexity
   * 	The time complexity is O(n), where n is the number of nodes in the tree because we traverse the tree only once, and the operations on each node are O(1).
   * Space Complexity
   * 	The space complexity will be O(1) for this problem.
   */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
