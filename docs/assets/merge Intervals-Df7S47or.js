const n=`\uFEFF# merge Intervals

## Problem Statement

Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals and return an array of non-overlapping intervals that cover all the input intervals.

## Examples

- Input: [[1,3],[2,6],[8,10],[15,18]]
  Output: [[1,6],[8,10],[15,18]]
- Input: [[1,4],[4,5]]
  Output: [[1,5]]

## Approach

- Sort intervals by start time.
- Use a result list and merge each interval into the last one if they overlap.

## Solution

\`js
function merge(intervals) {
  if (intervals.length === 0) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    const last = merged[merged.length - 1];
    if (start <= last[1]) {
      last[1] = Math.max(last[1], end);
    } else {
      merged.push([start, end]);
    }
  }
  return merged;
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // [[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]])); // [[1,5]]
\`

## Time Complexity

- O(n log n)

## Space Complexity

- O(n)

## Notes

- Sort first so overlap checks are local to adjacent intervals.
- Two intervals overlap when the next start is <= current end.\r
`;export{n as default};
