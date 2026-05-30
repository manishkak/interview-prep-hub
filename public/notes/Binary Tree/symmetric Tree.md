# symmetric Tree

## Problem Statement

Describe the problem statement for **symmetric Tree** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// Symmetric Tree
// Definition:
// Given the root of a binary tree, check if it is symmetric around its center (mirror of itself).

/*
Approach

- Use DFS recursion to compare left and right subtrees in a mirrored way.
- Two trees are mirrors if:
    - Both are null → true.
    - One is null and the other isn’t → false.
    - Root values are equal AND:
        - Left subtree of left tree == Right subtree of right tree.
        - Right subtree of left tree == Left subtree of right tree.

Steps

1. If root is null, return true.
2. Define helper function isMirror(t1, t2):
    - If both are null, return true.
    - If one is null, return false.
    - If values differ, return false.
    - Recursively check:
        - isMirror(t1.left, t2.right)
        - isMirror(t1.right, t2.left)
3. Call isMirror(root.left, root.right).

Complexity
Time: O(N)
Space: O(H) recursion stack.*/

function isSymmetric(root) {
    if (!root) return true;

    function isMirror(t1, t2) {
        if (!t1 && !t2) return true;
        if (!t1 || !t2) return false;
        if (t1.val !== t2.val) return false;

        return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
    }

    return isMirror(root.left, root.right);
}

```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
