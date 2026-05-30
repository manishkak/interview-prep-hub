# top KFrequent Elements

## Problem Statement

Describe the problem statement for **top KFrequent Elements** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/*
Problem
Given an array of integers- nums and an integer k, return the k most frequent elements.
You may return the answer in any order.

Approach

Build a Frequency Map:
	- Use a Map to count the frequency of each element in the array.

Use a Min-Heap:
	- Use a min-heap (priority queue) of size k to store the k most frequent elements.
	- Push elements into the heap based on their frequency.
	- If the size of the heap exceeds k, remove the element with the smallest frequency to ensure only the k most frequent elements remain.

Extract the Elements:
	- After processing the entire array, the heap will contain the k most frequent elements.
	- Extract these elements and return them.
*/


// MinHeap class with a comparator
class MinHeap {
    constructor(compare) {
        this.data = [];
        this.compare = compare; // function(a, b) -> true if a < b
    }

    size() {
        return this.data.length;
    }

    peek() {
        return this.data[0];
    }

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

// Function to get top k frequent elements
function topKFrequent(nums, k) {
    const freqMap = new Map();

    // Step 1: Build frequency map
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Step 2: Use min-heap with comparator based on frequency
    const minHeap = new MinHeap((a, b) => a[1] < b[1]); // compare by frequency

    for (let [num, freq] of freqMap) {
        minHeap.insert([num, freq]);
        if (minHeap.size() > k) {
            minHeap.extractMin();
        }
    }

    // Step 3: Extract elements from the heap
    const result = [];
    while (minHeap.size() > 0) {
        result.push(minHeap.extractMin()[0]);
    }

    // Optional: reverse to get descending frequency
    return result.reverse();
}

// Example usage
const nums = [1, 1, 1, 2, 2, 3];
const k = 2;

console.log(topKFrequent(nums, k)); // Output: [1, 2]


/*
Explanation

1. Frequency Map:
	- For the input nums = [1, 1, 1, 2, 2, 3], the frequency map will be:
	{ 1: 3, 2: 2, 3: 1 }

2. Heap Operations:
	- Insert [1, 3] into the heap.
	- Insert [2, 2] into the heap.
	- Insert [3, 1] into the heap.
	- The heap maintains the top 2 frequent elements:
		- After processing, the heap contains [[2, 2], [1, 3]].

3. Extract Results:
	- Extract the elements from the heap to get the top k frequent elements: [1, 2].

TC: Building Frequency Map- O(n)- n is size of nums, Insertion and deletion in the heap- O(log k), For each unique element in the frequency map, we perform one insertion and at most one deletion.
If there are m unique elements, the heap operations cost: O(m log k).
overall- O(n+ m log k)
SC: freq map- O(m)- m is num of unique ele., Heap- O(k), k is the size of the heap.
overall- O(m+k)
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
