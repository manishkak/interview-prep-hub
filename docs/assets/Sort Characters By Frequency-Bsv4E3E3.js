const r=`# Sort Characters By Frequency

## Problem Statement

Describe the problem statement for **Sort Characters By Frequency** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/*Explanation\r
Frequency Map: Count the occurrences of each character in the string.\r
\r
Example for tree: { t: 1, r: 1, e: 2 }.\r
Max-Heap: Use a custom comparator to prioritize characters with higher frequencies.\r
\r
Build Result: Extract the most frequent characters from the heap and append them to the result string.\r
\r
TC:\r
freq map- O(n)\r
heap insertions- O(m log m), where m is the number of unique characters\r
result contruction- O(n)\r
Total: O(n + m log m)\r
\r
SC:\r
O(m) for the frequency map.\r
O(m) for the heap. \r
O(n) for the result string.\r
Thus, the total space complexity is: O(m+n)\r
*/\r
\r
\r
class MaxHeap {\r
    constructor(compare) {\r
        this.heap = [];\r
        this.compare = compare;\r
    }\r
\r
    insert(element) {\r
        this.heap.push(element);\r
        this.bubbleUp(this.heap.length - 1);\r
    }\r
\r
    extractMax() {\r
        if (this.heap.length === 1) return this.heap.pop();\r
        const max = this.heap[0];\r
        this.heap[0] = this.heap.pop();\r
        this.bubbleDown(0);\r
        return max;\r
    }\r
\r
    bubbleUp(index) {\r
        const parent = Math.floor((index - 1) / 2);\r
        if (index > 0 && this.compare(this.heap[parent], this.heap[index]) < 0) {\r
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];\r
            this.bubbleUp(parent);\r
        }\r
    }\r
\r
    bubbleDown(index) {\r
        const left = 2 * index + 1;\r
        const right = 2 * index + 2;\r
        let largest = index;\r
\r
        if (left < this.heap.length && this.compare(this.heap[left], this.heap[largest]) > 0) {\r
            largest = left;\r
        }\r
        if (right < this.heap.length && this.compare(this.heap[right], this.heap[largest]) > 0) {\r
            largest = right;\r
        }\r
\r
        if (largest !== index) {\r
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];\r
            this.bubbleDown(largest);\r
        }\r
    }\r
}\r
\r
function frequencySort(s) {\r
    const freqMap = new Map();\r
\r
    // Build frequency map\r
    for (let char of s) {\r
        freqMap.set(char, (freqMap.get(char) || 0) + 1);\r
    }\r
\r
    // Define comparator for max-heap\r
    const compare = (a, b) => a[1] - b[1];\r
\r
    // Build max-heap\r
    const maxHeap = new MaxHeap(compare);\r
    for (let entry of freqMap) {\r
        maxHeap.insert(entry);\r
    }\r
\r
    // Build result string\r
    let result = '';\r
    while (maxHeap.heap.length > 0) {\r
        const [char, freq] = maxHeap.extractMax();\r
        result += char.repeat(freq);\r
    }\r
\r
    return result;\r
}\r
\r
// Example usage\r
console.log(frequencySort("tree")); // Output: "eert" or "eetr"\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{r as default};
