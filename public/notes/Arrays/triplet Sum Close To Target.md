# triplet Sum Close To Target

## Problem Statement

Describe the problem statement for **triplet Sum Close To Target** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// The Triplet Sum Close to Target problem is a variation of the Three Sum problem, where you need to find three numbers in an array whose sum is closest to a given target value. The goal is to return the sum of the three numbers that is closest to the target.

// Given an array of integers nums and an integer target, you need to find the sum of three integers from the array such that the sum is as close as possible to the target. Return the sum of the triplet.

function triplet_sum_close_to_target(arr, targetSum) {
	arr.sort((a, b) => a - b);
	let smallest_difference = Infinity;
	for (let i = 0; i < arr.length - 2; i++) {
	  let left = i + 1,
		right = arr.length - 1;
	  while (left < right) {
		const target_diff = targetSum - arr[i] - arr[left] - arr[right];
		console.log('target_diff-> ', target_diff);
		if (target_diff === 0) { // we've found a triplet with an exact sum
		  return targetSum; // return sum of all the numbers
		}
  
		// the second part of the following 'if' is to handle the smallest sum when we have more than one solution
		if (
			  Math.abs(target_diff) < Math.abs(smallest_difference) ||
			  (
				  Math.abs(target_diff) === Math.abs(smallest_difference) && target_diff > smallest_difference
			  )
			)
			{
				smallest_difference = target_diff; // save the closest and the biggest difference
			}
  
  
		if (target_diff > 0) {
			// if target diff is > 0 then incr left cos the arr is sorted and we need a bigger sum
		  left += 1; // we need a triplet with a bigger sum
		} else {
		  right -= 1; // we need a triplet with a smaller sum
		}
	  }
	}
	return targetSum - smallest_difference;
  }
  
  
  console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
  console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
  console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));


  /**
   * TC = O(N^2);
   * SC = above algorithm’s space complexity will be O(N), which is required for sorting.
   */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
