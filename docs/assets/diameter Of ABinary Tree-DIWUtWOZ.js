const e=`# diameter Of ABinary Tree

## Problem Statement

Describe the problem statement for **diameter Of ABinary Tree** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * diameter of a binary tree\r
 * The diameter of a binary tree is the length of the longest path between any two nodes in a tree.\r
  	- This path may or may not pass through the root.\r
 * Solution:\r
 * Time Complexity : O(n)\r
 * Space Complexity: O(n), due to recursive calls\r
 * Solution here-> https://dev.to/cod3pineapple/543-diameter-of-binary-tree-47an#:~:text=The%20diameter%20of%20a%20binary,not%20pass%20through%20the%20root.\r
 * Another solution from Andy Gala-> https://www.youtube.com/watch?v=ib_JPaMEUhw (Tree can be used from right side view of binary tree program)\r
 */\r
/**\r
 * TC= O(n), because each of the tree’s nodes gets visited once, where n is the number of nodes in the tree; there is no way to solve this w/o traversing each node.\r
 * SC=O(n), because the recursive stack can grow up to O(n)\r
 */\r
/**\r
 * Solution summary:\r
 * Start with the assumption that the diameter is 0\r
 * Calculate the diameter of the left sub-tree and right sub-tree of the root node using the following recursive process:\r
 * 		At a leaf node, the diameter and height with respect to its children is 0 & 1, respectively.\r
 * 		For a non-leaf node, calculate the heights as well as the diameters of the left and right sub-trees. If the diameter passes through this node, then the diameter is the sum of the heights of the two sub-trees. Otherwise, it is the greater of the diameters of the two sub-trees.\r
 */\r
\r
class Node\r
{\r
	constructor(item)\r
	{\r
		this.data=item;\r
		this.left=this.right=null;\r
	}\r
}\r
\r
/**\r
 * The solution may or may not pass through 0; to resolve this we keep a golbal max = 0\r
 * at every node we check if the diameter of that node, meaning (left+right), is > max, and if it is then update max.\r
 */\r
\r
// Check solution here-> https://www.youtube.com/watch?v=ib_JPaMEUhw\r
var diameterOfBinaryTree = function(root) {\r
	let max = 0; // this is the global max, set to 0 initially\r
	dfs(root);\r
	return max;\r
\r
	function dfs(node) {\r
		if (!node) return 0; // this means its checking the left/right of a leaf node, which is Null, so dia. will be 0 for a leaf node\r
\r
		const left = dfs(node.left); // to get height of the left of current node\r
		const right = dfs(node.right); // to get height of the right of current node\r
\r
		// update max at every node; compare left+right to the global variable max and keep the greater val\r
		// the (left+right) here is the diameter of the node; for leaf nodes it will be 0\r
		max = Math.max(max, left + right); // maintain at every step cos this is returned finally as o/p\r
\r
		// height of current node, that is returned as this is the dfs method; nothing to do with max above\r
		return 1 + Math.max(left, right);\r
	} \r
};\r
\r
\r
// Let us construct the BST shown in the above figure\r
let root = new Node(1)\r
root.left = new Node(2)\r
root.right = new Node(3)\r
root.left.left = new Node(4)\r
root.left.right = new Node(5)\r
console.log(root);\r
console.log(diameterOfBinaryTree(root));\r
\r
/* DRY RUN\r
Perfect 👌 — let’s do a **simple dry run** for the **Diameter of a Binary Tree** (LeetCode #543).\r
\r
---\r
\r
### 🧩 Problem quick recap:\r
\r
The **diameter** = the **longest path** between any two nodes in the tree.\r
It may or may not pass through the root.\r
\r
Path length = number of **edges**, not nodes.\r
\r
---\r
\r
### 🌳 Example tree:\r
\r
\`\`\`\r
      1\r
     / \\\r
    2   3\r
   / \\\r
  4   5\r
\`\`\`\r
\r
---\r
\r
### 🧠 Idea:\r
\r
At each node,\r
the **diameter passing through that node** =\r
\`height(left subtree) + height(right subtree)\`\r
\r
We’ll compute height recursively while updating a global \`maxDiameter\`.\r
\r
---\r
\r
### 🪜 Dry Run\r
\r
Start with \`diameter = 0\`\r
\r
#### Call: \`dfs(1)\`\r
\r
→ call \`dfs(2)\`\r
→ call \`dfs(3)\`\r
\r
---\r
\r
#### \`dfs(2)\`:\r
\r
→ call \`dfs(4)\`\r
→ call \`dfs(5)\`\r
\r
##### \`dfs(4)\`:\r
\r
* left = null → height = 0\r
* right = null → height = 0\r
* local diameter = 0 + 0 = 0\r
* return height = \`1 + max(0, 0)\` = **1**\r
\r
##### \`dfs(5)\`:\r
\r
* same logic → height = **1**\r
\r
Now back at node 2:\r
\r
* leftHeight = 1\r
* rightHeight = 1\r
* local diameter = 1 + 1 = **2**\r
* update global \`diameter = max(0, 2)\` = **2**\r
* return height = \`1 + max(1, 1)\` = **2**\r
\r
---\r
\r
#### \`dfs(3)\`:\r
\r
* left = null → 0\r
* right = null → 0\r
* local diameter = 0\r
* return height = **1**\r
\r
---\r
\r
Back to root \`1\`:\r
\r
* leftHeight = 2\r
* rightHeight = 1\r
* local diameter = 2 + 1 = **3**\r
* update global \`diameter = max(2, 3)\` = **3**\r
* return height = \`1 + max(2, 1)\` = **3**\r
\r
---\r
\r
✅ **Final Answer: diameter = 3**\r
\r
---\r
\r
### 🧮 The path causing it:\r
\r
\`\`\`\r
4 → 2 → 1 → 3\r
\`\`\`\r
\r
→ 3 edges (4–2, 2–1, 1–3) */\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
