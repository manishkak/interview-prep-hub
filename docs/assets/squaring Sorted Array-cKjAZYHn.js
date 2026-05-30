const n=`# squaring Sorted Array

## Problem Statement

Describe the problem statement for **squaring Sorted Array** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Problem Statement\r
- Given a "sorted array",\r
- create a new array,\r
- containing "squares of all the numbers" of the input array,\r
- in sorted order.\r
 */\r
\r
let sortedSquares = function(nums){\r
\r
	// find length of nums\r
	let n = nums.length;\r
	\r
	// declare an array to store result\r
	let result = [];\r
	\r
	// declare two pointers\r
	let left = 0;\r
	let right = n - 1;\r
	\r
	let square = 0;\r
	let i = n - 1;\r
	\r
	while (i >= 0){\r
	  // comparing absolute values\r
	  // 'square' stores the absolute non-decreasing number in order\r
	  if (Math.abs(nums[left]) < Math.abs(nums[right])){\r
		  square = nums[right];\r
		  right -= 1;\r
	  }\r
	  else{\r
		  square = nums[left]\r
		  left += 1\r
	  }\r
	  // squaring the elements\r
	  result[i] = square * square;\r
	  i -= 1;\r
	}\r
	\r
	return result;\r
  }\r
  \r
  \r
  let nums = [[-4, -1, 0, 3, 10], [-7, -3, 2, 3, 11], [-100, 100], [-5], [5]]\r
  for (let i=0; i<nums.length; i++){\r
  \r
	let result = sortedSquares(nums[i])\r
	// Using a custom function printArray to print a neatly formatted array\r
	console.log(String(i+1) + ".\\tInput array:    " + printArray(nums[i]));\r
	console.log("\\tSquared array: " , printArray(result));\r
	console.log("---------------------------------------------------------------------------------------------------\\n");\r
  }\r
\r
\r
/**\r
 * TC = O(n), where ‘N’ is the total number of elements in the given array\r
 * SC = O(1), no extra space so 'constant' SC (this was a requirement in the problem statement)\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
