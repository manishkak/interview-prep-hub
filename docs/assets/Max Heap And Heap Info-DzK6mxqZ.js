const e=`# Max Heap And Heap Info

## Problem Statement

A max-heap is a complete binary tree where every parent node is greater than or equal to its children. The root is always the maximum element. It is used to implement a max-priority queue and to efficiently retrieve or remove the largest element.

Key properties:
- Complete binary tree: all levels are full except possibly the last, which is filled left to right.
- Allows duplicate values.
- Not fully ordered like a BST — only the parent-child heap property is guaranteed.
- insert and removeMax both run in O(log n).
- getMax runs in O(1).

## Examples

- Insert [12, 10, -10, 100] → getMax() = 100
- removeMax() → getMax() = 12
- buildHeap([6,9,3,4,13,22,1,30,17]) → getMax() = 30

## Approach

Two core helpers maintain the heap property:

__percolateUp (used after insert): compare the new node with its parent; if larger, swap and repeat until the root or no swap needed. Parent index of i = Math.floor((i - 1) / 2).

__maxHeapify (used after removeMax): after placing the last element at the root, compare with both children; swap with the larger child if it is larger than the current node; repeat until a leaf or no swap needed. Left child = 2*i + 1, right child = 2*i + 2.

buildHeap: call __maxHeapify on every node from the last down to the root (bottom-up). O(n).

## Solution

\`\`\`js
class maxHeap {
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

    getMax() {
        if (this.elements !== 0) return this.heap[0];
        return null;
    }

    removeMax() {
        if (this.elements > 1) {
            const max = this.heap[0];
            this.heap[0] = this.heap[this.elements - 1];
            this.elements--;
            this.__maxHeapify(0);
            return max;
        } else if (this.elements === 1) {
            const max = this.heap[0];
            this.elements--;
            return max;
        }
        return null;
    }

    __percolateUp(index) {
        const parent = Math.floor((index - 1) / 2);
        if (index <= 0) return;
        if (this.heap[parent] < this.heap[index]) {
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            this.__percolateUp(parent);
        }
    }

    __maxHeapify(index) {
        const left = index * 2 + 1;
        const right = index * 2 + 2;
        let largest = index;

        if (this.elements > left && this.heap[largest] < this.heap[left]) largest = left;
        if (this.elements > right && this.heap[largest] < this.heap[right]) largest = right;

        if (largest !== index) {
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            this.__maxHeapify(largest);
        }
    }

    buildHeap(arr) {
        this.heap = arr;
        this.elements = this.heap.length;
        for (let i = this.heap.length - 1; i >= 0; i--) {
            this.__maxHeapify(i);
        }
    }

    isLeaf(index) {
        return index >= Math.floor(this.heap.length / 2) && index <= this.heap.length - 1;
    }
}

const heap = new maxHeap();
heap.insert(12);
heap.insert(10);
heap.insert(-10);
heap.insert(100);
console.log(heap.getMax());  // 100
heap.removeMax();
console.log(heap.getMax());  // 12
\`\`\`

## Time Complexity

**O(log n)** for insert and removeMax (percolate up/down traverse tree height).
**O(1)** for getMax (just reads the root).
**O(n)** for buildHeap (bottom-up heapification).

## Space Complexity

**O(n)** to store n elements in the heap array.

## Notes

- __percolateUp is used after insert (new element may be too large, needs to move up).
- __maxHeapify is used after removeMax (replacement element at root may be too small, needs to move down).
- buildHeap in O(n) is more efficient than inserting n elements one by one (which would be O(n log n)).
`;export{e as default};
