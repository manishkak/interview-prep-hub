# remove Dupes From Array

## Problem Statement

Describe the problem statement for **remove Dupes From Array** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// Remove Duplicates from Array

let dupArr = [1,1,3];
console.log(removeDupes(dupArr))

function removeDupes(arr){
    return [...new Set(arr)]
}

// Set always removes dupes so convert arr to set, then use spread operator and [] to convert back to arr

/* Time: O(n)
Space: O(n) (because of the Set) */

// Version 2: Remove duplicates in-place from a "sorted array" (array is sorted, so all duplicates appear consecutively)
// We want to overwrite duplicates and keep only unique elements at the start of the array
/* Here, you can’t use extra space — you must overwrite in the same array.
Approach:
- Use two pointers: i for the position of the next unique element (Initially i = 1 because the first element arr[0] is always unique), j for scanning the array from left to right.
- Every time we find a new unique element, we place it at arr[i] and move i forward
- Compare arr[j] with arr[i-1]; if different, write it at arr[i] and move i forward.
- Return the new length i.
- then slice the array until i length -> this is important */
// Set i = 1; loop j from 1 to end; if arr[j] is different from arr[i-1], write arr[j] at arr[i] and increment i; return i as the new length of unique elements

// Every time we find a new unique element, we place it at arr[i] and move i forward
function removeDuplicatesSorted(arr) {
    if (arr.length === 0) return 0;

    let i = 1; // next unique spot
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] !== arr[i - 1]) {  // meaning arr[j] is compared with the last unique element placed, which is arr[i-1]
        // New unique element found, place it at arr[i] and move i forward
        arr[i] = arr[j];
        i++;
      }
    }
    return i; // new length (unique elements are arr[0...i-1])
  }
  
  let arr = [1, 1, 2, 3, 3];
  let len = removeDuplicatesSorted(arr);
  console.log(arr.slice(0, len)); // [1, 2, 3]

// Time: O(n)
// Space: O(1)
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
