# subtreeof Another Tree

## Problem Statement

Describe the problem statement for **subtreeof Another Tree** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
var isSubtree = function(root, subRoot) {
    if (!root) return false;

    if (isSame(root, subRoot)) return true;

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function isSame(s, t) {
    if (!s && !t) return true;
    if (!s || !t) return false;
    if (s.val !== t.val) return false;

    return isSame(s.left, t.left) && isSame(s.right, t.right);
}

/*
Complexity

Time: O(m * n) in worst case (m = nodes in root, n = nodes in subRoot).

Space: O(h) for recursion (h = height of tree).
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
