const e=`# maximum Width Of ABinary Tree

## Problem Statement

Describe the problem statement for **maximum Width Of ABinary Tree** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Maximum width of a Binary Tree\r
 * Maximum Width: This is the largest number of nodes present at any single level of the tree\r
 * The "Maximum Width of a Binary Tree" problem asks us to find the maximum width of a binary tree. The width of a level is defined as the number of nodes between the leftmost and rightmost non-null nodes on that level, including null nodes in between.\r
 * Approach:\r
 * To solve this problem, we can perform a level order traversal (using BFS) and at each level, calculate the width by considering the positions of the first and last nodes in that level.\r
 * Steps:\r
 * 	- Use a Queue: To perform a level order traversal, we use a queue. The queue will store pairs of the node and its position (index) in the tree as if it were a complete binary tree.\r
 * 	- Track Indices: For each node in the queue, track its index. The index of the root is considered 0. For each left child, the index is 2 * index, and for each right child, it's 2 * index + 1.\r
 * 	- Calculate Width: For each level, the width is calculated as the difference between the last and first node indices at that level plus one.\r
 *  - Update Maximum Width: Keep track of the maximum width encountered during the traversal.\r
 * Explanation\r
 *  - Queue Management: The queue is used to perform a level-order traversal. Each node is associated with an index that helps to calculate the width of each level.\r
 *  - Width Calculation: At each level, the width is determined by subtracting the index of the first node from the index of the last node, then adding one.\r
 */\r
\r
function widthOfBinaryTree(root) {\r
    if (!root) return 0;\r
\r
    let maxWidth = 0;\r
    const queue = [{ node: root, index: 0 }];\r
\r
    while (queue.length > 0) {\r
        const levelLength = queue.length;\r
        const firstIndex = queue[0].index;\r
        let lastIndex = firstIndex;\r
\r
        for (let i = 0; i < levelLength; i++) {\r
            const { node, index } = queue.shift();\r
            lastIndex = index;\r
\r
            if (node.left) {\r
                queue.push({ node: node.left, index: 2 * index });\r
            }\r
            if (node.right) {\r
                queue.push({ node: node.right, index: 2 * index + 1 });\r
            }\r
        }\r
\r
        maxWidth = Math.max(maxWidth, lastIndex - firstIndex + 1);\r
    }\r
\r
    return maxWidth;\r
}\r
\r
const tree = {\r
    val: 1,\r
    left: {\r
        val: 3,\r
        left: {\r
            val: 5,\r
            left: { val: 6, left: null, right: null },\r
            right: null\r
        },\r
        right: null\r
    },\r
    right: {\r
        val: 2,\r
        left: null,\r
        right: {\r
            val: 9,\r
            left: null,\r
            right: { val: 7, left: null, right: null }\r
        }\r
    }\r
};\r
\r
console.log(widthOfBinaryTree(tree)); // Output: 8\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
