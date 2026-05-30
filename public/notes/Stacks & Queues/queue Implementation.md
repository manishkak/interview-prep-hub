# queue Implementation

## Problem Statement

Describe the problem statement for **queue Implementation** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Implementation of Queue (FIFO) with basic functions.
 * Priority Queue
 * 	all elements have a priority associated with them and are sorted such that the most prioritized object appears at the front, and the least prioritized object appears at the end of the queue.
 * These queues are widely used in most operating systems to determine which programs should be given more priority.
 * Circular Queue
 * 	similar to Linear Queues; both ends are connected to form a circle.
 * 	Generally used in:
		Simulation of objects
		Event handling (do something when a particular event occurs)
 */

class QueueUsingStacks {
	constructor() {
		this.stack1 = [];
		this.stack2 = [];
	}
	
	// Enqueue operation (add element to the queue)
	enqueue(value) {
		this.stack1.push(value);
	}
	
	// Dequeue operation (remove element from the queue)
	dequeue() {
		if (this.stack2.length === 0) {
		// Transfer all elements from stack1 to stack2 to reverse order
		while (this.stack1.length > 0) {
			this.stack2.push(this.stack1.pop());
		}
		}
		// If stack2 still has no elements, then the queue is empty
		if (this.stack2.length === 0) {
		return "Queue is empty";
		}
		return this.stack2.pop();
	}
	
	// Peek operation (get the front element without removing it)
	peek() {
		if (this.stack2.length === 0) {
		// Transfer all elements from stack1 to stack2 to reverse order
		while (this.stack1.length > 0) {
			this.stack2.push(this.stack1.pop());
		}
		}
		if (this.stack2.length === 0) {
		return "Queue is empty";
		}
		return this.stack2[this.stack2.length - 1];
	}
	
	// Check if the queue is empty
	isEmpty() {
		return this.stack1.length === 0 && this.stack2.length === 0;
	}
}

// Example usage:
const queue = new QueueUsingStacks();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek());    // Output: 2
console.log(queue.dequeue()); // Output: 2
console.log(queue.isEmpty()); // Output: false
console.log(queue.dequeue()); // Output: 3
console.log(queue.isEmpty()); // Output: true

/*
Explanation:
	Enqueue (Push to stack1): We push each new element onto stack1.
	Dequeue (Pop from stack2):
		- If stack2 is empty, we move all elements from stack1 to stack2, effectively reversing the order to make it FIFO.
		- Pop the top element of stack2 as the dequeued element.
	Peek: Similar to dequeue, but just return the top of stack2 without removing it.

This solution provides amortized O(1) time complexity for each enqueue and dequeue operation
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
