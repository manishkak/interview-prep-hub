const t=`# containerwith Most Water

## Problem Statement

Describe the problem statement for **containerwith Most Water** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Given an array of the heights of vertical lines, find two lines that, together with the horizontal axis, form a container that holds the most water.\r
 */\r
\r
/**\r
 * Explanation-\r
 * https://www.youtube.com/watch?v=UuiTKBwPgAo\r
 */\r
\r
 let maxWaterAreaContainer = function(height) {\r
	// Initialize maxArea as zero and the left and right markers to the two ends\r
	// of an array\r
	let maxArea = 0, left = 0, right = height.length - 1;\r
	\r
	while (left < right) {\r
		// Calculating the max area using the shortest height and the\r
		// length of x-axis between the two heights (length * width)\r
		const area = (right - left) * Math.min(height[left], height[right]);\r
    	maxArea = Math.max(maxArea, area);\r
\r
		// Move the left bar if it has the shorter height\r
		// Move the pointer pointing to the shorter line\r
		if (height[left] < height[right])\r
			left++;\r
		// Otherwise move the right bar\r
		else\r
			right--;\r
	}\r
\r
	// Return the maximum area container\r
	return maxArea;\r
};\r
\r
let inputList = [\r
				  [1, 8, 6, 2, 5, 4, 8, 3, 7], \r
				  [20, 30, 9, 69],\r
				  [13, 18, 12, 8],\r
				  [45, 32, 56, 99], \r
				  [23, 20]\r
				];\r
let index =0;\r
for (let input of inputList) {\r
	// Using a custom function to print a neatly formatted array\r
	console.log((++index) + ". maxWaterAreaContainer(" + printArray(input) + "):"\r
			, maxWaterAreaContainer(input));\r
	console.log("----------------------------------------------------------------------------------------------------\\n")\r
};\r
\r
/**\r
 * TC - O(n), linear.\r
 * SC - O(1), constant.\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{t as default};
