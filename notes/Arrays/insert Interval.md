# insert Interval

## Problem Statement

Given a list of non-overlapping intervals sorted by start time, insert a new interval and merge any overlapping intervals.

## Examples

- Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
  Output: [[1,5],[6,9]]
- Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
  Output: [[1,2],[3,10],[12,16]]

## Approach

- Add all intervals that end before the new interval starts.
- Merge overlapping intervals with the new interval.
- Add remaining intervals after the new interval.

## Solution

`js
function insertInterval(intervals, newInterval) {
  const result = [];
  let i = 0;

  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  result.push(newInterval);

  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
}

console.log(insertInterval([[1,3],[6,9]], [2,5])); // [[1,5],[6,9]]
console.log(insertInterval([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])); // [[1,2],[3,10],[12,16]]
`

## Time Complexity

- O(n)

## Space Complexity

- O(n)

## Notes

- The intervals list is already sorted by start time.
- Merge by growing the new interval until it no longer overlaps.
