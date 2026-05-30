# diameter Of ABinary Tree

## Problem Statement

Describe the problem statement for **diameter Of ABinary Tree** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * diameter of a binary tree
 * The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
  	- This path may or may not pass through the root.
 * Solution:
 * Time Complexity : O(n)
 * Space Complexity: O(n), due to recursive calls
 * Solution here-> https://dev.to/cod3pineapple/543-diameter-of-binary-tree-47an#:~:text=The%20diameter%20of%20a%20binary,not%20pass%20through%20the%20root.
 * Another solution from Andy Gala-> https://www.youtube.com/watch?v=ib_JPaMEUhw (Tree can be used from right side view of binary tree program)
 */
/**
 * TC= O(n), because each of the tree’s nodes gets visited once, where n is the number of nodes in the tree; there is no way to solve this w/o traversing each node.
 * SC=O(n), because the recursive stack can grow up to O(n)
 */
/**
 * Solution summary:
 * Start with the assumption that the diameter is 0
 * Calculate the diameter of the left sub-tree and right sub-tree of the root node using the following recursive process:
 * 		At a leaf node, the diameter and height with respect to its children is 0 & 1, respectively.
 * 		For a non-leaf node, calculate the heights as well as the diameters of the left and right sub-trees. If the diameter passes through this node, then the diameter is the sum of the heights of the two sub-trees. Otherwise, it is the greater of the diameters of the two sub-trees.
 */

class Node
{
	constructor(item)
	{
		this.data=item;
		this.left=this.right=null;
	}
}

/**
 * The solution may or may not pass through 0; to resolve this we keep a golbal max = 0
 * at every node we check if the diameter of that node, meaning (left+right), is > max, and if it is then update max.
 */

// Check solution here-> https://www.youtube.com/watch?v=ib_JPaMEUhw
var diameterOfBinaryTree = function(root) {
	let max = 0; // this is the global max, set to 0 initially
	dfs(root);
	return max;

	function dfs(node) {
		if (!node) return 0; // this means its checking the left/right of a leaf node, which is Null, so dia. will be 0 for a leaf node

		const left = dfs(node.left); // to get height of the left of current node
		const right = dfs(node.right); // to get height of the right of current node

		// update max at every node; compare left+right to the global variable max and keep the greater val
		// the (left+right) here is the diameter of the node; for leaf nodes it will be 0
		max = Math.max(max, left + right); // maintain at every step cos this is returned finally as o/p

		// height of current node, that is returned as this is the dfs method; nothing to do with max above
		return 1 + Math.max(left, right);
	} 
};


// Let us construct the BST shown in the above figure
let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
console.log(root);
console.log(diameterOfBinaryTree(root));

/* DRY RUN
Perfect 👌 — let’s do a **simple dry run** for the **Diameter of a Binary Tree** (LeetCode #543).

---

### 🧩 Problem quick recap:

The **diameter** = the **longest path** between any two nodes in the tree.
It may or may not pass through the root.

Path length = number of **edges**, not nodes.

---

### 🌳 Example tree:

```
      1
     / \
    2   3
   / \
  4   5
```

---

### 🧠 Idea:

At each node,
the **diameter passing through that node** =
`height(left subtree) + height(right subtree)`

We’ll compute height recursively while updating a global `maxDiameter`.

---

### 🪜 Dry Run

Start with `diameter = 0`

#### Call: `dfs(1)`

→ call `dfs(2)`
→ call `dfs(3)`

---

#### `dfs(2)`:

→ call `dfs(4)`
→ call `dfs(5)`

##### `dfs(4)`:

* left = null → height = 0
* right = null → height = 0
* local diameter = 0 + 0 = 0
* return height = `1 + max(0, 0)` = **1**

##### `dfs(5)`:

* same logic → height = **1**

Now back at node 2:

* leftHeight = 1
* rightHeight = 1
* local diameter = 1 + 1 = **2**
* update global `diameter = max(0, 2)` = **2**
* return height = `1 + max(1, 1)` = **2**

---

#### `dfs(3)`:

* left = null → 0
* right = null → 0
* local diameter = 0
* return height = **1**

---

Back to root `1`:

* leftHeight = 2
* rightHeight = 1
* local diameter = 2 + 1 = **3**
* update global `diameter = max(2, 3)` = **3**
* return height = `1 + max(2, 1)` = **3**

---

✅ **Final Answer: diameter = 3**

---

### 🧮 The path causing it:

```
4 → 2 → 1 → 3
```

→ 3 edges (4–2, 2–1, 1–3) */

```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
