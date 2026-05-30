const e=`# meeting Rooms

## Problem Statement

Describe the problem statement for **meeting Rooms** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Problem: Given an array of meeting intervals where intervals[i] = [start_i, end_i], determine if a person could attend all meetings.\r
For example:\r
	Input: [[0,30],[5,10],[15,20]]\r
	Output: false\r
	Input: [[7,10],[2,4]]\r
	Output: true\r
 */\r
/**\r
 * Approach: \r
 * 	Sort the meeting intervals based on their start times.\r
 * 	Iterate through the sorted intervals, and for each interval:\r
		- Check if the ""start time of the current interval overlaps with the end time of the previous interval"".\r
            - If it does, return false (indicating that the person cannot attend all meetings).\r
		- Otherwise, update the end time of the previous interval to be the end time of the current interval.\r
 *	If no overlapping intervals are found, return true (indicating that the person can attend all meetings).\r
 */\r
\r
function canAttendMeetings(intervals) {\r
    // Sort the intervals based on their start times\r
    intervals.sort((a, b) => a[0] - b[0]);\r
\r
    // Iterate through the sorted intervals\r
    for (let i = 1; i < intervals.length; i++) {\r
        // Check for overlap with the previous interval\r
        if (intervals[i][0] < intervals[i - 1][1]) {\r
            return false; // Overlapping intervals, cannot attend all meetings\r
        }\r
    }\r
\r
    return true; // No overlapping intervals, can attend all meetings\r
}\r
\r
// Example usage:\r
console.log(canAttendMeetings([[0,30],[5,10],[15,20]])); // Output: false\r
console.log(canAttendMeetings([[7,10],[2,4]])); // Output: true\r
\r
\r
/**\r
 * This function canAttendMeetings takes an array of meeting intervals as input and returns true if the person can attend all meetings, and false otherwise. It sorts the intervals based on their start times and then iterates through them to check for any overlaps. If any overlap is found, it returns false; otherwise, it returns true.\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
