const e=`# kth Largest Ele In Stream

## Problem Statement

Given an integer array nums and an integer k, return the kth largest element in the array. Note that it is the kth largest in sorted order, not the kth distinct element.

## Examples

- Input: nums = [3, 2, 1, 5, 6, 4], k = 2
- Output: 5

- Input: nums = [3, 2, 3, 1, 2, 4, 5, 5, 6], k = 4
- Output: 4

## Approach

Min-heap of size k. The key insight: if we maintain only the k largest elements seen so far, the smallest among them (the heap top) is the kth largest overall.

Steps:
1. Push each element into the min-heap.
2. If the heap size exceeds k, pop the minimum (discarding elements too small to be in the top k).
3. After processing all elements, the heap top is the kth largest.

This avoids full sorting (O(n log n)) and runs in O(n log k).

## Solution

\`\`\`js
class MinHeap {
    constructor() { this.heap = []; }

    size() { return this.heap.length; }
    peek() { return this.heap[0]; }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    pop() {
        const top = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown();
        }
        return top;
    }

    bubbleUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            const p = Math.floor((i - 1) / 2);
            if (this.heap[p] <= this.heap[i]) break;
            [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
            i = p;
        }
    }

    bubbleDown() {
        let i = 0;
        while (true) {
            let left = 2 * i + 1, right = 2 * i + 2, smallest = i;
            if (left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;
            if (smallest === i) break;
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
    }
}

function findKthLargest(nums, k) {
    const heap = new MinHeap();

    for (let num of nums) {
        heap.push(num);
        if (heap.size() > k) heap.pop();
    }

    return heap.peek();
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
\`\`\`

## Time Complexity

**O(n log k)** — each of the n elements is pushed into the heap (O(log k)), and at most n - k pops occur (each O(log k)).

## Space Complexity

**O(k)** — the heap holds at most k elements at any time.

## Notes

- The min-heap of size k trick works because: after seeing all n elements, the k largest are in the heap, and the smallest of those k (the heap top) is the kth largest by definition.
- LeetCode #215.
`;export{e as default};
