const e=`# Detect Cyclein Array

## Problem Statement

Describe the problem statement for **Detect Cyclein Array** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Detect Cycle in Array\r
 * Similar concept to linkedListCycle.js; 2 differences-\r
 * Array- slow = arr[slow], fast = arr[arr[fast]]\r
 * LList- slow = slow.next, fast = fast.next.next\r
 * Array- if(fast||arr[fast] == undef) is checked within the while, BEFORE checking if (slow === fast)\r
 * LList- if (slow === fast) is checked within the while, otherwise return false outside\r
 * O(n), where n is the number of elements in the array. This is because each element is visited at most twice:\r
The slow pointer visits each element once.\r
The fast pointer visits each element at most twice.\r
 * Space complexity of this solution is O(1). This is because we only use a fixed amount of extra space, regardless of the input size.\r
 */\r
function detectCycle(arr) {\r
  // Edge case: If the array is empty or has one element, there is no cycle\r
  if (arr.length <= 1) return false;\r
\r
  let slow = 0;\r
  let fast = 0;\r
\r
  while (true) {\r
    // Move slow pointer one step\r
    slow = arr[slow];\r
\r
    // Move fast pointer two steps\r
    fast = arr[arr[fast]];\r
\r
    // If fast pointer reaches the end of the array, no cycle\r
    if (fast === undefined || arr[fast] === undefined) {\r
      return false;\r
    }\r
\r
    // If slow and fast pointers meet, cycle detected\r
    if (slow === fast) {\r
      return true;\r
    }\r
  }\r
}\r
\r
// Example usage:\r
let arr = [1, 2, 3, 4, 2]; // This array has a cycle\r
console.log(detectCycle(arr)); // Output: true\r
\r
let arr2 = [1, 2, 3, 4, 5]; // This array does not have a cycle\r
console.log(detectCycle(arr2)); // Output: false\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
