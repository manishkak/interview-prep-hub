# construct Binary Tree From Preorder And Inorder Traversal

## Problem Statement

Describe the problem statement for **construct Binary Tree From Preorder And Inorder Traversal** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Construct Binary Tree from Preorder and Inorder Traversal
 * Solution here-> https://dev.to/seanpgallivan/solution-construct-binary-tree-from-preorder-and-inorder-traversal-32c5#idea
 * Check the description on this page
 */

/**
 * from chatgpt
 */

// Key Insights
//     - Preorder Traversal: The first element is always the root of the tree/subtree.
//     - Inorder Traversal: Elements before the root element in inorder traversal belong to the left subtree, and elements after the root belong to the right subtree.

// Approach
//     - Identify the Root: The first element in the preorder list is the root of the current subtree.
//     - Split the Inorder List: Locate the root in the inorder list. Elements to the left of this root in inorder traversal form the left subtree, and elements to the right form the right subtree.
//     - Recursive Construction: Recursively build the left and right subtrees using the corresponding elements from preorder and inorder lists.

// TC: O(n), each node will be processed once
// SC: O(n), For the recursion stack (in the worst case) and storing the tree nodes

function buildTree(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;

    // The first element in the preorder list is the root
    const rootValue = preorder[0];
    const root = { val: rootValue, left: null, right: null }; // start creating new tree

    // Find the index of the root in inorder list
    const rootIndex = inorder.indexOf(rootValue);

    // Elements to the left in inorder are the left subtree
    const leftInorder = inorder.slice(0, rootIndex);
    // Elements to the right in inorder are the right subtree
    const rightInorder = inorder.slice(rootIndex + 1);

    // Elements in preorder corresponding to the left subtree
    const leftPreorder = preorder.slice(1, leftInorder.length + 1);
    // Elements in preorder corresponding to the right subtree
    const rightPreorder = preorder.slice(leftInorder.length + 1);

    // Recursively build the left and right subtrees
    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);

    return root;
}

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

const tree = buildTree(preorder, inorder);
console.log(tree);

/*
Explanation:

Base Case:
If either preorder or inorder list is empty, return null, which means there's no subtree to construct.

Root Identification:
The first element of the preorder list is the root of the current subtree.

Splitting Inorder List:
The index of the root in the inorder list helps us determine which elements belong to the left and right subtrees.

Recursive Construction:
Recursively call the buildTree function for the left and right subtrees using the appropriate slices of preorder and inorder lists.
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
