# Sort Characters By Frequency

## Problem Statement

Describe the problem statement for **Sort Characters By Frequency** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/*Explanation
Frequency Map: Count the occurrences of each character in the string.

Example for tree: { t: 1, r: 1, e: 2 }.
Max-Heap: Use a custom comparator to prioritize characters with higher frequencies.

Build Result: Extract the most frequent characters from the heap and append them to the result string.

TC:
freq map- O(n)
heap insertions- O(m log m), where m is the number of unique characters
result contruction- O(n)
Total: O(n + m log m)

SC:
O(m) for the frequency map.
O(m) for the heap. 
O(n) for the result string.
Thus, the total space complexity is: O(m+n)
*/


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

        if (left < this.heap.length && this.compare(this.heap[left], this.heap[largest]) > 0) {
            largest = left;
        }
        if (right < this.heap.length && this.compare(this.heap[right], this.heap[largest]) > 0) {
            largest = right;
        }

        if (largest !== index) {
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            this.bubbleDown(largest);
        }
    }
}

function frequencySort(s) {
    const freqMap = new Map();

    // Build frequency map
    for (let char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    // Define comparator for max-heap
    const compare = (a, b) => a[1] - b[1];

    // Build max-heap
    const maxHeap = new MaxHeap(compare);
    for (let entry of freqMap) {
        maxHeap.insert(entry);
    }

    // Build result string
    let result = '';
    while (maxHeap.heap.length > 0) {
        const [char, freq] = maxHeap.extractMax();
        result += char.repeat(freq);
    }

    return result;
}

// Example usage
console.log(frequencySort("tree")); // Output: "eert" or "eetr"

```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
