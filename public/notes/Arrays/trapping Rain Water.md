# trapping Rain Water

## Problem Statement

Describe the problem statement for **trapping Rain Water** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// HARD PROBLEM

/*
Trapping Rain Water
The "Trapping Rain Water" problem is a classic interview question that asks you to determine how much water can be trapped between the bars of a histogram after it rains.

- Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

 - To solve this problem, we need to consider the amount of water that can be trapped above each bar. 
 - The amount of water above a bar is determined by the height of the shortest boundary on either side of it.

*/
/*
Approach 1: Using Two-Pointer Technique
This approach has a time complexity of O(n) and a space complexity of O(1), making it very efficient.

Use two pointers, left and right, starting at the beginning and end of the array.
Track the maximum height encountered from both the left (leftMax) and the right (rightMax).
If height[left] < height[right], then check if height[left] is less than leftMax.
If it is, trap leftMax - height[left] units of water.
If not, update leftMax.
Move the left pointer inward if height[left] is less than height[right]; otherwise, move the right pointer inward.
Repeat until left meets right.
*/

// Follow this video- https://www.youtube.com/watch?v=ZI2z5pq0TqA

function trap(height) {
	let left = 0;
	let right = height.length - 1;
	let leftMax = 0;
	let rightMax = 0;
	let totalWater = 0;
  
	while (left < right) {
	  if (height[left] < height[right]) {
		if (height[left] >= leftMax) {
		  leftMax = height[left];  // Update left max
		} else {
		  totalWater += leftMax - height[left];  // Calculate water trapped
		}
		left++;  // Move left pointer inward
	  } else {
		if (height[right] >= rightMax) {
		  rightMax = height[right];  // Update right max
		} else {
		  totalWater += rightMax - height[right];  // Calculate water trapped
		}
		right--;  // Move right pointer inward
	  }
	}
  
	return totalWater;
  }
  
  // Example usage:
  const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  console.log(trap(height)); // Output: 6
  
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
