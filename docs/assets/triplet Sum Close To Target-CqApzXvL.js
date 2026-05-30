const t=`# triplet Sum Close To Target

## Problem Statement

Describe the problem statement for **triplet Sum Close To Target** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// The Triplet Sum Close to Target problem is a variation of the Three Sum problem, where you need to find three numbers in an array whose sum is closest to a given target value. The goal is to return the sum of the three numbers that is closest to the target.\r
\r
// Given an array of integers nums and an integer target, you need to find the sum of three integers from the array such that the sum is as close as possible to the target. Return the sum of the triplet.\r
\r
function triplet_sum_close_to_target(arr, targetSum) {\r
	arr.sort((a, b) => a - b);\r
	let smallest_difference = Infinity;\r
	for (let i = 0; i < arr.length - 2; i++) {\r
	  let left = i + 1,\r
		right = arr.length - 1;\r
	  while (left < right) {\r
		const target_diff = targetSum - arr[i] - arr[left] - arr[right];\r
		console.log('target_diff-> ', target_diff);\r
		if (target_diff === 0) { // we've found a triplet with an exact sum\r
		  return targetSum; // return sum of all the numbers\r
		}\r
  \r
		// the second part of the following 'if' is to handle the smallest sum when we have more than one solution\r
		if (\r
			  Math.abs(target_diff) < Math.abs(smallest_difference) ||\r
			  (\r
				  Math.abs(target_diff) === Math.abs(smallest_difference) && target_diff > smallest_difference\r
			  )\r
			)\r
			{\r
				smallest_difference = target_diff; // save the closest and the biggest difference\r
			}\r
  \r
  \r
		if (target_diff > 0) {\r
			// if target diff is > 0 then incr left cos the arr is sorted and we need a bigger sum\r
		  left += 1; // we need a triplet with a bigger sum\r
		} else {\r
		  right -= 1; // we need a triplet with a smaller sum\r
		}\r
	  }\r
	}\r
	return targetSum - smallest_difference;\r
  }\r
  \r
  \r
  console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));\r
  console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));\r
  console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));\r
\r
\r
  /**\r
   * TC = O(N^2);\r
   * SC = above algorithm’s space complexity will be O(N), which is required for sorting.\r
   */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{t as default};
