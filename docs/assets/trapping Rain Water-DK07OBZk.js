const t=`# trapping Rain Water

## Problem Statement

Describe the problem statement for **trapping Rain Water** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// HARD PROBLEM\r
\r
/*\r
Trapping Rain Water\r
The "Trapping Rain Water" problem is a classic interview question that asks you to determine how much water can be trapped between the bars of a histogram after it rains.\r
\r
- Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.\r
\r
Example:\r
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]\r
Output: 6\r
\r
 - To solve this problem, we need to consider the amount of water that can be trapped above each bar. \r
 - The amount of water above a bar is determined by the height of the shortest boundary on either side of it.\r
\r
*/\r
/*\r
Approach 1: Using Two-Pointer Technique\r
This approach has a time complexity of O(n) and a space complexity of O(1), making it very efficient.\r
\r
Use two pointers, left and right, starting at the beginning and end of the array.\r
Track the maximum height encountered from both the left (leftMax) and the right (rightMax).\r
If height[left] < height[right], then check if height[left] is less than leftMax.\r
If it is, trap leftMax - height[left] units of water.\r
If not, update leftMax.\r
Move the left pointer inward if height[left] is less than height[right]; otherwise, move the right pointer inward.\r
Repeat until left meets right.\r
*/\r
\r
// Follow this video- https://www.youtube.com/watch?v=ZI2z5pq0TqA\r
\r
function trap(height) {\r
	let left = 0;\r
	let right = height.length - 1;\r
	let leftMax = 0;\r
	let rightMax = 0;\r
	let totalWater = 0;\r
  \r
	while (left < right) {\r
	  if (height[left] < height[right]) {\r
		if (height[left] >= leftMax) {\r
		  leftMax = height[left];  // Update left max\r
		} else {\r
		  totalWater += leftMax - height[left];  // Calculate water trapped\r
		}\r
		left++;  // Move left pointer inward\r
	  } else {\r
		if (height[right] >= rightMax) {\r
		  rightMax = height[right];  // Update right max\r
		} else {\r
		  totalWater += rightMax - height[right];  // Calculate water trapped\r
		}\r
		right--;  // Move right pointer inward\r
	  }\r
	}\r
  \r
	return totalWater;\r
  }\r
  \r
  // Example usage:\r
  const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];\r
  console.log(trap(height)); // Output: 6\r
  
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{t as default};
