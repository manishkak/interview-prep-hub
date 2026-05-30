# min Stack

## Problem Statement

Describe the problem statement for **min Stack** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/*
Min Stack
A Min Stack is a special type of stack that, in addition to standard stack operations (push, pop, top), supports retrieving the minimum element in constant time (getMin). The challenge is to implement this efficiently.

To efficiently retrieve the minimum element at any time, we can "use an auxiliary stack" to keep track of the minimum values. Here's how we can do it:
	Main Stack (stack): Stores all the elements of the stack.
	Min Stack (minStack): Stores the minimum value at each level of the stack
*/

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    // Push element x onto stack
    push(x) {
        this.stack.push(x);

        // Push the new minimum value onto the minStack
        if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(x);
        }
    }

    // Remove the element on top of the stack
    pop() {
        const poppedValue = this.stack.pop();

        // If the popped value is the current minimum, pop it from minStack as well
        if (poppedValue === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    // Get the top element
    top() {
        return this.stack[this.stack.length - 1];
    }

    // Retrieve the minimum element in the stack
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

// Example usage:
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // Returns -3
minStack.pop();
console.log(minStack.top());    // Returns 0
console.log(minStack.getMin()); // Returns -2

/*
Explanation:

push(x): When pushing a new element x onto the stack:
	We push x onto the main stack (stack).
	If x is smaller than or equal to the current minimum (i.e., the top of minStack), we also push x onto the minStack.
pop(): When popping an element from the stack:
	We pop the top element from the main stack.
	If the popped element is equal to the top of minStack, we also pop from minStack to maintain the correct minimum value.
top(): Simply returns the top element of the main stack.
getMin(): Returns the top element of minStack, which represents the minimum value of the stack.

Key Points:

	- The minStack always contains the minimum value at each level of the stack. This way, getMin() can always retrieve the minimum element in constant time.
	- Even if the minimum value is pushed multiple times, minStack handles it correctly, ensuring that the minimum value is popped only when it’s no longer present in the main stack.

Time and Space Complexity:

	- Time Complexity: O(1) for all operations (push, pop, top, getMin).
	- Space Complexity: O(n), where n is the number of elements in the stack. This is due to the additional space required by minStack. In the worst case, every element could be pushed onto minStack if the stack is strictly decreasing.
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
