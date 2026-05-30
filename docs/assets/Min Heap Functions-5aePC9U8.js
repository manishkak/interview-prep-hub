const t=`# Min Heap Functions

## Problem Statement

Describe the problem statement for **Min Heap Functions** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// MinHeap\r
/**\r
 * key at parent is always smaller than the children, so root is the smallest\r
 */\r
class minHeap {\r
	constructor() {\r
		this.heap = []\r
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
	getMin() {\r
		if (this.heap.length != 0)\r
			return this.heap[0]\r
		return null;\r
	}\r
\r
	removeMin() {\r
		if (this.elements > 1) {\r
			var min = this.heap[0]\r
			this.heap[0] = this.heap[this.elements - 1]\r
			this.elements = this.elements - 1\r
			this.__minHeapify(0)\r
			return min\r
		} else if (this.elements == 1) {\r
			var min = this.heap[0]\r
			this.elements = this.elements - 1\r
			return min\r
		} else {\r
			return null;\r
		}\r
   \r
	}\r
\r
	__percolateUp(index) {\r
		var parent = Math.floor( (index - 1) / 2)\r
		if (index <= 0)\r
			return\r
		else if (this.heap[parent] > this.heap[index]) {\r
			var tmp = this.heap[parent]\r
			this.heap[parent] = this.heap[index]\r
			this.heap[index] = tmp\r
			this.__percolateUp(parent)\r
		}\r
	}\r
	__minHeapify(index) {\r
		var left = (index * 2) + 1;\r
		var right = (index * 2) + 2;\r
		var smallest = index;\r
		if ((this.elements > left) && (this.heap[smallest] > this.heap[left])) {\r
			smallest = left\r
		}\r
		if ((this.elements > right) && (this.heap[smallest] > this.heap[right]))\r
			smallest = right\r
		if (smallest != index) {\r
			var tmp = this.heap[smallest]\r
			this.heap[smallest] = this.heap[index]\r
			this.heap[index] = tmp\r
			this.__minHeapify(smallest)\r
		}\r
	}\r
\r
	buildHeap(arr){\r
	   this.heap = arr;\r
	   this.elements = this.heap.length;\r
	   for (var i = this.heap.length - 1 ; i >= 0 ; i--){\r
			this.__minHeapify(i)\r
	   }\r
\r
	}\r
  \r
}\r
var heap = new minHeap()\r
heap.insert(12)\r
heap.insert(10)\r
heap.insert(-10)\r
heap.insert(100)\r
\r
console.log(heap.getMin())\r
\r
var newheap = new minHeap()\r
var arr =  [6,9,3,4,13,22,1,30,17]\r
newheap.buildHeap(arr)\r
console.log(newheap.getMin())\r
\r
newheap.removeMin()\r
\r
console.log(newheap.getMin())\r
/*\r
3 questions from Educative-\r
- Convert max heap to min heap (just call __minHeapify on any heap)\r
- Find k Smallest Elements in an Array (so for 3rd smallest, return all 3 smallest elements)\r
	- In this solution, we exploit the property that the minimum element is readily available at the top of a min-heap. So, if we build a min heap from the given array and then repeat the removeMin() operation \r
	k times, we will obtain the k smallest elements in the array.\r
	- total time complexity is O(n+klogn)\r
- Find k Largest Elements in an Array\r
	- We first create a max-heap out of the given array by using the buildHeap method. We then call removeMax()on the heap k times, save the output in an array and return it.\r
	- time complexity of O(klogn), as the removeMax function takes (O(logn) time and is called k times in the above for loop.\r
- Nice article about Heap functions- https://reginafurness.medium.com/implementing-a-max-heap-in-javascript-b3e2f788390c\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{t as default};
