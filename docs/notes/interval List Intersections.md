# interval List Intersections

## Problem Statement

Describe the problem statement for **interval List Intersections** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Problem: The Interval List Intersections problem involves finding the intersection of two lists of closed intervals. An interval [a, b] (where a <= b) represents all real numbers between a and b, including both a and b.
 * Given two lists of closed intervals, firstList and secondList, each list of intervals is pairwise disjoint and in sorted order. Return the intersection of these two interval lists.
 * Example:
	Input:
	firstList = [[0,2],[5,10],[13,23],[24,25]],
	secondList = [[1,5],[8,12],[15,24],[25,26]]
	Output:
	[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
 */

/**
 * Approach: To solve this problem, you can use a two-pointer approach. Here's a high-level approach:
	Initialize two pointers, i and j, to iterate through firstList and secondList respectively.
	While both pointers are within the bounds of their respective lists:
		Check if the intervals firstList[i] and secondList[j] intersect.
		If they intersect, add the intersection interval to the result.
		Move the pointer of the interval with the smaller endpoint.
	Repeat this process until one of the pointers reaches the end of its list.
 * This approach has a time complexity of O(n + m), where n and m are the lengths of firstList and secondList respectively.
 * The space complexity is O(1) as only a fixed amount of memory is consumed by a few temporary variables for computations performed by the algorithm.
 */

function intervalsIntersection(intervalListA, intervalListB) {
	let intersections = []; 
	let i = 0,
		j = 0;

	while (i < intervalListA.length && j < intervalListB.length) {
		let start = Math.max(intervalListA[i][0], intervalListB[j][0]);
		let end = Math.min(intervalListA[i][1], intervalListB[j][1]);

		if (start <= end) intersections.push([start, end]);
		
		if (intervalListA[i][1] < intervalListB[j][1]) i++;
		else j++;
	}
	return intersections;
}
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
