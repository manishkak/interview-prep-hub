# Move All Zeros To The End Of Array

## Problem Statement

Describe the problem statement for **Move All Zeros To The End Of Array** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Move All Zeros To The End Of Array
 * start both i=0,j=0; start loop for j till end; (i & j are left and right pointers)
 * j == 0, j++
 * j!=0, j<->i; j++, i++
 * O(n) = time complexity of this solution is O(n), where n is the number of elements in the array
 * space complexity of this solution is O(1), meaning it uses constant extra space. We are not using any additional data structures that grow with the size of the input; only a few variables (i and j) are used, regardless of the input size.
 */
/* **step-by-step approach** (two pointers, in-place, stable):
1. Set `i = 0` to mark the position where the next non-zero should go.
2. Scan the array with `j` from `0` to `n-1`.
3. For each index `j`:
   * If `arr[j]` is non-zero:
     * If `i !== j`, swap `arr[i]` and `arr[j]` (to move this non-zero forward).
     * Increment `i` (next slot for the following non-zero).
4. Continue until `j` reaches the end; all non-zeros will be compacted at the front in original order, and zeros will naturally be at the end.
*/
/* Key Idea: 
// this problem simply is- set i to 0; loop over array with j; if value is 0, skip; if value arr[j] is not/non 0, swap values at arr[i] and arr[j] and incr i.
// for moving to start- Set i to end of arr; loop j backwards through the array; if arr[j] is non-zero, swap arr[i] and arr[j], then decrement i; if arr[j] is 0, skip.
*/

/* - slow keeps track of the position to put the next non-zero number.
  - fast scans through the array.
  - When nums[fast] is non-zero, it swaps it to the front (slow), then increments slow.
  - Zeroes naturally get pushed to the end, because slow only moves when a non-zero is found */
function moveZeroes(nums) {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
    }
  }
  return nums;
}

// Example usage:
let arr = [0, 1, 0, 3, 12]; [0, 0, 5, 3, 12]; j=0,1,2,3,4; i=0,1,2 [5, 3, 12, 0, 0]
console.log(moveZerosToEnd(arr)); // Output: [1, 3, 12, 0, 0]

```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
