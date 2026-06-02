# Merge KSorted Arrays

## Problem Statement

Given k sorted arrays, merge them into one sorted array and return the result.

## Examples

- Input: [[1,4,5],[1,3,4],[2,6]]
  Output: [1,1,2,3,4,4,5,6]

## Approach

- Use a min-heap to keep track of the smallest current element from each array.
- Extract the min and push the next element from that array until all items are processed.

## Solution

```js
class MinHeap {
  constructor() { this.data = []; }
  push(item) { this.data.push(item); this._bubbleUp(); }
  pop() { const top = this.data[0]; const last = this.data.pop(); if (this.data.length) { this.data[0] = last; this._bubbleDown(); } return top; }
  _bubbleUp() { let i = this.data.length - 1; while (i > 0) { const p = Math.floor((i - 1) / 2); if (this.data[p][0] <= this.data[i][0]) break; [this.data[p], this.data[i]] = [this.data[i], this.data[p]]; i = p; } }
  _bubbleDown() { let i = 0; while (true) { const l = 2 * i + 1; const r = 2 * i + 2; let smallest = i; if (l < this.data.length && this.data[l][0] < this.data[smallest][0]) smallest = l; if (r < this.data.length && this.data[r][0] < this.data[smallest][0]) smallest = r; if (smallest === i) break; [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]]; i = smallest; } }
  size() { return this.data.length; }
}

function mergeKArrays(arrays) {
  const heap = new MinHeap();
  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i].length) heap.push([arrays[i][0], i, 0]);
  }
  const res = [];
  while (heap.size()) {
    const [val, arrIdx, idx] = heap.pop();
    res.push(val);
    if (idx + 1 < arrays[arrIdx].length) heap.push([arrays[arrIdx][idx + 1], arrIdx, idx + 1]);
  }
  return res;
}

console.log(mergeKArrays([[1,4,5],[1,3,4],[2,6]]));
```

## Time Complexity

- O(N log k)

## Space Complexity

- O(k)

## Notes

- This is ideal when k is much smaller than total elements.
