const r=`# Merge KSorted Arrays\r
\r
## Problem Statement\r
\r
Given k sorted arrays, merge them into one sorted array and return the result.\r
\r
## Examples\r
\r
- Input: [[1,4,5],[1,3,4],[2,6]]\r
  Output: [1,1,2,3,4,4,5,6]\r
\r
## Approach\r
\r
- Use a min-heap to keep track of the smallest current element from each array.\r
- Extract the min and push the next element from that array until all items are processed.\r
\r
## Solution\r
\r
\`\`\`js\r
class MinHeap {\r
  constructor() { this.data = []; }\r
  push(item) { this.data.push(item); this._bubbleUp(); }\r
  pop() { const top = this.data[0]; const last = this.data.pop(); if (this.data.length) { this.data[0] = last; this._bubbleDown(); } return top; }\r
  _bubbleUp() { let i = this.data.length - 1; while (i > 0) { const p = Math.floor((i - 1) / 2); if (this.data[p][0] <= this.data[i][0]) break; [this.data[p], this.data[i]] = [this.data[i], this.data[p]]; i = p; } }\r
  _bubbleDown() { let i = 0; while (true) { const l = 2 * i + 1; const r = 2 * i + 2; let smallest = i; if (l < this.data.length && this.data[l][0] < this.data[smallest][0]) smallest = l; if (r < this.data.length && this.data[r][0] < this.data[smallest][0]) smallest = r; if (smallest === i) break; [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]]; i = smallest; } }\r
  size() { return this.data.length; }\r
}\r
\r
function mergeKArrays(arrays) {\r
  const heap = new MinHeap();\r
  for (let i = 0; i < arrays.length; i++) {\r
    if (arrays[i].length) heap.push([arrays[i][0], i, 0]);\r
  }\r
  const res = [];\r
  while (heap.size()) {\r
    const [val, arrIdx, idx] = heap.pop();\r
    res.push(val);\r
    if (idx + 1 < arrays[arrIdx].length) heap.push([arrays[arrIdx][idx + 1], arrIdx, idx + 1]);\r
  }\r
  return res;\r
}\r
\r
console.log(mergeKArrays([[1,4,5],[1,3,4],[2,6]]));\r
\`\`\`\r
\r
## Time Complexity\r
\r
- O(N log k)\r
\r
## Space Complexity\r
\r
- O(k)\r
\r
## Notes\r
\r
- This is ideal when k is much smaller than total elements.\r
`;export{r as default};
