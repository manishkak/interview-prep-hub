# Heap Intro

## Problem Statement

Describe the problem statement for **Heap Intro** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// Heap Intro
/*
Time Complexity
    Insert: O(logn) (due to bubbleUp).
    Extract Min: O(logn) (due to bubbleDown).
    Space Complexity: O(n) (to store n elements in the heap array).
*/
/*
Key Operations Explained

Insert (insert(val)):
Add the new value to the end of the heap array.
Restore the heap property by calling bubbleUp to move the value to its correct position.

Extract Min (extractMin()):
The root (heap[0]) is the minimum value.
Replace the root with the last element of the heap.
Remove the last element and call bubbleDown to restore the heap property.

Bubble Up (bubbleUp(index)):
Compare the value at index with its parent.
If the value is smaller than its parent, swap them.
Repeat the process until the heap property is satisfied.

Bubble Down (bubbleDown(index)):
Compare the value at index with its left and right children.
Swap it with the smallest child if the heap property is violated.
Repeat the process until the heap property is restored.
*/

class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Insert a value into the heap
    insert(val) {
        this.heap.push(val); // Add the new value to the end of the heap
        this.bubbleUp(this.heap.length - 1); // Ensure heap property is maintained
    }

    // Extract the minimum value from the heap (root)
    extractMin() {
        if (this.heap.length === 1) return this.heap.pop(); // Only one element in heap
        const min = this.heap[0]; // The root is the minimum element
        this.heap[0] = this.heap.pop(); // Replace root with the last element
        this.bubbleDown(0); // Restore heap property
        return min; // Return the minimum value
    }

    // Restore the heap property by moving the value at `index` up
    bubbleUp(index) {
        const parent = Math.floor((index - 1) / 2); // Parent index
        if (index > 0 && this.heap[parent] > this.heap[index]) {
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]; // Swap
            this.bubbleUp(parent); // Recursively bubble up
        }
    }

    // Restore the heap property by moving the value at `index` down
    bubbleDown(index) {
        const left = 2 * index + 1; // Left child index
        const right = 2 * index + 2; // Right child index
        let smallest = index; // Assume the current index is the smallest

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left; // Update smallest if left child is smaller
        }

        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right; // Update smallest if right child is smaller
        }

        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]; // Swap
            this.bubbleDown(smallest); // Recursively bubble down
        }
    }
}

/**
 * Top K Elements- efficiently find a specific number of elements, known as k, from a set of data
 * To solve tasks like these, one might think to sort the entire collection first, which takes O(n log n) time, and then select the top k elements, taking additional O(k) time.
 * However, the top k elements pattern bypasses the need for full sorting, reducing the time complexity to O(n log k) by managing which elements we compare and keep track of.
 * A heap is the best data structure to keep track of the smallest or largest k elements.
 * k largest elements (by using min heap) or top k smallest elements (by using max heap)
 *      1. Insert the first k elements from the given set of elements into a heap. 
 *          - If we’re looking for the largest elements, use a min heap to keep the smallest of the large elements at the top. 
 *          - Conversely, for the smallest elements, use a max heap to keep the largest of the small elements at the top.
 *      2. Iterate through the remaining elements of the given set-
 *          - For a min heap, if we find an element larger than the top, remove the top element (the smallest of the large elements) and insert the new, larger element. This ensures the heap always contains the largest elements seen so far.
 *          - For a max heap, if we find an element smaller than the top, remove the top element (the largest of the small elements) and insert the new, smaller element, keeping the heap filled with the smallest elements seen so far.
 * 
 * Efficiency of this pattern comes from the ability of the heap to insert and remove elements in O(log k) time. 
 * Because we only maintain k elements in the heap, these operations are quick, and we can process all n elements in the given set in O(n log k) time.
 */

/**
 * from chatgpt, top 5 heap programs-
 * 1. Find the Kth Largest Element in an Array  - done
 * 2. Merge K Sorted Arrays                     - done
 * 3. Find the Median from a Stream of Numbers
 * 4. Top K Frequent Elements                   - done
 * 5. Sort a Nearly Sorted (K-Sorted) Array
 * 
 * from educative-
 * 1. Sort characters by frequency              - done
 * 2. Connect n ropes with minimum cost         - done
 * 3. Reorganize string - done
 * 
 * in vs code-
 * 1. k closest points to origin
 * 2. top k frequent elements
 * 3. top k frequent words
 * 4. find median from data stream
 */

/*
1. Find the Kth Largest Element in an Array
Problem: Given an array, find the Kth largest element.

Approach:

Use a min-heap of size K.
Iterate through the array:
Add elements to the heap.
If the heap size exceeds K, remove the smallest element (heap.pop()).
The root of the heap will be the Kth largest element.
Time Complexity:

Using a heap:  O(NlogK), where N is the number of elements.


2. Merge K Sorted Arrays
Problem: Given K sorted arrays, merge them into one sorted array.

Approach:

Use a min-heap to keep track of the smallest element across all arrays.
Push the first element of each array into the heap.
While the heap is not empty:
    - Extract the smallest element and add it to the result.
    - Insert the next element from the corresponding array into the heap.
Time Complexity: O(NlogK), where N is the total number of elements across all arrays.


3. Find the Median from a Stream of Numbers
Problem: Continuously find the median as new numbers are added to a data stream.

Approach:

Use two heaps:
Max-heap for the left half of numbers.
Min-heap for the right half of numbers.
Balance the heaps such that their sizes differ by at most 1.
The median is:
The root of the max-heap if it has more elements.
The average of the roots of both heaps if they are of equal size.
Time Complexity: O(logN) per insertion.


4. Top K Frequent Elements
Problem: Given an array, return the K most frequent elements.

Approach:

Build a frequency map.
Use a min-heap of size K to store elements by their frequency.
Iterate through the frequency map:
Add elements to the heap.
If the heap size exceeds K, remove the element with the smallest frequency.
The heap contains the K most frequent elements.
Time Complexity: O(NlogK), where N is the number of unique elements.


5. Sort a Nearly Sorted (K-Sorted) Array
Problem: Given an array where each element is at most K positions away from its target position, sort it.

Approach:

Use a min-heap of size K+1.
Insert the first K+1 elements into the heap.
For each remaining element:
Add it to the heap.
Extract the smallest element and add it to the result.
Extract remaining elements from the heap.
Time Complexity: O(NlogK), where N is the number of elements.
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
