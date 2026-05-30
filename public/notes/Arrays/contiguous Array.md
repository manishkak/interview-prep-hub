# contiguous Array

## Problem Statement

Describe the problem statement for **contiguous Array** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Given a binary array nums, find the maximum length of a contiguous subarray with an equal number of 0 and 1.
 * Check solution from chatgpt also below.
 */

// check this youtube solution- https://www.youtube.com/watch?v=9ZyLjjk536U

function findMaxLength(nums) {
    let maxLength = 0;
    let sum = 0;
    const map = new Map();
    
    // Initialize the map with the base case
    map.set(0, -1);
    
    for (let i = 0; i < nums.length; i++) {
        // Convert 0 to -1 to use the sum approach
        sum += nums[i] === 0 ? -1 : 1;
        
        if (map.has(sum)) {
            maxLength = Math.max(maxLength, i - map.get(sum));
        } else {
            map.set(sum, i);
        }
    }
    
    return maxLength;
}

// Example usage:
const nums = [0, 1, 0];
console.log(findMaxLength(nums)); // Output: 2

const nums2 = [0, 1, 0, 0, 1, 1, 0];
console.log(findMaxLength(nums2)); // Output: 6


// solution from chatgpt

// The **Contiguous Array** problem is a common coding problem that involves finding the maximum length of a contiguous subarray that has an equal number of `0`s and `1`s.

// ### Problem Statement:
// Given a binary array `nums` (containing only `0`s and `1`s), find the maximum length of a contiguous subarray with an equal number of `0`s and `1`s.

// ### Example:
/* Input: nums = [0, 1, 0]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1. */

// ### Approach:
/*To solve this problem efficiently, we can use a **prefix sum** technique along with a **hash map** to store the first occurrence of a particular count. The idea is to treat every `0` as `-1` and every `1` as `+1`. This way, if we encounter the same cumulative sum (count) at two different indices, it means that the subarray between these two indices has an equal number of `0`s and `1`s.*/

// ### Key Concept:
/*- Convert `0` to `-1` and `1` remains `+1`.
- Keep track of the **cumulative sum (count)**. If the same cumulative sum appears at two different indices, it means the subarray between these two indices has an equal number of `0`s and `1`s.
- Use a **hash map** to store the first occurrence of each cumulative sum.*/

// ### Algorithm:
/*1. Initialize `count = 0` (this represents the cumulative sum where `0` is treated as `-1` and `1` as `+1`).
2. Use a hash map (`countMap`) to store the first occurrence of each `count`.
3. Iterate through the array, updating the `count`:
   - If `nums[i] == 0`, decrement `count` by `1`.
   - If `nums[i] == 1`, increment `count` by `1`.
4. If the same `count` is found in the hash map, calculate the length of the subarray (since the last occurrence of that `count`) and update the maximum length.
5. If the `count` is not found, store the index in the hash map.
6. Return the maximum length.*/


// JavaScript Code:

function findMaxLength(nums) {
    let count = 0;  // This keeps track of the cumulative sum of -1s and 1s
    let maxLength = 0;
    const countMap = new Map();
    
    // Initialize the map with count 0 at index -1 to handle subarrays from the start
    countMap.set(0, -1);
    
    for (let i = 0; i < nums.length; i++) {
        // Update count: treat 0 as -1 and 1 as +1
        count += (nums[i] === 1) ? 1 : -1;

        // If this count has been seen before, the subarray from countMap[count] + 1 to i
        // has an equal number of 0s and 1s
        if (countMap.has(count)) {
            // Calculate the length of the subarray
            const prevIndex = countMap.get(count);
            maxLength = Math.max(maxLength, i - prevIndex);
        } else {
            // If this count hasn't been seen before, store the index
            countMap.set(count, i);
        }
    }

    return maxLength;
}

// ### Explanation:
/*- We use a variable `count` to track the cumulative sum of `+1` for `1`s and `-1` for `0`s.
- If `count` repeats at some index `i`, it means the subarray between the previous occurrence of this count and index `i` has an equal number of `0`s and `1`s.
- The hash map (`countMap`) stores the first index where a particular `count` was seen.
- By keeping track of these counts, we can efficiently find the maximum length of a contiguous subarray with an equal number of `0`s and `1`s.*/

// ### Example Walkthrough:
/*
```js
Input: nums = [0, 1, 0]
```

1. Initialize `count = 0`, `maxLength = 0`, and `countMap = {0: -1}`.
2. Start iterating:
   - At `i = 0`, `nums[0] = 0`, so `count = count - 1 = -1`.  
     Update `countMap` with `-1: 0`.  
     `countMap = {0: -1, -1: 0}`.
   - At `i = 1`, `nums[1] = 1`, so `count = count + 1 = 0`.  
     Since `count = 0` is already in `countMap`, calculate the length of the subarray from index `countMap[0] + 1 = 0` to `i = 1`.  
     `maxLength = 2`.
   - At `i = 2`, `nums[2] = 0`, so `count = count - 1 = -1`.  
     Since `count = -1` is already in `countMap`, calculate the length of the subarray from index `countMap[-1] + 1 = 1` to `i = 2`.  
     `maxLength = 2`.

Final `maxLength = 2`, which is the length of the subarray `[0, 1]`.

### Time and Space Complexity:
- **Time Complexity**: **O(n)**, where `n` is the length of the array. We traverse the array once, and each operation (like updating the hash map or checking for the count) takes constant time.
- **Space Complexity**: **O(n)**, because in the worst case, we might store all counts in the hash map.

This solution is efficient and works in linear time, which is optimal for this problem.*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
