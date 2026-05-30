# binary Search

## Problem Statement

Describe the problem statement for **binary Search** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Binary Search
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index.
 * Otherwise, return -1.
 * You must write an algorithm with O(log n) runtime complexity.
 * Solution-> https://leetcode.com/problems/search-insert-position/solutions/2480674/js-simple-explained-binary-search/
 */

/**
 * Educative solution - https://www.educative.io/module/page/k5m3gACoNZE7BMp8m/10370001/5724100263411712/5754764048203776
 */

// O(log n) time and O(1) space

// Iterative solution
// Check the middle; if not found, move to the half where the answer can still exist, and repeat

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {  // Use <= to include the case when start and end are the same
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            return mid; // target found
        } else if (arr[mid] < target) {
            start = mid + 1; // search right half
        } else {
            end = mid - 1; // search left half
        }
    }

    return -1; // target not found
}

// Example usage
console.log(binarySearch([1,3,5,7,9], 5)); // Output: 2
console.log(binarySearch([1,3,5,7,9], 6)); // Output: -1


// Recursive solution

function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) return -1;

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, end);
    else return binarySearchRecursive(arr, target, start, mid - 1);
}

// Example usage
console.log(binarySearchRecursive([1,3,5,7,9], 7)); // Output: 3

```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
