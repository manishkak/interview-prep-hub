# tree BFSTraversal EDUCATIVE

## Problem Statement

Describe the problem statement for **tree BFSTraversal EDUCATIVE** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * BFS code from Educative
 * https://www.educative.io/courses/grokking-the-coding-interview/xV7E64m4lnz
 */

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

class Tree {
	constructor(val) {
	  this.val = val;
	  this.left = null;
	  this.right = null;
	}
  }
  
  
  function breadthFirstTraversal(tree) {
	result = [];
	if (tree === null) {
	  return result;
	}
  
	// const queue = new Deque();
	// queue.push(tree);
	const queue = [];
	queue.push(tree);
	while (queue.length > 0) {
	  const levelSize = queue.length;
	  currentLevel = [];
	  for (i = 0; i < levelSize; i++) {
		currentNode = queue.shift();
		// add the node to the current level
		currentLevel.push(currentNode.val);
		// insert the children of current node in the queue
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
  console.log(`Level order traversal: ${breadthFirstTraversal(tree)}`);

  // Putting an array inside console.log(`${arr}`) will flatten it and change it to a string.
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
