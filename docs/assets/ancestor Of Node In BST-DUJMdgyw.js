const e=`# ancestor Of Node In BST

## Problem Statement

Describe the problem statement for **ancestor Of Node In BST** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Find Ancestors of a Given Node in a BST\r
 * Approach: This solution uses a recursive helper function which traverses from the root to the input node and backtracks to append the ancestors that led to the node.\r
	* Initialize an empty result list to store the ancestors.\r
	* Check if the current node is NULL, indicating a leaf node or an empty subtree, return FALSE if so.\r
	* If the current node’s value matches the target value k, return TRUE to indicate the target node is found.\r
	* Recursively search for the target node in the left and right subtrees. If found in either subtree, append the current node’s value to the result list and return TRUE, otherwise, return FALSE.\r
	* Finally, return the result list containing all recorded ancestors of the node k.\r
 * TC: O(n) time function since it iterates over all of the nodes of the entire tree\r
 */\r
\r
function findAncestors(rootNode, k) {\r
    var result = []\r
    recfindAncestors(rootNode, k, result)\r
    return result;\r
}\r
\r
function recfindAncestors(rootNode, k, result) {\r
    \r
    // recursive\r
    if (rootNode == null) {\r
        return false;\r
    } else if (rootNode.val == k) {\r
        return true;\r
    } else if ((recfindAncestors(rootNode.leftChild, k, result)) || (recfindAncestors(rootNode.rightChild, k, result))) {\r
        result.push(rootNode.val)\r
        return true;\r
    }\r
\r
    // this iterative is better to understand\r
    var ancestors = [];\r
    while (current !== null) {\r
        // If k is greater than the current node's value, move to its right child.\r
        if (k > current.data) {\r
            ancestors.push(current.data);\r
            current = current.right;\r
        }\r
        // If k is less than the current node's value, move to its left child.\r
        else if (k < current.data) {\r
            ancestors.push(current.data);\r
            current = current.left;\r
        }\r
        // If k is found, return the ancestors array.\r
        else {\r
            return ancestors.reverse();\r
        }\r
    }\r
\r
    return false;\r
}\r
\r
var BST = new BinarySearchTree(6)\r
BST.insertBST(1)\r
BST.insertBST(133)\r
BST.insertBST(12)\r
console.log(findAncestors(BST.root,12))
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
