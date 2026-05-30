# is Same Tree

## Problem Statement

Describe the problem statement for **is Same Tree** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Is Same Tree
 * Solution- https://leetcode.com/problems/same-tree/solutions/1936835/js-simple-explained-recursive-pre-order/
 * 
 */

/*Approach
- Use DFS recursion.
- Two trees are the same if:
	- Both nodes are null → return true.
	- One is null and the other isn’t → return false.
	- Values of both nodes are equal AND
		- Left subtrees are same AND
		- Right subtrees are same.

Steps
- If both nodes are null, return true.
- If one is null and the other isn’t, return false.
- If p.val !== q.val, return false.
- Recursively:
	- Check left subtrees.
	- Check right subtrees.
- Return true only if both are true.

Complexity
	Time: O(N) where N = number of nodes (we check all nodes).
	Space: O(H) for recursion stack (H = height of tree).
*/

 class Tree {
	constructor(val) {
	  this.val = val;
	  this.left = null;
	  this.right = null;
	}
  }

var isSameTree = function (p, q) {
	// So both our trees current node is null
	// This mean's they both reached the end of the tree
	// at the same time without error
	if (p == null && q == null) {
		return true;
	}

	// One of the pointers are null when another is not
	// This mean's one of our pointers has traversed to a correct node
	// but another has reached the end of the list too early and thus
	// cannot be a valid mirror tree
	if ((p == null && q != null) || (q == null && p != null)) {
		return false;
	}

	// As we have moved nodes
	// Are they the same value?
	if (p.val != q.val) {
		return false;
	}

	// Get both left nodes
	// We will traverse the left nodes in a DFS fashion
	// to be able to compare both left nodes at the same time
	// So we move left at the same time on both trees.
	let good_lefts = isSameTree(p.left, q.left);

	// Get both right nodes
	// We will traverse the right nodes in a DFS fashion
	// to be able to compare both right nodes at the same time
	// So we move right at the same time on both trees.
	let good_rights = isSameTree(p.right, q.right);

	// So are both sides good?
	return good_lefts && good_rights;
}

const tree = new Tree(12);
tree.left = new Tree(7);
tree.right = new Tree(1);
tree.left.left = new Tree(9);
tree.right.left = new Tree(10);
tree.right.right = new Tree(5);
const tree2 = new Tree(12);
tree2.left = new Tree(7);
tree2.right = new Tree(6);
tree2.left.left = new Tree(9);
tree2.right.left = new Tree(10);
tree2.right.right = new Tree(5);
//   in-order:  LNR 9,7,12,10,1,5
//   pre-order: NLR 12,7,9,1,10,5 
  console.log(isSameTree(tree,tree2))

/**
 * Time Complexity: O(n) | Where n is equal to the number of nodes in both trees. | We visit every node in worst case.
 * Space Complexity: O(h) | Where h is the height of the tallest tree. This is within the Call Stack | In the worst case, a tree's number of nodes is it's height.
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
