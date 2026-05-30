const e=`# remove Dupes From Array

## Problem Statement

Describe the problem statement for **remove Dupes From Array** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// Remove Duplicates from Array\r
\r
let dupArr = [1,1,3];\r
console.log(removeDupes(dupArr))\r
\r
function removeDupes(arr){\r
    return [...new Set(arr)]\r
}\r
\r
// Set always removes dupes so convert arr to set, then use spread operator and [] to convert back to arr\r
\r
/* Time: O(n)\r
Space: O(n) (because of the Set) */\r
\r
// Version 2: Remove duplicates in-place from a "sorted array" (array is sorted, so all duplicates appear consecutively)\r
// We want to overwrite duplicates and keep only unique elements at the start of the array\r
/* Here, you can’t use extra space — you must overwrite in the same array.\r
Approach:\r
- Use two pointers: i for the position of the next unique element (Initially i = 1 because the first element arr[0] is always unique), j for scanning the array from left to right.\r
- Every time we find a new unique element, we place it at arr[i] and move i forward\r
- Compare arr[j] with arr[i-1]; if different, write it at arr[i] and move i forward.\r
- Return the new length i.\r
- then slice the array until i length -> this is important */\r
// Set i = 1; loop j from 1 to end; if arr[j] is different from arr[i-1], write arr[j] at arr[i] and increment i; return i as the new length of unique elements\r
\r
// Every time we find a new unique element, we place it at arr[i] and move i forward\r
function removeDuplicatesSorted(arr) {\r
    if (arr.length === 0) return 0;\r
\r
    let i = 1; // next unique spot\r
    for (let j = 1; j < arr.length; j++) {\r
      if (arr[j] !== arr[i - 1]) {  // meaning arr[j] is compared with the last unique element placed, which is arr[i-1]\r
        // New unique element found, place it at arr[i] and move i forward\r
        arr[i] = arr[j];\r
        i++;\r
      }\r
    }\r
    return i; // new length (unique elements are arr[0...i-1])\r
  }\r
  \r
  let arr = [1, 1, 2, 3, 3];\r
  let len = removeDuplicatesSorted(arr);\r
  console.log(arr.slice(0, len)); // [1, 2, 3]\r
\r
// Time: O(n)\r
// Space: O(1)
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
