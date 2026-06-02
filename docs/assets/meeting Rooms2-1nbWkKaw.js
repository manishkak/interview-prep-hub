const t=`\uFEFF# meeting Rooms2

## Problem Statement

Given an array of meeting intervals where intervals[i] = [start_i, end_i], return the minimum number of conference rooms required to hold all meetings.

## Examples

- Input: [[0,30],[5,10],[15,20]]
  Output: 2
- Input: [[7,10],[2,4]]
  Output: 1

## Approach

- Sort intervals by start time.
- Use a min-heap of end times to track currently occupied rooms.
- Reuse a room when the earliest meeting ends before the next one starts.

## Solution

\`js
class MinHeap {
  constructor() { this.data = []; }
  add(val) { this.data.push(val); this._bubbleUp(this.data.length - 1); }
  poll() { const top = this.data[0]; const last = this.data.pop(); if (this.data.length) { this.data[0] = last; this._bubbleDown(0); } return top; }
  peek() { return this.data[0]; }
  size() { return this.data.length; }
  _bubbleUp(i) { while (i > 0) { const p = Math.floor((i - 1) / 2); if (this.data[p] <= this.data[i]) break; [this.data[p], this.data[i]] = [this.data[i], this.data[p]]; i = p; } }
  _bubbleDown(i) { const n = this.data.length; while (true) { let smallest = i; const l = 2 * i + 1; const r = 2 * i + 2; if (l < n && this.data[l] < this.data[smallest]) smallest = l; if (r < n && this.data[r] < this.data[smallest]) smallest = r; if (smallest === i) break; [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]]; i = smallest; } }
}

function minMeetingRooms(intervals) {
  if (!intervals.length) return 0;
  intervals.sort((a, b) => a[0] - b[0]);
  const heap = new MinHeap();
  heap.add(intervals[0][1]);
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (start >= heap.peek()) {
      heap.poll();
    }
    heap.add(end);
  }
  return heap.size();
}

console.log(minMeetingRooms([[0,30],[5,10],[15,20]])); // 2
console.log(minMeetingRooms([[7,10],[2,4]])); // 1
\`

## Time Complexity

- O(n log n)

## Space Complexity

- O(n)

## Notes

- Use min-heap on end times to reuse rooms as soon as possible.\r
`;export{t as default};
