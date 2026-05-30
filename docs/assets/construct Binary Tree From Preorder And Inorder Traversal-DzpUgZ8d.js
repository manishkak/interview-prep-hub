const r=`# construct Binary Tree From Preorder And Inorder Traversal

## Problem Statement

Describe the problem statement for **construct Binary Tree From Preorder And Inorder Traversal** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Construct Binary Tree from Preorder and Inorder Traversal\r
 * Solution here-> https://dev.to/seanpgallivan/solution-construct-binary-tree-from-preorder-and-inorder-traversal-32c5#idea\r
 * Check the description on this page\r
 */\r
\r
/**\r
 * from chatgpt\r
 */\r
\r
// Key Insights\r
//     - Preorder Traversal: The first element is always the root of the tree/subtree.\r
//     - Inorder Traversal: Elements before the root element in inorder traversal belong to the left subtree, and elements after the root belong to the right subtree.\r
\r
// Approach\r
//     - Identify the Root: The first element in the preorder list is the root of the current subtree.\r
//     - Split the Inorder List: Locate the root in the inorder list. Elements to the left of this root in inorder traversal form the left subtree, and elements to the right form the right subtree.\r
//     - Recursive Construction: Recursively build the left and right subtrees using the corresponding elements from preorder and inorder lists.\r
\r
// TC: O(n), each node will be processed once\r
// SC: O(n), For the recursion stack (in the worst case) and storing the tree nodes\r
\r
function buildTree(preorder, inorder) {\r
    if (!preorder.length || !inorder.length) return null;\r
\r
    // The first element in the preorder list is the root\r
    const rootValue = preorder[0];\r
    const root = { val: rootValue, left: null, right: null }; // start creating new tree\r
\r
    // Find the index of the root in inorder list\r
    const rootIndex = inorder.indexOf(rootValue);\r
\r
    // Elements to the left in inorder are the left subtree\r
    const leftInorder = inorder.slice(0, rootIndex);\r
    // Elements to the right in inorder are the right subtree\r
    const rightInorder = inorder.slice(rootIndex + 1);\r
\r
    // Elements in preorder corresponding to the left subtree\r
    const leftPreorder = preorder.slice(1, leftInorder.length + 1);\r
    // Elements in preorder corresponding to the right subtree\r
    const rightPreorder = preorder.slice(leftInorder.length + 1);\r
\r
    // Recursively build the left and right subtrees\r
    root.left = buildTree(leftPreorder, leftInorder);\r
    root.right = buildTree(rightPreorder, rightInorder);\r
\r
    return root;\r
}\r
\r
const preorder = [3, 9, 20, 15, 7];\r
const inorder = [9, 3, 15, 20, 7];\r
\r
const tree = buildTree(preorder, inorder);\r
console.log(tree);\r
\r
/*\r
Explanation:\r
\r
Base Case:\r
If either preorder or inorder list is empty, return null, which means there's no subtree to construct.\r
\r
Root Identification:\r
The first element of the preorder list is the root of the current subtree.\r
\r
Splitting Inorder List:\r
The index of the root in the inorder list helps us determine which elements belong to the left and right subtrees.\r
\r
Recursive Construction:\r
Recursively call the buildTree function for the left and right subtrees using the appropriate slices of preorder and inorder lists.\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{r as default};
