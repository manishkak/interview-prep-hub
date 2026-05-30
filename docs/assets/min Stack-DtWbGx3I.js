const n=`# min Stack

## Problem Statement

Describe the problem statement for **min Stack** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/*\r
Min Stack\r
A Min Stack is a special type of stack that, in addition to standard stack operations (push, pop, top), supports retrieving the minimum element in constant time (getMin). The challenge is to implement this efficiently.\r
\r
To efficiently retrieve the minimum element at any time, we can "use an auxiliary stack" to keep track of the minimum values. Here's how we can do it:\r
	Main Stack (stack): Stores all the elements of the stack.\r
	Min Stack (minStack): Stores the minimum value at each level of the stack\r
*/\r
\r
class MinStack {\r
    constructor() {\r
        this.stack = [];\r
        this.minStack = [];\r
    }\r
\r
    // Push element x onto stack\r
    push(x) {\r
        this.stack.push(x);\r
\r
        // Push the new minimum value onto the minStack\r
        if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {\r
            this.minStack.push(x);\r
        }\r
    }\r
\r
    // Remove the element on top of the stack\r
    pop() {\r
        const poppedValue = this.stack.pop();\r
\r
        // If the popped value is the current minimum, pop it from minStack as well\r
        if (poppedValue === this.minStack[this.minStack.length - 1]) {\r
            this.minStack.pop();\r
        }\r
    }\r
\r
    // Get the top element\r
    top() {\r
        return this.stack[this.stack.length - 1];\r
    }\r
\r
    // Retrieve the minimum element in the stack\r
    getMin() {\r
        return this.minStack[this.minStack.length - 1];\r
    }\r
}\r
\r
// Example usage:\r
const minStack = new MinStack();\r
minStack.push(-2);\r
minStack.push(0);\r
minStack.push(-3);\r
console.log(minStack.getMin()); // Returns -3\r
minStack.pop();\r
console.log(minStack.top());    // Returns 0\r
console.log(minStack.getMin()); // Returns -2\r
\r
/*\r
Explanation:\r
\r
push(x): When pushing a new element x onto the stack:\r
	We push x onto the main stack (stack).\r
	If x is smaller than or equal to the current minimum (i.e., the top of minStack), we also push x onto the minStack.\r
pop(): When popping an element from the stack:\r
	We pop the top element from the main stack.\r
	If the popped element is equal to the top of minStack, we also pop from minStack to maintain the correct minimum value.\r
top(): Simply returns the top element of the main stack.\r
getMin(): Returns the top element of minStack, which represents the minimum value of the stack.\r
\r
Key Points:\r
\r
	- The minStack always contains the minimum value at each level of the stack. This way, getMin() can always retrieve the minimum element in constant time.\r
	- Even if the minimum value is pushed multiple times, minStack handles it correctly, ensuring that the minimum value is popped only when it’s no longer present in the main stack.\r
\r
Time and Space Complexity:\r
\r
	- Time Complexity: O(1) for all operations (push, pop, top, getMin).\r
	- Space Complexity: O(n), where n is the number of elements in the stack. This is due to the additional space required by minStack. In the worst case, every element could be pushed onto minStack if the stack is strictly decreasing.\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
