# meeting Rooms

## Problem Statement

Describe the problem statement for **meeting Rooms** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Problem: Given an array of meeting intervals where intervals[i] = [start_i, end_i], determine if a person could attend all meetings.
For example:
	Input: [[0,30],[5,10],[15,20]]
	Output: false
	Input: [[7,10],[2,4]]
	Output: true
 */
/**
 * Approach: 
 * 	Sort the meeting intervals based on their start times.
 * 	Iterate through the sorted intervals, and for each interval:
		- Check if the ""start time of the current interval overlaps with the end time of the previous interval"".
            - If it does, return false (indicating that the person cannot attend all meetings).
		- Otherwise, update the end time of the previous interval to be the end time of the current interval.
 *	If no overlapping intervals are found, return true (indicating that the person can attend all meetings).
 */

function canAttendMeetings(intervals) {
    // Sort the intervals based on their start times
    intervals.sort((a, b) => a[0] - b[0]);

    // Iterate through the sorted intervals
    for (let i = 1; i < intervals.length; i++) {
        // Check for overlap with the previous interval
        if (intervals[i][0] < intervals[i - 1][1]) {
            return false; // Overlapping intervals, cannot attend all meetings
        }
    }

    return true; // No overlapping intervals, can attend all meetings
}

// Example usage:
console.log(canAttendMeetings([[0,30],[5,10],[15,20]])); // Output: false
console.log(canAttendMeetings([[7,10],[2,4]])); // Output: true


/**
 * This function canAttendMeetings takes an array of meeting intervals as input and returns true if the person can attend all meetings, and false otherwise. It sorts the intervals based on their start times and then iterates through them to check for any overlaps. If any overlap is found, it returns false; otherwise, it returns true.
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
