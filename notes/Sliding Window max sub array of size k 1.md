# Sliding Window max sub array of size k 1

## Problem Statement

Describe the problem statement for **Sliding Window max sub array of size k 1** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
function max_sub_array_of_size_k(k, arr) {
	let maxSum = 0,
	  windowSum = 0;
  
	for (i = 0; i < arr.length - k + 1; i++) {
	  windowSum = 0;
	  for (j = i; j < i + k; j++) {
		windowSum += arr[j];
	  }
	  maxSum = Math.max(maxSum, windowSum);
	}
	return maxSum;
  }
  
  
  console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);
  console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`);
  
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
