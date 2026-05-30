# remove Duplicates

## Problem Statement

Describe the problem statement for **remove Duplicates** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
function remove_duplicates(arr) {
	// index of the next non-duplicate element
	let nextNonDuplicate = 1;
  
	let i = 0;
	while (i < arr.length) {
	  if (arr[nextNonDuplicate - 1] !== arr[i]) {
		arr[nextNonDuplicate] = arr[i];
		nextNonDuplicate += 1;
	  }
	  i += 1;
	}
  
	return nextNonDuplicate;
  }
  
console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(remove_duplicates([2, 2, 2, 11]));


/**
 * TC = O(n), where ‘N’ is the total number of elements in the given array
 * SC = O(1), no extra space so 'constant' SC (this was a requirement in the problem statement)
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
