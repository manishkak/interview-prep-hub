# meeting Rooms2

## Problem Statement

Describe the problem statement for **meeting Rooms2** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Problem: The Meeting Rooms II problem is a variation of the original Meeting Rooms problem. Instead of simply determining whether a person can attend all scheduled meetings, this problem involves finding the minimum number of meeting rooms required to accommodate all scheduled meetings without any overlaps.
 */
/**
 * Example-
 * Given an array of meeting intervals where intervals[i] = [start_i, end_i], find the minimum number of conference rooms required.
For example:
Input: [[0,30],[5,10],[15,20]]
Output: 2
Explanation:
We need two meeting rooms:
Meeting [0,30]
Meeting [5,10] overlaps with [0,30], so it needs a separate room.
Input: [[7,10],[2,4]]
Output: 1
 */
/**
 * Approach: (To solve this problem, you can use a priority queue (min-heap) to keep track of the end times of meetings currently happening)
 * Sort the meeting intervals based on their start times.
 * Initialize a min-heap (priority queue) to store the end times of meetings currently happening.
 * Iterate through the sorted intervals, and for each interval:
 * 		If the min-heap is empty or the start time of the current interval is later than the end time of the earliest meeting in the min-heap, it means we can reuse the room of the meeting that has ended. Remove the earliest meeting's end time from the min-heap.
 * 		Otherwise, we need to allocate a new room for the current meeting. Increment the count of required rooms.
 * 		Add the end time of the current meeting to the min-heap.
 * The maximum size of the min-heap at any point represents the minimum number of meeting rooms required.
 */
function minMeetingRooms(intervals) {
    // Sort the intervals based on their start times
    intervals.sort((a, b) => a[0] - b[0]);
    
    const minHeap = new MinHeap(); // Min-heap to store end times of meetings
    let roomsRequired = 0;
    
    // Iterate through the sorted intervals
    for (const interval of intervals) {
        const [start, end] = interval;

        if (minHeap.isEmpty() || start < minHeap.peek()) {
            // Re-use room or allocate new room
            roomsRequired++;
        } else {
            // End time of earliest meeting can be reused
            minHeap.pop();
        }

        // Add end time of current meeting to min-heap
        minHeap.push(end);
    }

    return roomsRequired;
}

/*
Walkthrough->
Step 1: Sort the intervals by their start time:
[[0, 30], [5, 10], [15, 20]]
Step 2: Initialize an empty min-heap.
Step 3: Process each interval:
    First meeting [0, 30]:
        - There are no meetings yet, so we allocate a room for this one.
        - Add the end time 30 to the heap.
        - Heap: [30]
    Second meeting [5, 10]:
        - The earliest ending meeting ends at 30, which is after the start of this meeting at 5.
        - We need a new room for this meeting, so we add 10 to the heap.
        - Heap: [10, 30]
    Third meeting [15, 20]:
        - The earliest ending meeting now ends at 10, which is before the start of this meeting at 15.
        - We can reuse the room from the meeting that ends at 10. So, we remove 10 from the heap and add 20 (the end time of the current meeting).
        - Heap: [20, 30]
Step 4: The size of the heap at the end is 2, which means we need a minimum of 2 rooms to accommodate all the meetings.
*/

class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    push(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }
    
    pop() {
        if (this.heap.length === 0) return null;
        
        const min = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown(0);
        
        return min;
    }
    
    peek() {
        return this.heap[0];
    }
    
    isEmpty() {
        return this.heap.length === 0;
    }
    
    heapifyUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parentIndex]) break;
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }
    
    heapifyDown(index) {
        while (true) {
            let minIndex = index;
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            
            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[minIndex]) {
                minIndex = leftChildIndex;
            }
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]) {
                minIndex = rightChildIndex;
            }
            if (minIndex === index) break;
            
            this.swap(index, minIndex);
            index = minIndex;
        }
    }
    
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}

/**
 * TC: Sorting: The time complexity of sorting the intervals based on their start times is O(n log n), where n is the number of intervals.
Iterating through the intervals: In the worst case, we iterate through each interval once. Each push and pop operation on the min-heap takes O(log n) time, where n is the number of intervals.
Overall, the time complexity of the solution is dominated by the sorting operation, so the total time complexity is O(n log n).
 * SC: Additional Space:
	The MinHeap class requires space to store the heap elements. The space complexity of the MinHeap class itself is O(n) because it stores all the end times of meetings.
	Apart from the MinHeap, the additional space used for variables and pointers is constant and does not depend on the size of the input.
Therefore, the overall space complexity of the solution is O(n).
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
