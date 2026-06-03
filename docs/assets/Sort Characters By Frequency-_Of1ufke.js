const e=`# Sort Characters By Frequency

## Problem Statement

Given a string s, sort it in decreasing order based on the frequency of each character. Return the sorted string. If multiple characters have the same frequency, their relative order does not matter.

## Examples

- Input: "tree"
- Output: "eert" (or "eetr") — 'e' appears 2 times, 't' and 'r' once each

- Input: "cccaaa"
- Output: "cccaaa" (or "aaaccc") — 'c' and 'a' both appear 3 times

- Input: "Aabb"
- Output: "bbAa" (or "bbaA") — 'b' appears 2 times

## Approach

Build a frequency map, then use a max-heap (ordered by frequency descending) to extract characters in frequency order. Append each character repeated by its frequency to build the result string.

Steps:
1. Count frequency of each character using a Map.
2. Insert all [char, freq] pairs into a max-heap sorted by freq descending.
3. Extract from the max-heap one by one, appending char.repeat(freq) to the result.

## Solution

\`\`\`js
class MaxHeap {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }

    insert(element) {
        this.heap.push(element);
        this.bubbleUp(this.heap.length - 1);
    }

    extractMax() {
        if (this.heap.length === 1) return this.heap.pop();
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return max;
    }

    bubbleUp(index) {
        const parent = Math.floor((index - 1) / 2);
        if (index > 0 && this.compare(this.heap[parent], this.heap[index]) < 0) {
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            this.bubbleUp(parent);
        }
    }

    bubbleDown(index) {
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        let largest = index;

        if (left < this.heap.length && this.compare(this.heap[left], this.heap[largest]) > 0) largest = left;
        if (right < this.heap.length && this.compare(this.heap[right], this.heap[largest]) > 0) largest = right;

        if (largest !== index) {
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            this.bubbleDown(largest);
        }
    }
}

function frequencySort(s) {
    const freqMap = new Map();
    for (let char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    const maxHeap = new MaxHeap((a, b) => a[1] - b[1]);
    for (let entry of freqMap) {
        maxHeap.insert(entry);
    }

    let result = '';
    while (maxHeap.heap.length > 0) {
        const [char, freq] = maxHeap.extractMax();
        result += char.repeat(freq);
    }

    return result;
}

console.log(frequencySort("tree")); // "eert" or "eetr"
\`\`\`

## Time Complexity

**O(n + m log m)** where n is the string length and m is the number of unique characters. Building the frequency map is O(n), heap insertions are O(m log m), and result construction is O(n).

## Space Complexity

**O(m + n)** — O(m) for the frequency map and heap, O(n) for the result string.

## Notes

- The comparator (a, b) => a[1] - b[1] returns negative when a's frequency is less, so the heap treats lower-frequency entries as smaller — placing higher-frequency entries at the top (max-heap behavior).
- LeetCode #451.
`;export{e as default};
