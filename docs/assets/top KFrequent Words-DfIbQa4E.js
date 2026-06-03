const e=`# top KFrequent Words

## Problem Statement

Given an array of strings words and an integer k, return the k most frequent words sorted by frequency in descending order. For words with the same frequency, sort them lexicographically (alphabetical order).

## Examples

- Input: words = ["i","love","leetcode","i","love","coding"], k = 2
- Output: ["i","love"]
- Explanation: "i" and "love" both appear 2 times. "i" < "love" lexicographically so "i" comes first.

- Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
- Output: ["the","is","sunny","day"]

## Approach

Build a frequency map, then use a min-heap of size k with a custom comparator that handles both the frequency-descending and lexicographic-ascending sort requirements.

The comparator determines which element is "smaller" (i.e., which gets evicted first from the min-heap):
- If frequencies differ, the one with lower frequency is smaller (evicted first).
- If frequencies are equal, the one that comes later lexicographically is smaller (evicted first) — keeping the alphabetically earlier word.

After processing all words, extract from the heap and reverse to get descending order.

## Solution

\`\`\`js
class MinHeap {
    constructor(compare) {
        this.data = [];
        this.compare = compare;
    }

    size() { return this.data.length; }

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
            const left = 2 * i + 1, right = 2 * i + 2;
            if (left < n && this.compare(this.data[left], this.data[smallest])) smallest = left;
            if (right < n && this.compare(this.data[right], this.data[smallest])) smallest = right;
            if (smallest === i) break;
            [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
            i = smallest;
        }
    }
}

function topKFrequent(words, k) {
    const freqMap = new Map();
    for (let word of words) {
        freqMap.set(word, (freqMap.get(word) || 0) + 1);
    }

    const heap = new MinHeap((a, b) => {
        if (a[1] !== b[1]) return a[1] < b[1];   // lower freq = smaller (evict first)
        return a[0] > b[0];                        // reverse lex for ties (evict later word first)
    });

    for (let [word, freq] of freqMap) {
        heap.insert([word, freq]);
        if (heap.size() > k) heap.extractMin();
    }

    const result = [];
    while (heap.size() > 0) {
        result.push(heap.extractMin()[0]);
    }

    return result.reverse();
}

console.log(topKFrequent(["i","love","leetcode","i","love","coding"], 2)); // ["i","love"]
\`\`\`

## Time Complexity

**O(n + m log k)** where n is the total number of words and m is the number of unique words. Frequency map is O(n); heap operations are O(m log k).

## Space Complexity

**O(m + k)** — O(m) for the frequency map, O(k) for the heap and result array.

## Notes

- The tie-breaking comparator is the tricky part: for equal frequencies, a[0] > b[0] returns true when a comes later alphabetically, making it the "smaller" element in the heap — so it gets evicted and the alphabetically earlier word is retained.
- The result is reversed at the end because the min-heap extracts in ascending order but the answer needs descending frequency order.
- LeetCode #692.
`;export{e as default};
