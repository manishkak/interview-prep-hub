const e=`# simple Treein JS

## Problem Statement

Describe the problem statement for **simple Treein JS** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
class Tree {\r
    constructor(value) {\r
        this.value = value;\r
        this.left = null;\r
        this.right = null;\r
    }\r
}\r
\r
let tree = new Tree(1);\r
tree.left = new Tree(2);\r
tree.right = new Tree(3);\r
tree.left.left = new Tree(4);\r
tree.left.right = new Tree(5);\r
tree.right.left = new Tree(6);\r
\r
console.log(tree)
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
