# Min Heap Functions

## Problem Statement

A min-heap is a complete binary tree where every parent node is smaller than or equal to its children. The root is always the minimum element. It is used to implement a min-priority queue and to efficiently retrieve or remove the smallest element.

Key operations: insert, getMin, removeMin, and buildHeap. All insert/remove operations run in O(log n); getMin runs in O(1).

## Examples

- Insert [12, 10, -10, 100] → getMin() = -10
- removeMin() → getMin() = 10
- buildHeap([6,9,3,4,13,22,1,30,17]) → getMin() = 1, removeMin() → getMin() = 3

## Approach

Two core helpers maintain the heap property:

__percolateUp (used after insert): compare the new node with its parent; if smaller, swap and repeat. Parent index of i = Math.floor((i - 1) / 2).

__minHeapify (used after removeMin): after placing the last element at the root, compare with both children; swap with the smaller child if the current node is larger; repeat until a leaf or no swap needed. Left child = 2*i + 1, right child = 2*i + 2.

buildHeap: call __minHeapify on every node from the last down to the root (bottom-up).

## Solution

```js
class minHeap {
    constructor() {
        this.heap = [];
        this.elements = 0;
    }

    insert(val) {
        if (this.elements >= this.heap.length) {
            this.elements++;
            this.heap.push(val);
            this.__percolateUp(this.heap.length - 1);
        } else {
            this.heap[this.elements] = val;
            this.elements++;
            this.__percolateUp(this.elements - 1);
        }
    }

    getMin() {
        if (this.heap.length !== 0) return this.heap[0];
        return null;
    }

    removeMin() {
        if (this.elements > 1) {
            const min = this.heap[0];
            this.heap[0] = this.heap[this.elements - 1];
            this.elements--;
            this.__minHeapify(0);
            return min;
        } else if (this.elements === 1) {
            const min = this.heap[0];
            this.elements--;
            return min;
        }
        return null;
    }

    __percolateUp(index) {
        const parent = Math.floor((index - 1) / 2);
        if (index <= 0) return;
        if (this.heap[parent] > this.heap[index]) {
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            this.__percolateUp(parent);
        }
    }

    __minHeapify(index) {
        const left = index * 2 + 1;
        const right = index * 2 + 2;
        let smallest = index;

        if (this.elements > left && this.heap[smallest] > this.heap[left]) smallest = left;
        if (this.elements > right && this.heap[smallest] > this.heap[right]) smallest = right;

        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.__minHeapify(smallest);
        }
    }

    buildHeap(arr) {
        this.heap = arr;
        this.elements = this.heap.length;
        for (let i = this.heap.length - 1; i >= 0; i--) {
            this.__minHeapify(i);
        }
    }
}

const heap = new minHeap();
heap.insert(12);
heap.insert(10);
heap.insert(-10);
heap.insert(100);
console.log(heap.getMin()); // -10

const heap2 = new minHeap();
heap2.buildHeap([6, 9, 3, 4, 13, 22, 1, 30, 17]);
console.log(heap2.getMin()); // 1
heap2.removeMin();
console.log(heap2.getMin()); // 3
```

## Time Complexity

**O(log n)** for insert and removeMin (percolate up/down traverse tree height).
**O(1)** for getMin (just reads the root).
**O(n)** for buildHeap (bottom-up heapification is more efficient than n individual inserts).

## Space Complexity

**O(n)** to store n elements in the heap array.

## Notes

- __percolateUp and __minHeapify are mirror images of each other — one moves up, one moves down.
- To find k smallest elements: buildHeap, then call removeMin k times — O(n + k log n).
- To find k largest elements: buildHeap using maxHeap, then call removeMax k times — O(n + k log n).
