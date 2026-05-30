# Subarray Sum Equals K

## Problem Statement

Describe the problem statement for **Subarray Sum Equals K** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// 📝 Problem Statement:
//  Given an array of integers nums and an integer k,
//      return the total number of continuous subarrays whose sum equals k.

/**
 * Input: nums = [1, 1, 1], k = 2  
Output: 2  
Explanation: [1,1] appears twice
 */

/**
 * Input: nums = [1, 2, 3], k = 3  
Output: 2  // [1,2] and [3]
 */
// Why not sliding window?
// Because nums can include negative numbers, the window size isn’t predictable — so we use prefix sum + hashmap, not the window pattern.

function subarraySum(nums, k) {
    const map = new Map();
    map.set(0, 1);  // base case: prefix sum 0 appears once
  
    let sum = 0;
    let count = 0;
  
    for (let num of nums) {
      sum += num;
  
      // Check if there's a prefix that would make the current window sum to k
      if (map.has(sum - k)) {
        count += map.get(sum - k);
      }
  
      // Record this prefix sum occurrence
      map.set(sum, (map.get(sum) || 0) + 1);
    }
  
    return count;
}

/**
 * Step-by-Step Explanation:
    - We keep a running sum (sum) as we go through the array — this is called a prefix sum. 
    - We use a hash map (map) to store how many times each prefix sum has occurred so far.
    - For each number in the array:
        - Add it to sum
        - Then check: have we ever seen (sum - k)?
            - Why? Because if sum - k was seen earlier, the subarray from that point to now adds up to k.
        - If yes, add the count of how many times (sum - k) has occurred to our answer.
    - Then, store/update this sum in the map, saying “hey, I’ve seen this prefix sum one more time.”
    - At the end, the total count will tell you how many valid subarrays exist.
 */
// To understand better, write this prompt on gpt-
// can you run these steps for nums = [1, 2, 3], k = 3

// Time & Space Complexity
// Time: O(n)
// Space: O(n) (for prefix sum map)


```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
