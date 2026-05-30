const r=`# symmetric Tree

## Problem Statement

Describe the problem statement for **symmetric Tree** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// Symmetric Tree\r
// Definition:\r
// Given the root of a binary tree, check if it is symmetric around its center (mirror of itself).\r
\r
/*\r
Approach\r
\r
- Use DFS recursion to compare left and right subtrees in a mirrored way.\r
- Two trees are mirrors if:\r
    - Both are null → true.\r
    - One is null and the other isn’t → false.\r
    - Root values are equal AND:\r
        - Left subtree of left tree == Right subtree of right tree.\r
        - Right subtree of left tree == Left subtree of right tree.\r
\r
Steps\r
\r
1. If root is null, return true.\r
2. Define helper function isMirror(t1, t2):\r
    - If both are null, return true.\r
    - If one is null, return false.\r
    - If values differ, return false.\r
    - Recursively check:\r
        - isMirror(t1.left, t2.right)\r
        - isMirror(t1.right, t2.left)\r
3. Call isMirror(root.left, root.right).\r
\r
Complexity\r
Time: O(N)\r
Space: O(H) recursion stack.*/\r
\r
function isSymmetric(root) {\r
    if (!root) return true;\r
\r
    function isMirror(t1, t2) {\r
        if (!t1 && !t2) return true;\r
        if (!t1 || !t2) return false;\r
        if (t1.val !== t2.val) return false;\r
\r
        return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);\r
    }\r
\r
    return isMirror(root.left, root.right);\r
}\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{r as default};
