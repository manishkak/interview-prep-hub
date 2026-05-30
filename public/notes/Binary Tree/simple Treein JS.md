# simple Treein JS

## Problem Statement

Describe the problem statement for **simple Treein JS** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
class Tree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let tree = new Tree(1);
tree.left = new Tree(2);
tree.right = new Tree(3);
tree.left.left = new Tree(4);
tree.left.right = new Tree(5);
tree.right.left = new Tree(6);

console.log(tree)
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
