# top KFrequent Words

## Problem Statement

Describe the problem statement for **top KFrequent Words** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/*
Problem Statement:
Given an array of strings words and an integer k, return the k most frequent words. The result should:
	- Be sorted by frequency in descending order.
	- For words with the same frequency, be sorted in lexicographical order (alphabetical).
*/
/*
Approach:
Build a Frequency Map:
	Use a Map to count the frequency of each word.

Use a Min-Heap:
	- Use a min-heap of size k to store the most frequent words.
	- Compare words first by frequency, and for ties, by lexicographical order.
	- If the heap size exceeds k, remove the element with the smallest frequency.

Extract and Sort:
	- After processing all words, extract elements from the heap.
	- Reverse the order since the heap returns the smallest element first.
*/

class MinHeap {
    constructor(compare) {
        this.data = [];
        this.compare = compare;
    }

    size() {
        return this.data.length;
    }

    insert(val) {
        this.data.push(val);
        this._heapifyUp(this.size() - 1);
    }

    extractMin() {
        if (this.size() === 0) return null;
        const min = this.data[0];
        const last = this.data.pop();
        if (this.size() > 0) {
            this.data[0] = last;
            this._heapifyDown(0);
        }
        return min;
    }

    _heapifyUp(i) {
        let parent = Math.floor((i - 1) / 2);
        while (i > 0 && this.compare(this.data[i], this.data[parent])) {
            [this.data[i], this.data[parent]] = [this.data[parent], this.data[i]];
            i = parent;
            parent = Math.floor((i - 1) / 2);
        }
    }

    _heapifyDown(i) {
        const n = this.size();
        while (true) {
            let smallest = i;
            let left = 2 * i + 1;
            let right = 2 * i + 2;

            if (left < n && this.compare(this.data[left], this.data[smallest])) {
                smallest = left;
            }
            if (right < n && this.compare(this.data[right], this.data[smallest])) {
                smallest = right;
            }
            if (smallest === i) break;

            [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
            i = smallest;
        }
    }
}

function topKFrequent(words, k) {
    const freqMap = new Map();

    // Step 1: frequency count
    for (let word of words) {
        freqMap.set(word, (freqMap.get(word) || 0) + 1);
    }

    // Step 2: MinHeap with custom comparator
    const heap = new MinHeap((a, b) => {
        if (a[1] !== b[1]) {
            return a[1] < b[1];       // smaller frequency = higher priority (min-heap)
        }
        return a[0] > b[0];           // reverse lex order for ties
    });

    for (let [word, freq] of freqMap) {
        heap.insert([word, freq]);
        if (heap.size() > k) {
            heap.extractMin();
        }
    }

    // Step 3: extract result
    const result = [];
    while (heap.size() > 0) {
        result.push(heap.extractMin()[0]);
    }

    return result.reverse();
}


/*
Explanation

Frequency Map:
	- For the input words = ["i", "love", "leetcode", "i", "love", "coding"], the frequency map will be:
{ "i": 2, "love": 2, "leetcode": 1, "coding": 1 }

Heap Operations:
	- Insert each word-frequency pair into the heap:
		For ties, words are ordered lexicographically.
	- Maintain a heap of size k by removing the smallest element whenever the size exceeds k.

Result Extraction:
	- The heap contains the top k frequent elements in the correct order.
	- Reverse the extracted elements to sort them by descending frequency and lexicographical order.

TC:
  freq map const- O(n)
  heap operations- O(m log k)
  Total: O(n + m log k)
SC:
  O(m) for the frequency map
  O(k) for heap/result array
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
