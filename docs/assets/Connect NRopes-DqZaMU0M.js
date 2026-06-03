const n=`# Connect NRopes

## Problem Statement

Given an array of rope lengths, find the minimum cost to connect all ropes into one. The cost to connect two ropes is the sum of their lengths. You want to minimize the total cost across all merge operations.

## Examples

- Input: ropes = [4, 3, 2, 6]
- Output: 29
- Explanation: Connect 2+3=5 (cost 5), then 4+5=9 (cost 9), then 6+9=15 (cost 15). Total = 5+9+15 = 29.

- Input: ropes = [1, 2, 3, 4, 5]
- Output: 33

## Approach

Greedy with a min-heap. Always connect the two smallest ropes first — this minimizes the cost at each step because smaller ropes contribute to the running total fewer times overall.

Steps:
1. Insert all rope lengths into a min-heap.
2. While the heap has more than one element: extract the two smallest ropes, add their combined length to the total cost, and push the combined rope back into the heap.
3. Return the total cost.

## Solution

\`\`\`js
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

function connectRopes(ropes) {
    const minHeap = new MinHeap();

    for (let rope of ropes) {
        minHeap.insert(rope);
    }

    let totalCost = 0;

    while (minHeap.heap.length > 1) {
        const first = minHeap.extractMin();
        const second = minHeap.extractMin();
        const cost = first + second;
        totalCost += cost;
        minHeap.insert(cost);
    }

    return totalCost;
}

console.log(connectRopes([4, 3, 2, 6])); // 29
\`\`\`

## Time Complexity

**O(n log n)** — building the heap is O(n log n) and each of the n-1 merge operations does two extractions and one insertion, each O(log n).

## Space Complexity

**O(n)** for storing all rope lengths in the heap.

## Notes

- This is a classic greedy + min-heap problem. The greedy choice is always merging the two smallest ropes because larger ropes added early get re-summed in every subsequent merge.
- This is the same idea as Huffman encoding.
- LeetCode #1167 (Minimum Cost to Connect Sticks).
`;export{n as default};
