# meeting Rooms

## Problem Statement

Given an array of meeting intervals where intervals[i] = [start_i, end_i], determine if a person can attend all meetings without any overlaps.

## Examples

- Input: [[0,30],[5,10],[15,20]]
  Output: false
- Input: [[7,10],[2,4]]
  Output: true

## Approach

- Sort intervals by start time.
- Check adjacent intervals for overlap.

## Solution

```js
function canAttendMeetings(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }
  return true;
}

console.log(canAttendMeetings([[0,30],[5,10],[15,20]])); // false
console.log(canAttendMeetings([[7,10],[2,4]])); // true
```

## Time Complexity

- O(n log n)

## Space Complexity

- O(1)

## Notes

- Overlap occurs when a meeting starts before the previous one ends.
