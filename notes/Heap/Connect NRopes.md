# Connect NRopes

## Problem Statement

Describe the problem statement for **Connect NRopes** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/*
Explanation
Problem Objective:
    To minimize the cost of connecting all ropes, always connect the two smallest ropes first.
Approach:
    Use a min-heap to efficiently fetch the smallest two ropes at each step.
    Combine the two smallest ropes, add their length to the total cost, and push the new rope length back into the heap.
    Repeat until only one rope remains.
Steps:
    Insert all rope lengths into a min-heap.
    While the heap contains more than one element:
        - Extract the two smallest ropes.
        - Combine their lengths (cost of connecting them).
        - Add this cost to the total cost.
        - Insert the combined length back into the heap.
    The total cost is the sum of all the merge operations.

Complexity:
Time Complexity:
    - Building the heap: O(nlogn), where n is the number of ropes.
    - Combining ropes: O(nlogn), as we perform n−1 extractions and insertions.
    - Overall: O(nlogn).
Space Complexity:
    - Heap storage: O(n), where n is the number of ropes.
    - Total: O(n).
*/

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

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.bubbleDown(smallest);
        }
    }
}

function connectRopes(ropes) {
    const minHeap = new MinHeap();

    // Insert all ropes into the heap
    for (let rope of ropes) {
        minHeap.insert(rope);
    }   // after all the ropes are inserted, the heap will look like this for input [4,3,2,6]: [2,4,3,6] (min-heap property maintained)

    let totalCost = 0;

    // Combine ropes until only one remains
    while (minHeap.heap.length > 1) {
        const first = minHeap.extractMin(); // Smallest rope, 2. After extracting 2, heap looks like [3,4,6] (min-heap property maintained)
        const second = minHeap.extractMin(); // Second smallest rope, 3. After extracting 3, heap looks like [4,6] (min-heap property maintained)
        const cost = first + second; // Cost to connect these two ropes, 2 + 3 = 5
        totalCost += cost;
        minHeap.insert(cost); // Insert the combined rope back into the heap, heap now looks like [4, 6, 5] -> Compare 5 with parent (4) → 5 > 4 → no swap needed
    }

    return totalCost;
}

// Example usage:
console.log(connectRopes([4, 3, 2, 6])); // Output: 29

```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
