const e=`# top KFrequent Elements

## Problem Statement

Describe the problem statement for **top KFrequent Elements** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/*\r
Problem\r
Given an array of integers- nums and an integer k, return the k most frequent elements.\r
You may return the answer in any order.\r
\r
Approach\r
\r
Build a Frequency Map:\r
	- Use a Map to count the frequency of each element in the array.\r
\r
Use a Min-Heap:\r
	- Use a min-heap (priority queue) of size k to store the k most frequent elements.\r
	- Push elements into the heap based on their frequency.\r
	- If the size of the heap exceeds k, remove the element with the smallest frequency to ensure only the k most frequent elements remain.\r
\r
Extract the Elements:\r
	- After processing the entire array, the heap will contain the k most frequent elements.\r
	- Extract these elements and return them.\r
*/\r
\r
\r
// MinHeap class with a comparator\r
class MinHeap {\r
    constructor(compare) {\r
        this.data = [];\r
        this.compare = compare; // function(a, b) -> true if a < b\r
    }\r
\r
    size() {\r
        return this.data.length;\r
    }\r
\r
    peek() {\r
        return this.data[0];\r
    }\r
\r
    insert(value) {\r
        this.data.push(value);\r
        this._heapifyUp(this.size() - 1);\r
    }\r
\r
    extractMin() {\r
        if (this.size() === 0) return null;\r
        const min = this.data[0];\r
        const last = this.data.pop();\r
        if (this.size() > 0) {\r
            this.data[0] = last;\r
            this._heapifyDown(0);\r
        }\r
        return min;\r
    }\r
\r
    _heapifyUp(index) {\r
        let parent = Math.floor((index - 1) / 2);\r
        while (index > 0 && this.compare(this.data[index], this.data[parent])) {\r
            [this.data[index], this.data[parent]] = [this.data[parent], this.data[index]];\r
            index = parent;\r
            parent = Math.floor((index - 1) / 2);\r
        }\r
    }\r
\r
    _heapifyDown(index) {\r
        const size = this.size();\r
        while (true) {\r
            let smallest = index;\r
            const left = 2 * index + 1;\r
            const right = 2 * index + 2;\r
\r
            if (left < size && this.compare(this.data[left], this.data[smallest])) smallest = left;\r
            if (right < size && this.compare(this.data[right], this.data[smallest])) smallest = right;\r
\r
            if (smallest === index) break;\r
\r
            [this.data[index], this.data[smallest]] = [this.data[smallest], this.data[index]];\r
            index = smallest;\r
        }\r
    }\r
}\r
\r
// Function to get top k frequent elements\r
function topKFrequent(nums, k) {\r
    const freqMap = new Map();\r
\r
    // Step 1: Build frequency map\r
    for (let num of nums) {\r
        freqMap.set(num, (freqMap.get(num) || 0) + 1);\r
    }\r
\r
    // Step 2: Use min-heap with comparator based on frequency\r
    const minHeap = new MinHeap((a, b) => a[1] < b[1]); // compare by frequency\r
\r
    for (let [num, freq] of freqMap) {\r
        minHeap.insert([num, freq]);\r
        if (minHeap.size() > k) {\r
            minHeap.extractMin();\r
        }\r
    }\r
\r
    // Step 3: Extract elements from the heap\r
    const result = [];\r
    while (minHeap.size() > 0) {\r
        result.push(minHeap.extractMin()[0]);\r
    }\r
\r
    // Optional: reverse to get descending frequency\r
    return result.reverse();\r
}\r
\r
// Example usage\r
const nums = [1, 1, 1, 2, 2, 3];\r
const k = 2;\r
\r
console.log(topKFrequent(nums, k)); // Output: [1, 2]\r
\r
\r
/*\r
Explanation\r
\r
1. Frequency Map:\r
	- For the input nums = [1, 1, 1, 2, 2, 3], the frequency map will be:\r
	{ 1: 3, 2: 2, 3: 1 }\r
\r
2. Heap Operations:\r
	- Insert [1, 3] into the heap.\r
	- Insert [2, 2] into the heap.\r
	- Insert [3, 1] into the heap.\r
	- The heap maintains the top 2 frequent elements:\r
		- After processing, the heap contains [[2, 2], [1, 3]].\r
\r
3. Extract Results:\r
	- Extract the elements from the heap to get the top k frequent elements: [1, 2].\r
\r
TC: Building Frequency Map- O(n)- n is size of nums, Insertion and deletion in the heap- O(log k), For each unique element in the frequency map, we perform one insertion and at most one deletion.\r
If there are m unique elements, the heap operations cost: O(m log k).\r
overall- O(n+ m log k)\r
SC: freq map- O(m)- m is num of unique ele., Heap- O(k), k is the size of the heap.\r
overall- O(m+k)\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
