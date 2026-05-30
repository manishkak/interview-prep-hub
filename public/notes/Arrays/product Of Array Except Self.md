# product Of Array Except Self

## Problem Statement

Describe the problem statement for **product Of Array Except Self** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * chatgpt solution below should be the FINAL- search for 'chatgpt solution'

 * Problem: Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
	Input:  [1,2,3,4]
	Output: [24,12,8,6]

 * Approach:
A common approach to solving this problem involves calculating the product of all elements to the left of each element and the product of all elements to the right of each element. Then, multiplying these two products gives the desired result.

 * Here's a high-level outline of the algorithm:

- Initialize two arrays 'leftProduct' and 'rightProduct', each of length n, to store the products of all elements to the left and right of each element, respectively.
- Iterate through the array 'nums' from left to right, filling leftProduct, such that leftProduct[i] represents the product of all elements to the left of nums[i].
- Iterate through the array nums from right to left, filling rightProduct such that rightProduct[i] represents the product of all elements to the right of nums[i].
- Multiply leftProduct[i] and rightProduct[i] to get the final result for output[i].
- This approach provides an efficient solution with a time complexity of O(n), where n is the number of elements in the array.
- SC: O(1)
*/

let productExceptSelf = function(nums) {
	// The length of the input array
	let length = nums.length;
  
	// The left and right arrays as described in the algorithm
	let L = [length];
	let R = [length];
  
	// Final answer array to be returned
	let answer = [length];
  
	// L[i] contains the product of all the elements to the left
	// Note: for the element at index '0', there are no elements to the left,
	// so L[0] would be 1
	L[0] = 1;
	for (let i = 1; i < length; i++) {
	  // L[i - 1] already contains the product of elements to the left of 'i - 1'.. this is imp.
	  // Simply multiplying it with nums[i - 1] would give the product of all
	  // elements to the left of index 'i'
	  L[i] = nums[i - 1] * L[i - 1];
	}
  
	// R[i] contains the product of all the elements to the right
	// Note: for the element at index 'length - 1', there are no elements to the right,
	// so the R[length - 1] would be 1
	R[length - 1] = 1;
  
	// R[i + 1] already contains the product of elements to the right of 'i + 1'
	// Simply multiplying it with nums[i + 1] would give the product of all
	// elements to the right of index 'i'
	for (let i = length - 2; i >= 0; i--) {
	  R[i] = nums[i + 1] * R[i + 1];
	}
  
	// Constructing the answer array
	for (let i = 0; i < length; i++) {
	  // For the first element, R[i] would be product except self
	  // For the last element of the array, product except self would be L[i]
	  // Else, multiple product of all elements to the left and to the right
	  answer[i] = L[i] * R[i];
	}
  
	return answer;
  }

  let inputs = [[1, 2, 3, 4], [-1, 1, 0, -3, 3]];
  j = 1;
  for (let nums of inputs) {
	// Using a custom function printArray to print a neatly formatted array
	console.log(String(j++) + ". Nums:    " + printArray(nums));
	let res = productExceptSelf(nums);
	console.log("   Product: " + printArray(res));
	console.log("----------------------------------------------------------------------------------------------------\n");
  }

  
/**
 * TC - O(n), because we scan through nums three times.
 * SC - O(n), because we create two intermediate arrays of the same size as nums.
 */

// chatgpt solution

function productExceptSelf(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(1);  // Initialize result array with 1s

    // Step 1: Calculate left products
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = leftProduct;  // answer[i] contains the product of all elements to the left of index i
        leftProduct *= nums[i];   // Update leftProduct for the next index
    }

    // Step 2: Calculate right products and update result
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= rightProduct;  // Multiply the current answer[i] by the right product
        rightProduct *= nums[i];    // Update rightProduct for the next index
    }

    return answer;
}

let array = [1, 2, 3, 4];
productExceptSelf(array);

// TC: O(n) for calculating the left products; O(n) for calculating the right products; Combined: O(n) + O(n) = O(n);
// SC: The answer array is still required to store the result, so the effective space complexity remains O(n), but no additional space is used for left or right products- as we just keep saving and updating the answer array.
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
