# binary Tree Right Side View

## Problem Statement

Describe the problem statement for **binary Tree Right Side View** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Binary Tree Right Side View
 * Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
 * 
 * -> Every time when you face a problem where you need to go through a tree level by level you should think about BFS — Breadth-first search.
 * 
 * -> BFS Definition- Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures.
 * 	It starts at the tree root (or some arbitrary node of a graph, sometimes referred to as a search key) and 
 * 	explores all of the neighbor nodes at the present depth, 
 * 	prior to moving on to the nodes at the next depth level.
 * 
 * -> We can implement BFS using queue (Array in JavaScript). 
 * 	  The first item in the queue will be the root node. 
 *    After that, we’re going through the queue until it’s not empty and pushing the last item from each level.
 */

// BFS, TC and SC both are O(n), cos all nodes will need to be traversed even though we only need last node on each level i.e. right node.
/**
 * From chatgpt
 */

function rightSideView(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();

            // means that its the last node in the level
            if (i === levelSize - 1) {
                result.push(currentNode.val);
            }

            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
    }

    return result;
}

const tree2 = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: { val: 5, left: null, right: null }
    },
    right: {
        val: 3,
        left: null,
        right: { val: 4, left: null, right: null }
    }
};

console.log(rightSideView(tree)); // Output: [1, 3, 4]
/**
 * Explanation
Initial Check:

If the root is null, return an empty array because there's no tree to traverse.
Level Order Traversal (BFS):

Initialize a queue with the root node.
Iterate over each level of the tree using the queue.
For each node at the current level, process it:
    If it's the last node in the current level (checked using i === levelSize - 1), add its value to the result array.
    Add the node's children to the queue for the next level's processing.
Return the Result:
    The result array will contain the values of the nodes visible from the right side of the tree.
*/

// DFS, TC = O(n) but SC is only O(h) where h is height of the tree which is < n
function rightSideViewDFS(root) {
    const result = [];

    function dfs(node, depth) {
        if (!node) return;

        // If visiting this depth for the first time, meaning initially when the program starts at the root, result will be empty(so result.length=0) and depth will be 0, so push root in result and recursively call dfs on the right child of root.
        if (result.length === depth) result.push(node.val);

        // Visit right before left
        dfs(node.right, depth + 1);
        dfs(node.left, depth + 1);
    }

    dfs(root, 0);
    return result;
}


// ----
// ----
// ----

/** DFS solution from jsDiet.. This page also has BFS solution but DFS is a better solution
 * https://jsdiet.com/binary-tree-right-side-view-leetcode-solution/
 */

// -  In BFS, we might traverse through each level of nodes. But our main goal is to find right side view, which means we need to focus on depth of tree instead visiting all nodes. In this case, DFS approach is more suitable. Lets see how we can optimize above problem with DFS approach.

// ------ Depth First Search Leetcode solution start - jsdiet ------
// using DFS -> PreOrder NRL traversal

var rightSideView = function (root) {
    const result = [];

    dfs(root, 0, result);
    return result;
};

const dfs = (node, currentLevel, result) => {
    if (!node) {
        return;
    }

    // If this is the first time we're visiting this level, add the node's value
    if (currentLevel >= result.length) {
        result.push(node.val);
    }

    // Traverse right side first, then left
    if (node.right) {
        dfs(node.right, currentLevel + 1, result);
    }

    if (node.left) {
        dfs(node.left, currentLevel + 1, result);
    }
}

// ------ Depth First Search Leetcode solution end - jsdiet ------

// Leetcode environment provides already generated binary tree. 
// So below part of code no need, if you are trying in Leetcode website environment.




// ------- Code to generate our binary tree -------
// This is purely for testing in local machine

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



// Execute using DFS
let val = rightSideView(tree);
console.log(val);

// Time complexity: O(n), where n is number of nodes in the binary tree.

// Space complexity: O(H), where H is Max height of Binary Tree, since we are using DFS approach. Usually, we can call it is O(n) space complexity because of recursive calls.

// DFS is better approach compare to BFS, while finding depth of tree traversal.



// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------

// Solution from Andy Gala videos https://www.youtube.com/watch?v=RKPCF-hsOPY&list=PLrClazTqVpJlKREjzrExHF4znO9i-kXhz&index=4&ab_channel=AndyGala

 var rightSideView = function(root) {
	if(!root) return [];
	
	const queue = [root];
	const result = [];
	
	while(queue.length) {
	    let len = queue.length;
	    result.push(queue[queue.length -1].val);
	    
	    while(len--) {
	        let node = queue.shift();
	        if(node.left) queue.push(node.left);
	        console.log(node.left);
	        if(node.right) queue.push(node.right);
	    }
	}
	
	return result;
};
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
