const r=`# top KFrequent Words

## Problem Statement

Describe the problem statement for **top KFrequent Words** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/*\r
Problem Statement:\r
Given an array of strings words and an integer k, return the k most frequent words. The result should:\r
	- Be sorted by frequency in descending order.\r
	- For words with the same frequency, be sorted in lexicographical order (alphabetical).\r
*/\r
/*\r
Approach:\r
Build a Frequency Map:\r
	Use a Map to count the frequency of each word.\r
\r
Use a Min-Heap:\r
	- Use a min-heap of size k to store the most frequent words.\r
	- Compare words first by frequency, and for ties, by lexicographical order.\r
	- If the heap size exceeds k, remove the element with the smallest frequency.\r
\r
Extract and Sort:\r
	- After processing all words, extract elements from the heap.\r
	- Reverse the order since the heap returns the smallest element first.\r
*/\r
\r
class MinHeap {\r
    constructor(compare) {\r
        this.data = [];\r
        this.compare = compare;\r
    }\r
\r
    size() {\r
        return this.data.length;\r
    }\r
\r
    insert(val) {\r
        this.data.push(val);\r
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
    _heapifyUp(i) {\r
        let parent = Math.floor((i - 1) / 2);\r
        while (i > 0 && this.compare(this.data[i], this.data[parent])) {\r
            [this.data[i], this.data[parent]] = [this.data[parent], this.data[i]];\r
            i = parent;\r
            parent = Math.floor((i - 1) / 2);\r
        }\r
    }\r
\r
    _heapifyDown(i) {\r
        const n = this.size();\r
        while (true) {\r
            let smallest = i;\r
            let left = 2 * i + 1;\r
            let right = 2 * i + 2;\r
\r
            if (left < n && this.compare(this.data[left], this.data[smallest])) {\r
                smallest = left;\r
            }\r
            if (right < n && this.compare(this.data[right], this.data[smallest])) {\r
                smallest = right;\r
            }\r
            if (smallest === i) break;\r
\r
            [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];\r
            i = smallest;\r
        }\r
    }\r
}\r
\r
function topKFrequent(words, k) {\r
    const freqMap = new Map();\r
\r
    // Step 1: frequency count\r
    for (let word of words) {\r
        freqMap.set(word, (freqMap.get(word) || 0) + 1);\r
    }\r
\r
    // Step 2: MinHeap with custom comparator\r
    const heap = new MinHeap((a, b) => {\r
        if (a[1] !== b[1]) {\r
            return a[1] < b[1];       // smaller frequency = higher priority (min-heap)\r
        }\r
        return a[0] > b[0];           // reverse lex order for ties\r
    });\r
\r
    for (let [word, freq] of freqMap) {\r
        heap.insert([word, freq]);\r
        if (heap.size() > k) {\r
            heap.extractMin();\r
        }\r
    }\r
\r
    // Step 3: extract result\r
    const result = [];\r
    while (heap.size() > 0) {\r
        result.push(heap.extractMin()[0]);\r
    }\r
\r
    return result.reverse();\r
}\r
\r
\r
/*\r
Explanation\r
\r
Frequency Map:\r
	- For the input words = ["i", "love", "leetcode", "i", "love", "coding"], the frequency map will be:\r
{ "i": 2, "love": 2, "leetcode": 1, "coding": 1 }\r
\r
Heap Operations:\r
	- Insert each word-frequency pair into the heap:\r
		For ties, words are ordered lexicographically.\r
	- Maintain a heap of size k by removing the smallest element whenever the size exceeds k.\r
\r
Result Extraction:\r
	- The heap contains the top k frequent elements in the correct order.\r
	- Reverse the extracted elements to sort them by descending frequency and lexicographical order.\r
\r
TC:\r
  freq map const- O(n)\r
  heap operations- O(m log k)\r
  Total: O(n + m log k)\r
SC:\r
  O(m) for the frequency map\r
  O(k) for heap/result array\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{r as default};
