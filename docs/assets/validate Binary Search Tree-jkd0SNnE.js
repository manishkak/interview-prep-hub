const e=`# validate Binary Search Tree

## Problem Statement

Describe the problem statement for **validate Binary Search Tree** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Is Binary Search Tree Valid\r
 * Solution- https://leetcode.com/problems/validate-binary-search-tree/solutions/2045697/js-simple-explained-in-order-traversal/\r
 */\r
\r
/**\r
 * prev is initialized to '-Infinity' to keep track of the previous node's value.\r
 * The inorder function is defined to recursively traverse the tree in inOrder.\r
 * For each node, it recursively checks the left subtree. If any left subtree is invalid, it returns false.\r
 * It then compares the current node's value to prev. If the current node's value is not greater than prev, it returns false.\r
 * It updates prev to the current node's value.\r
 * Finally, it recursively checks the right subtree. If any right subtree is invalid, it returns false.\r
 * The isValidBST method returns the result of calling inorder starting from the root node.\r
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
 var isValidBST = function (root) {\r
    let is_bst_valid = true;\r
    let prev_node = new Tree(-Infinity, null, null);\r
    const in_order_traverse = (node) => {\r
        \r
        // Empty tree. Base case.\r
        if (!node || !is_bst_valid) {\r
            return;\r
        }\r
\r
        // Get my left nodes.\r
        in_order_traverse(node.left);\r
\r
        // The in order section\r
        // Check if the current node is greater than the previous node.\r
        // If not, it's a invalid tree\r
        if (node.val <= prev_node.val) {\r
            is_bst_valid = false;\r
        }\r
\r
        // Update the previous node.\r
        prev_node = node;\r
        in_order_traverse(node.right);\r
    };\r
\r
    in_order_traverse(root);\r
\r
    // Return the flag\r
    return is_bst_valid;\r
};\r
\r
const tree = new Tree(2);\r
  tree.left = new Tree(1);\r
  tree.right = new Tree(3);\r
//   tree.left.left = new Tree(9);\r
//   tree.right.left = new Tree(10);\r
//   tree.right.right = new Tree(5);\r
//   in-order:  LNR 9,7,12,10,1,5\r
//   pre-order: NLR 12,7,9,1,10,5 \r
  console.log(isValidBST(tree))\r
\r
/**\r
 * Time Complexity: O(n) | Where n is the number of nodes in our Binary Search Tree | As we're going to traverse all of the nodes within the tree.\r
 * Space Complexity: O(h) | Where h is the height of the Binary Search Tree | Because we're going to store the height of the tree within the Call Stack due to the in-order traversal.\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
