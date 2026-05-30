const n=`# nodes Atk Dist From Root

## Problem Statement

Describe the problem statement for **nodes Atk Dist From Root** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Find Nodes at "k" Distance From the Root\r
 * Approach: This solution maintains a counter k that is decremented until it is 0 or a leaf node is reached, returning all nodes that are encountered in the process.\r
 * TC: O(n)\r
 */\r
\r
function findKNodes(rootNode, k) {\r
    var result = [];\r
    findK(rootNode, k, result);\r
    return result;\r
}\r
\r
//Helper recursive function to traverse tree and push all the nodes at "k" distance into "result" array\r
function findK(rootNode, k, result) {\r
    if (rootNode == null)\r
        return\r
    if (k == 0)\r
        result.push(rootNode.val)\r
    else {\r
        //Decrement k at each step till you reach at the leaf node\r
        //or when k == 0 then push the Node's data into result\r
        findK(rootNode.leftChild, k - 1, result)\r
        findK(rootNode.rightChild, k - 1, result)\r
    }\r
}\r
\r
var BST = new BinarySearchTree(6)\r
BST.insertBST(4)\r
BST.insertBST(9)\r
BST.insertBST(5)\r
BST.insertBST(2)\r
BST.insertBST(8)\r
BST.insertBST(12)\r
console.log(findKNodes(BST.root,2))
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
