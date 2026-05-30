# implement Queueusing Stacks

## Problem Statement

Describe the problem statement for **implement Queueusing Stacks** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Implement Queue using Stacks
 * To implement a queue using two stacks in JavaScript, we can follow a common approach where two stacks are used to manage the elements. Let's name them 'stack1' and 'stack2'.
 * stack1 is used for enqueue operations (pushing elements).
 * stack2 is used for dequeue operations (popping elements).
 * When we need to dequeue an element, we check if stack2 is empty:
 * 		If it is empty, we move all elements from stack1 to stack2, reversing the order and allowing us to pop the oldest element from stack2.
 * 		If stack2 is not empty, we simply pop from it.
 */

class MyQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    // Enqueue operation: push element x to the back of queue
    push(x) {
        this.stack1.push(x);
    }

    // Dequeue operation: remove the element from the front of the queue and return it
    pop() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {    // arr stack2 keeps building in rev order to stack1
                this.stack2.push(this.stack1.pop());    // pops out last element from stack2
            }
        }
        return this.stack2.pop();
    }

    // Peek operation: get the front element
    peek() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {    // arr stack2 keeps building in rev order to stack1
                this.stack2.push(this.stack1.pop());    // pops out last element from stack2
            }
        }
        return this.stack2[this.stack2.length - 1];
    }

    // Empty operation: return whether the queue is empty
    empty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

// Example usage:
const queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek()); // returns 1
console.log(queue.pop());  // returns 1
console.log(queue.empty()); // returns false

/*
Explanation:
1. push(x): Adds element x to the end of the queue by pushing it onto stack1.
2. pop(): Removes the element from the front of the queue:
	- If stack2 is empty, all elements from stack1 are moved to stack2 (reversing the order), then stack2 is popped.
	- If stack2 is not empty, simply pop the top element from stack2.
3. peek(): Returns the front element of the queue:
	- If stack2 is empty, transfer elements from stack1 to stack2, then return the top of stack2.
	- If stack2 is not empty, return the top element from stack2.
4. empty(): Returns true if both stack1 and stack2 are empty, meaning the queue is empty.

Time Complexity:
	- push(x): O(1) — Always takes constant time.
	- pop(): Amortized O(1) — Each element is moved between the stacks at most once.
	- peek(): Amortized O(1) — Similar to pop.
	- empty(): O(1) — Always takes constant time.

Space Complexity:
	- Space Complexity: O(n) — The space is proportional to the number of elements in the queue, stored across the two stacks.
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
