const r=`# lowest Common Ancestor Binary Tree

## Problem Statement

Describe the problem statement for **lowest Common Ancestor Binary Tree** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Find Lowest Common Ancestor in a Binary Tree\r
 * Given a binary tree and two of its nodes, find the lowest common ancestor.\r
 * Check Recursive from ChatGPT solution below\r
 * Solution 1 -> from algodaily (https://www.programiz.com/javascript/online-compiler/)\r
 */\r
\r
/**\r
 * Recursive from ChatGPT\r
 * To call the lowestCommonAncestor function in JavaScript, you need to:\r
	- Construct the binary tree structure.\r
	- Identify the nodes p and q whose LCA you want to find.\r
	- Call the lowestCommonAncestor function, passing the root of the tree and the two nodes as arguments.\r
 * 	Base Case:\r
		- If the current node (root) is null, or if it's one of the nodes (p or q) we're looking for, then return the current node.\r
		- This means we've found either p or q, or we've reached the end of a branch without finding anything.\r
	Recursive Search:\r
		- Recursively search the left and right subtrees.\r
		- The left variable will hold the result from the left subtree, and right will hold the result from the right subtree.\r
	Determine LCA:\r
		- If both left and right are non-null, it means p and q are found in different subtrees of the current node, so the current node (root) is their LCA.\r
		- If only one of them is non-null, return the non-null one because it means both p and q are in that subtree.\r
 */\r
// Time Complexity:\r
// O(n): The algorithm visits each node once in the binary tree.\r
// Space Complexity:\r
// O(h): The recursion stack uses space proportional to the height of the tree, where h is the height.\r
/*\r
	3\r
   / \\\r
  5   1\r
 / \\ / \\\r
6  2 0  8\r
  / \\\r
 7   4\r
*/\r
// p = 6 and q = 4\r
\r
function lowestCommonAncestor(root, p, q) {\r
	// If the root is null, return null because there’s nothing to process\r
	// If the root matches either p or q, return root because a node is its own ancestor\r
	if (!root || root === p || root === q) {\r
		return root;\r
	}\r
\r
	// Recursively search for p and q in the left and right subtrees of the current node\r
	const left = lowestCommonAncestor(root.left, p, q);\r
	const right = lowestCommonAncestor(root.right, p, q);\r
\r
	/**\r
	 * If both left and right subtrees return non-null values, it means p is found in one subtree and q in the other. Thus, the current node is the lowest common ancestor.\r
	 */\r
	if (left && right) {\r
		return root;\r
	}\r
\r
	/**\r
	 * If only one of the subtrees contains p or q, propagate that result upward\r
	 * If neither subtree contains p or q, return null\r
	 */\r
	return left ? left : right;\r
}\r
\r
/*     3\r
       / \\\r
      5   1\r
     / \\ / \\\r
    6  2 0  8\r
      / \\\r
     7   4\r
*/\r
class Tree {\r
    constructor(val) {\r
        this.val = val;\r
        this.left = null;\r
        this.right = null;\r
    }\r
}\r
\r
let tree = new Tree(3);\r
tree.left = new Tree(5);\r
tree.right = new Tree(1);\r
tree.left.left = new Tree(6);\r
tree.left.right = new Tree(2);\r
tree.right.left = new Tree(0);\r
tree.right.right = new Tree(8);\r
tree.left.right.left = new Tree(7);\r
tree.left.right.right = new Tree(4);\r
console.log(tree)\r
\r
// DRY RUN:\r
/*\r
Steps:\r
Start at root = 3.\r
Recursively call lowestCommonAncestor(root.left, 6, 4) with root.left = 5.\r
Recursively call lowestCommonAncestor(root.right, 6, 4) with root.right = 1.\r
Left Subtree (root = 5):\r
\r
Recursively call lowestCommonAncestor(root.left, 6, 4) with root.left = 6.\r
Recursively call lowestCommonAncestor(root.right, 6, 4) with root.right = 2.\r
Left Subtree of 5 (root = 6):\r
\r
Since root === p (6), return 6.\r
Right Subtree of 5 (root = 2):\r
\r
Recursively call lowestCommonAncestor(root.left, 6, 4) with root.left = 7 → returns null.\r
\r
Recursively call lowestCommonAncestor(root.right, 6, 4) with root.right = 4.\r
\r
Since root === q (4), return 4.\r
At root = 2, left = null, right = 4. Return 4.\r
\r
At root = 5, left = 6, right = 4. Since both are non-null, return 5 (the LCA).\r
\r
Right Subtree (root = 1):\r
Recursively call lowestCommonAncestor(root.left, 6, 4) with root.left = 0 → returns null.\r
\r
Recursively call lowestCommonAncestor(root.right, 6, 4) with root.right = 8 → returns null.\r
\r
At root = 1, left = null, right = null. Return null.\r
\r
Back at Root (root = 3):\r
Left subtree returned 5.\r
\r
Right subtree returned null.\r
\r
Since only the left subtree is non-null, return 5 as the LCA.\r
\r
Result:\r
The Lowest Common Ancestor (LCA) of nodes 6 and 4 is 5.\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{r as default};
