const n=`# stack Implementation

## Problem Statement

Describe the problem statement for **stack Implementation** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * https://www.techinterviewhandbook.org/algorithms/stack/\r
 * Implementation of Stack (LIFO) with basic functions.\r
 * TC of all of these functions is O(1).\r
 */\r
\r
class Stack {\r
    constructor() {\r
        this.items = [];\r
        this.top = null;\r
    }\r
\r
    getTop() {\r
        if (this.items.length == 0)\r
            return null;\r
        return this.top;\r
    }\r
\r
    isEmpty() {\r
        return this.items.length == 0;\r
    }\r
\r
    size() {\r
        return this.items.length;\r
    }\r
\r
    push(element) {\r
        this.items.push(element);\r
        this.top = element;\r
    }\r
\r
    pop() {\r
        if (this.items.length != 0) {\r
            if (this.items.length == 1) {\r
                this.top = null;\r
                return this.items.pop();\r
            } else {\r
				// top needs to be updated before you do the pop so that the getTop function also works well\r
                // this.items[this.items.length - 1] -> is the item getting popped, so for this.top you need to set it to this.items[this.items.length - 2]\r
                this.top = this.items[this.items.length - 2];\r
                return this.items.pop();\r
            }\r
\r
        } else\r
            return null;\r
    }\r
}\r
\r
var myStack = new Stack();\r
\r
for (var i = 0; i < 5; i++) {\r
    myStack.push(i);\r
}\r
\r
console.log("Is stack empty? " + myStack.isEmpty());\r
console.log("top: " + myStack.getTop());\r
\r
for (var i = 0; i < 5; i++) {\r
    console.log("Element popped: " + myStack.pop());\r
    console.log("top: " + myStack.getTop());\r
}\r
\r
console.log("Is stack empty?: " + myStack.isEmpty());\r
console.log("top: " + myStack.getTop());
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
