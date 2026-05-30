const e=`# minimum Value In ABST

## Problem Statement

Describe the problem statement for **minimum Value In ABST** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Find the Minimum Value in a Binary Search Tree\r
 * Problem: Given the root to a Binary Search Tree, write a function to find the minimum value in that tree\r
 */\r
\r
// The solution that is provided here is, as we need to find the min. value so keep traversing the left tree and find the leaf node. I think another solution for getting the min. value would be taking the inOrder traversal and pop the first element from the beginning of the array (inOrder traversal is always in asc order).\r
\r
// Iterative\r
function findMin(rootNode) {\r
    if (rootNode == null) {\r
        return null;\r
    }\r
    while (rootNode.leftChild) {\r
        rootNode = rootNode.leftChild\r
    }\r
    return rootNode.val\r
}\r
\r
var BST = new BinarySearchTree(6)\r
BST.insertBST(20)\r
BST.insertBST(-1)\r
\r
console.log(findMin(BST.root))\r
\r
// This solution first checks if the given root is null and returns null if it is. Then, it moves on to the left subtree and keeps going to each node’s left child until the left-most child is found.\r
/**\r
 * The time complexity of this solution is in O(h). In the worst case, the BST will be left-skewed and the height will be n. The time complexity will be O(n).\r
 */\r
\r
// ================\r
// ================\r
\r
// Recursive\r
function findMin(rootNode)\r
{\r
  if(rootNode == null)\r
    return null;\r
  else if(rootNode.leftChild == null)\r
      return rootNode.val\r
  else\r
    return findMin(rootNode.leftChild)\r
}  \r
var BST = new BinarySearchTree(6)\r
BST.insertBST(20)\r
BST.insertBST(-1)\r
\r
console.log(findMin(BST.root))\r
\r
// In this solution, we check if the root is null, if it is, null is returned. Otherwise, we check to see if the left child of the current node is null, if it is, then this rootNode is the leftmost node and we return the value from there. If a left node exists, we call the findMin() function on it to further go into the left subtree\r
\r
/**\r
 * The time complexity of this solution is the same as the time complexity of the solution above, namely O(h) in general case and O(n) in the case of a skewed tree\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
