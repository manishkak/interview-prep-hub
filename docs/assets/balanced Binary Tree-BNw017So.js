const e=`# balanced Binary Tree

## Problem Statement

Describe the problem statement for **balanced Binary Tree** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Balanced Binary Tree\r
 * Problem: Given a binary tree, determine if it is height-balanced (A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one)\r
 * Solution 1-> https://javascript.plainenglish.io/leetcode-110-balanced-binary-tree-javascript-49ec9ddf9318\r
 * Given a binary tree, determine if it is height-balanced.\r
 * A height-balanced binary tree is defined as:\r
	a binary tree in which the left and right subtrees of every node differ in height by no more than 1\r
 * In this case, we're going to need to keep track of the height of every subtree on every node, so we 	can ask the question 'Does my left or right tree differ in height by 1?'\r
\r
 * Time Complexity: O(n) | Where n is the number of nodes in our Binary Tree | As we're going to traverse all of the nodes within the tree.\r
 * Space Complexity: O(n) | Where n is the number of nodes in our Binary Tree | As in the worst case, we're going to have to store the entire height of the tree in the call stack.\r
 *      explanation- O(h), where h is the height of the tree.\r
        - In the worst case (skewed tree), the height h can be n, leading to O(n) space complexity due to recursive calls on the call stack.\r
        - In the best case (balanced tree), it's O(log n).\r
*/\r
\r
class Tree {\r
	constructor(val) {\r
		this.val = val;\r
		this.left = null;\r
		this.right = null;\r
	}\r
}\r
const tree = new Tree(2);\r
tree.left = new Tree(1);\r
tree.right = new Tree(3);\r
tree.left.left = new Tree(9);\r
tree.right.left = new Tree(10);\r
tree.right.right = new Tree(5);\r
tree.left.left.left = new Tree(17); // if this is added it returns false as the tree is disbalanced\r
\r
const checkHeight = node => {\r
	if (node === null) return 0;\r
\r
	const left = checkHeight(node.left);\r
	const right = checkHeight(node.right);\r
\r
	if (\r
		// if a previous call has returned false,\r
		// we need to pass false all the way up\r
		left === false ||\r
		right === false ||\r
		Math.abs(left - right) > 1\r
	) {\r
		return false;\r
	}\r
\r
	// height of a node\r
	return Math.max(left, right) + 1;\r
};\r
	\r
const isBalanced = root => {\r
	if (root === null) return true;\r
\r
	return checkHeight(root) !== false;\r
};\r
console.log(isBalanced(tree));\r
\r
// Dry Run:\r
/*\r
Consider this tree:\r
\`\`\`\r
      1\r
     / \\\r
    2   3\r
   / \\\r
  4   5\r
\`\`\`\r
\r
1. Start with \`isBalanced(root)\` where \`root\` is node \`1\`.\r
2. Call \`checkHeight(1)\`:\r
   - Call \`checkHeight(2)\` for the left subtree of node \`1\`:\r
     - Call \`checkHeight(4)\` for the left subtree of node \`2\`:\r
       - Node \`4\` is a leaf node, so \`checkHeight(4)\` returns \`0\`.\r
     - Call \`checkHeight(5)\` for the right subtree of node \`2\`:\r
       - Node \`5\` is also a leaf node, so \`checkHeight(5)\` returns \`0\`.\r
     - The height of node \`2\` is \`1\` (\`max(0, 0) + 1\`).\r
   - Call \`checkHeight(3)\` for the right subtree of node \`1\`:\r
     - Node \`3\` is a leaf node, so \`checkHeight(3)\` returns \`0\`.\r
   - The height difference between the left (1) and right (0) subtrees of node \`1\` is \`1\`, so the tree is still balanced, and \`checkHeight(1)\` returns \`2\` (\`max(1, 0) + 1\`).\r
\r
Since no \`false\` was returned, the tree is balanced, and \`isBalanced(root)\` returns \`true\`.\r
*/\r
/*\r
### Time Complexity (TC) and Space Complexity (SC):\r
- **Time Complexity**: O(N) — each node is visited once.\r
- **Space Complexity**: O(H) — due to recursion, where H is the height of the tree (worst-case space complexity is O(N) for a skewed tree).\r
\r
In conclusion, your solution is correct and works efficiently to check if a binary tree is balanced.\r
*/\r
\r
/**\r
 * Solution 2-> https://leetcode.com/problems/balanced-binary-tree/solutions/2051735/JS-or-Simple-and-Explained-or-Post-Order/\r
 * We're going to use Post Order Traversal to find the height of the left and right subtrees of every node. We do this by passing a height parameter to the each subtree, counting the number of nodes it takes until it hits the bottom of the tree. Meaning that once it hits the bottom most node, we have found the height of the tree.\r
\r
 * Now we know the height of the left and right subtrees. All we do now is ask, 'Does my left or right tree differ in height by 1?'. If any of them violate this, we set our flag to false.\r
\r
* Set ourself a flag to true. So by default, we're going to assume that the tree is height-balanced. Until we find a node that violates this, we're going to set our flag to false.\r
Perform a post order traversal of the tree. Where we pass a height parameter to each node.\r
Which gives us the left and right heights of each node.\r
We ask the question, 'Does my left or right tree differ in height by 1?'. If any of them violate this, we set our flag to false.\r
 */\r
 var isBalanced1 = function (root) {\r
\r
    // A flag to check if the tree is balanced or not\r
    let flag = true;\r
\r
    // Helper function to check if the tree is balanced or not\r
    const get_heights = (node, height) => {\r
\r
        // Empty tree? It's 0 in height\r
        if (!node) {\r
            return 0;\r
        }\r
\r
        // Get my left and right heights\r
        // by adding 1 to the height of the left and right subtrees.\r
        // each time we move down them\r
        const left_height  = get_heights(node.left, height + 1);\r
        const right_height = get_heights(node.right, height + 1);\r
\r
        // Let's use some math.\r
        // Technically, if we have a balanced tree, the difference\r
        // should always be 0. But because, this question is awkward, we need to check if \r
        // if its diff is greater than 1. So we minus the two by using absolutes values and asking\r
        // if the diff in this sub tree was greater than 1. If so bad un balanced.\r
        if (Math.abs(right_height - left_height) > 1) {\r
            flag = false;\r
        }\r
\r
        // Return the height of the tree\r
        // By returning whoever had the bigger height and adding 1 (Our current node)\r
        return Math.max(left_height, right_height) + 1;\r
    };\r
\r
    // Call the helper function\r
    get_heights(root, 0);\r
\r
    // Get the flag back to base. :D\r
    return flag;\r
};\r
\r
console.log(isBalanced1(tree));
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
