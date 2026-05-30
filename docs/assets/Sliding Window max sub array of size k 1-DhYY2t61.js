const n=`# Sliding Window max sub array of size k 1

## Problem Statement

Describe the problem statement for **Sliding Window max sub array of size k 1** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
function max_sub_array_of_size_k(k, arr) {\r
	let maxSum = 0,\r
	  windowSum = 0;\r
  \r
	for (i = 0; i < arr.length - k + 1; i++) {\r
	  windowSum = 0;\r
	  for (j = i; j < i + k; j++) {\r
		windowSum += arr[j];\r
	  }\r
	  maxSum = Math.max(maxSum, windowSum);\r
	}\r
	return maxSum;\r
  }\r
  \r
  \r
  console.log(\`Maximum sum of a subarray of size K: \${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}\`);\r
  console.log(\`Maximum sum of a subarray of size K: \${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}\`);\r
  
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
