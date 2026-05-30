# complete Binary Tree

## Problem Statement

Describe the problem statement for **complete Binary Tree** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * check if a BT is complete (there is also a dry run below, after the solution)
 * To check if a binary tree is complete, you need to verify two key conditions:
 *      All levels except possibly the last level are completely filled
 *      All nodes in the last level are as far left as possible
 * Approach
 *      The most straightforward approach to check if a binary tree is complete is by performing a level order traversal (BFS) and ensuring that:
            Once you encounter a null child, all subsequent nodes must also be null. If you find a non-null node after a null node, the tree is not complete
Steps:
    - Level Order Traversal: Use a queue to traverse the tree level by level.
    - Encounter a null: When you encounter a null, set a flag indicating that all subsequent nodes must be null.
    - Check Remaining Nodes: If after encountering a null node you find a non-null node, the tree is not complete.
 */

function isCompleteTree(root) {
    if (!root) return true;

    const queue = [];
    queue.push(root);
    
    let end = false; // Flag to indicate that we have encountered the first null node

    while (queue.length > 0) {
        const node = queue.shift(); // remove the first ele of array

        if (node === null) {
            end = true;
        } else {
            if (end) return false; // If we find a non-null node after a null, the tree is not complete
            
            // Add children to the queue
            queue.push(node.left);
            queue.push(node.right);
        }
    }

    return true;
}

/*
Dry Run of the Code:
Let's dry run the code using the above tree:

Initialization:

Queue starts with [1].
end is false.
First iteration:

Dequeue 1. The queue becomes [].
Enqueue 2 and 3. The queue becomes [2, 3].
Second iteration:

Dequeue 2. The queue becomes [3].
Enqueue 4 and 5. The queue becomes [3, 4, 5].
Third iteration:

Dequeue 3. The queue becomes [4, 5].
Enqueue 6 and null. The queue becomes [4, 5, 6, null].
Fourth iteration:

Dequeue 4. The queue becomes [5, 6, null].
Enqueue null and null. The queue becomes [5, 6, null, null, null].
Fifth iteration:

Dequeue 5. The queue becomes [6, null, null, null].
Enqueue null and null. The queue becomes [6, null, null, null, null, null].
Sixth iteration:

Dequeue 6. The queue becomes [null, null, null, null, null].
Enqueue null and null. The queue becomes [null, null, null, null, null, null, null].
Subsequent iterations:

All remaining nodes in the queue are null, so we finish the traversal.
(If you find a non-null node after a null node, the tree is not complete)
*/

/*
-> The time complexity of the algorithm is determined by the number of nodes in the binary tree and the operations performed on each node.

Traversal: The algorithm performs a level order traversal (BFS) of the binary tree. In this traversal, each node is visited exactly once.

Queue Operations: For each node, it performs constant-time operations like enqueueing and dequeueing.
Given that there are n nodes in the binary tree, the total number of operations performed is proportional to n.

Time Complexity: O(n), where n is the number of nodes in the binary tree.

-> The space complexity is determined by the maximum amount of additional space required by the algorithm, which in this case is mainly due to the queue used for the level order traversal.

Queue Size: The maximum size of the queue at any point in time is determined by the number of nodes at the widest level of the tree. In the worst case, this could be as large as the number of nodes in the last level of the tree.

In a complete binary tree, the last level can have at most n/2 nodes. However, since n/2 is still O(n) in the worst case, the space required for the queue is proportional to the number of nodes at the widest level.
Space Complexity: O(n) in the worst case, where n is the number of nodes in the binary tree.
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
