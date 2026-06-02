const n=`# meeting Rooms\r
\r
## Problem Statement\r
\r
Given an array of meeting intervals where intervals[i] = [start_i, end_i], determine if a person can attend all meetings without any overlaps.\r
\r
## Examples\r
\r
- Input: [[0,30],[5,10],[15,20]]\r
  Output: false\r
- Input: [[7,10],[2,4]]\r
  Output: true\r
\r
## Approach\r
\r
- Sort intervals by start time.\r
- Check adjacent intervals for overlap.\r
\r
## Solution\r
\r
\`\`\`js\r
function canAttendMeetings(intervals) {\r
  intervals.sort((a, b) => a[0] - b[0]);\r
  for (let i = 1; i < intervals.length; i++) {\r
    if (intervals[i][0] < intervals[i - 1][1]) {\r
      return false;\r
    }\r
  }\r
  return true;\r
}\r
\r
console.log(canAttendMeetings([[0,30],[5,10],[15,20]])); // false\r
console.log(canAttendMeetings([[7,10],[2,4]])); // true\r
\`\`\`\r
\r
## Time Complexity\r
\r
- O(n log n)\r
\r
## Space Complexity\r
\r
- O(1)\r
\r
## Notes\r
\r
- Overlap occurs when a meeting starts before the previous one ends.\r
`;export{n as default};
