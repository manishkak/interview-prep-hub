# rotate Array

## Problem Statement

Describe the problem statement for **rotate Array** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Rotate an Array by N Elements
 * Given an integer array, rotate it by 'n' elements.
 */

/**
 * From ChatGPT-
 * Reverse the entire array, then reverse the first n elements and finally reverse the remaining length - n elements; this rotates the array in-place by n positions.
 */
/**
 * Complexity Analysis
Time Complexity: O(n), where n is the number of elements in the array. Each reversal operation takes O(n) time, and we perform three reversals. Each reverse operation runs in linear time.
Space Complexity: O(1), since we are reversing the array in place and not using any extra space apart from a few variables.
 */
/**
 * In-place reversal method for left (anti-clockwise) rotation:
   Reverse the first k elements.
   Reverse the remaining (n - k) elements.
   Reverse the entire array.
 * In-place reversal method for right (clockwise) rotation:
   Reverse the entire array.
   Reverse the first k elements.
   Reverse the remaining (n - k) elements.
 */

function rotate(nums, k) {
    // Step 1: Normalize k
    k = k % nums.length;
    if (k === 0) return; // No rotation needed if k is 0 or a multiple of array length

    // Step 2: Reverse the entire array
    reverse(nums, 0, nums.length - 1);

    // Step 3: Reverse the first k elements
    reverse(nums, 0, k - 1);

    // Step 4: Reverse the remaining (n - k) elements
    reverse(nums, k, nums.length - 1);
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

// Example usage:
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotate(nums, k);
console.log(nums); // Output: [5, 6, 7, 1, 2, 3, 4]



let reverseArray = function(nums, start, end) {
	while (start < end) {
	  let temp = nums[start];
	  nums[start] = nums[end];
	  nums[end] = temp;
	  start++;
	  end--;
	}
  };
  
  let rotateArray = function(nums, n) {
	let len = nums.length;
  
	// Normalizing the 'n' rotations
	n = n % len;
	if (n < 0) {
	  // calculate the positive rotations needed.
	  n = n + len;
	}
	// Let's partition the array based on rotations 'n'.
	reverseArray(nums, 0, len - 1);
	reverseArray(nums, 0, n - 1);
	reverseArray(nums, n, len - 1);
  };
  
  let arr = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40];
  
  console.log("Array Before Rotation ");
  // Using a custom printArray function to print a neatly formatted array
  console.log(printArray(arr));
  
  rotateArray(arr, -2);
  
  console.log("Array After 2 Rotations ");
  console.log(printArray(arr));

/**
 * TC = O(n);
 * SC = O(1)
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
