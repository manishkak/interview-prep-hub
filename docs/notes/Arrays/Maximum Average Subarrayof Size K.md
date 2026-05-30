# Maximum Average Subarrayof Size K

## Problem Statement

Describe the problem statement for **Maximum Average Subarrayof Size K** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// Maximum Average Subarray of Size K

/**
 * Problem Statement:
 *      Given an array 'nums' and an integer 'k',
 *      find the maximum average of any contiguous subarray of length k.
 */

/**
 * Idea:
    - Find sum of first k elements — that's your first window
    - Slide the window one step at a time:
    - Subtract the element leaving
    - Add the new element coming in
    - Keep track of the max sum seen
 */

function findMaxAverage(nums, k) {
    let sum = 0;
    
    // Step 1: Initial window
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    
    let maxSum = sum;
    
    // Step 2: Slide window
    for (let i = k; i < nums.length; i++) {
        sum = sum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, sum);
    }
    
    // Step 3: Return max average
    return maxSum / k;
}

/**
 * | Metric | Value |
| ------ | ----- |
| Time   | O(n)  |
| Space  | O(1)  |
*/


```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
