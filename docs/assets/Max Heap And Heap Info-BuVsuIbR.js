const t=`# Max Heap And Heap Info

## Problem Statement

Describe the problem statement for **Max Heap And Heap Info** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * HEAP - https://www.educative.io/courses/data-structures-coding-interviews-javascript/g75kWBBLxPG\r
 * useful in applications where you want to sort and implement priority queues\r
 * are complete binary trees, with 2 special properties-\r
 * 		- each node has at most 2 children\r
 * 		- only leaf nodes can be empty\r
 * 		- allows duplicate node values (BST doesnt allow duplicates)\r
 * 		- is not ordered (if order matters then use BST)\r
 * 		- insert and remove will take O(log(n)) time\r
 * 		- nodes must be ordered as per min/max heap property\r
 */\r
\r
// Max Heap\r
	class maxHeap {\r
		constructor() {\r
			this.heap = [];\r
      		this.elements = 0;\r
		}\r
\r
		insert(val) {\r
			if (this.elements >= this.heap.length){\r
				this.elements = this.elements + 1\r
				this.heap.push(val);\r
				this.__percolateUp(this.heap.length - 1);\r
			 }\r
			else{\r
				this.heap[this.elements] = val;\r
				this.elements = this.elements + 1\r
				this.__percolateUp(this.elements - 1);\r
			}\r
		}\r
\r
		getMax() {\r
			if (this.elements != 0)\r
             return this.heap[0]\r
        	return null;\r
		}\r
\r
		removeMax() {\r
			if (this.elements > 1) {\r
				var max = this.heap[0]\r
				this.heap[0] = this.heap[this.elements - 1]\r
				this.elements = this.elements - 1\r
				this.__maxHeapify(0)\r
				return max\r
			} else if (this.elements == 1) {\r
				var max = this.heap[0]\r
				this.elements = this.elements - 1\r
				return max\r
			} else {\r
				return null;\r
			}\r
		}\r
	\r
		__percolateUp(index) {\r
			var parent = Math.floor( (index - 1) / 2)   // important- remember this\r
			if (index <= 0)\r
				return\r
			else if (this.heap[parent] < this.heap[index]) {\r
				var tmp = this.heap[parent]\r
				this.heap[parent] = this.heap[index]\r
				this.heap[index] = tmp\r
				this.__percolateUp(parent)\r
         	}\r
		}\r
	\r
		__maxHeapify(index) {\r
			var left = (index * 2) + 1;			// important- remember this\r
			var right = (index * 2) + 2;		// important- remember this\r
			var largest = index;\r
			if ((this.elements > left) && (this.heap[largest] < this.heap[left])) {\r
				largest = left\r
			}\r
			if ((this.elements > right) && (this.heap[largest] < this.heap[right]))\r
				largest = right\r
			if (largest != index) {\r
				var tmp = this.heap[largest]\r
				this.heap[largest] = this.heap[index]\r
				this.heap[index] = tmp\r
				this.__maxHeapify(largest)\r
			}\r
		}\r
\r
		buildHeap(arr){\r
			this.heap = arr;\r
			this.elements = this.heap.length;\r
			for (var i = this.heap.length - 1; i >= 0; i--){\r
				this.__maxHeapify(i)\r
			}\r
			return heap;\r
		 }\r
		\r
		 isLeaf(index) {\r
			return (\r
				index >= Math.floor(this.heap.length / 2) && index <= this.heap.length - 1\r
			)\r
		}\r
		\r
		leftChild(index) {\r
			return (index * 2) + 1;\r
		}\r
		\r
		rightChild(index) {\r
			return (index * 2) + 2;\r
		}\r
		\r
		print() {\r
			let i = 0;\r
			while (!this.isLeaf(i)) {\r
				console.log("PARENT:", this.heap[i]);\r
				console.log("LEFT CHILD:", this.heap[this.leftChild(i)]);\r
				console.log("RIGHT CHILD:", this.heap[this.rightChild(i)]);\r
				i++;\r
			}      \r
		}\r
	}\r
\r
	var heap = new maxHeap()\r
	\r
	heap.insert(12)\r
	heap.insert(10)\r
	heap.insert(-10)\r
	heap.insert(100)\r
	console.log(heap.getMax())		// 100\r
	heap.removeMax()\r
	console.log(heap.getMax())		// 12\r
	// OR\r
	var arr = [6,9,3,4,13,22,1,30,17];\r
	heap.buildHeap(arr);\r
	console.log(heap.getMax());\r
	heap.insert(31);\r
	console.log(heap.getMax());\r
	console.log(heap.buildHeap(arr));\r
	heap.print();\r
	console.log('is node at index 5 (3) leaf? ', heap.isLeaf(5));\r
	console.log('index of right child of node @ index 2- ', heap.rightChild(2));\r
\r
/*\r
	// Output->\r
		30\r
		31\r
		maxHeap { heap: [ 31, 30, 22, 9, 17, 3, 1, 4, 6, 13 ], elements: 10 }\r
		PARENT: 31\r
		LEFT CHILD: 30\r
		RIGHT CHILD: 22\r
		PARENT: 30\r
		LEFT CHILD: 9\r
		RIGHT CHILD: 17\r
		PARENT: 22\r
		LEFT CHILD: 3\r
		RIGHT CHILD: 1\r
		PARENT: 9\r
		LEFT CHILD: 4\r
		RIGHT CHILD: 6\r
		PARENT: 17\r
		LEFT CHILD: 13\r
		RIGHT CHILD: undefined\r
		is node at index 5 (3) leaf?  true\r
		index of right child of node @ index 2-  6\r
\r
1. Build MaxHeap\r
	- Elements are placed in nodes in the same order as they appear in the array.\r
	- Function is called over the whole heap in a bottom-up manner that "Max Heapifies" on this heap.\r
		("Max Heapify" function is bottom-up because it starts comparing and swapping parent-child key values from the last parent)\r
\r
2. Insertion in MaxHeap\r
	- Create a new child node at the end of the heap\r
	- Place the new key at that node\r
	- Compare the value with its parent node key\r
	- If the key is greater than the key at the parent node, swap values\r
	- Repeat until you reach the root node\r
	- O(log(n)) because that is the maximum number of nodes that would have to be traversed and/or swapped\r
\r
3. Remove Maximum (i.e. top-most node) in MaxHeap\r
	- Delete the root node\r
	- Move the key of the last child node at the last level to root\r
	- Now compare the key with its children\r
	- If the key is smaller than the key at any of the child nodes, swap values\r
	- If both keys at child nodes are greater than the parent node key, pick the larger one and see if the heap property is satisfied\r
	- Repeat until you reach the last level\r
\r
4. getMax() function\r
	- Returns the maximum value in the heap, which is the root\r
	- time complexity of this function O(1) constant time\r
\r
5. removeMax() function\r
	- remove maximum value in the heap, the root\r
	- O(log(n)) because that is the maximum number of nodes that would have to be traversed and/or swapped\r
	Check if the number of elements in the heap is greater than 1\r
		if it is,\r
			save the maximum value in a variable,\r
			swap the maximum value with the last leaf,\r
			delete it,\r
			restore the max heap property on the rest of the tree by calling the __maxHeapify().\r
	Then check if the heap is of size 1\r
		if it is, \r
			save the maximum value in the tree (the only value really) in a variable,\r
			delete it,\r
			return it \r
			Then check if the heap is empty\r
				if it is\r
					return null\r
\r
6. __percolateUp() function\r
	- Restores the heap property by swapping the value at a parent node if it is less than the value at a child node. \r
	- After swapping, the function is called recursively on each parent node until the root is reached\r
	- O(log(n)) because that is the maximum number of nodes that would have to be traversed and/or swapped\r
\r
7. __maxHeapify() function\r
	- Restores the heap property after a node is removed. \r
	- Swaps the values of the parent nodes with the values of their largest child nodes,\r
 		until the heap property is restored\r
	- O(log(n)) because that is the maximum number of nodes that would have to be traversed and/or swapped\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{t as default};
