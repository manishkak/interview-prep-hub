# maximum Width Of ABinary Tree

## Problem Statement

Describe the problem statement for **maximum Width Of ABinary Tree** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Maximum width of a Binary Tree
 * Maximum Width: This is the largest number of nodes present at any single level of the tree
 * The "Maximum Width of a Binary Tree" problem asks us to find the maximum width of a binary tree. The width of a level is defined as the number of nodes between the leftmost and rightmost non-null nodes on that level, including null nodes in between.
 * Approach:
 * To solve this problem, we can perform a level order traversal (using BFS) and at each level, calculate the width by considering the positions of the first and last nodes in that level.
 * Steps:
 * 	- Use a Queue: To perform a level order traversal, we use a queue. The queue will store pairs of the node and its position (index) in the tree as if it were a complete binary tree.
 * 	- Track Indices: For each node in the queue, track its index. The index of the root is considered 0. For each left child, the index is 2 * index, and for each right child, it's 2 * index + 1.
 * 	- Calculate Width: For each level, the width is calculated as the difference between the last and first node indices at that level plus one.
 *  - Update Maximum Width: Keep track of the maximum width encountered during the traversal.
 * Explanation
 *  - Queue Management: The queue is used to perform a level-order traversal. Each node is associated with an index that helps to calculate the width of each level.
 *  - Width Calculation: At each level, the width is determined by subtracting the index of the first node from the index of the last node, then adding one.
 */

function widthOfBinaryTree(root) {
    if (!root) return 0;

    let maxWidth = 0;
    const queue = [{ node: root, index: 0 }];

    while (queue.length > 0) {
        const levelLength = queue.length;
        const firstIndex = queue[0].index;
        let lastIndex = firstIndex;

        for (let i = 0; i < levelLength; i++) {
            const { node, index } = queue.shift();
            lastIndex = index;

            if (node.left) {
                queue.push({ node: node.left, index: 2 * index });
            }
            if (node.right) {
                queue.push({ node: node.right, index: 2 * index + 1 });
            }
        }

        maxWidth = Math.max(maxWidth, lastIndex - firstIndex + 1);
    }

    return maxWidth;
}

const tree = {
    val: 1,
    left: {
        val: 3,
        left: {
            val: 5,
            left: { val: 6, left: null, right: null },
            right: null
        },
        right: null
    },
    right: {
        val: 2,
        left: null,
        right: {
            val: 9,
            left: null,
            right: { val: 7, left: null, right: null }
        }
    }
};

console.log(widthOfBinaryTree(tree)); // Output: 8

```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
