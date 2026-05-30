const n=`# insert Interval

## Problem Statement

Describe the problem statement for **insert Interval** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Problem: Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).\r
	You may assume that the intervals were initially sorted according to their start times.\r
	Input: intervals = [[1,3],[6,9]], newInterval = [2,5]\r
	Output: [[1,5],[6,9]]\r
 * Approach:\r
 * 		○ Iterate through the list of intervals\r
		○ If the current interval ends before the new interval starts, append it to the result\r
		○ If the current interval starts after the new interval ends, append the new interval and the remaining intervals to the result\r
		○ If there's an overlap between the current interval and the new interval, merge the intervals and update the new interval's start and end accordingly\r
		○ Return the result\r
 * First and last while loops are for pushing into result array; Second while is for merging\r
 */\r
\r
function insertInterval(intervals, newInterval) {\r
    let result = [];\r
    let i = 0;\r
    const n = intervals.length;\r
\r
    // Add all intervals that end before the new interval starts\r
	// Simple array.push from 'intervals' to 'result', that end before new interval starts, \r
	// just remember- intervals[i][1] < newInterval[0]\r
    while (i < n && intervals[i][1] < newInterval[0]) {\r
        result.push(intervals[i]);\r
        i++;\r
    }\r
\r
    // Merge intervals that overlap with the new interval\r
	// Starts merging arrays in 'intervals', starting from one next array after above (cos i++) \r
	// just remember this condition- intervals[i][0] <= newInterval[1]\r
	// and then the min and max logic for creating new intervals\r
    while (i < n && intervals[i][0] <= newInterval[1]) {\r
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);\r
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);\r
        i++;\r
    }\r
    result.push(newInterval);\r
\r
    // Add remaining intervals - a simple array.push\r
    // Add all remaining intervals that start after the new interval ends\r
	// This will add remaining arr in 'intervals' to 'result', that were excluded during two while loops\r
    while (i < n) {\r
        result.push(intervals[i]);\r
        i++;\r
    }\r
\r
    return result;\r
}\r
\r
// Example usage:\r
const intervals1 = [[1,3],[6,9]];\r
const newInterval1 = [2,5];\r
console.log(insertInterval(intervals1, newInterval1)); // Output: [[1,5],[6,9]]\r
\r
const intervals2 = [[1,2],[3,5],[6,7],[8,10],[12,16]];\r
const newInterval2 = [4,8];\r
console.log(insertInterval(intervals2, newInterval2)); // Output: [[1,2],[3,10],[12,16]]\r
\r
/**\r
 * This solution iterates through the list of intervals once, so its time complexity is O(n), where n is the number of intervals. It merges overlapping intervals efficiently without unnecessary comparisons\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
