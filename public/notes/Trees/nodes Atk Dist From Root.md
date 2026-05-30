# nodes Atk Dist From Root

## Problem Statement

Describe the problem statement for **nodes Atk Dist From Root** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Find Nodes at "k" Distance From the Root
 * Approach: This solution maintains a counter k that is decremented until it is 0 or a leaf node is reached, returning all nodes that are encountered in the process.
 * TC: O(n)
 */

function findKNodes(rootNode, k) {
    var result = [];
    findK(rootNode, k, result);
    return result;
}

//Helper recursive function to traverse tree and push all the nodes at "k" distance into "result" array
function findK(rootNode, k, result) {
    if (rootNode == null)
        return
    if (k == 0)
        result.push(rootNode.val)
    else {
        //Decrement k at each step till you reach at the leaf node
        //or when k == 0 then push the Node's data into result
        findK(rootNode.leftChild, k - 1, result)
        findK(rootNode.rightChild, k - 1, result)
    }
}

var BST = new BinarySearchTree(6)
BST.insertBST(4)
BST.insertBST(9)
BST.insertBST(5)
BST.insertBST(2)
BST.insertBST(8)
BST.insertBST(12)
console.log(findKNodes(BST.root,2))
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
