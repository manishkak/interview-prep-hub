# Merge KSorted Arrays

## Problem Statement

Describe the problem statement for **Merge KSorted Arrays** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/*
Approach

Min-Heap:
We will use a min-heap (priority queue) to store the elements from each of the K sorted arrays. Each element in the heap will contain the value from one of the arrays, along with the array index and the element index within that array.

Push Initial Elements:
Start by pushing the first element of each array into the heap, along with its array index and the index of the element in that array.

Pop and Insert:
Continuously pop the smallest element from the heap, add it to the result list, and then push the next element from the same array (from which the element was popped) into the heap.

Termination:
Repeat this process until the heap is empty, which means all elements from all arrays have been merged into the result array.
*/

class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Helper functions to maintain the heap property
    parent(index) { return Math.floor((index - 1) / 2); }
    leftChild(index) { return 2 * index + 1; }
    rightChild(index) { return 2 * index + 2; }

    // Insert a new element into the heap
    insert(element) {
        this.heap.push(element);
        let index = this.heap.length - 1;

        // Bubble up the element to maintain the min-heap property
        while (index > 0 && this.heap[this.parent(index)].value > this.heap[index].value) {
            [this.heap[this.parent(index)], this.heap[index]] = [this.heap[index], this.heap[this.parent(index)]];
            index = this.parent(index);
        }
    }

    // Remove and return the minimum element from the heap
    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapify(0);
        return min;
    }

    // Restore the heap property after extracting the minimum element
    heapify(index) {
        let smallest = index;
        const left = this.leftChild(index);
        const right = this.rightChild(index);

        if (left < this.heap.length && this.heap[left].value < this.heap[smallest].value) {
            smallest = left;
        }

        if (right < this.heap.length && this.heap[right].value < this.heap[smallest].value) {
            smallest = right;
        }

        if (smallest !== index) {
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            this.heapify(smallest);
        }
    }

    // Check if the heap is empty
    isEmpty() {
        return this.heap.length === 0;
    }
}

function mergeKSortedArrays(arrays) {
    const minHeap = new MinHeap();
    const result = [];

    // Step 1: Push the first element of each array into the min-heap
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i].length > 0) {
            minHeap.insert({ value: arrays[i][0], arrayIndex: i, elementIndex: 0 });
        }
    }

    // Step 2: Extract the smallest element and push the next element from the same array
    while (!minHeap.isEmpty()) {
        const { value, arrayIndex, elementIndex } = minHeap.extractMin();
        result.push(value);

        // If the array has more elements, push the next element into the heap
        if (elementIndex + 1 < arrays[arrayIndex].length) {
            minHeap.insert({
                value: arrays[arrayIndex][elementIndex + 1],
                arrayIndex,
                elementIndex: elementIndex + 1,
            });
        }
    }

    return result;
}

// Example usage:
const arrays = [
    [1, 4, 5],
    [1, 3, 4],
    [2, 6]
];

console.log(mergeKSortedArrays(arrays)); // Output: [1, 1, 2, 3, 4, 4, 5, 6]


/**
 * TC: Inserting an element into the heap: O(k), k is the num of arrays
 *      Extracting the minimum element from the heap: O(log k)
 *      Since each element in all arrays is processed exactly once, and there are N elements in total, the overall time complexity is: O(N log K), where N is the total num of ele in all arrays
 * SC:  O(k), for the heap that stores up to k elements at any time
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
