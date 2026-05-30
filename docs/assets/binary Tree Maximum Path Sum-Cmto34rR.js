const e=`# binary Tree Maximum Path Sum

## Problem Statement

Describe the problem statement for **binary Tree Maximum Path Sum** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Given the root of a binary tree, return the maximum sum of any non-empty path.\r
\r
A path in a binary tree is defined as follows:\r
\r
A sequence of nodes in which each pair of adjacent nodes must have an edge connecting them.\r
A node can only be included in a path once at most.\r
Including the root in the path is not compulsory.\r
You can calculate the path sum by adding up all node values in the path. To solve this problem, calculate the maximum path sum given the root of a binary tree so that there won’t be any greater path than it in the tree.\r
\r
-> First, we need to initialize a maxSum as a global variable of negative infinity. We’ll start by calling maxContrib with root as its parameter. Second, we need to implement the maxContrib(node) function so we can decide whether to continue with the old path or start a new path. Here’s how we’ll implement it:\r
- This is a recursive function, so the base case states that the maxContrib is 0 if the node is NULL.\r
\r
- Call maxContrib recursively for the node’s children to calculate the max gain for the left and right subtrees. We also need to check if this value is greater than zero or not so we can avoid adding any negative values.\r
\r
- Now, check whether to continue with the old path or start a new path. To start a new path, the sum of this path will be node.val + leftSubtree + rightSubtree. Update maxSum if it’s better to start a new path.\r
\r
- We’ll return the max gain to the node, and one or none of its subtrees can be added to the current path— node.val + max(leftSubtree, rightSubtree).\r
 */\r
\r
import { TreeNode } from "./TreeNode";\r
import {BinaryTree} from "./BinaryTree";\r
\r
let maxSum = Infinity * -1;\r
\r
function maxContrib(root) {\r
    if (root == null) return 0;\r
\r
    let maxLeft = maxContrib(root.left),\r
        maxRight = maxContrib(root.right)\r
    \r
    let leftSubtree = 0,\r
        rightSubtree = 0;\r
\r
    if (maxLeft > 0) leftSubtree = maxLeft;\r
    if (maxRight > 0) rightSubtree = maxRight;\r
\r
    let valueNewPath = root.data + leftSubtree + rightSubtree;\r
\r
    maxSum = Math.max(maxSum, valueNewPath);\r
\r
    return root.data + Math.max(leftSubtree, rightSubtree);\r
}\r
\r
function maxPathSum(root) {\r
    maxContrib(root);\r
    let temp = maxSum;\r
    maxSum = Infinity * -1;\r
    return temp;\r
}\r
\r
// Driver code\r
function main() {\r
    let inputTrees = [\r
        [new TreeNode(-8), new TreeNode(2), new TreeNode(17), new TreeNode(1), new TreeNode(4), new TreeNode(19), new TreeNode(5)],\r
        [new TreeNode(7), new TreeNode(3), new TreeNode(4), new TreeNode(-1), new TreeNode(-3)],\r
        [new TreeNode(-10), new TreeNode(9), new TreeNode(20), new TreeNode(30), new TreeNode(16), new TreeNode(15), new TreeNode(7)],\r
        [new TreeNode(1), new TreeNode(2), new TreeNode(3)],\r
        [new TreeNode(0)],\r
        [new TreeNode(-10), new TreeNode(9), new TreeNode(20), null, null, new TreeNode(15), new TreeNode(7)],\r
        [new TreeNode(1), new TreeNode(-3), new TreeNode(3), new TreeNode(5), null, null, new TreeNode(-5)]\r
    ]\r
\r
    for (let i = 0; i < inputTrees.length; i++) {\r
        let tree = new BinaryTree(inputTrees[i]);\r
        console.log(i + 1 + ".\\tBinary Tree:");\r
        displayTree(tree.root);\r
        console.log("\\n\\t Maximum path sum:\\t", maxPathSum(tree.root));\r
        console.log("\\n", "-".repeat(100));\r
    }\r
}\r
\r
main();
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
