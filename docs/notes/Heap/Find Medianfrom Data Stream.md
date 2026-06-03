# Find Medianfrom Data Stream

## Problem Statement

Design a data structure that supports two operations on a continuous stream of integers:
1. addNum(num) — add an integer to the data structure.
2. findMedian() — return the median of all integers seen so far.

The median is the middle value in an ordered list. If the list has even length, the median is the average of the two middle values.

## Examples

- addNum(1), addNum(2), findMedian() → 1.5
- addNum(3), findMedian() → 2.0

## Approach

Two heaps — a max-heap for the lower half and a min-heap for the upper half.

Invariant: the max-heap (lo) holds the smaller half, the min-heap (hi) holds the larger half. Their sizes differ by at most 1.

For every addNum:
1. Push to lo (max-heap). Then push lo's max into hi to maintain the ordering invariant.
2. If hi has more elements than lo, move hi's min back to lo to rebalance sizes.

For findMedian:
- If both halves are equal size, return the average of their tops.
- Otherwise return the top of lo (the larger half).

Since JS has no built-in heap, simulate a max-heap by negating values in a min-heap.

## Solution

```js
class MinHeap {
    constructor() { this.heap = []; }

    push(val) {
        this.heap.push(val);
        let i = this.heap.length - 1;
        while (i > 0) {
            const p = Math.floor((i - 1) / 2);
            if (this.heap[p] <= this.heap[i]) break;
            [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
            i = p;
        }
    }

    pop() {
        const top = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            let i = 0;
            while (true) {
                let s = i, l = 2*i+1, r = 2*i+2;
                if (l < this.heap.length && this.heap[l] < this.heap[s]) s = l;
                if (r < this.heap.length && this.heap[r] < this.heap[s]) s = r;
                if (s === i) break;
                [this.heap[i], this.heap[s]] = [this.heap[s], this.heap[i]];
                i = s;
            }
        }
        return top;
    }

    peek() { return this.heap[0]; }
    size() { return this.heap.length; }
}

class MedianFinder {
    constructor() {
        this.lo = new MinHeap(); // max-heap (negate values)
        this.hi = new MinHeap(); // min-heap
    }

    addNum(num) {
        this.lo.push(-num);                          // push to max-heap
        this.hi.push(-this.lo.pop());                // move lo's max to hi
        if (this.hi.size() > this.lo.size()) {
            this.lo.push(-this.hi.pop());            // rebalance
        }
    }

    findMedian() {
        if (this.lo.size() > this.hi.size()) {
            return -this.lo.peek();
        }
        return (-this.lo.peek() + this.hi.peek()) / 2;
    }
}

const mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
console.log(mf.findMedian()); // 1.5
mf.addNum(3);
console.log(mf.findMedian()); // 2.0
```

## Time Complexity

**O(log n)** per addNum — each push/pop on the heaps is O(log n).
**O(1)** per findMedian — just reading the tops of both heaps.

## Space Complexity

**O(n)** for storing all n numbers across the two heaps.

## Notes

- The two-heap trick is the key insight: lo always holds the smaller half (as a max-heap) and hi always holds the larger half (as a min-heap), so the median is always accessible at the tops.
- The lo.size() >= hi.size() invariant ensures lo is never smaller than hi, so lo's top is always the correct middle element for odd counts.
- Negating values simulates a max-heap using a min-heap implementation.
- LeetCode #295.
