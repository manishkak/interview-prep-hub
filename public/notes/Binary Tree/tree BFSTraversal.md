# tree BFSTraversal

## Problem Statement

Describe the problem statement for **tree BFSTraversal** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Breadth First Search aka Level Order Traversal
 * Traversal of a tree in a level-by-level order
 * Queue is used to keep track of all nodes of one level, before jumping on to the next level
 * Space Complexity will be O(W) where W is the max. no. of nodes in any level.
 * TC = O(N), N is the no. of nodes in the tree, cos every node is traversed once.
 * 1. Push the Root into the Queue
 * 2. Keep iterating until the queue is empty.
   3. In each iteration, first count the elements in the queue (let’s call it levelSize). We will have these many nodes in the current level.
   4. Next, remove levelSize nodes from the queue and push their value in an array to represent the current level.
   5. After removing each node from the queue, insert both of its children into the queue.
   6. If the queue is not empty, repeat from step 3 for the next level.
*/

// From ChatGPT->
// BFS for Binary Search Tree

/* Steps:
1. Create a queue and push root node.
2. While queue is not empty:
  - Remove one node.
  - Process it (print or store value).
  - Add its left and right children to queue (if present). */

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function bfs(root) {
    if (!root) return [];

    let queue = [];
    let result = [];

    queue.push(root);

    while (queue.length > 0) {
        let currentNode = queue.shift();
        result.push(currentNode.value);

        // Add left and right children to the queue
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
    }

    return result;
}

// Example usage
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);
root.right.left = new TreeNode(12);
root.right.right = new TreeNode(18);

console.log(bfs(root)); // Output: [10, 5, 15, 3, 7, 12, 18]


// Solution 2->

class Tree {
	constructor(value, left, right) {
	  this.value = value
	  this.left = left
	  this.right = right
	}
  }
  
  const breadthFirstTraversal = (tree, callback) => {
	if (tree == null) {
	  return;
	}
  
	let queue = [tree]
  
	while (queue.length > 0) {
	  let item = queue.shift()
	  let value = item.value
	  callback(value)
  
	  if (item.left == null && item.right == null) {
		continue
	  }
	  if (item.left != null) {
		queue.push(item.left)
	  }
	  if (item.right != null) {
		queue.push(item.right)
	  }
	}
  }
  
  tree = new Tree(
	  1,
	  new Tree(2, new Tree(4, new Tree(8)), new Tree(5)),
	  new Tree(3, new Tree(6, new Tree(9), new Tree(10)), new Tree(7))
	);
  
  breadthFirstTraversal(tree, console.log)
  // Will print "1,2,3,4,5,6,7,8,9,10"

  treeTwo = new Tree(
	12,
	new Tree(7, new Tree(9)),
	new Tree(1, new Tree(10), new Tree(5))
  );
  // Will print "12,7,1,9,10,5"
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
