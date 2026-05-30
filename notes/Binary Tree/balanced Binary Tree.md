# balanced Binary Tree

## Problem Statement

Describe the problem statement for **balanced Binary Tree** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Balanced Binary Tree
 * Problem: Given a binary tree, determine if it is height-balanced (A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one)
 * Solution 1-> https://javascript.plainenglish.io/leetcode-110-balanced-binary-tree-javascript-49ec9ddf9318
 * Given a binary tree, determine if it is height-balanced.
 * A height-balanced binary tree is defined as:
	a binary tree in which the left and right subtrees of every node differ in height by no more than 1
 * In this case, we're going to need to keep track of the height of every subtree on every node, so we 	can ask the question 'Does my left or right tree differ in height by 1?'

 * Time Complexity: O(n) | Where n is the number of nodes in our Binary Tree | As we're going to traverse all of the nodes within the tree.
 * Space Complexity: O(n) | Where n is the number of nodes in our Binary Tree | As in the worst case, we're going to have to store the entire height of the tree in the call stack.
 *      explanation- O(h), where h is the height of the tree.
        - In the worst case (skewed tree), the height h can be n, leading to O(n) space complexity due to recursive calls on the call stack.
        - In the best case (balanced tree), it's O(log n).
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
tree.left.left.left = new Tree(17); // if this is added it returns false as the tree is disbalanced

const checkHeight = node => {
	if (node === null) return 0;

	const left = checkHeight(node.left);
	const right = checkHeight(node.right);

	if (
		// if a previous call has returned false,
		// we need to pass false all the way up
		left === false ||
		right === false ||
		Math.abs(left - right) > 1
	) {
		return false;
	}

	// height of a node
	return Math.max(left, right) + 1;
};
	
const isBalanced = root => {
	if (root === null) return true;

	return checkHeight(root) !== false;
};
console.log(isBalanced(tree));

// Dry Run:
/*
Consider this tree:
```
      1
     / \
    2   3
   / \
  4   5
```

1. Start with `isBalanced(root)` where `root` is node `1`.
2. Call `checkHeight(1)`:
   - Call `checkHeight(2)` for the left subtree of node `1`:
     - Call `checkHeight(4)` for the left subtree of node `2`:
       - Node `4` is a leaf node, so `checkHeight(4)` returns `0`.
     - Call `checkHeight(5)` for the right subtree of node `2`:
       - Node `5` is also a leaf node, so `checkHeight(5)` returns `0`.
     - The height of node `2` is `1` (`max(0, 0) + 1`).
   - Call `checkHeight(3)` for the right subtree of node `1`:
     - Node `3` is a leaf node, so `checkHeight(3)` returns `0`.
   - The height difference between the left (1) and right (0) subtrees of node `1` is `1`, so the tree is still balanced, and `checkHeight(1)` returns `2` (`max(1, 0) + 1`).

Since no `false` was returned, the tree is balanced, and `isBalanced(root)` returns `true`.
*/
/*
### Time Complexity (TC) and Space Complexity (SC):
- **Time Complexity**: O(N) — each node is visited once.
- **Space Complexity**: O(H) — due to recursion, where H is the height of the tree (worst-case space complexity is O(N) for a skewed tree).

In conclusion, your solution is correct and works efficiently to check if a binary tree is balanced.
*/

/**
 * Solution 2-> https://leetcode.com/problems/balanced-binary-tree/solutions/2051735/JS-or-Simple-and-Explained-or-Post-Order/
 * We're going to use Post Order Traversal to find the height of the left and right subtrees of every node. We do this by passing a height parameter to the each subtree, counting the number of nodes it takes until it hits the bottom of the tree. Meaning that once it hits the bottom most node, we have found the height of the tree.

 * Now we know the height of the left and right subtrees. All we do now is ask, 'Does my left or right tree differ in height by 1?'. If any of them violate this, we set our flag to false.

* Set ourself a flag to true. So by default, we're going to assume that the tree is height-balanced. Until we find a node that violates this, we're going to set our flag to false.
Perform a post order traversal of the tree. Where we pass a height parameter to each node.
Which gives us the left and right heights of each node.
We ask the question, 'Does my left or right tree differ in height by 1?'. If any of them violate this, we set our flag to false.
 */
 var isBalanced1 = function (root) {

    // A flag to check if the tree is balanced or not
    let flag = true;

    // Helper function to check if the tree is balanced or not
    const get_heights = (node, height) => {

        // Empty tree? It's 0 in height
        if (!node) {
            return 0;
        }

        // Get my left and right heights
        // by adding 1 to the height of the left and right subtrees.
        // each time we move down them
        const left_height  = get_heights(node.left, height + 1);
        const right_height = get_heights(node.right, height + 1);

        // Let's use some math.
        // Technically, if we have a balanced tree, the difference
        // should always be 0. But because, this question is awkward, we need to check if 
        // if its diff is greater than 1. So we minus the two by using absolutes values and asking
        // if the diff in this sub tree was greater than 1. If so bad un balanced.
        if (Math.abs(right_height - left_height) > 1) {
            flag = false;
        }

        // Return the height of the tree
        // By returning whoever had the bigger height and adding 1 (Our current node)
        return Math.max(left_height, right_height) + 1;
    };

    // Call the helper function
    get_heights(root, 0);

    // Get the flag back to base. :D
    return flag;
};

console.log(isBalanced1(tree));
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
