# containerwith Most Water

## Problem Statement

Describe the problem statement for **containerwith Most Water** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Given an array of the heights of vertical lines, find two lines that, together with the horizontal axis, form a container that holds the most water.
 */

/**
 * Explanation-
 * https://www.youtube.com/watch?v=UuiTKBwPgAo
 */

 let maxWaterAreaContainer = function(height) {
	// Initialize maxArea as zero and the left and right markers to the two ends
	// of an array
	let maxArea = 0, left = 0, right = height.length - 1;
	
	while (left < right) {
		// Calculating the max area using the shortest height and the
		// length of x-axis between the two heights (length * width)
		const area = (right - left) * Math.min(height[left], height[right]);
    	maxArea = Math.max(maxArea, area);

		// Move the left bar if it has the shorter height
		// Move the pointer pointing to the shorter line
		if (height[left] < height[right])
			left++;
		// Otherwise move the right bar
		else
			right--;
	}

	// Return the maximum area container
	return maxArea;
};

let inputList = [
				  [1, 8, 6, 2, 5, 4, 8, 3, 7], 
				  [20, 30, 9, 69],
				  [13, 18, 12, 8],
				  [45, 32, 56, 99], 
				  [23, 20]
				];
let index =0;
for (let input of inputList) {
	// Using a custom function to print a neatly formatted array
	console.log((++index) + ". maxWaterAreaContainer(" + printArray(input) + "):"
			, maxWaterAreaContainer(input));
	console.log("----------------------------------------------------------------------------------------------------\n")
};

/**
 * TC - O(n), linear.
 * SC - O(1), constant.
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
