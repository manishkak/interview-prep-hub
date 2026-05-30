const t=`# flatten Binary Tree To Linked List

## Problem Statement

Describe the problem statement for **flatten Binary Tree To Linked List** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Flatten Linked List to Binary Tree\r
 * This is actually also the PreOrder DFS Traversal of a Binary Tree\r
 * We start at the root node, and for each node, find the right-most node in its left subtree. We set the right pointer of the right-most node to the current node’s right pointer. After that, we set the current node’s right pointer to the current node’s left pointer. Finally, we set the current node’s left pointer to NULL. We will repeat this process for all nodes in the binary tree.\r
 * Solution summary->\r
	For every node, \r
		check whether it has a "left child" or not. 	// IF: current.left != null\r
			If the left child "does not exist",\r
				move on to the right child. 			// current = current.right;\r
			Otherwise find, 							// Else,  last = current.left;\r
				- node on the right-most branch			// while (last.right != null)\r
				- of the left subtree 					// if (current.left != null)\r
				- which does not have a right child.  	// last = last.right;\r
				Once this rightmost node is found, \r
					connect it with the right child of the current node. // last.right = current.right;\r
				After connecting, \r
					set \r
						right child of the current node to\r
						left child of the current node.		// current.right = current.left;\r
				Finally, \r
					set the left child of the current node to NULL.	// current.left = null;\r
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
function flattenTree(root) {\r
    if (root == null) return;\r
\r
    let current = root;\r
    while (current != null) {\r
\r
        if (current.left != null) {\r
            let last = current.left;\r
            while (last.right != null) {\r
                last = last.right;\r
            }\r
            \r
            last.right = current.right;\r
            current.right = current.left;\r
            current.left = null;\r
        }\r
        current = current.right;	// if there is no current.left, move curr to curr.rt, & cont. loop\r
    }\r
    return root;\r
}\r
  \r
  \r
  const tree = new Tree(12);\r
  tree.left = new Tree(7);\r
  tree.right = new Tree(1);\r
  tree.left.left = new Tree(9);\r
  tree.right.left = new Tree(10);\r
  tree.right.right = new Tree(5);\r
//   in-order:  LNR 9,7,12,10,1,5\r
//   pre-order: NLR 12,7,9,1,10,5 \r
  console.log(flattenTree(tree))\r
\r
  /**\r
   * Time complexity\r
   * 	The time complexity is O(n), where n is the number of nodes in the tree because we traverse the tree only once, and the operations on each node are O(1).\r
   * Space Complexity\r
   * 	The space complexity will be O(1) for this problem.\r
   */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{t as default};
