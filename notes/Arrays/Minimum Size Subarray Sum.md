# Minimum Size Subarray Sum

## Problem Statement

Describe the problem statement for **Minimum Size Subarray Sum** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// Minimum Size Subarray Sum

/**
 * Problem Statement:
 *      Given an array of positive integers nums and a target integer target,
 *      return the minimal length of a contiguous subarray of which the sum is ≥ target.
 *      If no such subarray exists, return 0.
 */

/* Example:
    Input: nums = [2,3,1,2,4,3], target = 7  
    Output: 2  
    Explanation: The subarray [4,3] has the smallest length ≥ 7
*/

/* Approach: Sliding Window (Shrink When Sum ≥ Target)
Idea:
    - Expand the window by moving right, add numbers to sum
    - When sum ≥ target, try shrinking from the left
    - Keep track of the minimum window size that satisfied the condition
*/

function minSubArrayLen(target, nums) {
    let left = 0;
    let sum = 0;
    let minLen = Infinity;
  
    for (let right = 0; right < nums.length; right++) {
      sum += nums[right];
  
    // As long as the current window meets or exceeds the target…
    // Try to shrink it to see if a smaller window can still satisfy it
      while (sum >= target) {

        // Calculate the current window length and update minLen if this one is smaller
        minLen = Math.min(minLen, right - left + 1);

        /**
         * Shrink the window from the left:
         *      Subtract the value at left
         *      Move left forward by one
         */
        sum -= nums[left];
        left++;
      }
    }
  
    // If minLen was never updated, it means no subarray met the condition → return 0
    // Otherwise, return the smallest valid window length found
    return minLen === Infinity ? 0 : minLen;
}

// Time & Space:
// Time: O(n)
// Space: O(1)


```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
