# Detect Cyclein Array

## Problem Statement

Describe the problem statement for **Detect Cyclein Array** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Detect Cycle in Array
 * Similar concept to linkedListCycle.js; 2 differences-
 * Array- slow = arr[slow], fast = arr[arr[fast]]
 * LList- slow = slow.next, fast = fast.next.next
 * Array- if(fast||arr[fast] == undef) is checked within the while, BEFORE checking if (slow === fast)
 * LList- if (slow === fast) is checked within the while, otherwise return false outside
 * O(n), where n is the number of elements in the array. This is because each element is visited at most twice:
The slow pointer visits each element once.
The fast pointer visits each element at most twice.
 * Space complexity of this solution is O(1). This is because we only use a fixed amount of extra space, regardless of the input size.
 */
function detectCycle(arr) {
  // Edge case: If the array is empty or has one element, there is no cycle
  if (arr.length <= 1) return false;

  let slow = 0;
  let fast = 0;

  while (true) {
    // Move slow pointer one step
    slow = arr[slow];

    // Move fast pointer two steps
    fast = arr[arr[fast]];

    // If fast pointer reaches the end of the array, no cycle
    if (fast === undefined || arr[fast] === undefined) {
      return false;
    }

    // If slow and fast pointers meet, cycle detected
    if (slow === fast) {
      return true;
    }
  }
}

// Example usage:
let arr = [1, 2, 3, 4, 2]; // This array has a cycle
console.log(detectCycle(arr)); // Output: true

let arr2 = [1, 2, 3, 4, 5]; // This array does not have a cycle
console.log(detectCycle(arr2)); // Output: false

```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
