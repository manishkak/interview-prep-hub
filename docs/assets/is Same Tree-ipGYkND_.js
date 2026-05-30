const e=`# is Same Tree

## Problem Statement

Describe the problem statement for **is Same Tree** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Is Same Tree\r
 * Solution- https://leetcode.com/problems/same-tree/solutions/1936835/js-simple-explained-recursive-pre-order/\r
 * \r
 */\r
\r
/*Approach\r
- Use DFS recursion.\r
- Two trees are the same if:\r
	- Both nodes are null → return true.\r
	- One is null and the other isn’t → return false.\r
	- Values of both nodes are equal AND\r
		- Left subtrees are same AND\r
		- Right subtrees are same.\r
\r
Steps\r
- If both nodes are null, return true.\r
- If one is null and the other isn’t, return false.\r
- If p.val !== q.val, return false.\r
- Recursively:\r
	- Check left subtrees.\r
	- Check right subtrees.\r
- Return true only if both are true.\r
\r
Complexity\r
	Time: O(N) where N = number of nodes (we check all nodes).\r
	Space: O(H) for recursion stack (H = height of tree).\r
*/\r
\r
 class Tree {\r
	constructor(val) {\r
	  this.val = val;\r
	  this.left = null;\r
	  this.right = null;\r
	}\r
  }\r
\r
var isSameTree = function (p, q) {\r
	// So both our trees current node is null\r
	// This mean's they both reached the end of the tree\r
	// at the same time without error\r
	if (p == null && q == null) {\r
		return true;\r
	}\r
\r
	// One of the pointers are null when another is not\r
	// This mean's one of our pointers has traversed to a correct node\r
	// but another has reached the end of the list too early and thus\r
	// cannot be a valid mirror tree\r
	if ((p == null && q != null) || (q == null && p != null)) {\r
		return false;\r
	}\r
\r
	// As we have moved nodes\r
	// Are they the same value?\r
	if (p.val != q.val) {\r
		return false;\r
	}\r
\r
	// Get both left nodes\r
	// We will traverse the left nodes in a DFS fashion\r
	// to be able to compare both left nodes at the same time\r
	// So we move left at the same time on both trees.\r
	let good_lefts = isSameTree(p.left, q.left);\r
\r
	// Get both right nodes\r
	// We will traverse the right nodes in a DFS fashion\r
	// to be able to compare both right nodes at the same time\r
	// So we move right at the same time on both trees.\r
	let good_rights = isSameTree(p.right, q.right);\r
\r
	// So are both sides good?\r
	return good_lefts && good_rights;\r
}\r
\r
const tree = new Tree(12);\r
tree.left = new Tree(7);\r
tree.right = new Tree(1);\r
tree.left.left = new Tree(9);\r
tree.right.left = new Tree(10);\r
tree.right.right = new Tree(5);\r
const tree2 = new Tree(12);\r
tree2.left = new Tree(7);\r
tree2.right = new Tree(6);\r
tree2.left.left = new Tree(9);\r
tree2.right.left = new Tree(10);\r
tree2.right.right = new Tree(5);\r
//   in-order:  LNR 9,7,12,10,1,5\r
//   pre-order: NLR 12,7,9,1,10,5 \r
  console.log(isSameTree(tree,tree2))\r
\r
/**\r
 * Time Complexity: O(n) | Where n is equal to the number of nodes in both trees. | We visit every node in worst case.\r
 * Space Complexity: O(h) | Where h is the height of the tallest tree. This is within the Call Stack | In the worst case, a tree's number of nodes is it's height.\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
