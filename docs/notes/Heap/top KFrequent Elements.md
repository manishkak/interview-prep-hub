# top KFrequent Elements

## Problem Statement

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

## Examples

- Input: nums = [1, 1, 1, 2, 2, 3], k = 2
- Output: [1, 2]

- Input: nums = [1], k = 1
- Output: [1]

## Approach

Build a frequency map, then use a min-heap of size k to keep track of the k most frequent elements.

Steps:
1. Count frequency of each number using a Map.
2. For each [num, freq] pair, insert into the min-heap (ordered by frequency ascending).
3. If the heap size exceeds k, pop the element with the smallest frequency — it is not in the top k.
4. After processing all unique elements, extract the remaining k elements from the heap.

The min-heap keeps the least-frequent of the top-k at the top, making it easy to evict it when a more frequent element arrives.

## Solution

```js
class MinHeap {
    constructor(compare) {
        this.data = [];
        this.compare = compare;
    }

    size() { return this.data.length; }
    peek() { return this.data[0]; }

    insert(value) {
        this.data.push(value);
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

    _heapifyUp(index) {
        let parent = Math.floor((index - 1) / 2);
        while (index > 0 && this.compare(this.data[index], this.data[parent])) {
            [this.data[index], this.data[parent]] = [this.data[parent], this.data[index]];
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }

    _heapifyDown(index) {
        const size = this.size();
        while (true) {
            let smallest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            if (left < size && this.compare(this.data[left], this.data[smallest])) smallest = left;
            if (right < size && this.compare(this.data[right], this.data[smallest])) smallest = right;
            if (smallest === index) break;
            [this.data[index], this.data[smallest]] = [this.data[smallest], this.data[index]];
            index = smallest;
        }
    }
}

function topKFrequent(nums, k) {
    const freqMap = new Map();
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    const minHeap = new MinHeap((a, b) => a[1] < b[1]);

    for (let [num, freq] of freqMap) {
        minHeap.insert([num, freq]);
        if (minHeap.size() > k) minHeap.extractMin();
    }

    const result = [];
    while (minHeap.size() > 0) {
        result.push(minHeap.extractMin()[0]);
    }

    return result.reverse();
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
```

## Time Complexity

**O(n + m log k)** where n is the array length and m is the number of unique elements. Building the frequency map is O(n); each of the m heap operations costs O(log k).

## Space Complexity

**O(m + k)** — O(m) for the frequency map, O(k) for the heap.

## Notes

- Min-heap of size k is the standard pattern for "top k by some metric": the top of the min-heap is always the weakest candidate, so it is the first to be evicted.
- LeetCode #347.
