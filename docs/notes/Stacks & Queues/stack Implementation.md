# stack Implementation

## Problem Statement

Describe the problem statement for **stack Implementation** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * https://www.techinterviewhandbook.org/algorithms/stack/
 * Implementation of Stack (LIFO) with basic functions.
 * TC of all of these functions is O(1).
 */

class Stack {
    constructor() {
        this.items = [];
        this.top = null;
    }

    getTop() {
        if (this.items.length == 0)
            return null;
        return this.top;
    }

    isEmpty() {
        return this.items.length == 0;
    }

    size() {
        return this.items.length;
    }

    push(element) {
        this.items.push(element);
        this.top = element;
    }

    pop() {
        if (this.items.length != 0) {
            if (this.items.length == 1) {
                this.top = null;
                return this.items.pop();
            } else {
				// top needs to be updated before you do the pop so that the getTop function also works well
                // this.items[this.items.length - 1] -> is the item getting popped, so for this.top you need to set it to this.items[this.items.length - 2]
                this.top = this.items[this.items.length - 2];
                return this.items.pop();
            }

        } else
            return null;
    }
}

var myStack = new Stack();

for (var i = 0; i < 5; i++) {
    myStack.push(i);
}

console.log("Is stack empty? " + myStack.isEmpty());
console.log("top: " + myStack.getTop());

for (var i = 0; i < 5; i++) {
    console.log("Element popped: " + myStack.pop());
    console.log("top: " + myStack.getTop());
}

console.log("Is stack empty?: " + myStack.isEmpty());
console.log("top: " + myStack.getTop());
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
