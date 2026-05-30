const e=`# complete Binary Tree

## Problem Statement

Describe the problem statement for **complete Binary Tree** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * check if a BT is complete (there is also a dry run below, after the solution)\r
 * To check if a binary tree is complete, you need to verify two key conditions:\r
 *      All levels except possibly the last level are completely filled\r
 *      All nodes in the last level are as far left as possible\r
 * Approach\r
 *      The most straightforward approach to check if a binary tree is complete is by performing a level order traversal (BFS) and ensuring that:\r
            Once you encounter a null child, all subsequent nodes must also be null. If you find a non-null node after a null node, the tree is not complete\r
Steps:\r
    - Level Order Traversal: Use a queue to traverse the tree level by level.\r
    - Encounter a null: When you encounter a null, set a flag indicating that all subsequent nodes must be null.\r
    - Check Remaining Nodes: If after encountering a null node you find a non-null node, the tree is not complete.\r
 */\r
\r
function isCompleteTree(root) {\r
    if (!root) return true;\r
\r
    const queue = [];\r
    queue.push(root);\r
    \r
    let end = false; // Flag to indicate that we have encountered the first null node\r
\r
    while (queue.length > 0) {\r
        const node = queue.shift(); // remove the first ele of array\r
\r
        if (node === null) {\r
            end = true;\r
        } else {\r
            if (end) return false; // If we find a non-null node after a null, the tree is not complete\r
            \r
            // Add children to the queue\r
            queue.push(node.left);\r
            queue.push(node.right);\r
        }\r
    }\r
\r
    return true;\r
}\r
\r
/*\r
Dry Run of the Code:\r
Let's dry run the code using the above tree:\r
\r
Initialization:\r
\r
Queue starts with [1].\r
end is false.\r
First iteration:\r
\r
Dequeue 1. The queue becomes [].\r
Enqueue 2 and 3. The queue becomes [2, 3].\r
Second iteration:\r
\r
Dequeue 2. The queue becomes [3].\r
Enqueue 4 and 5. The queue becomes [3, 4, 5].\r
Third iteration:\r
\r
Dequeue 3. The queue becomes [4, 5].\r
Enqueue 6 and null. The queue becomes [4, 5, 6, null].\r
Fourth iteration:\r
\r
Dequeue 4. The queue becomes [5, 6, null].\r
Enqueue null and null. The queue becomes [5, 6, null, null, null].\r
Fifth iteration:\r
\r
Dequeue 5. The queue becomes [6, null, null, null].\r
Enqueue null and null. The queue becomes [6, null, null, null, null, null].\r
Sixth iteration:\r
\r
Dequeue 6. The queue becomes [null, null, null, null, null].\r
Enqueue null and null. The queue becomes [null, null, null, null, null, null, null].\r
Subsequent iterations:\r
\r
All remaining nodes in the queue are null, so we finish the traversal.\r
(If you find a non-null node after a null node, the tree is not complete)\r
*/\r
\r
/*\r
-> The time complexity of the algorithm is determined by the number of nodes in the binary tree and the operations performed on each node.\r
\r
Traversal: The algorithm performs a level order traversal (BFS) of the binary tree. In this traversal, each node is visited exactly once.\r
\r
Queue Operations: For each node, it performs constant-time operations like enqueueing and dequeueing.\r
Given that there are n nodes in the binary tree, the total number of operations performed is proportional to n.\r
\r
Time Complexity: O(n), where n is the number of nodes in the binary tree.\r
\r
-> The space complexity is determined by the maximum amount of additional space required by the algorithm, which in this case is mainly due to the queue used for the level order traversal.\r
\r
Queue Size: The maximum size of the queue at any point in time is determined by the number of nodes at the widest level of the tree. In the worst case, this could be as large as the number of nodes in the last level of the tree.\r
\r
In a complete binary tree, the last level can have at most n/2 nodes. However, since n/2 is still O(n) in the worst case, the space required for the queue is proportional to the number of nodes at the widest level.\r
Space Complexity: O(n) in the worst case, where n is the number of nodes in the binary tree.\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
