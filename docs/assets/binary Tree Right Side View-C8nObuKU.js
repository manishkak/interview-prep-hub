const e=`# binary Tree Right Side View

## Problem Statement

Describe the problem statement for **binary Tree Right Side View** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Binary Tree Right Side View\r
 * Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.\r
 * \r
 * -> Every time when you face a problem where you need to go through a tree level by level you should think about BFS — Breadth-first search.\r
 * \r
 * -> BFS Definition- Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures.\r
 * 	It starts at the tree root (or some arbitrary node of a graph, sometimes referred to as a search key) and \r
 * 	explores all of the neighbor nodes at the present depth, \r
 * 	prior to moving on to the nodes at the next depth level.\r
 * \r
 * -> We can implement BFS using queue (Array in JavaScript). \r
 * 	  The first item in the queue will be the root node. \r
 *    After that, we’re going through the queue until it’s not empty and pushing the last item from each level.\r
 */\r
\r
// BFS, TC and SC both are O(n), cos all nodes will need to be traversed even though we only need last node on each level i.e. right node.\r
/**\r
 * From chatgpt\r
 */\r
\r
function rightSideView(root) {\r
    if (!root) return [];\r
\r
    const result = [];\r
    const queue = [root];\r
\r
    while (queue.length > 0) {\r
        const levelSize = queue.length;\r
\r
        for (let i = 0; i < levelSize; i++) {\r
            const currentNode = queue.shift();\r
\r
            // means that its the last node in the level\r
            if (i === levelSize - 1) {\r
                result.push(currentNode.val);\r
            }\r
\r
            if (currentNode.left) queue.push(currentNode.left);\r
            if (currentNode.right) queue.push(currentNode.right);\r
        }\r
    }\r
\r
    return result;\r
}\r
\r
const tree2 = {\r
    val: 1,\r
    left: {\r
        val: 2,\r
        left: null,\r
        right: { val: 5, left: null, right: null }\r
    },\r
    right: {\r
        val: 3,\r
        left: null,\r
        right: { val: 4, left: null, right: null }\r
    }\r
};\r
\r
console.log(rightSideView(tree)); // Output: [1, 3, 4]\r
/**\r
 * Explanation\r
Initial Check:\r
\r
If the root is null, return an empty array because there's no tree to traverse.\r
Level Order Traversal (BFS):\r
\r
Initialize a queue with the root node.\r
Iterate over each level of the tree using the queue.\r
For each node at the current level, process it:\r
    If it's the last node in the current level (checked using i === levelSize - 1), add its value to the result array.\r
    Add the node's children to the queue for the next level's processing.\r
Return the Result:\r
    The result array will contain the values of the nodes visible from the right side of the tree.\r
*/\r
\r
// DFS, TC = O(n) but SC is only O(h) where h is height of the tree which is < n\r
function rightSideViewDFS(root) {\r
    const result = [];\r
\r
    function dfs(node, depth) {\r
        if (!node) return;\r
\r
        // If visiting this depth for the first time, meaning initially when the program starts at the root, result will be empty(so result.length=0) and depth will be 0, so push root in result and recursively call dfs on the right child of root.\r
        if (result.length === depth) result.push(node.val);\r
\r
        // Visit right before left\r
        dfs(node.right, depth + 1);\r
        dfs(node.left, depth + 1);\r
    }\r
\r
    dfs(root, 0);\r
    return result;\r
}\r
\r
\r
// ----\r
// ----\r
// ----\r
\r
/** DFS solution from jsDiet.. This page also has BFS solution but DFS is a better solution\r
 * https://jsdiet.com/binary-tree-right-side-view-leetcode-solution/\r
 */\r
\r
// -  In BFS, we might traverse through each level of nodes. But our main goal is to find right side view, which means we need to focus on depth of tree instead visiting all nodes. In this case, DFS approach is more suitable. Lets see how we can optimize above problem with DFS approach.\r
\r
// ------ Depth First Search Leetcode solution start - jsdiet ------\r
// using DFS -> PreOrder NRL traversal\r
\r
var rightSideView = function (root) {\r
    const result = [];\r
\r
    dfs(root, 0, result);\r
    return result;\r
};\r
\r
const dfs = (node, currentLevel, result) => {\r
    if (!node) {\r
        return;\r
    }\r
\r
    // If this is the first time we're visiting this level, add the node's value\r
    if (currentLevel >= result.length) {\r
        result.push(node.val);\r
    }\r
\r
    // Traverse right side first, then left\r
    if (node.right) {\r
        dfs(node.right, currentLevel + 1, result);\r
    }\r
\r
    if (node.left) {\r
        dfs(node.left, currentLevel + 1, result);\r
    }\r
}\r
\r
// ------ Depth First Search Leetcode solution end - jsdiet ------\r
\r
// Leetcode environment provides already generated binary tree. \r
// So below part of code no need, if you are trying in Leetcode website environment.\r
\r
\r
\r
\r
// ------- Code to generate our binary tree -------\r
// This is purely for testing in local machine\r
\r
class TreeNode {\r
    constructor(val) {\r
        this.val = val;\r
        this.left = null;\r
        this.right = null;\r
    }\r
\r
    insert(values) {\r
        const queue = [this];\r
        let i = 0;\r
        while (queue.length > 0) {\r
            let current = queue.shift();\r
            for (let side of ["left", "right"]) {\r
                if (!current[side]) {\r
                    if (values[i] !== null) {\r
                        current[side] = new TreeNode(values[i]);\r
                    }\r
                    i++;\r
                    if (i >= values.length) return this;\r
                }\r
                if (current[side]) queue.push(current[side]);\r
            }\r
        }\r
        return this;\r
    }\r
}\r
\r
const tree = new TreeNode(1);\r
tree.insert([2, 3, null, 5, null, 4]);\r
\r
\r
\r
// Execute using DFS\r
let val = rightSideView(tree);\r
console.log(val);\r
\r
// Time complexity: O(n), where n is number of nodes in the binary tree.\r
\r
// Space complexity: O(H), where H is Max height of Binary Tree, since we are using DFS approach. Usually, we can call it is O(n) space complexity because of recursive calls.\r
\r
// DFS is better approach compare to BFS, while finding depth of tree traversal.\r
\r
\r
\r
// --------------------------------------------------------------------\r
// --------------------------------------------------------------------\r
// --------------------------------------------------------------------\r
\r
// Solution from Andy Gala videos https://www.youtube.com/watch?v=RKPCF-hsOPY&list=PLrClazTqVpJlKREjzrExHF4znO9i-kXhz&index=4&ab_channel=AndyGala\r
\r
 var rightSideView = function(root) {\r
	if(!root) return [];\r
	\r
	const queue = [root];\r
	const result = [];\r
	\r
	while(queue.length) {\r
	    let len = queue.length;\r
	    result.push(queue[queue.length -1].val);\r
	    \r
	    while(len--) {\r
	        let node = queue.shift();\r
	        if(node.left) queue.push(node.left);\r
	        console.log(node.left);\r
	        if(node.right) queue.push(node.right);\r
	    }\r
	}\r
	\r
	return result;\r
};
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
