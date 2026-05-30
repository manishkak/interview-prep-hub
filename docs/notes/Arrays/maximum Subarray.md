# maximum Subarray

## Problem Statement

Describe the problem statement for **maximum Subarray** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * • Maximum Subarray or maximum sum subarray
 * Given an unsorted array nums (the elements can be negative or positive integers), find the sum of the maximum sum subarray
 * Array: [1, 2, 2, 3, 3, 1, 4]
	Maximum Sum: 16
 * Array: [-4, -1, -2, -1, -2]
	Maximum Sum: -1
 * 
 * Approach (Kadane’s Algorithm):
- Initialize two variables:
    - currSum = 0 (tracks sum of current subarray).
    - maxSum = -Infinity (tracks max sum found so far).
- Iterate over array:
    - At each element, either extend the current subarray (currSum + num) or start new subarray (num).
    - Update currSum = Math.max(num, currSum + num).
    - Update maxSum = Math.max(maxSum, currSum).
- Return maxSum.
⚡ This works in O(n) time, O(1) space.
 */
    function maxSubArray(nums) {
        let currSum = 0;
        let maxSum = -Infinity;
      
        for (let num of nums) {
          currSum = Math.max(num, currSum + num); // extend or restart subarray
          maxSum = Math.max(maxSum, currSum);     // update global max
        }
      
        return maxSum;
      }
      
      // Example
      console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6
      

/**
 * TC = O(n), because we iterate the input array once.
 * SC = O(1), because no extra space is used.
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
