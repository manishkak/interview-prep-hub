# path Sum2Binary Tree

## Problem Statement

Describe the problem statement for **path Sum2Binary Tree** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Path Sum II
 * Problem: Given a binary tree and a target sum, "find all" root-to-leaf paths where each path's sum equals the given sum.
Output: Return a list of all such paths. Each path should be represented as a list of node values.
Key Point: This problem requires you to return all the paths that satisfy the condition, not just check if one exists.
 * Find all paths that match the sum.
 * https://alkeshghorpade.me/post/leetcode-path-sum-ii
 */

// Time Complexity:
// O(n): Every node is visited once.
// Space Complexity:
// O(h): The height of the recursion stack, where h is the height of the tree

/**Final Solution */
// best explanation-> https://www.youtube.com/watch?v=4-IHOsNSdLE
var pathSum = function(root, targetSum) {
    let result = [];

    var getPathSum = function(root, current, targetSum) {
        if (root === null) return;

        current.push(root.val);  /**The line current.push(root.val); adds the current node’s value to the path (represented by the current array) as we traverse the binary tree. This is essential because we are constructing potential paths from the root to the leaf nodes */

        if (root.val === targetSum && root.left === null && root.right === null) {
            result.push([...current]); // Make a copy only when a valid path is found
        } else {
            let remainingTargetSum = targetSum - root.val;
            // this follows a DFS method, keeps going on left subtree till it reaches a leaf node, then backtracks, does current.pop(), and searches on the right node
            getPathSum(root.left, current, remainingTargetSum);
            getPathSum(root.right, current, remainingTargetSum);
        }

        current.pop(); // Backtrack
        /**We use current.pop() to backtrack in the recursive process.
When performing a depth-first traversal, we add nodes to the current path with current.push(root.val). Once a node and its children are processed, we need to remove that node (backtrack) before exploring the next branch, so that the path remains correct for other recursive calls.
Without current.pop(), the path would accumulate unnecessary nodes from previous recursive calls, resulting in incorrect paths being explored or returned.*/
    }

    getPathSum(root, [], targetSum);
    return result;
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
tree.insert([2, 3, null, 5, null, 4]);
// console.log(tree)

let val = pathSum(tree,8);
console.log(val);

/**
 * Chatgpt sol
 */

function pathSum(root, targetSum) {
    const result = [];

    function dfs(node, currentSum, path) {
        if (!node) return;

        currentSum += node.val;
        path.push(node.val);

        if (!node.left && !node.right && currentSum === targetSum) {
            result.push([...path]);
        } else {
            dfs(node.left, currentSum, path);
            dfs(node.right, currentSum, path);
        }

        path.pop();
    }

    dfs(root, 0, []);
    return result;
}

```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
