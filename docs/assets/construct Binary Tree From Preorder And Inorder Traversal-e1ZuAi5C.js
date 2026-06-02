const r=`\uFEFF# construct Binary Tree From Preorder And Inorder Traversal

## Problem Statement

Given preorder and inorder traversals of a binary tree, construct and return the binary tree. Preorder: root-left-right. Inorder: left-root-right.

## Examples

- Input: preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]
  Output: Tree with root 3, left subtree (9), right subtree (20, 15, 7)
- Input: preorder = [-1], inorder = [-1]
  Output: Single node tree with value -1

## Approach

- First element of preorder is root.
- Find root in inorder to split left and right subtrees.
- Recursively construct left and right subtrees using remaining elements.
- Use hash map for O(1) inorder lookups.

## Solution

\`\`\`js
function buildTree(preorder, inorder) {
  const inorderMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i);
  }
  
  function build(preStart, preEnd, inStart, inEnd) {
    if (preStart > preEnd) return null;
    
    const rootVal = preorder[preStart];
    const rootIndex = inorderMap.get(rootVal);
    const leftSize = rootIndex - inStart;
    
    const node = { val: rootVal, left: null, right: null };
    node.left = build(preStart + 1, preStart + leftSize, inStart, rootIndex - 1);
    node.right = build(preStart + leftSize + 1, preEnd, rootIndex + 1, inEnd);
    
    return node;
  }
  
  return build(0, preorder.length - 1, 0, inorder.length - 1);
}

const preorder = [3, 9, 20], inorder = [9, 3, 20];
console.log(buildTree(preorder, inorder));
\`\`\`

## Time Complexity

- O(n) where n is number of nodes; hash map enables O(1) lookups

## Space Complexity

- O(n) for hash map and recursion stack

## Notes

- Hash map critical for O(1) root finding in inorder.
- Calculate leftSize to determine index boundaries for recursion.
- Without hash map, solution is O(n²) due to linear search.\r
\r
`;export{r as default};
