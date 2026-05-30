# reverse Level Order Traversal

## Problem Statement

Describe the problem statement for **reverse Level Order Traversal** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Reverse Level Order Traversal
 * The only difference will be that instead of appending the current level at the end, we will append the current level at the beginning of the result list.
 * https://www.educative.io/courses/grokking-the-coding-interview/m2N6GwARL8r
 */

class Tree {
	constructor(val) {
	  this.val = val;
	  this.left = null;
	  this.right = null;
	}
  }
  
  
  function reverseLevelOrderTraversal(tree) {
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
	  result.unshift(currentLevel);   //ONLY THIS LINE CHANGE FROM THE ORIGINAL BFS
	}
  
	return result;
  }
  
  
  const tree = new Tree(12);
  tree.left = new Tree(7);
  tree.right = new Tree(1);
  tree.left.left = new Tree(9);
  tree.right.left = new Tree(10);
  tree.right.right = new Tree(5);
  console.log(`Reverse Level order traversal: ${reverseLevelOrderTraversal(tree)}`);
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
