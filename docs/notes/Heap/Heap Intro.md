# Heap Intro

## Problem Statement

A heap is a complete binary tree data structure that satisfies the heap property. In a min-heap, every parent node is smaller than or equal to its children — the root is always the minimum. In a max-heap, every parent node is larger — the root is always the maximum.

Heaps are used to implement priority queues and to efficiently solve "top K" problems. The key advantage over sorting is that maintaining a heap of size k costs O(n log k) rather than O(n log n).

Top K Elements pattern: to find the k largest elements, maintain a min-heap of size k. As you scan the array, if an element is larger than the heap's min (the top), pop the min and push the new element. After processing all n elements, the heap contains exactly the k largest.

## Examples

- Insert [3, 1, 6, 2] into a min-heap → root = 1, heap = [1, 2, 6, 3]
- extractMin() → returns 1, heap rebalances to [2, 3, 6]

- Top 2 largest in [3, 1, 6, 2]: min-heap of size 2 ends up as [3, 6] → answer: [3, 6]

## Approach

Core heap operations:
- insert: push to end of array, then bubbleUp (swap with parent while smaller than parent).
- extractMin: save root, replace root with last element, pop last, then bubbleDown (swap with smaller child while larger than a child).
- Parent of index i: Math.floor((i - 1) / 2)
- Left child of i: 2*i + 1
- Right child of i: 2*i + 2

bubbleUp: compare inserted node with parent, swap if violates heap property, repeat up the tree.
bubbleDown: compare root replacement with both children, swap with the smaller child if needed, repeat down the tree.

## Solution

```js
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }

    peek() { return this.heap[0]; }
    size() { return this.heap.length; }

    bubbleUp(index) {
        const parent = Math.floor((index - 1) / 2);
        if (index > 0 && this.heap[parent] > this.heap[index]) {
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            this.bubbleUp(parent);
        }
    }

    bubbleDown(index) {
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        let smallest = index;

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left;
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;

        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.bubbleDown(smallest);
        }
    }
}

// Top K Elements pattern — find kth largest
function findKthLargest(nums, k) {
    const heap = new MinHeap();
    for (let num of nums) {
        heap.insert(num);
        if (heap.size() > k) heap.extractMin();
    }
    return heap.peek();
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
```

## Time Complexity

**O(log n)** for insert and extractMin (bubbleUp/bubbleDown traverse at most the height of the tree).
**O(1)** for peek (just read the root).
**O(n log k)** for the Top K Elements pattern over n elements with a heap of size k.

## Space Complexity

**O(n)** to store n elements in the heap array.

## Notes

- To find k largest: use a min-heap of size k (the smallest of the k largest sits at the top as the eviction candidate).
- To find k smallest: use a max-heap of size k (the largest of the k smallest sits at the top).
- Heap vs full sort: sorting is O(n log n); heap gives O(n log k) — significant when k is much smaller than n.
