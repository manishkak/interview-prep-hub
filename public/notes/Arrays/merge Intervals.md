# merge Intervals

## Problem Statement

Describe the problem statement for **merge Intervals** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Problem: Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
	○ Example 1:
		§ Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
		§ Output: [[1,6],[8,10],[15,18]]
		§ Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
	○ Example 2:
		§ Input: intervals = [[1,4],[4,5]]
		§ Output: [[1,5]]
		§ Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 */

/**
 * Approach:
A common approach to solving this problem involves sorting the intervals based on their start points. 
Then, iterate through the sorted intervals and merge overlapping intervals by comparing their start and end points.

 * Here's a high-level outline of the algorithm:
1. Sort the intervals based on their start points.
2. Initialize an empty list to store the merged intervals.
3. Iterate through the sorted intervals:
	1. If the current interval overlaps with the previous merged interval, merge them by updating the end point of the merged interval.
	2. If the current interval doesn't overlap with the previous merged interval, add the previous merged interval to the result list and update the current merged interval.
4. After iterating through all intervals, add the last merged interval to the result list.
5. Return the result list containing non-overlapping merged intervals.

This approach provides an efficient solution with a time complexity of O(n log n), where n is the number of intervals, due to the sorting step.
 */

function merge(intervals) {
    // Check for empty input
    if (intervals.length === 0) return [];

    // Sort the intervals based on their start points
    intervals.sort((a, b) => a[0] - b[0]);

    const mergedIntervals = [intervals[0]];		// just add the first interval to begin with

    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

        // If the current interval overlaps with the previous merged interval, merge them
        if (currentInterval[0] <= lastMergedInterval[1]) {
            // Update the end point of the last merged interval
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else {
            // If there is no overlap, add the current interval to the result list
            mergedIntervals.push(currentInterval);
        }
    }

    return mergedIntervals;
}

// Example usage:
const intervals1 = [[1,3],[2,6],[8,10],[15,18]];
console.log(merge(intervals1)); // Output: [[1,6],[8,10],[15,18]]

const intervals2 = [[1,4],[4,5]];
console.log(merge(intervals2)); // Output: [[1,5]]

/**
 * This solution first sorts the intervals based on their start points. Then, it iterates through the sorted intervals, merging overlapping intervals as it goes. Finally, it returns a new list of non-overlapping merged intervals.
 */

/**
 * Let's denote:
	n as the number of intervals.
Time Complexity:
    'Sorting' the intervals takes O(n log n) time, where 'n' is the number of intervals.
    'Merging' the intervals takes O(n) time because each interval is processed once.
    Overall Time Complexity: O(n log n)

Sorting: space complexity is O(n) to store the merged intervals in the result array 'mergedIntervals'
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
