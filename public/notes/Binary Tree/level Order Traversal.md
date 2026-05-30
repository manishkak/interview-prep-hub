# level Order Traversal

## Problem Statement

Describe the problem statement for **level Order Traversal** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Binary Tree Level Order Traversal (it is same as breadth-first search (BFS))
 * solution from - https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/2005221/js-simple-explained-iterative-queue/
 * Time Complexity: O(n) | Where n is the number of nodes in our Binary Tree | As we're going to traverse all of the nodes within the tree.
 * Space Complexity: O(q) | Where q is the length of the Binary Tree's Queue
 */

// A generic BFS might just print nodes in order: 1 2 3 4 5 6 7.

// Level Order Traversal usually groups them by level: [[1], [2,3], [4,5,6,7]]

/*
✅Approach
- We use BFS to traverse level by level.
- Use a queue to store nodes.
- For each level:
  - Record all node values.
  - Add their children to the queue.

✅ Steps
- If root is null, return an empty array.
- Initialize an empty result array result and a queue containing root.
- While the queue is not empty:
  - Get the size of the queue (number of nodes at current level).
  - Initialize an empty level array.
  - For each node in this level:
      - Remove node from queue.
      - Add its value to level.
      - Add left and right children to queue if they exist.
  - Push level into result.
- Return result.*/
/* Dry run on the following tree and it will make sense-
  1
 / \
 2   3
/ \   \
4  5   6

/**
 * Program from ChatGPT (DryRun below)
 */
function levelOrder(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const visited = [];

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift(); // Dequeue the first node
            visited.push(currentNode.val); // Process the current node

            if (currentNode.left) queue.push(currentNode.left); // Enqueue left child
            if (currentNode.right) queue.push(currentNode.right); // Enqueue right child
        }

        result.push(visited); // Add the visited nodes to the final result
    }

    return result;
}
/**
 * ends
 */


class Tree {
	constructor(val) {
	  this.val = val;
	  this.left = null;
	  this.right = null;
	}
  }
const tree = new Tree(2);
tree.left = new Tree(1);
tree.right = new Tree(3);
tree.left.left = new Tree(9);
tree.right.left = new Tree(10);
tree.right.right = new Tree(5);
tree.left.left.left = new Tree(17);

console.log(levelOrder(tree));

/**
 * Dry Run
 */

// Consider the following binary tree:
/*
1
/ \
2   3
/ \   \
4   5   6


Dry Run of the Program

// 1. Initial Setup:

The root node is 1.
The queue is initialized with the root: [1].
The result array is initialized as an empty array: [].

// 2. First Iteration (Level 0):

queue = [1]
levelSize = 1 (There is 1 node at this level)
currentLevel = []
Processing the node 1:

Dequeue 1 from queue, so queue = [].
Add 1 to currentLevel, so currentLevel = [1].
Enqueue its left child 2 and right child 3 to queue, so queue = [2, 3].
Add currentLevel to result, so result = [[1]].

// 3. Second Iteration (Level 1):

queue = [2, 3]
levelSize = 2 (There are 2 nodes at this level)
currentLevel = []
Processing the node 2:

Dequeue 2 from queue, so queue = [3].
Add 2 to currentLevel, so currentLevel = [2].
Enqueue its left child 4 and right child 5 to queue, so queue = [3, 4, 5].
Processing the node 3:

Dequeue 3 from queue, so queue = [4, 5].
Add 3 to currentLevel, so currentLevel = [2, 3].
Enqueue its right child 6 to queue, so queue = [4, 5, 6].
Add currentLevel to result, so result = [[1], [2, 3]].

// 4. Third Iteration (Level 2):

queue = [4, 5, 6]
levelSize = 3 (There are 3 nodes at this level)
currentLevel = []
Processing the node 4:

Dequeue 4 from queue, so queue = [5, 6].
Add 4 to currentLevel, so currentLevel = [4].
Node 4 has no children, so no nodes are added to the queue.
Processing the node 5:

Dequeue 5 from queue, so queue = [6].
Add 5 to currentLevel, so currentLevel = [4, 5].
Node 5 has no children, so no nodes are added to the queue.
Processing the node 6:

Dequeue 6 from queue, so queue = [].
Add 6 to currentLevel, so currentLevel = [4, 5, 6].
Node 6 has no children, so no nodes are added to the queue.
Add currentLevel to result, so result = [[1], [2, 3], [4, 5, 6]].

5. End of Traversal:

The queue is now empty, so the loop terminates.
The final result array [[1], [2, 3], [4, 5, 6]] represents the level order traversal of the tree.

// Final Output
The level order traversal of the tree is [[1], [2, 3], [4, 5, 6]], which means the nodes were visited in this order:

Level 0: 1
Level 1: 2, 3
Level 2: 4, 5, 6
This output matches the expected result based on the structure of the binary tree.*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
