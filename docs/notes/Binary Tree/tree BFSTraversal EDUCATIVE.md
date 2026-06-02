# tree BFSTraversal EDUCATIVE

## Problem Statement

Breadth-First Search (BFS) / Level Order Traversal - traverse binary tree level by level from top to bottom using a queue-based approach, processing all nodes at the current level before moving to the next.

## Examples

- Input: Tree with root 12, left 7 with left child 9, right 1 with children 10 and 5
  Output: [[12], [7, 1], [9, 10, 5]]
- Input: Single node tree with value 1
  Output: [[1]]

## Approach

- Push root into queue.
- While queue is not empty, record current queue size (levelSize).
- Remove exactly levelSize nodes from queue, adding their values to current level array.
- After removing each node, push its children into queue.
- Continue for next level.

## Solution

```js
class Tree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function breadthFirstTraversal(tree) {
  const result = [];
  
  if (tree === null) {
    return result;
  }
  
  const queue = [];
  queue.push(tree);
  
  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];
    
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      currentLevel.push(currentNode.val);
      
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    
    result.push(currentLevel);
  }
  
  return result;
}

const tree = new Tree(12);
tree.left = new Tree(7);
tree.right = new Tree(1);
tree.left.left = new Tree(9);
tree.right.left = new Tree(10);
tree.right.right = new Tree(5);

console.log(breadthFirstTraversal(tree)); // [[12], [7, 1], [9, 10, 5]]
```

## Time Complexity

- O(n) where n is number of nodes; each node visited once

## Space Complexity

- O(w) where w is maximum width (nodes at widest level); O(n) worst case

## Notes

- Critical to record levelSize at start of loop to maintain level grouping.
- Queue naturally maintains level-by-level order.
- Returns list of lists where each sublist represents one level.
- Useful for problems requiring level-order output or level-by-level processing.

