# lowest Common Ancestor Binary Tree

## Problem Statement

Describe the problem statement for **lowest Common Ancestor Binary Tree** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Find Lowest Common Ancestor in a Binary Tree
 * Given a binary tree and two of its nodes, find the lowest common ancestor.
 * Check Recursive from ChatGPT solution below
 * Solution 1 -> from algodaily (https://www.programiz.com/javascript/online-compiler/)
 */

/**
 * Recursive from ChatGPT
 * To call the lowestCommonAncestor function in JavaScript, you need to:
	- Construct the binary tree structure.
	- Identify the nodes p and q whose LCA you want to find.
	- Call the lowestCommonAncestor function, passing the root of the tree and the two nodes as arguments.
 * 	Base Case:
		- If the current node (root) is null, or if it's one of the nodes (p or q) we're looking for, then return the current node.
		- This means we've found either p or q, or we've reached the end of a branch without finding anything.
	Recursive Search:
		- Recursively search the left and right subtrees.
		- The left variable will hold the result from the left subtree, and right will hold the result from the right subtree.
	Determine LCA:
		- If both left and right are non-null, it means p and q are found in different subtrees of the current node, so the current node (root) is their LCA.
		- If only one of them is non-null, return the non-null one because it means both p and q are in that subtree.
 */
// Time Complexity:
// O(n): The algorithm visits each node once in the binary tree.
// Space Complexity:
// O(h): The recursion stack uses space proportional to the height of the tree, where h is the height.
/*
	3
   / \
  5   1
 / \ / \
6  2 0  8
  / \
 7   4
*/
// p = 6 and q = 4

function lowestCommonAncestor(root, p, q) {
	// If the root is null, return null because there’s nothing to process
	// If the root matches either p or q, return root because a node is its own ancestor
	if (!root || root === p || root === q) {
		return root;
	}

	// Recursively search for p and q in the left and right subtrees of the current node
	const left = lowestCommonAncestor(root.left, p, q);
	const right = lowestCommonAncestor(root.right, p, q);

	/**
	 * If both left and right subtrees return non-null values, it means p is found in one subtree and q in the other. Thus, the current node is the lowest common ancestor.
	 */
	if (left && right) {
		return root;
	}

	/**
	 * If only one of the subtrees contains p or q, propagate that result upward
	 * If neither subtree contains p or q, return null
	 */
	return left ? left : right;
}

/*     3
       / \
      5   1
     / \ / \
    6  2 0  8
      / \
     7   4
*/
class Tree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let tree = new Tree(3);
tree.left = new Tree(5);
tree.right = new Tree(1);
tree.left.left = new Tree(6);
tree.left.right = new Tree(2);
tree.right.left = new Tree(0);
tree.right.right = new Tree(8);
tree.left.right.left = new Tree(7);
tree.left.right.right = new Tree(4);
console.log(tree)

// DRY RUN:
/*
Steps:
Start at root = 3.
Recursively call lowestCommonAncestor(root.left, 6, 4) with root.left = 5.
Recursively call lowestCommonAncestor(root.right, 6, 4) with root.right = 1.
Left Subtree (root = 5):

Recursively call lowestCommonAncestor(root.left, 6, 4) with root.left = 6.
Recursively call lowestCommonAncestor(root.right, 6, 4) with root.right = 2.
Left Subtree of 5 (root = 6):

Since root === p (6), return 6.
Right Subtree of 5 (root = 2):

Recursively call lowestCommonAncestor(root.left, 6, 4) with root.left = 7 → returns null.

Recursively call lowestCommonAncestor(root.right, 6, 4) with root.right = 4.

Since root === q (4), return 4.
At root = 2, left = null, right = 4. Return 4.

At root = 5, left = 6, right = 4. Since both are non-null, return 5 (the LCA).

Right Subtree (root = 1):
Recursively call lowestCommonAncestor(root.left, 6, 4) with root.left = 0 → returns null.

Recursively call lowestCommonAncestor(root.right, 6, 4) with root.right = 8 → returns null.

At root = 1, left = null, right = null. Return null.

Back at Root (root = 3):
Left subtree returned 5.

Right subtree returned null.

Since only the left subtree is non-null, return 5 as the LCA.

Result:
The Lowest Common Ancestor (LCA) of nodes 6 and 4 is 5.
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
