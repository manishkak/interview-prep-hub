const e=`# Heap Intro

## Problem Statement

Describe the problem statement for **Heap Intro** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// Heap Intro\r
/*\r
Time Complexity\r
    Insert: O(logn) (due to bubbleUp).\r
    Extract Min: O(logn) (due to bubbleDown).\r
    Space Complexity: O(n) (to store n elements in the heap array).\r
*/\r
/*\r
Key Operations Explained\r
\r
Insert (insert(val)):\r
Add the new value to the end of the heap array.\r
Restore the heap property by calling bubbleUp to move the value to its correct position.\r
\r
Extract Min (extractMin()):\r
The root (heap[0]) is the minimum value.\r
Replace the root with the last element of the heap.\r
Remove the last element and call bubbleDown to restore the heap property.\r
\r
Bubble Up (bubbleUp(index)):\r
Compare the value at index with its parent.\r
If the value is smaller than its parent, swap them.\r
Repeat the process until the heap property is satisfied.\r
\r
Bubble Down (bubbleDown(index)):\r
Compare the value at index with its left and right children.\r
Swap it with the smallest child if the heap property is violated.\r
Repeat the process until the heap property is restored.\r
*/\r
\r
class MinHeap {\r
    constructor() {\r
        this.heap = [];\r
    }\r
\r
    // Insert a value into the heap\r
    insert(val) {\r
        this.heap.push(val); // Add the new value to the end of the heap\r
        this.bubbleUp(this.heap.length - 1); // Ensure heap property is maintained\r
    }\r
\r
    // Extract the minimum value from the heap (root)\r
    extractMin() {\r
        if (this.heap.length === 1) return this.heap.pop(); // Only one element in heap\r
        const min = this.heap[0]; // The root is the minimum element\r
        this.heap[0] = this.heap.pop(); // Replace root with the last element\r
        this.bubbleDown(0); // Restore heap property\r
        return min; // Return the minimum value\r
    }\r
\r
    // Restore the heap property by moving the value at \`index\` up\r
    bubbleUp(index) {\r
        const parent = Math.floor((index - 1) / 2); // Parent index\r
        if (index > 0 && this.heap[parent] > this.heap[index]) {\r
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]; // Swap\r
            this.bubbleUp(parent); // Recursively bubble up\r
        }\r
    }\r
\r
    // Restore the heap property by moving the value at \`index\` down\r
    bubbleDown(index) {\r
        const left = 2 * index + 1; // Left child index\r
        const right = 2 * index + 2; // Right child index\r
        let smallest = index; // Assume the current index is the smallest\r
\r
        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {\r
            smallest = left; // Update smallest if left child is smaller\r
        }\r
\r
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {\r
            smallest = right; // Update smallest if right child is smaller\r
        }\r
\r
        if (smallest !== index) {\r
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]; // Swap\r
            this.bubbleDown(smallest); // Recursively bubble down\r
        }\r
    }\r
}\r
\r
/**\r
 * Top K Elements- efficiently find a specific number of elements, known as k, from a set of data\r
 * To solve tasks like these, one might think to sort the entire collection first, which takes O(n log n) time, and then select the top k elements, taking additional O(k) time.\r
 * However, the top k elements pattern bypasses the need for full sorting, reducing the time complexity to O(n log k) by managing which elements we compare and keep track of.\r
 * A heap is the best data structure to keep track of the smallest or largest k elements.\r
 * k largest elements (by using min heap) or top k smallest elements (by using max heap)\r
 *      1. Insert the first k elements from the given set of elements into a heap. \r
 *          - If we’re looking for the largest elements, use a min heap to keep the smallest of the large elements at the top. \r
 *          - Conversely, for the smallest elements, use a max heap to keep the largest of the small elements at the top.\r
 *      2. Iterate through the remaining elements of the given set-\r
 *          - For a min heap, if we find an element larger than the top, remove the top element (the smallest of the large elements) and insert the new, larger element. This ensures the heap always contains the largest elements seen so far.\r
 *          - For a max heap, if we find an element smaller than the top, remove the top element (the largest of the small elements) and insert the new, smaller element, keeping the heap filled with the smallest elements seen so far.\r
 * \r
 * Efficiency of this pattern comes from the ability of the heap to insert and remove elements in O(log k) time. \r
 * Because we only maintain k elements in the heap, these operations are quick, and we can process all n elements in the given set in O(n log k) time.\r
 */\r
\r
/**\r
 * from chatgpt, top 5 heap programs-\r
 * 1. Find the Kth Largest Element in an Array  - done\r
 * 2. Merge K Sorted Arrays                     - done\r
 * 3. Find the Median from a Stream of Numbers\r
 * 4. Top K Frequent Elements                   - done\r
 * 5. Sort a Nearly Sorted (K-Sorted) Array\r
 * \r
 * from educative-\r
 * 1. Sort characters by frequency              - done\r
 * 2. Connect n ropes with minimum cost         - done\r
 * 3. Reorganize string - done\r
 * \r
 * in vs code-\r
 * 1. k closest points to origin\r
 * 2. top k frequent elements\r
 * 3. top k frequent words\r
 * 4. find median from data stream\r
 */\r
\r
/*\r
1. Find the Kth Largest Element in an Array\r
Problem: Given an array, find the Kth largest element.\r
\r
Approach:\r
\r
Use a min-heap of size K.\r
Iterate through the array:\r
Add elements to the heap.\r
If the heap size exceeds K, remove the smallest element (heap.pop()).\r
The root of the heap will be the Kth largest element.\r
Time Complexity:\r
\r
Using a heap:  O(NlogK), where N is the number of elements.\r
\r
\r
2. Merge K Sorted Arrays\r
Problem: Given K sorted arrays, merge them into one sorted array.\r
\r
Approach:\r
\r
Use a min-heap to keep track of the smallest element across all arrays.\r
Push the first element of each array into the heap.\r
While the heap is not empty:\r
    - Extract the smallest element and add it to the result.\r
    - Insert the next element from the corresponding array into the heap.\r
Time Complexity: O(NlogK), where N is the total number of elements across all arrays.\r
\r
\r
3. Find the Median from a Stream of Numbers\r
Problem: Continuously find the median as new numbers are added to a data stream.\r
\r
Approach:\r
\r
Use two heaps:\r
Max-heap for the left half of numbers.\r
Min-heap for the right half of numbers.\r
Balance the heaps such that their sizes differ by at most 1.\r
The median is:\r
The root of the max-heap if it has more elements.\r
The average of the roots of both heaps if they are of equal size.\r
Time Complexity: O(logN) per insertion.\r
\r
\r
4. Top K Frequent Elements\r
Problem: Given an array, return the K most frequent elements.\r
\r
Approach:\r
\r
Build a frequency map.\r
Use a min-heap of size K to store elements by their frequency.\r
Iterate through the frequency map:\r
Add elements to the heap.\r
If the heap size exceeds K, remove the element with the smallest frequency.\r
The heap contains the K most frequent elements.\r
Time Complexity: O(NlogK), where N is the number of unique elements.\r
\r
\r
5. Sort a Nearly Sorted (K-Sorted) Array\r
Problem: Given an array where each element is at most K positions away from its target position, sort it.\r
\r
Approach:\r
\r
Use a min-heap of size K+1.\r
Insert the first K+1 elements into the heap.\r
For each remaining element:\r
Add it to the heap.\r
Extract the smallest element and add it to the result.\r
Extract remaining elements from the heap.\r
Time Complexity: O(NlogK), where N is the number of elements.\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
