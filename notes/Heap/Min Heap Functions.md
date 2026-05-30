# Min Heap Functions

## Problem Statement

Describe the problem statement for **Min Heap Functions** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// MinHeap
/**
 * key at parent is always smaller than the children, so root is the smallest
 */
class minHeap {
	constructor() {
		this.heap = []
		this.elements = 0;
	}

	insert(val) {
		if (this.elements >= this.heap.length){
		   this.elements = this.elements + 1
		   this.heap.push(val);
		   this.__percolateUp(this.heap.length - 1);
		}
	   else{
		   this.heap[this.elements] = val;
		   this.elements = this.elements + 1
		   this.__percolateUp(this.elements - 1);
	   }
	}

	getMin() {
		if (this.heap.length != 0)
			return this.heap[0]
		return null;
	}

	removeMin() {
		if (this.elements > 1) {
			var min = this.heap[0]
			this.heap[0] = this.heap[this.elements - 1]
			this.elements = this.elements - 1
			this.__minHeapify(0)
			return min
		} else if (this.elements == 1) {
			var min = this.heap[0]
			this.elements = this.elements - 1
			return min
		} else {
			return null;
		}
   
	}

	__percolateUp(index) {
		var parent = Math.floor( (index - 1) / 2)
		if (index <= 0)
			return
		else if (this.heap[parent] > this.heap[index]) {
			var tmp = this.heap[parent]
			this.heap[parent] = this.heap[index]
			this.heap[index] = tmp
			this.__percolateUp(parent)
		}
	}
	__minHeapify(index) {
		var left = (index * 2) + 1;
		var right = (index * 2) + 2;
		var smallest = index;
		if ((this.elements > left) && (this.heap[smallest] > this.heap[left])) {
			smallest = left
		}
		if ((this.elements > right) && (this.heap[smallest] > this.heap[right]))
			smallest = right
		if (smallest != index) {
			var tmp = this.heap[smallest]
			this.heap[smallest] = this.heap[index]
			this.heap[index] = tmp
			this.__minHeapify(smallest)
		}
	}

	buildHeap(arr){
	   this.heap = arr;
	   this.elements = this.heap.length;
	   for (var i = this.heap.length - 1 ; i >= 0 ; i--){
			this.__minHeapify(i)
	   }

	}
  
}
var heap = new minHeap()
heap.insert(12)
heap.insert(10)
heap.insert(-10)
heap.insert(100)

console.log(heap.getMin())

var newheap = new minHeap()
var arr =  [6,9,3,4,13,22,1,30,17]
newheap.buildHeap(arr)
console.log(newheap.getMin())

newheap.removeMin()

console.log(newheap.getMin())
/*
3 questions from Educative-
- Convert max heap to min heap (just call __minHeapify on any heap)
- Find k Smallest Elements in an Array (so for 3rd smallest, return all 3 smallest elements)
	- In this solution, we exploit the property that the minimum element is readily available at the top of a min-heap. So, if we build a min heap from the given array and then repeat the removeMin() operation 
	k times, we will obtain the k smallest elements in the array.
	- total time complexity is O(n+klogn)
- Find k Largest Elements in an Array
	- We first create a max-heap out of the given array by using the buildHeap method. We then call removeMax()on the heap k times, save the output in an array and return it.
	- time complexity of O(klogn), as the removeMax function takes (O(logn) time and is called k times in the above for loop.
- Nice article about Heap functions- https://reginafurness.medium.com/implementing-a-max-heap-in-javascript-b3e2f788390c
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
