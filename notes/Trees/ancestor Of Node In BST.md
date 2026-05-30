# ancestor Of Node In BST

## Problem Statement

Describe the problem statement for **ancestor Of Node In BST** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Find Ancestors of a Given Node in a BST
 * Approach: This solution uses a recursive helper function which traverses from the root to the input node and backtracks to append the ancestors that led to the node.
	* Initialize an empty result list to store the ancestors.
	* Check if the current node is NULL, indicating a leaf node or an empty subtree, return FALSE if so.
	* If the current node’s value matches the target value k, return TRUE to indicate the target node is found.
	* Recursively search for the target node in the left and right subtrees. If found in either subtree, append the current node’s value to the result list and return TRUE, otherwise, return FALSE.
	* Finally, return the result list containing all recorded ancestors of the node k.
 * TC: O(n) time function since it iterates over all of the nodes of the entire tree
 */

function findAncestors(rootNode, k) {
    var result = []
    recfindAncestors(rootNode, k, result)
    return result;
}

function recfindAncestors(rootNode, k, result) {
    
    // recursive
    if (rootNode == null) {
        return false;
    } else if (rootNode.val == k) {
        return true;
    } else if ((recfindAncestors(rootNode.leftChild, k, result)) || (recfindAncestors(rootNode.rightChild, k, result))) {
        result.push(rootNode.val)
        return true;
    }

    // this iterative is better to understand
    var ancestors = [];
    while (current !== null) {
        // If k is greater than the current node's value, move to its right child.
        if (k > current.data) {
            ancestors.push(current.data);
            current = current.right;
        }
        // If k is less than the current node's value, move to its left child.
        else if (k < current.data) {
            ancestors.push(current.data);
            current = current.left;
        }
        // If k is found, return the ancestors array.
        else {
            return ancestors.reverse();
        }
    }

    return false;
}

var BST = new BinarySearchTree(6)
BST.insertBST(1)
BST.insertBST(133)
BST.insertBST(12)
console.log(findAncestors(BST.root,12))
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
