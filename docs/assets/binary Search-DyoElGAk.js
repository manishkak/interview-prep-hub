const r=`# binary Search

## Problem Statement

Describe the problem statement for **binary Search** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Binary Search\r
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index.\r
 * Otherwise, return -1.\r
 * You must write an algorithm with O(log n) runtime complexity.\r
 * Solution-> https://leetcode.com/problems/search-insert-position/solutions/2480674/js-simple-explained-binary-search/\r
 */\r
\r
/**\r
 * Educative solution - https://www.educative.io/module/page/k5m3gACoNZE7BMp8m/10370001/5724100263411712/5754764048203776\r
 */\r
\r
// O(log n) time and O(1) space\r
\r
// Iterative solution\r
// Check the middle; if not found, move to the half where the answer can still exist, and repeat\r
\r
function binarySearch(arr, target) {\r
    let start = 0;\r
    let end = arr.length - 1;\r
\r
    while (start <= end) {  // Use <= to include the case when start and end are the same\r
        let mid = Math.floor((start + end) / 2);\r
\r
        if (arr[mid] === target) {\r
            return mid; // target found\r
        } else if (arr[mid] < target) {\r
            start = mid + 1; // search right half\r
        } else {\r
            end = mid - 1; // search left half\r
        }\r
    }\r
\r
    return -1; // target not found\r
}\r
\r
// Example usage\r
console.log(binarySearch([1,3,5,7,9], 5)); // Output: 2\r
console.log(binarySearch([1,3,5,7,9], 6)); // Output: -1\r
\r
\r
// Recursive solution\r
\r
function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {\r
    if (start > end) return -1;\r
\r
    let mid = Math.floor((start + end) / 2);\r
\r
    if (arr[mid] === target) return mid;\r
    else if (arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, end);\r
    else return binarySearchRecursive(arr, target, start, mid - 1);\r
}\r
\r
// Example usage\r
console.log(binarySearchRecursive([1,3,5,7,9], 7)); // Output: 3\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{r as default};
