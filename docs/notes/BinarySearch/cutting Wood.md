# cutting Wood

## Problem Statement

Describe the problem statement for **cutting Wood** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// Problem:
// Given heights of trees/wood pieces and required wood amount k, find the maximum saw height so that cutting above that height gives at least k wood.

// Example:
// Input: heights = [4, 42, 40, 26, 46], k = 20
// Output: 36
// Explanation: Cutting at height 36 gives us (42-36) + (40-36) + (46-36) = 6 + 4 + 10 = 20 wood, which meets the requirement.

/*
Time Complexity:
O(n log m), where n is the number of trees and m is the maximum height of the trees. The binary search runs in O(log m) and for each mid value, we calculate the total wood collected in O(n).
Space Complexity:
O(1), as we are using only a constant amount of extra space for variables.
*/

// Mental solution:
// Binary search the answer (saw height): if enough wood, try higher; else go lower.

function cuttingWood(trees, k) {
  let left = 0;
  let right = Math.max(...trees);
  let ans = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let wood = 0;
    for (let h of trees) {
      if (h > mid) wood += h - mid;
    }

    if (wood >= k) {
      ans = mid;        // valid, try higher
      left = mid + 1;
    } else {
      right = mid - 1;  // too high, lower it
    }
  }

  return ans;
}
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
