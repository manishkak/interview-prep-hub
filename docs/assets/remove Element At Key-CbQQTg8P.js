const e=`# remove Element At Key

## Problem Statement

Describe the problem statement for **remove Element At Key** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
function remove_element(arr, key) {\r
	let nextElement = 0; // index of the next element which is not 'key'\r
	for (i = 0; i < arr.length; i++) {\r
	  if (arr[i] !== key) {\r
		arr[nextElement] = arr[i];\r
		nextElement += 1;\r
	  }\r
	}\r
	return nextElement;\r
}\r
  \r
console.log(\`Array new length: \${remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3)}\`);\r
console.log(\`Array new length: \${remove_element([2, 11, 2, 2, 1], 2)}\`);\r
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
`;export{e as default};
