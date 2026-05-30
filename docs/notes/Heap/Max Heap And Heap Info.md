# Max Heap And Heap Info

## Problem Statement

Describe the problem statement for **Max Heap And Heap Info** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * HEAP - https://www.educative.io/courses/data-structures-coding-interviews-javascript/g75kWBBLxPG
 * useful in applications where you want to sort and implement priority queues
 * are complete binary trees, with 2 special properties-
 * 		- each node has at most 2 children
 * 		- only leaf nodes can be empty
 * 		- allows duplicate node values (BST doesnt allow duplicates)
 * 		- is not ordered (if order matters then use BST)
 * 		- insert and remove will take O(log(n)) time
 * 		- nodes must be ordered as per min/max heap property
 */

// Max Heap
	class maxHeap {
		constructor() {
			this.heap = [];
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

		getMax() {
			if (this.elements != 0)
             return this.heap[0]
        	return null;
		}

		removeMax() {
			if (this.elements > 1) {
				var max = this.heap[0]
				this.heap[0] = this.heap[this.elements - 1]
				this.elements = this.elements - 1
				this.__maxHeapify(0)
				return max
			} else if (this.elements == 1) {
				var max = this.heap[0]
				this.elements = this.elements - 1
				return max
			} else {
				return null;
			}
		}
	
		__percolateUp(index) {
			var parent = Math.floor( (index - 1) / 2)   // important- remember this
			if (index <= 0)
				return
			else if (this.heap[parent] < this.heap[index]) {
				var tmp = this.heap[parent]
				this.heap[parent] = this.heap[index]
				this.heap[index] = tmp
				this.__percolateUp(parent)
         	}
		}
	
		__maxHeapify(index) {
			var left = (index * 2) + 1;			// important- remember this
			var right = (index * 2) + 2;		// important- remember this
			var largest = index;
			if ((this.elements > left) && (this.heap[largest] < this.heap[left])) {
				largest = left
			}
			if ((this.elements > right) && (this.heap[largest] < this.heap[right]))
				largest = right
			if (largest != index) {
				var tmp = this.heap[largest]
				this.heap[largest] = this.heap[index]
				this.heap[index] = tmp
				this.__maxHeapify(largest)
			}
		}

		buildHeap(arr){
			this.heap = arr;
			this.elements = this.heap.length;
			for (var i = this.heap.length - 1; i >= 0; i--){
				this.__maxHeapify(i)
			}
			return heap;
		 }
		
		 isLeaf(index) {
			return (
				index >= Math.floor(this.heap.length / 2) && index <= this.heap.length - 1
			)
		}
		
		leftChild(index) {
			return (index * 2) + 1;
		}
		
		rightChild(index) {
			return (index * 2) + 2;
		}
		
		print() {
			let i = 0;
			while (!this.isLeaf(i)) {
				console.log("PARENT:", this.heap[i]);
				console.log("LEFT CHILD:", this.heap[this.leftChild(i)]);
				console.log("RIGHT CHILD:", this.heap[this.rightChild(i)]);
				i++;
			}      
		}
	}

	var heap = new maxHeap()
	
	heap.insert(12)
	heap.insert(10)
	heap.insert(-10)
	heap.insert(100)
	console.log(heap.getMax())		// 100
	heap.removeMax()
	console.log(heap.getMax())		// 12
	// OR
	var arr = [6,9,3,4,13,22,1,30,17];
	heap.buildHeap(arr);
	console.log(heap.getMax());
	heap.insert(31);
	console.log(heap.getMax());
	console.log(heap.buildHeap(arr));
	heap.print();
	console.log('is node at index 5 (3) leaf? ', heap.isLeaf(5));
	console.log('index of right child of node @ index 2- ', heap.rightChild(2));

/*
	// Output->
		30
		31
		maxHeap { heap: [ 31, 30, 22, 9, 17, 3, 1, 4, 6, 13 ], elements: 10 }
		PARENT: 31
		LEFT CHILD: 30
		RIGHT CHILD: 22
		PARENT: 30
		LEFT CHILD: 9
		RIGHT CHILD: 17
		PARENT: 22
		LEFT CHILD: 3
		RIGHT CHILD: 1
		PARENT: 9
		LEFT CHILD: 4
		RIGHT CHILD: 6
		PARENT: 17
		LEFT CHILD: 13
		RIGHT CHILD: undefined
		is node at index 5 (3) leaf?  true
		index of right child of node @ index 2-  6

1. Build MaxHeap
	- Elements are placed in nodes in the same order as they appear in the array.
	- Function is called over the whole heap in a bottom-up manner that "Max Heapifies" on this heap.
		("Max Heapify" function is bottom-up because it starts comparing and swapping parent-child key values from the last parent)

2. Insertion in MaxHeap
	- Create a new child node at the end of the heap
	- Place the new key at that node
	- Compare the value with its parent node key
	- If the key is greater than the key at the parent node, swap values
	- Repeat until you reach the root node
	- O(log(n)) because that is the maximum number of nodes that would have to be traversed and/or swapped

3. Remove Maximum (i.e. top-most node) in MaxHeap
	- Delete the root node
	- Move the key of the last child node at the last level to root
	- Now compare the key with its children
	- If the key is smaller than the key at any of the child nodes, swap values
	- If both keys at child nodes are greater than the parent node key, pick the larger one and see if the heap property is satisfied
	- Repeat until you reach the last level

4. getMax() function
	- Returns the maximum value in the heap, which is the root
	- time complexity of this function O(1) constant time

5. removeMax() function
	- remove maximum value in the heap, the root
	- O(log(n)) because that is the maximum number of nodes that would have to be traversed and/or swapped
	Check if the number of elements in the heap is greater than 1
		if it is,
			save the maximum value in a variable,
			swap the maximum value with the last leaf,
			delete it,
			restore the max heap property on the rest of the tree by calling the __maxHeapify().
	Then check if the heap is of size 1
		if it is, 
			save the maximum value in the tree (the only value really) in a variable,
			delete it,
			return it 
			Then check if the heap is empty
				if it is
					return null

6. __percolateUp() function
	- Restores the heap property by swapping the value at a parent node if it is less than the value at a child node. 
	- After swapping, the function is called recursively on each parent node until the root is reached
	- O(log(n)) because that is the maximum number of nodes that would have to be traversed and/or swapped

7. __maxHeapify() function
	- Restores the heap property after a node is removed. 
	- Swaps the values of the parent nodes with the values of their largest child nodes,
 		until the heap property is restored
	- O(log(n)) because that is the maximum number of nodes that would have to be traversed and/or swapped
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
