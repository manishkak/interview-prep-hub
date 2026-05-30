# First&Last Post Of Target

## Problem Statement

Describe the problem statement for **First&Last Post Of Target** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/*
Find First and Last Position of a Target
Problem: Given a sorted array, find the starting and ending position of a target value.

Use binary search to find the leftmost and rightmost occurrences.
Example:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3, 4]

Time Complexity:
O(log n): Each call to findBound performs a binary search, halving the range each time.
Total: O(log n) + O(log n) = O(log n).
Space Complexity:
O(1): No additional space is used outside of variables
 */


// **Problem**

/* Input: `arr = [5,7,7,8,8,10]`, `target = 8`
* Output: `[3,4]` → first and last positions of `8`
* If target not found → return `[-1, -1]` */

// > Important: Array is **sorted**, so we can use **binary search**.

// **Approach**

/* Instead of scanning the array linearly, we can **use modified binary search twice**:

1. **Find First Occurrence**:
   * Use binary search
   * If `arr[mid] === target`, move **left** (`end = mid - 1`) to find first occurrence.

2. **Find Last Occurrence**:
   * Use binary search
   * If `arr[mid] === target`, move **right** (`start = mid + 1`) to find last occurrence.

3. Combine results into `[first, last]`. */

// > Both searches are **O(log n)** → total **O(log n)**

// ## **Step-by-Step Example**

// Array: `[5,7,7,8,8,10]`, target = `8`

/* **First occurrence**:

  * mid=2 → arr[2]=7 < 8 → move right
  * mid=4 → arr[4]=8 → move left to check earlier occurrence
  * mid=3 → arr[3]=8 → move left → now start > end → first index = 3

* **Last occurrence**:

  * mid=2 → arr[2]=7 < 8 → move right
  * mid=4 → arr[4]=8 → move right to check later occurrence
  * mid=5 → arr[5]=10 > 8 → move left → now start > end → last index = 4

Result → `[3, 4]` */

// ## **JavaScript Implementation**

/*
Optimize Using Binary Search:
// Rule:
if found target, store it (in a variable called 'bound')
keep searching left (right = mid - 1) to find first occurrence
if found target, store it
keep searching right (left = mid + 1) to find last occurrence

-> Now show you know the better solution. You can say something like:
    “Since the array is sorted, we can use binary search. Normally binary search finds one occurrence of the target, but here we need the first and last occurrence. So we do a slight modification:”

Find first occurrence:
    - Do normal binary search
    - If arr[mid] === target, instead of stopping, move left (end = mid - 1) to check if there’s an earlier occurrence

Find last occurrence:
    - Do normal binary search
    - If arr[mid] === target, move right (start = mid + 1) to check if there’s a later occurrence

Both searches run in O(log n), which is much faster than O(n). 
*/

function findFirstAndLast(arr, target) {
    function findBound(isFirst) {
        let start = 0, end = arr.length - 1;
        let bound = -1;

        while (start <= end) {  // Use <= to include the case when start and end are the same
            let mid = Math.floor((start + end) / 2);

            if (arr[mid] === target) {
                bound = mid;    // Store the index of the found target
                if (isFirst) end = mid - 1; // search left for first occurrence
                else start = mid + 1;       // search right for last occurrence
            } else if (arr[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        return bound;
    }

    const first = findBound(true);
    const last = findBound(false);

    return [first, last];
}

// Example usage
console.log(findFirstAndLast([5,7,7,8,8,10], 8)); // Output: [3, 4]
console.log(findFirstAndLast([5,7,7,8,8,10], 6)); // Output: [-1, -1]


// ✅ **Key Points**

// * Uses **binary search twice** → very efficient
// * Works for arrays with **duplicates**
// * Time Complexity: `O(log n)`
// * Space Complexity: `O(1)`


```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
