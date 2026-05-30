# dutch National Flag Problem

## Problem Statement

Describe the problem statement for **dutch National Flag Problem** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Problem Statement
Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.
 */

function dutch_flag_sort(arr) {
	// all elements < low are 0, and all elements > high are 2
	// all elements from >= low < i are 1
	let low = 0,
	  high = arr.length - 1,
	  i = 0;
	while (i <= high) {
	  if (arr[i] === 0) {
		[arr[i], arr[low]] = [arr[low], arr[i]]; // swap
		// increment 'i' and 'low'
		i += 1;
		low += 1;
	  } else if (arr[i] === 1) {
		i += 1;
	  } else { // the case for arr[i] === 2
		[arr[i], arr[high]] = [arr[high], arr[i]]; // swap
		// decrement 'high' only, after the swap the number at index 'i' could be 0, 1, or 2
		high -= 1;
	  }
	}
  }

// Dry run->
//   i = 0, 1, 2, 3, 4 (here i==high, so it comes out of the while loop)
//   low = 0, 1, 2
//   high = 5, 4
//   [0, 0, 1, 1, 2]
//   let arr = [1, 0, 2, 1, 0];


dutch_flag_sort(arr);
console.log(arr);

arr = [2, 2, 0, 1, 2, 0];
dutch_flag_sort(arr);
console.log(arr);


/**
 * TC = O(n), as we are iterating the input array only once
 * SC = O(1), no extra space so 'constant' SC (this was a requirement in the problem statement)
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
