# path Sum1Binary Tree

## Problem Statement

Describe the problem statement for **path Sum1Binary Tree** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Binary Tree Path Sum 1
 * Problem: Given a binary tree and a target sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.
Output: "Return true" if such a path exists, otherwise return false.
Key Point: This problem only checks whether such a path exists.
 Approach (DFS Recursive)

1. Base Case – Empty Node
  If the current node is null, return false (no path possible).
2. Check Leaf Node
  If you’re at a leaf node (node.left == null && node.right == null):
    Check if targetSum == node.val.
    If yes → return true (a valid path exists).
    Otherwise → return false.
3. Recursive Step
  Subtract the current node’s value from targetSum → newTarget = targetSum - node.val.
  Recurse on left and right child with this updated target.
4. Combine Results
  Return true if either left or right subtree returns true.
  (return dfs(node.left, newTarget) || dfs(node.right, newTarget))
*/
/*
Time: O(n), where n = number of nodes (you may visit all nodes in the worst case).
Space:
O(h) for recursion stack, h = tree height.
Worst-case skewed tree: O(n).
Best-case balanced tree: O(log n). */

/**
 * Solution 2 -> Chatgpt sol
 */

function hasPathSum(root, targetSum) {
  if (!root) return false;

  // this !root.left && !root.right will make sure that its a leaf node, so this step in important
  // if it's a leaf node and we've also got the current target
  if (!root.left && !root.right && root.val === targetSum) {
      return true;
  }

  const remainingSum = targetSum - root.val;
  return hasPathSum(root.left, remainingSum) || hasPathSum(root.right, remainingSum);
}


// Solution 1:

 var hasPathSum = function(root, targetSum) {
    if (root === null) {
    return false;
  }
  const currentSum = 0;
  return checkSum(root, targetSum, currentSum);
};

const checkSum = (root, targetSum, currentSum) => {
  if (root === null) {
    return false;
  }
  currentSum = currentSum + root.val;
  if (root.left === null && root.right === null) {
    return currentSum === targetSum;
  }

  if (root.left) {
    let bool = checkSum(root.left, targetSum, currentSum);
    if (bool) {
      return bool;
    }
  }
  if (root.right) {
    let bool = checkSum(root.right, targetSum, currentSum);
    if (bool) {
      return bool;
    }
  }
    return false;
};

  
  
class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}

	insert(values) {
		const queue = [this];
		let i = 0;
		while (queue.length > 0) {
			let current = queue.shift();
			for (let side of ["left", "right"]) {
				if (!current[side]) {
					if (values[i] !== null) {
						current[side] = new TreeNode(values[i]);
					}
					i++;
					if (i >= values.length) return this;
				}
				if (current[side]) queue.push(current[side]);
			}
		}
		return this;
	}
}
  
const tree = new TreeNode(1);
tree.insert([2, 3, null, 5, null, 3]);
// console.log(tree)

let val = hasPathSum(tree,6);
console.log(val);
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
