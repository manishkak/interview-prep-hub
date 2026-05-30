const n=`# remove Duplicates

## Problem Statement

Describe the problem statement for **remove Duplicates** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
function remove_duplicates(arr) {\r
	// index of the next non-duplicate element\r
	let nextNonDuplicate = 1;\r
  \r
	let i = 0;\r
	while (i < arr.length) {\r
	  if (arr[nextNonDuplicate - 1] !== arr[i]) {\r
		arr[nextNonDuplicate] = arr[i];\r
		nextNonDuplicate += 1;\r
	  }\r
	  i += 1;\r
	}\r
  \r
	return nextNonDuplicate;\r
  }\r
  \r
console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));\r
console.log(remove_duplicates([2, 2, 2, 11]));\r
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
