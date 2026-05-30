const e=`# kth Largest Ele In Stream

## Problem Statement

Describe the problem statement for **kth Largest Ele In Stream** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/*\r
1. Find the Kth Largest Element in an Array\r
\r
Problem: Given an array, find the Kth largest element.\r
\r
Quick Apporach: Keep only the k largest elements (if k is 2 then only 2 largest elements) seen so far. The smallest among them (heap top) is the kth largest overall.\r
\r
Approach:\r
    - Use a min-heap of size K.\r
    - Iterate through the array:\r
        - Add elements to the heap.\r
        - If the heap size exceeds K, remove the smallest element (heap.pop()).\r
    - The root of the heap will be the Kth largest element.\r
\r
Time Complexity:\r
Using a heap: O(N log K), where N is the number of elements.\r
    - Iterate through the nums list with n elements and add them to the heap: O(n). Adding each element to the heap takes, at most, O(log k) time. Therefore, the overall time complexity of the constructor is O(n log k).\r
SC:\r
    - O(k), where k is the kth largest element  we need to find in the stream.\r
    - This is because the heap is initialized to have a maximum size of k.\r
*/\r
\r
class MinHeap {\r
  constructor() {\r
    this.heap = [];\r
  }\r
\r
  size() {\r
    return this.heap.length;\r
  }\r
\r
  peek() {\r
    return this.heap[0];\r
  }\r
\r
  // Push inserts a new element into the heap and then rearranges elements (by bubbling it up) so that the smallest value remains at the top.\r
  push(val) {\r
    this.heap.push(val);\r
    this.bubbleUp();\r
  }\r
\r
  // Pop removes the smallest element (the root), replaces it with the last element, and then rearranges elements (by bubbling it down) to restore the min-heap property.\r
  pop() {\r
    const top = this.heap[0];\r
    const last = this.heap.pop();\r
    if (this.heap.length > 0) {\r
      this.heap[0] = last;\r
      this.bubbleDown();\r
    }\r
    return top;\r
  }\r
\r
  bubbleUp() {\r
    // insert → bubbleUp\r
    // One-line memory hook: bubbleUp = keep swapping with parent while smaller\r
    let i = this.heap.length - 1;\r
    while (i > 0) {\r
      const p = Math.floor((i - 1) / 2);  // index of parent; p = parent\r
      if (this.heap[p] <= this.heap[i]) break;  // if val of parent is less than or equal to child, break\r
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]]; // otherwise Swap\r
      i = p;\r
    }\r
  }\r
  /*\r
  bubbleUp in a Min-Heap (used after insertion)\r
  - Initial heap: [2, 5, 8]\r
  - Element to insert: 1\r
        2\r
      /   \\\r
     5     8\r
    /\r
   1   ← newly added\r
      - A new element is always inserted at the end of the heap array to maintain the complete binary tree structure.\r
      - After inserting 1, the heap becomes [2, 5, 8, 1].\r
      - The newly inserted element may violate the min-heap property, so we compare it with its parent.\r
      - The index of the parent is calculated as Math.floor((childIndex - 1) / 2).\r
      - The parent of 1 is 5, and since 1 is smaller than 5, they are swapped.\r
      - The heap now becomes [2, 1, 8, 5].\r
      - The element 1 is again compared with its new parent 2.\r
      - Since 1 is smaller than 2, another swap is performed.\r
      - The heap becomes [1, 2, 8, 5].\r
      - The min-heap property is now satisfied, so the bubbleUp process stops.\r
Key idea:\r
bubbleUp repeatedly swaps a node with its parent until the min-heap rule (parent ≤ child) is restored.\r
  */\r
\r
  bubbleDown() {\r
    // remove → bubbleDown\r
    // One-line memory hook: bubbleDown repeatedly compares a node with its children, swaps it with the smallest child if needed, and continues until the min-heap property is restored.\r
    let i = 0; // cos this method is called after removing the root element, so we set the last element to the root position (index 0) and set i = 0\r
    while (true) {\r
      let left = 2 * i + 1; // left child index of i\r
      let right = 2 * i + 2; // right child index of i\r
      let smallest = i; // assumes that the current node is the smallest; This variable will be updated if a child is smaller than the current node.\r
\r
      // first checks whether the left child exists, and if it does, compares its value with the current smallest value.\r
      // If the left child's value is smaller, it updates smallest to the left child's index.\r
      if (left < this.heap.length && this.heap[left] < this.heap[smallest])\r
        smallest = left;\r
      // first checks whether the right child exists, and if it does, compares its value with the smallest value found so far.\r
      // If the right child's value is smaller, it updates smallest to the right child's index.\r
      if (right < this.heap.length && this.heap[right] < this.heap[smallest])\r
        smallest = right;\r
\r
      // If the smallest value is still the current node (neither child is smaller than the current node), the min-heap property is satisfied, \r
      // and the loop breaks- no further swaps are needed.\r
      if (smallest === i) break;\r
      // Otherwise, it swaps the current node with the smallest child and continues the process from the new position of the swapped node.\r
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];\r
      // index i is updated to the child’s index where the element was moved, this allows the process to continue bubbling down if needed.\r
      i = smallest;\r
    }\r
  }\r
  /*\r
  bubbleDown in a Min-Heap (used after removal)\r
  - Initial heap: [1, 2, 8, 5]\r
  - Operation: remove the minimum element (1)\r
        1\r
      /   \\\r
     2     8\r
    /\r
   5      (this is the tree initially, after adding 1 previously, and doing bubbleUp)\r
      - When removing the root element, the last element of the heap replaces the root to keep the tree complete.\r
      - After removal, the heap becomes [5, 2, 8].\r
      - The new root 5 may violate the min-heap property, so it must be pushed downward.\r
      - The left and right children of 5 are compared.\r
      - The smaller child (2) is selected for comparison.\r
      - Since 5 is greater than 2, they are swapped.\r
      - The heap now becomes [2, 5, 8].\r
      - The element 5 is checked again, but it has no smaller children.\r
      - The min-heap property is restored, so the bubbleDown process stops.\r
Key idea:\r
bubbleDown repeatedly compares a node with its children, swaps it with the smallest child if needed, and continues until the min-heap property is restored.  */\r
}\r
\r
/**\r
 * We need the kth largest element, not necessarily sorted order.\r
 * Sorting would work but costs O(n log n), which is more than needed.\r
 * Use a min-heap of size k. As I scan the array, I keep only the k largest elements seen so far.\r
 * The smallest among them (heap top) is the kth largest overall.\r
 * Time: O(n log k); Space: O(k)\r
 */\r
function findKthLargest(nums, k) {\r
  const heap = new MinHeap();\r
\r
  for (let num of nums) {\r
    heap.push(num);\r
    if (heap.size() > k) heap.pop();\r
  }\r
\r
  return heap.peek();\r
}\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
