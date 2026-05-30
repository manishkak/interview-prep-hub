const n=`# Move All Zeros To The End Of Array

## Problem Statement

Describe the problem statement for **Move All Zeros To The End Of Array** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Move All Zeros To The End Of Array\r
 * start both i=0,j=0; start loop for j till end; (i & j are left and right pointers)\r
 * j == 0, j++\r
 * j!=0, j<->i; j++, i++\r
 * O(n) = time complexity of this solution is O(n), where n is the number of elements in the array\r
 * space complexity of this solution is O(1), meaning it uses constant extra space. We are not using any additional data structures that grow with the size of the input; only a few variables (i and j) are used, regardless of the input size.\r
 */\r
/* **step-by-step approach** (two pointers, in-place, stable):\r
1. Set \`i = 0\` to mark the position where the next non-zero should go.\r
2. Scan the array with \`j\` from \`0\` to \`n-1\`.\r
3. For each index \`j\`:\r
   * If \`arr[j]\` is non-zero:\r
     * If \`i !== j\`, swap \`arr[i]\` and \`arr[j]\` (to move this non-zero forward).\r
     * Increment \`i\` (next slot for the following non-zero).\r
4. Continue until \`j\` reaches the end; all non-zeros will be compacted at the front in original order, and zeros will naturally be at the end.\r
*/\r
/* Key Idea: \r
// this problem simply is- set i to 0; loop over array with j; if value is 0, skip; if value arr[j] is not/non 0, swap values at arr[i] and arr[j] and incr i.\r
// for moving to start- Set i to end of arr; loop j backwards through the array; if arr[j] is non-zero, swap arr[i] and arr[j], then decrement i; if arr[j] is 0, skip.\r
*/\r
\r
/* - slow keeps track of the position to put the next non-zero number.\r
  - fast scans through the array.\r
  - When nums[fast] is non-zero, it swaps it to the front (slow), then increments slow.\r
  - Zeroes naturally get pushed to the end, because slow only moves when a non-zero is found */\r
function moveZeroes(nums) {\r
  let slow = 0;\r
  for (let fast = 0; fast < nums.length; fast++) {\r
    if (nums[fast] !== 0) {\r
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];\r
      slow++;\r
    }\r
  }\r
  return nums;\r
}\r
\r
// Example usage:\r
let arr = [0, 1, 0, 3, 12]; [0, 0, 5, 3, 12]; j=0,1,2,3,4; i=0,1,2 [5, 3, 12, 0, 0]\r
console.log(moveZerosToEnd(arr)); // Output: [1, 3, 12, 0, 0]\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
