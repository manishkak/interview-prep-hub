const e=`# meeting Rooms2

## Problem Statement

Describe the problem statement for **meeting Rooms2** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Problem: The Meeting Rooms II problem is a variation of the original Meeting Rooms problem. Instead of simply determining whether a person can attend all scheduled meetings, this problem involves finding the minimum number of meeting rooms required to accommodate all scheduled meetings without any overlaps.\r
 */\r
/**\r
 * Example-\r
 * Given an array of meeting intervals where intervals[i] = [start_i, end_i], find the minimum number of conference rooms required.\r
For example:\r
Input: [[0,30],[5,10],[15,20]]\r
Output: 2\r
Explanation:\r
We need two meeting rooms:\r
Meeting [0,30]\r
Meeting [5,10] overlaps with [0,30], so it needs a separate room.\r
Input: [[7,10],[2,4]]\r
Output: 1\r
 */\r
/**\r
 * Approach: (To solve this problem, you can use a priority queue (min-heap) to keep track of the end times of meetings currently happening)\r
 * Sort the meeting intervals based on their start times.\r
 * Initialize a min-heap (priority queue) to store the end times of meetings currently happening.\r
 * Iterate through the sorted intervals, and for each interval:\r
 * 		If the min-heap is empty or the start time of the current interval is later than the end time of the earliest meeting in the min-heap, it means we can reuse the room of the meeting that has ended. Remove the earliest meeting's end time from the min-heap.\r
 * 		Otherwise, we need to allocate a new room for the current meeting. Increment the count of required rooms.\r
 * 		Add the end time of the current meeting to the min-heap.\r
 * The maximum size of the min-heap at any point represents the minimum number of meeting rooms required.\r
 */\r
function minMeetingRooms(intervals) {\r
    // Sort the intervals based on their start times\r
    intervals.sort((a, b) => a[0] - b[0]);\r
    \r
    const minHeap = new MinHeap(); // Min-heap to store end times of meetings\r
    let roomsRequired = 0;\r
    \r
    // Iterate through the sorted intervals\r
    for (const interval of intervals) {\r
        const [start, end] = interval;\r
\r
        if (minHeap.isEmpty() || start < minHeap.peek()) {\r
            // Re-use room or allocate new room\r
            roomsRequired++;\r
        } else {\r
            // End time of earliest meeting can be reused\r
            minHeap.pop();\r
        }\r
\r
        // Add end time of current meeting to min-heap\r
        minHeap.push(end);\r
    }\r
\r
    return roomsRequired;\r
}\r
\r
/*\r
Walkthrough->\r
Step 1: Sort the intervals by their start time:\r
[[0, 30], [5, 10], [15, 20]]\r
Step 2: Initialize an empty min-heap.\r
Step 3: Process each interval:\r
    First meeting [0, 30]:\r
        - There are no meetings yet, so we allocate a room for this one.\r
        - Add the end time 30 to the heap.\r
        - Heap: [30]\r
    Second meeting [5, 10]:\r
        - The earliest ending meeting ends at 30, which is after the start of this meeting at 5.\r
        - We need a new room for this meeting, so we add 10 to the heap.\r
        - Heap: [10, 30]\r
    Third meeting [15, 20]:\r
        - The earliest ending meeting now ends at 10, which is before the start of this meeting at 15.\r
        - We can reuse the room from the meeting that ends at 10. So, we remove 10 from the heap and add 20 (the end time of the current meeting).\r
        - Heap: [20, 30]\r
Step 4: The size of the heap at the end is 2, which means we need a minimum of 2 rooms to accommodate all the meetings.\r
*/\r
\r
class MinHeap {\r
    constructor() {\r
        this.heap = [];\r
    }\r
    \r
    push(val) {\r
        this.heap.push(val);\r
        this.heapifyUp(this.heap.length - 1);\r
    }\r
    \r
    pop() {\r
        if (this.heap.length === 0) return null;\r
        \r
        const min = this.heap[0];\r
        this.heap[0] = this.heap[this.heap.length - 1];\r
        this.heap.pop();\r
        this.heapifyDown(0);\r
        \r
        return min;\r
    }\r
    \r
    peek() {\r
        return this.heap[0];\r
    }\r
    \r
    isEmpty() {\r
        return this.heap.length === 0;\r
    }\r
    \r
    heapifyUp(index) {\r
        while (index > 0) {\r
            const parentIndex = Math.floor((index - 1) / 2);\r
            if (this.heap[index] >= this.heap[parentIndex]) break;\r
            this.swap(index, parentIndex);\r
            index = parentIndex;\r
        }\r
    }\r
    \r
    heapifyDown(index) {\r
        while (true) {\r
            let minIndex = index;\r
            const leftChildIndex = 2 * index + 1;\r
            const rightChildIndex = 2 * index + 2;\r
            \r
            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[minIndex]) {\r
                minIndex = leftChildIndex;\r
            }\r
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]) {\r
                minIndex = rightChildIndex;\r
            }\r
            if (minIndex === index) break;\r
            \r
            this.swap(index, minIndex);\r
            index = minIndex;\r
        }\r
    }\r
    \r
    swap(i, j) {\r
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];\r
    }\r
}\r
\r
/**\r
 * TC: Sorting: The time complexity of sorting the intervals based on their start times is O(n log n), where n is the number of intervals.\r
Iterating through the intervals: In the worst case, we iterate through each interval once. Each push and pop operation on the min-heap takes O(log n) time, where n is the number of intervals.\r
Overall, the time complexity of the solution is dominated by the sorting operation, so the total time complexity is O(n log n).\r
 * SC: Additional Space:\r
	The MinHeap class requires space to store the heap elements. The space complexity of the MinHeap class itself is O(n) because it stores all the end times of meetings.\r
	Apart from the MinHeap, the additional space used for variables and pointers is constant and does not depend on the size of the input.\r
Therefore, the overall space complexity of the solution is O(n).\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
