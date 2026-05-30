const n=`# Connect NRopes

## Problem Statement

Describe the problem statement for **Connect NRopes** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/*\r
Explanation\r
Problem Objective:\r
    To minimize the cost of connecting all ropes, always connect the two smallest ropes first.\r
Approach:\r
    Use a min-heap to efficiently fetch the smallest two ropes at each step.\r
    Combine the two smallest ropes, add their length to the total cost, and push the new rope length back into the heap.\r
    Repeat until only one rope remains.\r
Steps:\r
    Insert all rope lengths into a min-heap.\r
    While the heap contains more than one element:\r
        - Extract the two smallest ropes.\r
        - Combine their lengths (cost of connecting them).\r
        - Add this cost to the total cost.\r
        - Insert the combined length back into the heap.\r
    The total cost is the sum of all the merge operations.\r
\r
Complexity:\r
Time Complexity:\r
    - Building the heap: O(nlogn), where n is the number of ropes.\r
    - Combining ropes: O(nlogn), as we perform n−1 extractions and insertions.\r
    - Overall: O(nlogn).\r
Space Complexity:\r
    - Heap storage: O(n), where n is the number of ropes.\r
    - Total: O(n).\r
*/\r
\r
class MinHeap {\r
    constructor() {\r
        this.heap = [];\r
    }\r
\r
    insert(val) {\r
        this.heap.push(val);\r
        this.bubbleUp(this.heap.length - 1);\r
    }\r
\r
    extractMin() {\r
        if (this.heap.length === 1) return this.heap.pop();\r
        const min = this.heap[0];\r
        this.heap[0] = this.heap.pop();\r
        this.bubbleDown(0);\r
        return min;\r
    }\r
\r
    bubbleUp(index) {\r
        const parent = Math.floor((index - 1) / 2);\r
        if (index > 0 && this.heap[parent] > this.heap[index]) {\r
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];\r
            this.bubbleUp(parent);\r
        }\r
    }\r
\r
    bubbleDown(index) {\r
        const left = 2 * index + 1;\r
        const right = 2 * index + 2;\r
        let smallest = index;\r
\r
        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {\r
            smallest = left;\r
        }\r
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {\r
            smallest = right;\r
        }\r
\r
        if (smallest !== index) {\r
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];\r
            this.bubbleDown(smallest);\r
        }\r
    }\r
}\r
\r
function connectRopes(ropes) {\r
    const minHeap = new MinHeap();\r
\r
    // Insert all ropes into the heap\r
    for (let rope of ropes) {\r
        minHeap.insert(rope);\r
    }   // after all the ropes are inserted, the heap will look like this for input [4,3,2,6]: [2,4,3,6] (min-heap property maintained)\r
\r
    let totalCost = 0;\r
\r
    // Combine ropes until only one remains\r
    while (minHeap.heap.length > 1) {\r
        const first = minHeap.extractMin(); // Smallest rope, 2. After extracting 2, heap looks like [3,4,6] (min-heap property maintained)\r
        const second = minHeap.extractMin(); // Second smallest rope, 3. After extracting 3, heap looks like [4,6] (min-heap property maintained)\r
        const cost = first + second; // Cost to connect these two ropes, 2 + 3 = 5\r
        totalCost += cost;\r
        minHeap.insert(cost); // Insert the combined rope back into the heap, heap now looks like [4, 6, 5] -> Compare 5 with parent (4) → 5 > 4 → no swap needed\r
    }\r
\r
    return totalCost;\r
}\r
\r
// Example usage:\r
console.log(connectRopes([4, 3, 2, 6])); // Output: 29\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
