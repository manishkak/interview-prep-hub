const n=`# subtreeof Another Tree

## Problem Statement

Describe the problem statement for **subtreeof Another Tree** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
var isSubtree = function(root, subRoot) {\r
    if (!root) return false;\r
\r
    if (isSame(root, subRoot)) return true;\r
\r
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);\r
};\r
\r
function isSame(s, t) {\r
    if (!s && !t) return true;\r
    if (!s || !t) return false;\r
    if (s.val !== t.val) return false;\r
\r
    return isSame(s.left, t.left) && isSame(s.right, t.right);\r
}\r
\r
/*\r
Complexity\r
\r
Time: O(m * n) in worst case (m = nodes in root, n = nodes in subRoot).\r
\r
Space: O(h) for recursion (h = height of tree).\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
