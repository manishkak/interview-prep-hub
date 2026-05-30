# squaring Sorted Array

## Problem Statement

Describe the problem statement for **squaring Sorted Array** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Problem Statement
- Given a "sorted array",
- create a new array,
- containing "squares of all the numbers" of the input array,
- in sorted order.
 */

let sortedSquares = function(nums){

	// find length of nums
	let n = nums.length;
	
	// declare an array to store result
	let result = [];
	
	// declare two pointers
	let left = 0;
	let right = n - 1;
	
	let square = 0;
	let i = n - 1;
	
	while (i >= 0){
	  // comparing absolute values
	  // 'square' stores the absolute non-decreasing number in order
	  if (Math.abs(nums[left]) < Math.abs(nums[right])){
		  square = nums[right];
		  right -= 1;
	  }
	  else{
		  square = nums[left]
		  left += 1
	  }
	  // squaring the elements
	  result[i] = square * square;
	  i -= 1;
	}
	
	return result;
  }
  
  
  let nums = [[-4, -1, 0, 3, 10], [-7, -3, 2, 3, 11], [-100, 100], [-5], [5]]
  for (let i=0; i<nums.length; i++){
  
	let result = sortedSquares(nums[i])
	// Using a custom function printArray to print a neatly formatted array
	console.log(String(i+1) + ".\tInput array:    " + printArray(nums[i]));
	console.log("\tSquared array: " , printArray(result));
	console.log("---------------------------------------------------------------------------------------------------\n");
  }


/**
 * TC = O(n), where ‘N’ is the total number of elements in the given array
 * SC = O(1), no extra space so 'constant' SC (this was a requirement in the problem statement)
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
