# invert Binary Tree

## Problem Statement

Describe the problem statement for **invert Binary Tree** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
// 1. If root is null, return null
// 2. Create temp variable and assign it to root.left
// 3. Change root.left to equal root.right
// 4. Change root.right to equal to temp
// 5. invertTree(root.left)
// 6. invertTree(root.right)

// Time Complexity: O(n)
// Space Complexity: O(n)
// n is the number of nodes

solution from here- https://blog.blakeyeboah.com/invert-binary-tree-with-javascript 
*/

// Iterative solution with O(n) space->
// Use a queue for a breadth-first traversal, swapping the left and right children of each node.
function invertTree(root) {
    if (!root) return null;

    const queue = [root];
    while (queue.length > 0) {
        const node = queue.shift();

        // Swap left and right children
        [node.left, node.right] = [node.right, node.left];

        // Add children to the queue if they exist
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return root;
}


// Recursive solution with O(n) space->
class Tree {
	constructor(val) {
	  this.val = val;
	  this.left = null;
	  this.right = null;
	}
  }
// from chatgpt
function invertTree(root) {
    if (root === null) return null;

    // Swap the left and right child
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    // Recursively invert the left and right subtrees
    invertTree(root.left);
    invertTree(root.right);

    return root;
}
// gpt ends

var invertTree = function(tree) {
	const reverseNode = node => {
		if (node == null) {
			return null
		}
		reverseNode(node.left);
		reverseNode(node.right);
		let holdLeft = node.left;
		node.left = node.right;
		node.right = holdLeft;
		/**
		 * another example: 
		 * let temp = root.left;
		 * Swap the left and right children of the root node:
		 * (root.left = root.right), (root.right = temp);
		 */
		return node;
	}
console.log(reverseNode(tree));
};

const tree = new Tree(12);
tree.left = new Tree(7);
tree.right = new Tree(1);
tree.left.left = new Tree(9);
tree.right.left = new Tree(10);
tree.right.right = new Tree(5);

invertTree(tree);
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
