const e=`# Merge KSorted Arrays

## Problem Statement

Describe the problem statement for **Merge KSorted Arrays** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/*\r
Approach\r
\r
Min-Heap:\r
We will use a min-heap (priority queue) to store the elements from each of the K sorted arrays. Each element in the heap will contain the value from one of the arrays, along with the array index and the element index within that array.\r
\r
Push Initial Elements:\r
Start by pushing the first element of each array into the heap, along with its array index and the index of the element in that array.\r
\r
Pop and Insert:\r
Continuously pop the smallest element from the heap, add it to the result list, and then push the next element from the same array (from which the element was popped) into the heap.\r
\r
Termination:\r
Repeat this process until the heap is empty, which means all elements from all arrays have been merged into the result array.\r
*/\r
\r
class MinHeap {\r
    constructor() {\r
        this.heap = [];\r
    }\r
\r
    // Helper functions to maintain the heap property\r
    parent(index) { return Math.floor((index - 1) / 2); }\r
    leftChild(index) { return 2 * index + 1; }\r
    rightChild(index) { return 2 * index + 2; }\r
\r
    // Insert a new element into the heap\r
    insert(element) {\r
        this.heap.push(element);\r
        let index = this.heap.length - 1;\r
\r
        // Bubble up the element to maintain the min-heap property\r
        while (index > 0 && this.heap[this.parent(index)].value > this.heap[index].value) {\r
            [this.heap[this.parent(index)], this.heap[index]] = [this.heap[index], this.heap[this.parent(index)]];\r
            index = this.parent(index);\r
        }\r
    }\r
\r
    // Remove and return the minimum element from the heap\r
    extractMin() {\r
        if (this.heap.length === 0) return null;\r
        if (this.heap.length === 1) return this.heap.pop();\r
\r
        const min = this.heap[0];\r
        this.heap[0] = this.heap.pop();\r
        this.heapify(0);\r
        return min;\r
    }\r
\r
    // Restore the heap property after extracting the minimum element\r
    heapify(index) {\r
        let smallest = index;\r
        const left = this.leftChild(index);\r
        const right = this.rightChild(index);\r
\r
        if (left < this.heap.length && this.heap[left].value < this.heap[smallest].value) {\r
            smallest = left;\r
        }\r
\r
        if (right < this.heap.length && this.heap[right].value < this.heap[smallest].value) {\r
            smallest = right;\r
        }\r
\r
        if (smallest !== index) {\r
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];\r
            this.heapify(smallest);\r
        }\r
    }\r
\r
    // Check if the heap is empty\r
    isEmpty() {\r
        return this.heap.length === 0;\r
    }\r
}\r
\r
function mergeKSortedArrays(arrays) {\r
    const minHeap = new MinHeap();\r
    const result = [];\r
\r
    // Step 1: Push the first element of each array into the min-heap\r
    for (let i = 0; i < arrays.length; i++) {\r
        if (arrays[i].length > 0) {\r
            minHeap.insert({ value: arrays[i][0], arrayIndex: i, elementIndex: 0 });\r
        }\r
    }\r
\r
    // Step 2: Extract the smallest element and push the next element from the same array\r
    while (!minHeap.isEmpty()) {\r
        const { value, arrayIndex, elementIndex } = minHeap.extractMin();\r
        result.push(value);\r
\r
        // If the array has more elements, push the next element into the heap\r
        if (elementIndex + 1 < arrays[arrayIndex].length) {\r
            minHeap.insert({\r
                value: arrays[arrayIndex][elementIndex + 1],\r
                arrayIndex,\r
                elementIndex: elementIndex + 1,\r
            });\r
        }\r
    }\r
\r
    return result;\r
}\r
\r
// Example usage:\r
const arrays = [\r
    [1, 4, 5],\r
    [1, 3, 4],\r
    [2, 6]\r
];\r
\r
console.log(mergeKSortedArrays(arrays)); // Output: [1, 1, 2, 3, 4, 4, 5, 6]\r
\r
\r
/**\r
 * TC: Inserting an element into the heap: O(k), k is the num of arrays\r
 *      Extracting the minimum element from the heap: O(log k)\r
 *      Since each element in all arrays is processed exactly once, and there are N elements in total, the overall time complexity is: O(N log K), where N is the total num of ele in all arrays\r
 * SC:  O(k), for the heap that stores up to k elements at any time\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
