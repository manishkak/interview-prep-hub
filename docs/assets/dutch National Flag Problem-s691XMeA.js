const r=`# dutch National Flag Problem

## Problem Statement

Describe the problem statement for **dutch National Flag Problem** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Problem Statement\r
Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.\r
 */\r
\r
function dutch_flag_sort(arr) {\r
	// all elements < low are 0, and all elements > high are 2\r
	// all elements from >= low < i are 1\r
	let low = 0,\r
	  high = arr.length - 1,\r
	  i = 0;\r
	while (i <= high) {\r
	  if (arr[i] === 0) {\r
		[arr[i], arr[low]] = [arr[low], arr[i]]; // swap\r
		// increment 'i' and 'low'\r
		i += 1;\r
		low += 1;\r
	  } else if (arr[i] === 1) {\r
		i += 1;\r
	  } else { // the case for arr[i] === 2\r
		[arr[i], arr[high]] = [arr[high], arr[i]]; // swap\r
		// decrement 'high' only, after the swap the number at index 'i' could be 0, 1, or 2\r
		high -= 1;\r
	  }\r
	}\r
  }\r
\r
// Dry run->\r
//   i = 0, 1, 2, 3, 4 (here i==high, so it comes out of the while loop)\r
//   low = 0, 1, 2\r
//   high = 5, 4\r
//   [0, 0, 1, 1, 2]\r
//   let arr = [1, 0, 2, 1, 0];\r
\r
\r
dutch_flag_sort(arr);\r
console.log(arr);\r
\r
arr = [2, 2, 0, 1, 2, 0];\r
dutch_flag_sort(arr);\r
console.log(arr);\r
\r
\r
/**\r
 * TC = O(n), as we are iterating the input array only once\r
 * SC = O(1), no extra space so 'constant' SC (this was a requirement in the problem statement)\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{r as default};
