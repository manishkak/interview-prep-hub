const e=`# merge Intervals

## Problem Statement

Describe the problem statement for **merge Intervals** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Problem: Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.\r
	○ Example 1:\r
		§ Input: intervals = [[1,3],[2,6],[8,10],[15,18]]\r
		§ Output: [[1,6],[8,10],[15,18]]\r
		§ Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].\r
	○ Example 2:\r
		§ Input: intervals = [[1,4],[4,5]]\r
		§ Output: [[1,5]]\r
		§ Explanation: Intervals [1,4] and [4,5] are considered overlapping.\r
 */\r
\r
/**\r
 * Approach:\r
A common approach to solving this problem involves sorting the intervals based on their start points. \r
Then, iterate through the sorted intervals and merge overlapping intervals by comparing their start and end points.\r
\r
 * Here's a high-level outline of the algorithm:\r
1. Sort the intervals based on their start points.\r
2. Initialize an empty list to store the merged intervals.\r
3. Iterate through the sorted intervals:\r
	1. If the current interval overlaps with the previous merged interval, merge them by updating the end point of the merged interval.\r
	2. If the current interval doesn't overlap with the previous merged interval, add the previous merged interval to the result list and update the current merged interval.\r
4. After iterating through all intervals, add the last merged interval to the result list.\r
5. Return the result list containing non-overlapping merged intervals.\r
\r
This approach provides an efficient solution with a time complexity of O(n log n), where n is the number of intervals, due to the sorting step.\r
 */\r
\r
function merge(intervals) {\r
    // Check for empty input\r
    if (intervals.length === 0) return [];\r
\r
    // Sort the intervals based on their start points\r
    intervals.sort((a, b) => a[0] - b[0]);\r
\r
    const mergedIntervals = [intervals[0]];		// just add the first interval to begin with\r
\r
    for (let i = 1; i < intervals.length; i++) {\r
        const currentInterval = intervals[i];\r
        const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];\r
\r
        // If the current interval overlaps with the previous merged interval, merge them\r
        if (currentInterval[0] <= lastMergedInterval[1]) {\r
            // Update the end point of the last merged interval\r
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);\r
        } else {\r
            // If there is no overlap, add the current interval to the result list\r
            mergedIntervals.push(currentInterval);\r
        }\r
    }\r
\r
    return mergedIntervals;\r
}\r
\r
// Example usage:\r
const intervals1 = [[1,3],[2,6],[8,10],[15,18]];\r
console.log(merge(intervals1)); // Output: [[1,6],[8,10],[15,18]]\r
\r
const intervals2 = [[1,4],[4,5]];\r
console.log(merge(intervals2)); // Output: [[1,5]]\r
\r
/**\r
 * This solution first sorts the intervals based on their start points. Then, it iterates through the sorted intervals, merging overlapping intervals as it goes. Finally, it returns a new list of non-overlapping merged intervals.\r
 */\r
\r
/**\r
 * Let's denote:\r
	n as the number of intervals.\r
Time Complexity:\r
    'Sorting' the intervals takes O(n log n) time, where 'n' is the number of intervals.\r
    'Merging' the intervals takes O(n) time because each interval is processed once.\r
    Overall Time Complexity: O(n log n)\r
\r
Sorting: space complexity is O(n) to store the merged intervals in the result array 'mergedIntervals'\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
