# kth Largest Ele In Stream

## Problem Statement

Describe the problem statement for **kth Largest Ele In Stream** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/*
1. Find the Kth Largest Element in an Array

Problem: Given an array, find the Kth largest element.

Quick Apporach: Keep only the k largest elements (if k is 2 then only 2 largest elements) seen so far. The smallest among them (heap top) is the kth largest overall.

Approach:
    - Use a min-heap of size K.
    - Iterate through the array:
        - Add elements to the heap.
        - If the heap size exceeds K, remove the smallest element (heap.pop()).
    - The root of the heap will be the Kth largest element.

Time Complexity:
Using a heap: O(N log K), where N is the number of elements.
    - Iterate through the nums list with n elements and add them to the heap: O(n). Adding each element to the heap takes, at most, O(log k) time. Therefore, the overall time complexity of the constructor is O(n log k).
SC:
    - O(k), where k is the kth largest element  we need to find in the stream.
    - This is because the heap is initialized to have a maximum size of k.
*/

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  // Push inserts a new element into the heap and then rearranges elements (by bubbling it up) so that the smallest value remains at the top.
  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  // Pop removes the smallest element (the root), replaces it with the last element, and then rearranges elements (by bubbling it down) to restore the min-heap property.
  pop() {
    const top = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown();
    }
    return top;
  }

  bubbleUp() {
    // insert → bubbleUp
    // One-line memory hook: bubbleUp = keep swapping with parent while smaller
    let i = this.heap.length - 1;
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);  // index of parent; p = parent
      if (this.heap[p] <= this.heap[i]) break;  // if val of parent is less than or equal to child, break
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]]; // otherwise Swap
      i = p;
    }
  }
  /*
  bubbleUp in a Min-Heap (used after insertion)
  - Initial heap: [2, 5, 8]
  - Element to insert: 1
        2
      /   \
     5     8
    /
   1   ← newly added
      - A new element is always inserted at the end of the heap array to maintain the complete binary tree structure.
      - After inserting 1, the heap becomes [2, 5, 8, 1].
      - The newly inserted element may violate the min-heap property, so we compare it with its parent.
      - The index of the parent is calculated as Math.floor((childIndex - 1) / 2).
      - The parent of 1 is 5, and since 1 is smaller than 5, they are swapped.
      - The heap now becomes [2, 1, 8, 5].
      - The element 1 is again compared with its new parent 2.
      - Since 1 is smaller than 2, another swap is performed.
      - The heap becomes [1, 2, 8, 5].
      - The min-heap property is now satisfied, so the bubbleUp process stops.
Key idea:
bubbleUp repeatedly swaps a node with its parent until the min-heap rule (parent ≤ child) is restored.
  */

  bubbleDown() {
    // remove → bubbleDown
    // One-line memory hook: bubbleDown repeatedly compares a node with its children, swaps it with the smallest child if needed, and continues until the min-heap property is restored.
    let i = 0; // cos this method is called after removing the root element, so we set the last element to the root position (index 0) and set i = 0
    while (true) {
      let left = 2 * i + 1; // left child index of i
      let right = 2 * i + 2; // right child index of i
      let smallest = i; // assumes that the current node is the smallest; This variable will be updated if a child is smaller than the current node.

      // first checks whether the left child exists, and if it does, compares its value with the current smallest value.
      // If the left child's value is smaller, it updates smallest to the left child's index.
      if (left < this.heap.length && this.heap[left] < this.heap[smallest])
        smallest = left;
      // first checks whether the right child exists, and if it does, compares its value with the smallest value found so far.
      // If the right child's value is smaller, it updates smallest to the right child's index.
      if (right < this.heap.length && this.heap[right] < this.heap[smallest])
        smallest = right;

      // If the smallest value is still the current node (neither child is smaller than the current node), the min-heap property is satisfied, 
      // and the loop breaks- no further swaps are needed.
      if (smallest === i) break;
      // Otherwise, it swaps the current node with the smallest child and continues the process from the new position of the swapped node.
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      // index i is updated to the child’s index where the element was moved, this allows the process to continue bubbling down if needed.
      i = smallest;
    }
  }
  /*
  bubbleDown in a Min-Heap (used after removal)
  - Initial heap: [1, 2, 8, 5]
  - Operation: remove the minimum element (1)
        1
      /   \
     2     8
    /
   5      (this is the tree initially, after adding 1 previously, and doing bubbleUp)
      - When removing the root element, the last element of the heap replaces the root to keep the tree complete.
      - After removal, the heap becomes [5, 2, 8].
      - The new root 5 may violate the min-heap property, so it must be pushed downward.
      - The left and right children of 5 are compared.
      - The smaller child (2) is selected for comparison.
      - Since 5 is greater than 2, they are swapped.
      - The heap now becomes [2, 5, 8].
      - The element 5 is checked again, but it has no smaller children.
      - The min-heap property is restored, so the bubbleDown process stops.
Key idea:
bubbleDown repeatedly compares a node with its children, swaps it with the smallest child if needed, and continues until the min-heap property is restored.  */
}

/**
 * We need the kth largest element, not necessarily sorted order.
 * Sorting would work but costs O(n log n), which is more than needed.
 * Use a min-heap of size k. As I scan the array, I keep only the k largest elements seen so far.
 * The smallest among them (heap top) is the kth largest overall.
 * Time: O(n log k); Space: O(k)
 */
function findKthLargest(nums, k) {
  const heap = new MinHeap();

  for (let num of nums) {
    heap.push(num);
    if (heap.size() > k) heap.pop();
  }

  return heap.peek();
}

```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
