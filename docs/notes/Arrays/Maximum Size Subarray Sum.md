# Maximum Size Subarray Sum

## Problem Statement

Describe the problem statement for **Maximum Size Subarray Sum** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// the goal is typically to find the maximum sum of a contiguous subarray of a given size k within an array
/**
 * Given an array of integers arr and an integer k, return the maximum sum of any contiguous subarray of size k.
 */
/** STEPS:
 *  Step 1: Scan over a window of size k (0 to k-1)
        Sum the first k elements- maxSum till this point
    Step 2: Slide the window forward- Scan again from k to end of array (n-1)
        Subtract the element going out (left)- array[i-k]
        Add the element coming in (right)- array[i]
    Step 3: If this windowSum is > maxSum, then update
 */
// my code first:
let arr = [2, 1, 5, 1, 3, 2];
let k = 3;
let maxSum = 0;
let currSum = 0;
let left = 0;

for (let right = 0; right < arr.length; right++) {
  currSum += arr[right];        // Add the element coming in (right)

  if (right - left + 1 === k) { // Sum the first k elements
    maxSum = Math.max(maxSum, currSum);
    currSum -= arr[left];  // remove the leftmost element
    left++;                // slide the window forward
  }
}

return maxSum;

/* Time & Space:
Time: O(n)
Space: O(1) */


function maxSizeSubarraySum(arr, k) {
    if (arr.length < k) return null; // Not enough elements for the subarray

    let maxSum = 0;
    let currentSum = 0;

    // Calculate the sum of the first k elements
    for (let i = 0; i < k; i++) {
        currentSum += arr[i];
    }

    maxSum = currentSum;

    // Slide the window
    for (let i = k; i < arr.length; i++) {
        currentSum += arr[i] - arr[i - k]; // Update the current sum
        maxSum = Math.max(maxSum, currentSum); // Update the maximum sum if necessary
    }

    return maxSum;
}

// Example usage
const array = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log(maxSizeSubarraySum(array, k)); // Output: 9

```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
