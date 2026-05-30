# insert Interval

## Problem Statement

Describe the problem statement for **insert Interval** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Problem: Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
	You may assume that the intervals were initially sorted according to their start times.
	Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
	Output: [[1,5],[6,9]]
 * Approach:
 * 		○ Iterate through the list of intervals
		○ If the current interval ends before the new interval starts, append it to the result
		○ If the current interval starts after the new interval ends, append the new interval and the remaining intervals to the result
		○ If there's an overlap between the current interval and the new interval, merge the intervals and update the new interval's start and end accordingly
		○ Return the result
 * First and last while loops are for pushing into result array; Second while is for merging
 */

function insertInterval(intervals, newInterval) {
    let result = [];
    let i = 0;
    const n = intervals.length;

    // Add all intervals that end before the new interval starts
	// Simple array.push from 'intervals' to 'result', that end before new interval starts, 
	// just remember- intervals[i][1] < newInterval[0]
    while (i < n && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }

    // Merge intervals that overlap with the new interval
	// Starts merging arrays in 'intervals', starting from one next array after above (cos i++) 
	// just remember this condition- intervals[i][0] <= newInterval[1]
	// and then the min and max logic for creating new intervals
    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push(newInterval);

    // Add remaining intervals - a simple array.push
    // Add all remaining intervals that start after the new interval ends
	// This will add remaining arr in 'intervals' to 'result', that were excluded during two while loops
    while (i < n) {
        result.push(intervals[i]);
        i++;
    }

    return result;
}

// Example usage:
const intervals1 = [[1,3],[6,9]];
const newInterval1 = [2,5];
console.log(insertInterval(intervals1, newInterval1)); // Output: [[1,5],[6,9]]

const intervals2 = [[1,2],[3,5],[6,7],[8,10],[12,16]];
const newInterval2 = [4,8];
console.log(insertInterval(intervals2, newInterval2)); // Output: [[1,2],[3,10],[12,16]]

/**
 * This solution iterates through the list of intervals once, so its time complexity is O(n), where n is the number of intervals. It merges overlapping intervals efficiently without unnecessary comparisons
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
