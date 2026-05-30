# find KClosest Elements

## Problem Statement

Describe the problem statement for **find KClosest Elements** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Find K Closest Elements
 * Given a sorted array arr, two integers k and x, find the k closest elements to x in the array. The result should also be sorted in ascending order. If there is a tie, the smaller elements are always preferred.
 * https://beizhedenglong.github.io/leetcode-solutions/docs/find-k-closest-elements
 */
/*
To solve the **"Find K Closest Elements"** problem in JavaScript, we can approach it using a **binary search** combined with a **two-pointer technique**. The task is to find the `k` closest integers to a given target `x` in a sorted array.

### Problem:
Given a sorted array `arr`, two integers `k` and `x`, return the `k` closest integers to `x`. The result should also be sorted in ascending order.

### Approach:
1. **Binary Search**: First, find the position where the element `x` would fit in the array using binary search.
2. **Two Pointers**: Once the position is found, use two pointers (one starting from the closest lower or equal value, and the other starting from the closest higher value) to expand and find the `k` closest elements.
3. **Sorting**: Ensure the result is sorted before returning it.
*/

// JavaScript Solution:


function findClosestElements(arr, k, x) {
    let left = 0;
    let right = arr.length - 1;

    // Binary search to reduce the window to size k
    while (right - left >= k) {
        // Compare distances from x on both sides
        if (Math.abs(arr[left] - x) > Math.abs(arr[right] - x)) {
            left++; // If left is farther, increment left
        } else {
            right--; // Otherwise, decrement right
        }
    }

    // Return the slice of the array from left to left + k
    return arr.slice(left, left + k);
}

// Example usage:
let arr = [1, 2, 3, 4, 5];
let k = 4;
let x = 3;
console.log(findClosestElements(arr, k, x)); // Output: [1, 2, 3, 4]

/*Explanation:
1. **Binary Search Window Shrinking**: 
   - We start with two pointers, `left` at the beginning and `right` at the end of the array.
   - The loop continues until the window size is exactly `k`. In each iteration, we compare the absolute difference of `arr[left]` and `arr[right]` from `x`. We move the pointer that is farther from `x` (either `left` or `right`).
   - This ensures that after the loop, we have a subarray of size `k` that contains the closest elements.

2. **Slicing the Result**:
   - After narrowing down the window, the `k` closest elements will be between `left` and `left + k`. We simply slice the array and return this result.

### Time Complexity:
- **Binary Search Window Shrinking**: `O(n - k)` where `n` is the length of the array. In each iteration, we are shrinking the window by 1.
- **Final Slice**: Creating a slice of size `k` takes `O(k)`.

Thus, the total time complexity is **O(n - k + k) = O(n)**, which is linear in the size of the input array.

### Example Dry Run:

Input: `arr = [1, 2, 3, 4, 5]`, `k = 4`, `x = 3`

- Initial `left = 0`, `right = 4`.
- First iteration: `|arr[0] - 3| = 2`, `|arr[4] - 3| = 2` → Both are equal, decrement `right → 3`.
- Second iteration: `|arr[0] - 3| = 2`, `|arr[3] - 3| = 1` → Decrement `right → 2`.
- Stop when `right - left + 1 = k`. Slice the array from `left = 0` to `left + k = 4`.
- Result: `[1, 2, 3, 4]`.

This approach efficiently finds the closest elements using binary search and two-pointer techniques.
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
